import { ConfigService } from "@/app/config/config.service";

import { BaseEntity } from "../base/base.entity";
import { InMemoryService } from "./libs/in-memory.service";
import { LocalStorageService } from "./libs/local-storage.service";

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

  findAll(entityName: string): BaseEntity[] {
    return this.storage.findAll(entityName);
  }

  findOne(entityName: string, id: string): BaseEntity | null {
    return this.storage.findOne(entityName, id);
  }

  updateOne(entityName: string, id: string, data: Partial<BaseEntity>): BaseEntity | null {
    return this.storage.updateOne(entityName, id, data);
  }

  deleteOne(entityName: string, id: string): boolean {
    return this.storage.deleteOne(entityName, id);
  }
}
