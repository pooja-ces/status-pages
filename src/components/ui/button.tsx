import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { buttonVariants } from "./buttonVariants"  // Import from the new file
import { type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"


export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}



const Button = React.forwardRef<HTMLButtonElement, IButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

