import { cn } from "@/app/style/tailwind-util";
import { FilterFilled } from "@ant-design/icons";

/**
 * 테이블 컴포넌트
 */
export function Table({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <table className={cn("bg-white w-full", className)}>{children}</table>;
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
    <th className={cn("border-[#0000000F] py-2 bg-[#FAFAFA]", className)}>
      <div className="flex flex-row justify-between items-center px-2 [th:not(:first-child)_&]:border-r border-[#0000000F]">
        <span className="text-sm text-[#000000E0] font-semibold">
          {children}
        </span>
        {!hiddenFilter && (
          <FilterFilled
            className="w-3 h-3"
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
        "text-[#000000E0] text-sm px-2 py-[13px] first:[border-width:0px_1px_1px_1px] border-[#0000000F]",
        className
      )}
    >
      {children}
    </td>
  );
};
