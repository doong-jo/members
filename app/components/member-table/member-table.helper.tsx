import { Checkbox } from "antd";
import { format } from "date-fns";

/**
 * - boolean 값이면 <Checkbox /> 반환
 * - date 값이면 YYYY-MM-DD 형식으로 반환
 * - 그 외 값이면 value.toString() 반환
 */
export function renderMemberValue(value: React.ReactNode | Date) {
  if (typeof value === "boolean") {
    return <Checkbox checked={value ?? false} />;
  }
  if (value instanceof Date) {
    return format(value, "yyyy-MM-dd");
  }
  return value?.toString();
}
