import { FilterFilled } from "@ant-design/icons";

import { cn } from "@/app/style/tailwind-util";

/**
 * 테이블 컴포넌트
 */
export function Table({ children, className }: { children: React.ReactNode; className?: string }) {
  return <table className={cn("w-full bg-white", className)}>{children}</table>;
}
Table.Header = function TableHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <thead className={cn("w-full", className)}>{children}</thead>;
};

Table.Head = function TableHead({
  children,
  className,
  hiddenFilter,
}: {
  children?: React.ReactNode;
  className?: string;
  hiddenFilter?: boolean;
}) {
  return (
    <th className={cn("border-[#0000000F] bg-[#FAFAFA] py-2", className)}>
      <div className="flex flex-row items-center justify-between border-[#0000000F] [th:not(:first-child)_&]:border-r">
        <span className="text-sm font-semibold text-[#000000E0]">{children}</span>
        {!hiddenFilter && (
          <FilterFilled
            className="h-3 w-3"
            style={{
              color: "#00000040",
            }}
          />
        )}
      </div>
    </th>
  );
};

Table.Body = function TableBody({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <tbody className={cn("w-full", className)}>{children}</tbody>;
};

Table.Row = function TableRow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <tr className={cn("w-full", className)}>{children}</tr>;
};

Table.Cell = function TableCell({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <td
      className={cn(
        "border-[#0000000F] px-2 py-[13px] text-sm text-[#000000E0] first:[border-width:0px_1px_1px_1px]",
        className,
      )}
    >
      {children}
    </td>
  );
};
