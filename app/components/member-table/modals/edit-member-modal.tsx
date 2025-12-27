import { Modal, ModalContent, ModalHeader, ModalTitle } from "../../shared/modal";
import { Row } from "../../shared/table/entities/row.entity";

interface EditMemberModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  row: Row;
}

export function EditMemberModal({ open, onOpenChange }: EditMemberModalProps) {
  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>회원 수정</ModalTitle>
        </ModalHeader>
      </ModalContent>
    </Modal>
  );
}
