import { StorageService } from "../storage/storage.service";
import { DEFAULT_FIELDS, Field } from "./field.entity";

export class FieldService {
  constructor(private readonly storageService: StorageService) {
    // default fields 저장
    const fields = this.getAllFields();
    if (fields.length === 0) {
      DEFAULT_FIELDS.forEach((field) => {
        this.storageService.createOne("fields", field);
      });
    }
  }

  getAllFields(): Field[] {
    return this.storageService.findAll("fields");
  }
}
