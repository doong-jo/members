import { Field } from "./field.entity";

export type Row = Field & {
  value: string | number | boolean | Date | null;
};
