/**
 * 엔티티의 기본 속성 정의
 */
export class BaseEntity {
  constructor() {
    this.id = crypto.randomUUID();
    this.createdAt = new Date();
  }

  id: string;
  createdAt: Date;
}
