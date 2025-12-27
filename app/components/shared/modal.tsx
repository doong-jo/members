import * as React from "react";
import { CloseOutlined } from "@ant-design/icons";
import * as ModalPrimitive from "@radix-ui/react-dialog";

import { cn } from "@/app/style/tailwind-util";

const Modal = ModalPrimitive.Root;

const ModalTrigger = ModalPrimitive.Trigger;

const ModalPortal = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof ModalPrimitive.Portal> & {
  className?: string;
}) => (
  <ModalPrimitive.Portal {...props}>
    <div className={className}>{props.children}</div>
  </ModalPrimitive.Portal>
);
ModalPortal.displayName = ModalPrimitive.Portal.displayName;

const ModalOverlay = React.forwardRef<
  React.ComponentRef<typeof ModalPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof ModalPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <ModalPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/45", className)}
    {...props}
  />
));
ModalOverlay.displayName = ModalPrimitive.Overlay.displayName;

const ModalContent = React.forwardRef<
  React.ComponentRef<typeof ModalPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof ModalPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <ModalPortal className={className}>
    <ModalOverlay />
    <ModalPrimitive.Content
      ref={ref}
      className={cn(
        "fixed top-[50%] left-[50%] z-50 grid w-full max-w-2xl translate-x-[-50%] translate-y-[-50%] rounded-[10px] bg-white [box-shadow:0px_6px_16px_0px_#00000014]",
        className,
      )}
      {...props}
    >
      {children}
    </ModalPrimitive.Content>
  </ModalPortal>
));

ModalContent.displayName = ModalPrimitive.Content.displayName;

const ModalHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("flex flex-col space-y-1.5 text-center sm:text-left", className)} {...props} />
);
ModalHeader.displayName = "ModalHeader";

const ModalFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse px-4 py-3 sm:flex-row sm:justify-end sm:space-x-2",
      className,
    )}
    {...props}
  />
);
ModalFooter.displayName = "ModalFooter";

const ModalTitle = React.forwardRef<
  React.ComponentRef<typeof ModalPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof ModalPrimitive.Title>
>(({ className, children, ...props }, ref) => (
  <ModalPrimitive.Title
    ref={ref}
    className={cn(
      "flex flex-row items-center justify-between gap-x-[10px] px-4 py-3 text-sm font-semibold text-[#000000E0]",
      className,
    )}
    {...props}
  >
    {children}
    <ModalPrimitive.Close>
      <CloseOutlined className="p-2 text-[16px]" style={{ color: "#00000073" }} />
      <span className="sr-only">닫기</span>
    </ModalPrimitive.Close>
  </ModalPrimitive.Title>
));
ModalTitle.displayName = ModalPrimitive.Title.displayName;

export { Modal, ModalContent, ModalFooter, ModalHeader, ModalTitle, ModalTrigger };
