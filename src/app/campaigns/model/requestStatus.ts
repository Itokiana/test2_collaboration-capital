export class RequestStatus {
  requestStatusId: number | null = null;
  name: string | null = null;
  value: string | null = null;
  step: number | null = null;

  constructor(values: object = {}) {
    Object.assign(this, values);
  }
}
