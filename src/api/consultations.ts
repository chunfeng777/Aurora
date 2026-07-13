import type { ConsultationApiResponse, ConsultationPayload } from '@/types/consultation';

const endpoint = `${(import.meta.env.VITE_API_BASE_URL ?? '').replace(/\/$/, '')}/api/v1/consultations`;
const successCodes = new Set(['0', '200', 'B0000']);

export const createConsultation = async (
  payload: ConsultationPayload,
): Promise<ConsultationApiResponse> => {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const result = (await response.json().catch(() => undefined)) as
    | ConsultationApiResponse
    | undefined;

  if (!response.ok) {
    throw new Error(result?.msg || 'Unable to submit your consultation request.');
  }

  if (result?.code !== undefined && !successCodes.has(String(result.code))) {
    throw new Error(result.msg || 'Unable to submit your consultation request.');
  }

  return result ?? {};
};
