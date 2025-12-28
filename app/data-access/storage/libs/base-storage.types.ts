import { BaseEntity } from "../../base/base.entity";

/**
 * 각각의 저장소 인터페이스 공통 타입 정의
 */
export interface BaseStorage<T extends BaseEntity> {
  createOne(entityName: string, data: T): T;
  findAll(entityName: string): T[];
  findOne(entityName: string, id: string): T | null;
  updateOne(entityName: string, id: string, data: Partial<T>): T | null;
  deleteOne(entityName: string, id: string): boolean;
}
