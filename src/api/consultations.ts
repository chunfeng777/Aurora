import type { ConsultationApiResponse, ConsultationPayload } from '@/types/consultation';

const endpoint = `${(import.meta.env.VITE_API_BASE_URL ?? '').replace(/\/$/, '')}/api/v1/consultations`;
const successCodes = new Set(['0', '200', '00000', 'B0000']);

export type ConsultationSubmissionErrorCode =
  | 'mail_notification_failed_after_save'
  | 'network_error'
  | 'server_error';

export class ConsultationSubmissionError extends Error {
  readonly code: ConsultationSubmissionErrorCode;

  constructor(code: ConsultationSubmissionErrorCode) {
    super(code);
    this.name = 'ConsultationSubmissionError';
    this.code = code;
  }
}

const isMailConnectionError = (message: string) =>
  /mail server connection failed|mailconnectexception|smtp\.gmail\.com|couldn't connect to host/i.test(
    message,
  );

export const createConsultation = async (
  payload: ConsultationPayload,
): Promise<ConsultationApiResponse> => {
  let response: Response;

  try {
    response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new ConsultationSubmissionError('network_error');
  }

  const result = (await response.json().catch(() => undefined)) as
    | ConsultationApiResponse
    | undefined;

  const serverMessage = result?.msg ?? '';

  if (isMailConnectionError(serverMessage)) {
    throw new ConsultationSubmissionError('mail_notification_failed_after_save');
  }

  if (!response.ok) {
    throw new ConsultationSubmissionError('server_error');
  }

  if (result?.code !== undefined && !successCodes.has(String(result.code))) {
    throw new ConsultationSubmissionError('server_error');
  }

  return result ?? {};
};
