import { Field } from "@/app/data-access/field/field.entity";
import { CreateMemberDto } from "@/app/data-access/member/member.dto";
import { MemberDataValue } from "@/app/data-access/member/member.entity";

export type FormValues = CreateMemberDto;

export function buildDefaultValues(fields: Field[]) {
  const defaults: FormValues = {};

  for (const field of fields) {
    switch (field.type) {
      case "text":
      case "text-area":
        defaults[field.key] = "";
        break;
      case "date":
        defaults[field.key] = undefined;
        break;
      case "select":
        defaults[field.key] = field.options?.[0] ?? undefined;
        break;
      case "checkbox":
        defaults[field.key] = false;
        break;
    }
  }

  return defaults;
}

export function buildDefaultValuesByMember(
  fields: Field[],
  member: Record<string, MemberDataValue>,
) {
  const defaults: FormValues = {};

  for (const field of fields) {
    defaults[field.key] = member[field.key] ?? undefined;
  }

  return defaults;
}

export function getFieldValidator(field: Field) {
  return ({ value }: { value: unknown }) => {
    if (field.required) {
      if (value === undefined || value === null || value === "") {
        return "필수값입니다.";
      }
    }

    if (field.type === "text" && typeof value === "string") {
      if (value.length > 20) {
        return "글자수 20을 초과할 수 없습니다.";
      }
    }

    if (field.type === "text-area" && typeof value === "string") {
      if (value.length > 50) {
        return "글자수 50을 초과할 수 없습니다.";
      }
    }

    return undefined;
  };
}

export function FieldError({ errors }: { errors: string[] }) {
  if (errors.length === 0) {
    return null;
  }

  return <p className="text-[14px] text-[#FF4D4F]">{errors.join(", ")}</p>;
}
