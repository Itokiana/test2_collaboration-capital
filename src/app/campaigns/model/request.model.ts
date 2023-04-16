import { Brand } from "./brand.model";
import { RequestStatus } from "./requestStatus";

export class Request {
  requestId: number | null = null;
  campaignName: string | null = null;
  decisionDeadline: Date | null = null;
  requestStatus: RequestStatus | null = null;
  advice: boolean = false;
  submittedDate: Date | null = null;
  brand: Brand | null = null;

  constructor(values: object = {}) {
    Object.assign(this, values);
  }
}
