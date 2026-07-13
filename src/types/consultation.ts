export interface ConsultationPayload {
  readonly preferredContactMethod: string;
  readonly email: string;
  readonly whatsapp: string;
  readonly wechat: string;
  readonly explore: string;
  readonly expectedContactTime: string;
  readonly currentLocation: string;
  readonly message: string;
  readonly fullName: string;
}

export interface ConsultationApiResponse<T = unknown> {
  readonly code?: string | number;
  readonly data?: T;
  readonly msg?: string;
}
