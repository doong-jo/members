import { BaseEntity } from "../../base/base.entity";
import { BaseStorage } from "./base-storage.types";

/**
 * in-memory 저장소 구현
 */
export class InMemoryService implements BaseStorage<BaseEntity> {
  private data: Record<string, BaseEntity[]> = {};

  constructor() {}

  createOne(entityName: string, data: BaseEntity): BaseEntity {
    if (!this.data[entityName]) {
      this.data[entityName] = [];
    }

    this.data[entityName].push(data);

    return data;
  }

  findAll(entityName: string): BaseEntity[] {
    return this.data[entityName] || [];
  }

  findOne(entityName: string, id: string): BaseEntity | null {
    return this.data[entityName]?.find((item) => item.id === id) || null;
  }

  updateOne(entityName: string, id: string, data: Partial<BaseEntity>): BaseEntity | null {
    const entity = this.findOne(entityName, id);

    if (!entity) return null;

    Object.assign(entity, data);

    this.data[entityName] = this.data[entityName].map((item) => (item.id === id ? entity : item));

    return entity;
  }

  deleteOne(entityName: string, id: string): boolean {
    const index = this.data[entityName]?.findIndex((item) => item.id === id);

    if (index === -1) return false;

    this.data[entityName].splice(index, 1);

    return true;
  }
}
