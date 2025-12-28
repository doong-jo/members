import { ConfigService } from "@/app/config/config.service";

import { StorageService } from "../storage/storage.service";
import { Field } from "./field.entity";
import { FieldService } from "./field.service";

/**
 * 필드 컨트롤러
 *
 * CRUD 엔드포인트 구현
 */
export class FieldController {
  // 싱글톤 인스턴스 관리
  private static instance: FieldController;

  static getInstance(): FieldController {
    if (!FieldController.instance) {
      FieldController.instance = new FieldController();
    }
    return FieldController.instance;
  }

  private fieldService: FieldService;

  constructor() {
    const configService = new ConfigService();
    const storageService = new StorageService(configService);

    this.fieldService = new FieldService(storageService);
  }

  getAllFields(): Field[] {
    return this.fieldService.getAllFields();
  }
}
