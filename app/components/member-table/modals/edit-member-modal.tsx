import { useForm } from "@tanstack/react-form";
import { useQueryClient } from "@tanstack/react-query";
import { Button, Checkbox, DatePicker, Select } from "antd";
import dayjs from "dayjs";

import { Field } from "@/app/data-access/field/field.entity";
import { MemberDataValue } from "@/app/data-access/member/member.entity";
import { useUpdateMember } from "@/app/data-access/member/use-members";
import { cn } from "@/app/style/tailwind-util";

import { Modal, ModalContent, ModalFooter, ModalHeader, ModalTitle } from "../../shared/modal";
import { buildDefaultValuesByMember, FieldError, getFieldValidator } from "./member-form.helper";

interface EditMemberModalProps {
  open: boolean;
  onOpenChange: (open: boolean, member?: Record<string, MemberDataValue>) => void;
  fields: Field[];
  member?: Record<string, MemberDataValue>;
}

export function EditMemberModal({ open, onOpenChange, fields, member }: EditMemberModalProps) {
  const queryClient = useQueryClient();
  const { mutateAsync: updateMember } = useUpdateMember({
    onSuccess: async () => {
      onOpenChange(false);
      await queryClient.invalidateQueries({ queryKey: ["allMembers"] });
    },
  });

  const form = useForm({
    defaultValues: buildDefaultValuesByMember(fields, member ?? {}),
    onSubmit: async ({ value }) => {
      if (typeof member?.["id"] !== "string") {
        throw new Error("업데이트 시에는 id가 필요합니다.");
      }

      await updateMember({ id: member.id, ...value });
    },
  });

  const handleCancel = () => {
    form.reset();
    onOpenChange(false);
  };

  return (
    <Modal open={open} onOpenChange={onOpenChange}>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>회원 수정</ModalTitle>
        </ModalHeader>
        <form
          className="px-6"
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <div className="flex flex-col gap-5 pt-[10px] pb-[20px]">
            {fields.map((field) => (
              <form.Field
                key={field.key}
                name={field.key}
                validators={{ onChange: getFieldValidator(field) }}
              >
                {(formField) => {
                  const hasError = formField.state.meta.errors.length > 0;
                  const errors = formField.state.meta.errors as string[];

                  return (
                    <div key={field.key} className="flex flex-col gap-[6px]">
                      <div className="flex gap-1">
                        <label className="text-left text-[14px] font-semibold text-[#00000073]">
                          {field.label}
                        </label>
                        {field.required && <span className="text-[14px] text-[#FF4D4F]">*</span>}
                      </div>
                      {field.type === "text" && (
                        <>
                          <input
                            type="text"
                            className={cn(
                              "rounded-lg border px-3 py-[5px]",
                              hasError ? "border-[#FF4D4F]" : "border-[#E3E3E3]",
                            )}
                            value={(formField.state.value as string) ?? ""}
                            onChange={(e) => {
                              formField.handleChange(e.target.value);
                            }}
                            required={field.required}
                          />
                          <FieldError errors={errors} />
                        </>
                      )}
                      {field.type === "text-area" && (
                        <>
                          <textarea
                            className={cn(
                              "rounded-lg border px-3 py-[5px]",
                              hasError ? "border-[#FF4D4F]" : "border-[#E3E3E3]",
                            )}
                            value={(formField.state.value as string) ?? ""}
                            onChange={(e) => {
                              formField.handleChange(e.target.value);
                            }}
                          />
                          <FieldError errors={errors} />
                        </>
                      )}
                      {field.type === "date" && (
                        <>
                          <DatePicker
                            className="w-[160px]"
                            status={hasError ? "error" : undefined}
                            // Ant Design DatePicker는 dayjs 객체를 기대하기에 dayjs로 변환
                            defaultValue={dayjs(formField.state.value as Date)}
                            onChange={(date) => {
                              formField.handleChange(dayjs(date).toDate());
                            }}
                          />
                          <FieldError errors={errors} />
                        </>
                      )}
                      {field.type === "select" && (
                        <>
                          <Select
                            className="w-[360px]"
                            status={hasError ? "error" : undefined}
                            options={field.options?.map((option) => ({
                              label: option,
                              value: option,
                            }))}
                            value={(formField.state.value as string) ?? undefined}
                            onChange={(value) => {
                              formField.handleChange(value);
                            }}
                            /**
                             * radix-ui + antd 충돌 대응
                             * radix의 포커스트랩과 antd의 드롭다운 portal 렌더링이 충돌하여 드롭다운을 Modal 컴포넌트 내부에 렌더링
                             */
                            getPopupContainer={(trigger) => trigger.parentElement as HTMLElement}
                          />
                          <FieldError errors={errors} />
                        </>
                      )}
                      {field.type === "checkbox" && (
                        <>
                          <Checkbox
                            checked={(formField.state.value as boolean) ?? false}
                            onChange={(e) => {
                              formField.handleChange(e.target.checked);
                            }}
                            required={field.required}
                          />
                          <FieldError errors={errors} />
                        </>
                      )}
                    </div>
                  );
                }}
              </form.Field>
            ))}
          </div>
          <ModalFooter>
            <Button type="default" onClick={handleCancel}>
              취소
            </Button>
            <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
              {([canSubmit, isSubmitting]) => (
                <Button
                  type="default"
                  htmlType="submit"
                  disabled={!canSubmit || isSubmitting}
                  loading={isSubmitting}
                >
                  수정
                </Button>
              )}
            </form.Subscribe>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
}
