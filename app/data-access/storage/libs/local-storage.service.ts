import { BaseEntity } from "../../base/base.entity";
import { BaseStorage } from "./base-storage.types";

/**
 * 로컬 스토리지 저장소 구현
 */
export class LocalStorageService implements BaseStorage<BaseEntity> {
  constructor() {}

  createOne(entityName: string, data: BaseEntity): BaseEntity {
    localStorage.setItem(entityName, JSON.stringify(data));

    return data;
  }

  findAll(entityName: string): BaseEntity[] {
    const entities = localStorage.getItem(entityName);

    return entities ? JSON.parse(entities) : [];
  }

  findOne(entityName: string, id: string): BaseEntity | null {
    const entities = this.findAll(entityName);

    return entities.find((item: BaseEntity) => item.id === id) || null;
  }

  updateOne(entityName: string, id: string, data: Partial<BaseEntity>): BaseEntity | null {
    const entities = this.findAll(entityName);
    const entity = entities.find((item: BaseEntity) => item.id === id);

    if (!entity) return null;

    Object.assign(entity, data);

    localStorage.setItem(entityName, JSON.stringify(entities));

    return entity;
  }

  deleteOne(entityName: string, id: string): boolean {
    const entities = this.findAll(entityName);
    const index = entities.findIndex((item: BaseEntity) => item.id === id);

    if (index === -1) return false;

    entities.splice(index, 1);
    localStorage.setItem(entityName, JSON.stringify(entities));

    return true;
  }
}
