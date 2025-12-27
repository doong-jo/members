import { BaseEntity } from "./base/base.entity";

/**
 * 회원 데이터 명세
 */
export class Member extends BaseEntity {
  constructor() {
    super();

    this.name = "";
  }

  name: string;
  address?: string;
  memo?: string;
  job?: "개발자" | "PO" | "디자이너";
  marketingAgree?: boolean;

  // 추후 Custom Filed 기능이 추가되었을 때 dynamic하게 필드 추가 가능
  [key: string]: string | number | boolean | Date | null | undefined;
}
