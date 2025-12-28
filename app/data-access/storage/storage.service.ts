import { ConfigService } from "@/app/config/config.service";

import { BaseEntity } from "../base/base.entity";
import { Field } from "../field/field.entity";
import { Member } from "../member/member.entity";
import { InMemoryService } from "./libs/in-memory.service";
import { LocalStorageService } from "./libs/local-storage.service";

interface EntityMap {
  fields: Field;
  members: Member;
}

/**
 * 데이터 저장소 관리
 */
export class StorageService {
  private storage: InMemoryService | LocalStorageService;

  constructor(private readonly configService: ConfigService) {
    this.storage =
      this.configService.get("STORAGE") === "in-memory"
        ? new InMemoryService()
        : new LocalStorageService();
  }

  createOne(entityName: string, data: BaseEntity): BaseEntity {
    return this.storage.createOne(entityName, data);
  }

  findAll<T extends keyof EntityMap>(entityName: T): EntityMap[T][] {
    return this.storage.findAll(entityName) as EntityMap[T][];
  }

  findOne<T extends keyof EntityMap>(entityName: T, id: string): EntityMap[T] | null {
    return this.storage.findOne(entityName, id) as EntityMap[T] | null;
  }

  updateOne<T extends keyof EntityMap>(
    entityName: T,
    id: string,
    data: Partial<EntityMap[T]>,
  ): EntityMap[T] | null {
    return this.storage.updateOne(entityName, id, data) as EntityMap[T] | null;
  }

  deleteOne(entityName: string, id: string): boolean {
    return this.storage.deleteOne(entityName, id);
  }
}
