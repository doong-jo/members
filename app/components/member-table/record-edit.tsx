export function RecordEdit({
  onEditClick,
  onDeleteClick,
}: {
  onEditClick: () => void;
  onDeleteClick: () => void;
}) {
  return (
    <div className="flex w-[181px] flex-col gap-2 rounded-[10px] bg-white p-1 [box-shadow:0px_6px_16px_0px_#00000014]">
      <button
        type="button"
        className="w-full px-[12px] py-[5px] text-start text-[14px] text-[#000000E0]"
        onClick={onEditClick}
      >
        수정
      </button>
      <div className="h-px w-full bg-[#0000000F]" />
      <button
        type="button"
        className="w-full px-[12px] py-[5px] text-start text-[14px] text-[#FF4D4F]"
        onClick={onDeleteClick}
      >
        삭제
      </button>
    </div>
  );
}
