import { BaseEntity } from "../base/base.entity";

export type FieldType = "text" | "text-area" | "date" | "select" | "checkbox";

export class Field extends BaseEntity {
  constructor({
    key,
    label,
    type,
    required,
    order,
    isDefault,
    options,
  }: {
    key: DefaultFieldKey | string;
    label: string;
    type: FieldType;
    required: boolean;
    order: number;
    isDefault: boolean;
    options?: string[];
  }) {
    super();
    this.key = key;
    this.label = label;
    this.type = type;
    this.required = required;
    this.order = order;
    this.isDefault = isDefault;
    this.options = options;
  }

  key: string;
  label: string;
  type: FieldType;
  required: boolean;
  order: number;
  isDefault: boolean;
  options?: string[];
}

export const DEFAULT_FIELDS: Field[] = [
  new Field({
    key: "name",
    label: "이름",
    type: "text",
    required: true,
    order: 0,
    isDefault: true,
  }),
  new Field({
    key: "address",
    label: "주소",
    type: "text",
    required: false,
    order: 1,
    isDefault: true,
  }),
  new Field({
    key: "memo",
    label: "메모",
    type: "text-area",
    required: false,
    order: 2,
    isDefault: true,
  }),
  new Field({
    key: "createdAt",
    label: "가입일",
    type: "date",
    required: true,
    order: 3,
    isDefault: true,
  }),
  new Field({
    key: "job",
    label: "직업",
    type: "select",
    required: false,
    order: 4,
    options: ["개발자", "PO", "디자이너"],
    isDefault: true,
  }),
  new Field({
    key: "marketingAgree",
    label: "이메일 수신 동의",
    type: "checkbox",
    required: false,
    order: 5,
    isDefault: true,
  }),
];

export interface DefaultFieldSchema {
  name: string;
  address: string | undefined;
  memo: string | undefined;
  createdAt: Date;
  job: "개발자" | "PO" | "디자이너" | undefined;
  marketingAgree: boolean | undefined;
}

export const DEFAULT_FIELD_KEYS = [
  "name",
  "address",
  "memo",
  "createdAt",
  "job",
  "marketingAgree",
] as const;

export type DefaultFieldKey = keyof DefaultFieldSchema;
