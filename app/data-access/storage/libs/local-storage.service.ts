"use client";

import { BaseEntity } from "../../base/base.entity";
import { BaseStorage } from "./base-storage.types";

/**
 * 로컬 스토리지 저장소 구현
 */
export class LocalStorageService implements BaseStorage<BaseEntity> {
  constructor() {}

  private isBrowser(): boolean {
    return typeof window !== "undefined";
  }

  createOne(entityName: string, data: BaseEntity): BaseEntity {
    if (!this.isBrowser()) {
      return data;
    }

    const entities = this.findAll(entityName);

    entities.push(data);

    localStorage.setItem(entityName, JSON.stringify(entities));

    return data;
  }

  findAll(entityName: string): BaseEntity[] {
    if (!this.isBrowser()) {
      return [];
    }

    const entities = localStorage.getItem(entityName);

    if (entities === null) {
      return [];
    }

    const parsed = JSON.parse(entities);
    return Array.isArray(parsed) ? parsed : [];
  }

  findOne(entityName: string, id: string): BaseEntity | null {
    if (!this.isBrowser()) {
      return null;
    }

    const entities = this.findAll(entityName);

    return entities.find((item: BaseEntity) => item.id === id) || null;
  }

  updateOne(entityName: string, id: string, data: Partial<BaseEntity>): BaseEntity | null {
    if (!this.isBrowser()) {
      return null;
    }

    const entities = this.findAll(entityName);
    const entity = entities.find((item: BaseEntity) => item.id === id);

    if (!entity) return null;

    Object.assign(entity, data);

    localStorage.setItem(entityName, JSON.stringify(entities));

    return entity;
  }

  deleteOne(entityName: string, id: string): boolean {
    if (!this.isBrowser()) {
      return false;
    }

    const entities = this.findAll(entityName);
    const index = entities.findIndex((item: BaseEntity) => item.id === id);

    if (index === -1) return false;

    entities.splice(index, 1);
    localStorage.setItem(entityName, JSON.stringify(entities));

    return true;
  }
}
