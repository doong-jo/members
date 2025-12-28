import { StorageService } from "../storage/storage.service";
import { DEFAULT_FIELDS, Field } from "./field.entity";

export class FieldService {
  constructor(private readonly storageService: StorageService) {
    // default fields 저장
    DEFAULT_FIELDS.forEach((field) => {
      this.storageService.createOne("fields", field);
    });
  }

  getAllFields(): Field[] {
    return this.storageService.findAll("fields");
  }
}
