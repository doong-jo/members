import { Button } from "antd";

import { Modal, ModalContent, ModalFooter, ModalHeader, ModalTitle } from "../../shared/modal";

interface CreateMemberModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CreateMemberModal({ open, onOpenChange }: CreateMemberModalProps) {
  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>회원 추가</ModalTitle>
        </ModalHeader>
        <ModalFooter>
          <Button type="default">취소</Button>
          <Button type="default" disabled>
            추가
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
