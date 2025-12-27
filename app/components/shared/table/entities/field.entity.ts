interface BaseField {
  label: string;
  required: boolean;
}

interface NoSelectField extends BaseField {
  type: "text" | "text-area" | "date" | "select" | "checkbox";
}

interface SelectField extends BaseField {
  type: "select";
  options: string[];
}

export type Field = NoSelectField | SelectField;
