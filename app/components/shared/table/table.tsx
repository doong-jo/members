import { FilterFilled } from "@ant-design/icons";

import { cn } from "@/app/style/tailwind-util";

/**
 * 테이블 컴포넌트
 */
function Table({ children, className }: { children: React.ReactNode; className?: string }) {
  return <table className={cn("w-full bg-white", className)}>{children}</table>;
}
const TableHeader = function TableHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <thead className={cn("w-full", className)}>{children}</thead>;
};

const TableHead = function TableHead({
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
      <div className="flex flex-row items-center justify-between border-[#0000000F] px-2 [th:not(:first-child)_&]:border-r">
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

const TableBody = function TableBody({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <tbody className={cn("w-full", className)}>{children}</tbody>;
};

const TableRow = function TableRow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <tr className={cn("w-full", className)}>{children}</tr>;
};

const TableCell = function TableCell({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <td
      className={cn(
        "border-b border-[#0000000F] px-2 py-[13px] text-sm text-[#000000E0] first:[border-width:0px_1px_1px_1px]",
        className,
      )}
    >
      {children}
    </td>
  );
};

export { Table, TableBody, TableCell, TableHead, TableHeader, TableRow };
