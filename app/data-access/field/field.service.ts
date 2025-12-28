import { Field } from "./field.entity";

export class FieldService {
  private fields: Map<string, Field> = new Map();

  constructor() {}

  getAllFields(): Field[] {
    // TODO: storage에서 목록 조회
    return Array.from(this.fields.values()).sort((a, b) => a.order - b.order);
  }
}
