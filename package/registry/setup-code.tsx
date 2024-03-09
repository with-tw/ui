// This file is auto-generated. Do not modify manually.

export type CodeRegisteryType =
  | 'animation-config'
  | 'utils'
  | 'button'
  | 'icon-button'
  | 'input'
  | 'card'
  | 'switch'
  | 'accordion'
  | 'callout'
  | 'responsive-control';
  
export const SETUP_CODE: Record<CodeRegisteryType, { registerAt: string; code: string }> = {
  "animation-config": {
    "registerAt": "components/configs/animation-config.ts",
    "code": "export type ComponentAnimationType =\n  | 'none'\n  | 'from-top'\n  | 'from-bottom'\n  | 'from-left'\n  | 'from-right';\n\nexport type ComponentAnimationFramerConfigType = {\n  opacity?: number;\n  y?: number;\n  x?: number;\n  scale?: number;\n  zoom?: number;\n  width?: number;\n  height?: number;\n};\n\nexport const ComponentAnimation: Record<\n  ComponentAnimationType,\n  {\n    initial: ComponentAnimationFramerConfigType;\n    animate: ComponentAnimationFramerConfigType;\n  }\n> = {\n  none: {\n    initial: {},\n    animate: {},\n  },\n  'from-bottom': {\n    initial: {\n      opacity: 0,\n      y: 12,\n    },\n    animate: {\n      opacity: 1,\n      y: 0,\n    },\n  },\n  'from-top': {\n    initial: {\n      opacity: 0,\n      y: -12,\n    },\n    animate: {\n      opacity: 1,\n      y: 0,\n    },\n  },\n  'from-left': {\n    initial: {\n      opacity: 0,\n      x: -12,\n    },\n    animate: {\n      opacity: 1,\n      x: 0,\n    },\n  },\n  'from-right': {\n    initial: {\n      opacity: 0,\n      x: 12,\n    },\n    animate: {\n      opacity: 1,\n      x: 0,\n    },\n  },\n};\n"
  },
  "utils": {
    "registerAt": "helpers/utils.ts",
    "code": "import { type ClassValue, clsx } from 'clsx';\nimport { twMerge } from 'tailwind-merge';\n\nexport function cn(...inputs: ClassValue[]) {\n  return twMerge(clsx(inputs));\n}\n"
  },
  "button": {
    "registerAt": "components/ui/button.tsx",
    "code": "'use client';\nimport { cn } from '@/helpers/utils';\nimport { ArrowRight, ChevronRight, Loader2 } from 'lucide-react';\nimport { ReactNode, forwardRef, useState } from 'react';\nimport { motion } from 'framer-motion';\nimport { ComponentAnimationType } from '@/components/configs/animation-config';\nimport { ComponentAnimation } from '@/components/configs/animation-config';\n\nexport type ButtonVariantType = 'primary' | 'secondary' | 'ghost';\nexport type ButtonSizeType = 'sm' | 'md' | 'lg';\n\nexport interface ButtonProps\n  extends React.ButtonHTMLAttributes<HTMLButtonElement> {\n  withArrow?: boolean;\n  icon?: ReactNode;\n  iconDirection?: 'left' | 'right';\n  variant?: ButtonVariantType;\n  size?: ButtonSizeType;\n  stretch?: boolean;\n  isLoading?: boolean;\n  animationType?: ComponentAnimationType;\n}\n\nconst ButtonVariantStyles: Record<ButtonVariantType, string> = {\n  primary:\n    'bg-gradient-to-b from-blue-500 to-blue-600 text-white shadow-md active:shadow',\n  secondary: 'bg-white/10 hover:bg-white/20 focus:ring-neutral-700',\n  ghost: 'bg-transparent hover:bg-white/10',\n};\n\nconst ButtonSizeStyles: Record<ButtonSizeType, string> = {\n  sm: 'text-xs px-4 py-2 rounded-lg',\n  md: 'text-sm px-4 py-2 rounded-lg',\n  lg: 'text-base px-6 py-3 rounded-xl',\n};\n\nexport const Button = forwardRef<HTMLButtonElement, ButtonProps>(\n  (\n    {\n      className,\n      children,\n      variant = 'primary',\n      size = 'md',\n      icon = <></>,\n      iconDirection = 'left',\n      withArrow = false,\n      stretch = false,\n      disabled = false,\n      isLoading = false,\n      animationType = 'none',\n      ...args\n    },\n    ref,\n  ) => {\n    const [hovering, setHovering] = useState<boolean>(false);\n    return (\n      <motion.button\n        initial={{\n          ...ComponentAnimation[animationType].initial,\n        }}\n        animate={{\n          ...ComponentAnimation[animationType].animate,\n        }}\n        whileTap={{\n          scale: isLoading || disabled ? 1 : 0.9,\n        }}\n        ref={ref}\n        className={cn(\n          'tracking-tight font-medium flex flex-row items-center justify-center gap-1 hover:gap-1.5 outline-none',\n          !disabled && 'hover:brightness-110 active:brightness-90',\n          animationType === 'none' && 'transition-all',\n          ButtonVariantStyles[variant],\n          ButtonSizeStyles[size],\n          stretch && 'w-full',\n          isLoading && 'cursor-default opacity-60 transition-all',\n          disabled && 'cursor-not-allowed opacity-40',\n          className,\n        )}\n        onMouseEnter={(event) => {\n          // toggling from chevron to arrow\n          if (withArrow) setHovering(true);\n          // Run the function passed in args (if it exists)\n          if (args && args.onMouseEnter) {\n            args.onMouseEnter(event);\n          }\n        }}\n        onMouseLeave={(event) => {\n          // toggling back from arrow to chevron\n          setHovering(false);\n          // Run the function passed in args (if it exists)\n          if (args && args.onMouseLeave) {\n            args.onMouseLeave(event);\n          }\n        }}\n        {...(args as unknown as any)}>\n        <span className=\"button-content-wrapper flex items-center gap-2\">\n          {isLoading && (\n            <motion.span\n              key={'loader-wrapper'}\n              initial={{\n                opacity: 0,\n                y: 12,\n              }}\n              animate={{\n                opacity: 1,\n                y: 0,\n              }}>\n              <Loader2 className=\"h-4 w-4 animate-spin\" />\n            </motion.span>\n          )}\n          {iconDirection === 'left' && icon}\n          {children}\n          {iconDirection === 'right' && icon}\n        </span>\n        {withArrow &&\n          (!hovering ? (\n            <ChevronRight className=\"h-4 w-4\" />\n          ) : (\n            <ArrowRight className=\"h-4 w-4 animate-pulse\" />\n          ))}\n      </motion.button>\n    );\n  },\n);\n\nButton.displayName = 'Button';\n"
  },
  "icon-button": {
    "registerAt": "components/ui/icon-button.tsx",
    "code": "'use client';\nimport { forwardRef } from 'react';\nimport {\n  ComponentAnimation,\n  ComponentAnimationType,\n} from '@/components/configs/animation-config';\nimport { MotionProps, motion } from 'framer-motion';\nimport { cn } from '@/helpers/utils';\nimport { Loader2 } from 'lucide-react';\n\nexport type IconButtonVariantType = 'primary' | 'secondary' | 'ghost';\nexport type IconButtonSizeType = 'sm' | 'md' | 'lg';\n\nexport interface IconButtonProps\n  extends React.ButtonHTMLAttributes<HTMLButtonElement> {\n  isLoading?: boolean;\n  animationType?: ComponentAnimationType;\n  stretch?: boolean;\n  variant?: IconButtonVariantType;\n  size?: IconButtonSizeType;\n}\n\nconst IconButtonVariantStyles: Record<IconButtonVariantType, string> = {\n  primary:\n    'bg-gradient-to-b from-blue-500 to-blue-600 text-white shadow-md active:shadow',\n  secondary: 'bg-white/10 hover:bg-white/20 focus:ring-neutral-700',\n  ghost: 'bg-transparent hover:bg-white/10',\n};\n\nconst IconButtonSizeStyles: Record<IconButtonSizeType, string> = {\n  sm: 'text-xs p-2 rounded-lg',\n  md: 'text-sm p-3 rounded-lg',\n  lg: 'text-base p-4 rounded-xl',\n};\n\nexport const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(\n  (\n    {\n      className,\n      children,\n      isLoading = false,\n      disabled = false,\n      stretch = false,\n      animationType = 'none',\n      variant = 'primary',\n      size = 'md',\n      ...args\n    },\n    ref,\n  ) => {\n    return (\n      <motion.button\n        ref={ref}\n        initial={{\n          ...ComponentAnimation[animationType].initial,\n        }}\n        animate={{\n          ...ComponentAnimation[animationType].animate,\n        }}\n        whileTap={{\n          scale: isLoading || disabled ? 1 : 0.9,\n        }}\n        className={cn(\n          'outline-none',\n          !disabled && 'hover:brightness-110 active:brightness-90',\n          animationType === 'none' && 'transition-all',\n          IconButtonVariantStyles[variant],\n          IconButtonSizeStyles[size],\n          stretch && 'w-full',\n          isLoading && 'cursor-default opacity-60 transition-all',\n          disabled && 'cursor-not-allowed opacity-40',\n          className,\n        )}\n        {...(args as MotionProps)}>\n        {!isLoading && children}\n        {isLoading && (\n          <motion.span\n            key={'loader-wrapper'}\n            initial={{\n              opacity: 0,\n              y: 12,\n            }}\n            animate={{\n              opacity: 1,\n              y: 0,\n            }}>\n            <Loader2 className=\"h-4 w-4 animate-spin\" />\n          </motion.span>\n        )}\n      </motion.button>\n    );\n  },\n);\n\nIconButton.displayName = 'IconButton';\n"
  },
  "input": {
    "registerAt": "components/ui/input.tsx",
    "code": "'use client';\nimport { cn } from '@/helpers/utils';\nimport React, { forwardRef } from 'react';\nimport { MotionProps, motion } from 'framer-motion';\nimport {\n  ComponentAnimation,\n  ComponentAnimationType,\n} from '@/components/configs/animation-config';\n\nexport interface InputProps\n  extends React.InputHTMLAttributes<HTMLInputElement> {\n  stretch?: boolean;\n  withLabel?: string;\n  labelDirection?: 'hl' | 'v';\n  animationType?: ComponentAnimationType;\n}\n\nexport const Input = forwardRef<HTMLInputElement, InputProps>(\n  (\n    {\n      className,\n      stretch = false,\n      withLabel = '',\n      labelDirection = 'h',\n      animationType = 'none',\n      ...args\n    },\n    ref,\n  ) => {\n    const inputElement = (\n      <motion.input\n        ref={ref}\n        initial={{\n          ...ComponentAnimation[animationType].initial,\n        }}\n        animate={{\n          ...ComponentAnimation[animationType].animate,\n        }}\n        className={cn(\n          'px-3 py-2 rounded-xl border border-transparent bg-white/10 text-sm focus:outline-none focus:bg-white/15',\n          'disabled:cursor-not-allowed disabled:brightness-75',\n          stretch && 'w-full',\n          className,\n        )}\n        {...(args as MotionProps)}\n      />\n    );\n    if (withLabel.length) {\n      return (\n        <div\n          className={cn(\n            'labelled-input-wrapper flex gap-2',\n            labelDirection === 'h'\n              ? 'flex-row items-center'\n              : 'flex-col items-start',\n          )}>\n          <label\n            htmlFor={args.name}\n            className=\"text-sm font-medium text-neutral-200\">\n            {withLabel}\n          </label>\n          {inputElement}\n        </div>\n      );\n    } else {\n      return inputElement;\n    }\n  },\n);\n\nInput.displayName = 'Input';\n"
  },
  "card": {
    "registerAt": "components/ui/card.tsx",
    "code": "'use client';\nimport { cn } from '@/helpers/utils';\nimport { forwardRef } from 'react';\nimport { MotionProps, motion } from 'framer-motion';\nimport {\n  ComponentAnimation,\n  ComponentAnimationType,\n} from '@/components/configs/animation-config';\n\nexport interface CardProps extends React.HTMLAttributes<HTMLDivElement> {\n  animationType?: ComponentAnimationType;\n}\nexport interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}\nexport interface CardHeaderTitleProps\n  extends React.HTMLAttributes<HTMLHeadingElement> {}\nexport interface CardHeaderDescriptionProps\n  extends React.HTMLAttributes<HTMLParagraphElement> {}\nexport interface CardContentProps\n  extends React.HTMLAttributes<HTMLDivElement> {}\nexport interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}\n\nexport const Card = forwardRef<HTMLDivElement, CardProps>(\n  ({ className, animationType = 'none', ...args }, ref) => {\n    return (\n      <motion.div\n        ref={ref}\n        initial={{\n          ...ComponentAnimation[animationType].initial,\n        }}\n        animate={{\n          ...ComponentAnimation[animationType].animate,\n        }}\n        className={cn('card bg-neutral-900 rounded-xl', className)}\n        {...(args as MotionProps)}\n      />\n    );\n  },\n);\n\nCard.displayName = 'Card';\n\nexport const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(\n  ({ className, ...args }, ref) => {\n    return (\n      <div\n        ref={ref}\n        className={cn(\n          'card-header p-4 border-b border-b-neutral-800',\n          className,\n        )}\n        {...args}\n      />\n    );\n  },\n);\n\nCardHeader.displayName = 'CardHeader';\n\nexport const CardHeaderTitle = forwardRef<\n  HTMLHeadingElement,\n  CardHeaderTitleProps\n>(({ className, ...args }, ref) => {\n  return (\n    <h3\n      ref={ref}\n      className={cn(\n        'card-header-title text-2xl font-medium leading-snug',\n        className,\n      )}\n      {...args}\n    />\n  );\n});\n\nCardHeaderTitle.displayName = 'CardHeaderTitle';\n\nexport const CardHeaderDescription = forwardRef<\n  HTMLParagraphElement,\n  CardHeaderDescriptionProps\n>(({ className, ...args }, ref) => {\n  return (\n    <p\n      ref={ref}\n      className={cn(\n        'card-header-description text-sm text-neutral-600',\n        className,\n      )}\n      {...args}\n    />\n  );\n});\n\nCardHeaderDescription.displayName = 'CardHeaderDescription';\n\nexport const CardContent = forwardRef<HTMLDivElement, CardContentProps>(\n  ({ className, ...args }, ref) => {\n    return (\n      <div ref={ref} className={cn('card-content p-4', className)} {...args} />\n    );\n  },\n);\n\nCardContent.displayName = 'CardContent';\n\nexport const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(\n  ({ className, ...args }, ref) => {\n    return (\n      <div\n        ref={ref}\n        className={cn(\n          'card-footer p-4 border-t border-t-neutral-800',\n          className,\n        )}\n        {...args}\n      />\n    );\n  },\n);\n\nCardFooter.displayName = 'CardFooter';\n"
  },
  "switch": {
    "registerAt": "components/ui/switch.tsx",
    "code": "'use client';\nimport { cn } from '@/helpers/utils';\nimport { forwardRef, useState } from 'react';\nimport { MotionProps, motion } from 'framer-motion';\nimport {\n  ComponentAnimation,\n  ComponentAnimationType,\n} from '../configs/animation-config';\nimport { Loader2 } from 'lucide-react';\n\nexport interface SwitchProps\n  extends React.ButtonHTMLAttributes<HTMLButtonElement> {\n  isChecked?: boolean;\n  withLabel?: string;\n  hasLoading?: boolean;\n  labelDirection?: 'hl' | 'hr' | 'v';\n  animationType?: ComponentAnimationType;\n}\n\nexport const Switch = forwardRef<HTMLButtonElement, SwitchProps>(\n  (\n    {\n      className,\n      children: _,\n      isChecked = false,\n      withLabel = '',\n      hasLoading = false,\n      labelDirection = 'hl',\n      animationType = 'none',\n      ...args\n    },\n    ref,\n  ) => {\n    const [checked, setChecked] = useState<boolean>(isChecked);\n    const loader = (\n      <motion.span\n        key={'loader-wrapper'}\n        initial={{\n          opacity: 0,\n          y: 12,\n        }}\n        animate={{\n          opacity: 1,\n          y: 0,\n        }}>\n        <Loader2 className=\"h-3 w-3 animate-spin\" />\n      </motion.span>\n    );\n    const switchElement = (\n      <motion.button\n        ref={ref}\n        initial={{\n          ...ComponentAnimation[animationType].initial,\n        }}\n        animate={{\n          ...ComponentAnimation[animationType].animate,\n        }}\n        className={cn(\n          'switch w-12 p-1.5 h-fit rounded-full bg-white/20 flex flex-row items-center disabled:brightness-50 disabled:cursor-not-allowed',\n          checked && 'bg-blue-500',\n          hasLoading && 'cursor-default brightness-50',\n          className,\n        )}\n        onClick={(event) => {\n          if (hasLoading) return;\n          setChecked(!checked);\n          // appending the args.onClick if present\n          args && args.onClick && args.onClick(event);\n        }}\n        {...(args as MotionProps)}>\n        <motion.span\n          initial={{\n            x: checked ? 19 : 0,\n          }}\n          animate={{\n            x: checked ? 19 : 0,\n          }}\n          className={cn(\n            'switch-thumb inline-block rounded-full w-4 h-4 bg-white shadow-sm',\n          )}\n        />\n      </motion.button>\n    );\n    if (withLabel.length) {\n      return (\n        <div\n          className={cn(\n            'switch-with-label flex gap-2',\n            labelDirection === 'hl' && 'flex-row items-center',\n            labelDirection === 'hr' && 'flex-row-reverse items-center',\n            labelDirection === 'v' && 'flex-col items-start',\n          )}>\n          <label\n            htmlFor={args.id}\n            className=\"text-sm font-medium text-neutral-200\">\n            {withLabel}\n          </label>\n          {switchElement} {hasLoading && loader}\n        </div>\n      );\n    } else {\n      return (\n        <div className=\"switch-wrapper h-fit w-fit flex flex-row items-center gap-2\">\n          {switchElement} {hasLoading ? loader : <></>}\n        </div>\n      );\n    }\n  },\n);\n\nSwitch.displayName = 'Switch';\n"
  },
  "accordion": {
    "registerAt": "components/ui/accordion.tsx",
    "code": "'use client';\n\nimport * as RadixAccordion from '@radix-ui/react-accordion';\nimport { ChevronDown } from 'lucide-react';\n\nimport { cn } from '@/helpers/utils';\nimport React, { forwardRef } from 'react';\nimport { motion } from 'framer-motion';\nimport {\n  ComponentAnimation,\n  ComponentAnimationType,\n} from '@/components/configs/animation-config';\n\nexport const Accordion = forwardRef<\n  React.ElementRef<typeof RadixAccordion.Root>,\n  React.ComponentPropsWithoutRef<typeof RadixAccordion.Root>\n>(({ className, ...args }, ref) => {\n  return (\n    <RadixAccordion.Root\n      ref={ref}\n      className={cn(\n        'rounded-xl overflow-hidden grid divide-y divide-neutral-800',\n        className,\n      )}\n      {...args}\n    />\n  );\n});\n\nAccordion.displayName = 'Accordion';\n\nexport const AccordionItem = forwardRef<\n  React.ElementRef<typeof RadixAccordion.Item>,\n  React.ComponentPropsWithoutRef<typeof RadixAccordion.Item>\n>(({ className, ...args }, ref) => {\n  return (\n    <RadixAccordion.Item\n      ref={ref}\n      className={cn('accordion-item w-[340px] bg-neutral-900', className)}\n      {...args}\n    />\n  );\n});\n\nAccordionItem.displayName = 'AccordionItem';\n\nexport const AccordionTrigger = forwardRef<\n  React.ElementRef<typeof RadixAccordion.Trigger>,\n  React.ComponentPropsWithoutRef<typeof RadixAccordion.Trigger>\n>(({ className, children, ...args }, ref) => {\n  return (\n    <RadixAccordion.Header className=\"flex\">\n      <RadixAccordion.Trigger\n        ref={ref}\n        className={cn(\n          'flex flex-row items-center justify-between w-full px-4 py-3 [&[data-state=open]>svg]:rotate-180',\n          className,\n        )}\n        {...args}>\n        {children}\n        <ChevronDown className=\"h-4 w-4 shrink-0 transition-transform duration-200\" />\n      </RadixAccordion.Trigger>\n    </RadixAccordion.Header>\n  );\n});\n\nAccordionTrigger.displayName = 'AccordionTrigger';\n\nexport const AccordionContent = forwardRef<\n  React.ElementRef<typeof RadixAccordion.Content>,\n  React.ComponentPropsWithoutRef<typeof RadixAccordion.Content> & {\n    animationType?: ComponentAnimationType;\n  }\n>(({ className, children, animationType = 'none', ...args }, ref) => {\n  return (\n    <RadixAccordion.Content\n      ref={ref}\n      className={cn(\n        'accordion-content px-4 py-3 bg-neutral-800 shadow-inner shadow-black/20',\n      )}\n      {...args}>\n      <motion.div\n        initial={{\n          ...ComponentAnimation[animationType].initial,\n        }}\n        animate={{\n          ...ComponentAnimation[animationType].animate,\n        }}\n        className={cn('accordion-content-wrapper', className)}>\n        {children}\n      </motion.div>\n    </RadixAccordion.Content>\n  );\n});\n\nAccordionContent.displayName = 'AccordionContent';\n"
  },
  "callout": {
    "registerAt": "components/ui/callout.tsx",
    "code": "'use client';\nimport { ReactNode, forwardRef } from 'react';\nimport {\n  ComponentAnimation,\n  ComponentAnimationType,\n} from '@/components/configs/animation-config';\nimport { cn } from '@/helpers/utils';\nimport { MotionProps, motion } from 'framer-motion';\nimport { AlertCircle, AlertTriangle, CheckCircle, Info } from 'lucide-react';\n\nexport type CalloutVariantType =\n  | 'info'\n  | 'error'\n  | 'warning'\n  | 'success'\n  | 'subtle';\nexport interface CalloutProps extends React.HTMLAttributes<HTMLDivElement> {\n  variant?: CalloutVariantType;\n  animationType?: ComponentAnimationType;\n  stretch?: boolean;\n}\n\nconst CalloutVariantStyle: Record<CalloutVariantType, string> = {\n  info: '[&>.callout-icon]:text-blue-500',\n  error: '[&>.callout-icon]:text-red-500',\n  warning: '[&>.callout-icon]:text-yellow-500',\n  success: '[&>.callout-icon]:text-green-500',\n  subtle: '[&>.callout-icon]:text-neutral-600',\n};\n\nconst CalloutVariantIcon: Record<CalloutVariantType, ReactNode> = {\n  info: <Info />,\n  error: <AlertTriangle />,\n  warning: <AlertCircle />,\n  success: <CheckCircle />,\n  subtle: <Info />,\n};\n\nexport const Callout = forwardRef<HTMLDivElement, CalloutProps>(\n  (\n    {\n      className,\n      children,\n      variant = 'info',\n      animationType = 'none',\n      stretch = false,\n      ...args\n    },\n    ref,\n  ) => {\n    return (\n      <motion.div\n        ref={ref}\n        initial={{\n          ...ComponentAnimation[animationType].initial,\n        }}\n        animate={{\n          ...ComponentAnimation[animationType].animate,\n        }}\n        className={cn(\n          'flex flex-row gap-2 pl-3 pr-4 py-2 items-center justify-start rounded-lg bg-neutral-900 shadow-lg',\n          CalloutVariantStyle[variant],\n          stretch && 'w-full',\n          className,\n        )}\n        {...(args as MotionProps)}>\n        <span className=\"callout-icon w-4 h-4 *:w-full *:h-full\">\n          {CalloutVariantIcon[variant]}\n        </span>\n        <div className=\"callout-content font-medium text-sm text-neutral-400\">\n          {children}\n        </div>\n      </motion.div>\n    );\n  },\n);\n\nCallout.displayName = 'Callout';\n"
  },
  "responsive-control": {
    "registerAt": "components/layouts/responsive-control.tsx",
    "code": "import { cn } from '@/helpers/utils';\nimport { forwardRef } from 'react';\n\nexport interface ResponsiveControlProps\n  extends React.HTMLAttributes<HTMLDivElement> {}\n\nexport const ResponsiveControl = forwardRef<\n  HTMLDivElement,\n  ResponsiveControlProps\n>(({ className, ...args }, ref) => {\n  return (\n    <div\n      ref={ref}\n      className={cn(\n        'responsive-grid-control',\n        'box-border mx-auto',\n        'w-[1100px] max-2xl:w-[1200px] max-xl:w-[920px] max-lg:w-[680px] max-md:w-[440px] max-sm:w-[340px]',\n        className,\n      )}\n      {...args}\n    />\n  );\n});\n\nResponsiveControl.displayName = 'ResponsiveControl';\n"
  }
};
