import { Modal, ModalContent, ModalHeader, ModalTitle } from "../../shared/modal";

interface EditMemberModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
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
