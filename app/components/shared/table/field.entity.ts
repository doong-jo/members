/**
 * 필드의 타입 정의
 */
export interface NoSelectField {
  label: string;
  type: "text" | "text-area" | "date" | "select" | "checkbox";
  options?: string[];
  required: boolean;
}

export interface SelectField {
  label: string;
  type: "select";
  options: string[];
}

export type Field = NoSelectField | SelectField;
