export class Media {
  mediaId: number | null = null;
  name: string | null = null;
  value: string | null = null;

  constructor(values: object = {}) {
    Object.assign(this, values);
  }
}
