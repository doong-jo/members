import { ComponentPropsWithoutRef, ComponentRef, forwardRef } from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";

import { cn } from "@/app/style/tailwind-util";

const Popover = PopoverPrimitive.Root;
const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverContent = forwardRef<
  ComponentRef<typeof PopoverPrimitive.Content>,
  ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> & {
    children: React.ReactNode;
  }
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      ref={ref}
      align={align}
      sideOffset={sideOffset}
      className={cn("relative z-50 rounded-[10px] bg-white", className)}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverContent, PopoverTrigger };
