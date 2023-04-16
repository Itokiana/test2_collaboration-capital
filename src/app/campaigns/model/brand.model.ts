export class Brand {
  brandId: number | null = null;
  name: string | null = null;

  constructor(values: object = {}) {
    Object.assign(this, values);
  }
}
