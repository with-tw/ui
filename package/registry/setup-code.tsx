// This file is auto-generated. Do not modify manually.

export type CodeRegisteryType =
  | 'animation-config'
  | 'utils'
  | 'button'
  | 'icon-button'
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
  "responsive-control": {
    "registerAt": "components/layouts/responsive-control.tsx",
    "code": "import { cn } from '@/helpers/utils';\nimport { forwardRef } from 'react';\n\nexport interface ResponsiveControlProps\n  extends React.HTMLAttributes<HTMLDivElement> {}\n\nexport const ResponsiveControl = forwardRef<\n  HTMLDivElement,\n  ResponsiveControlProps\n>(({ className, ...args }, ref) => {\n  return (\n    <div\n      ref={ref}\n      className={cn(\n        'responsive-grid-control',\n        'box-border mx-auto',\n        'w-[1100px] max-2xl:w-[1200px] max-xl:w-[920px] max-lg:w-[680px] max-md:w-[440px] max-sm:w-[340px]',\n        className,\n      )}\n      {...args}\n    />\n  );\n});\n\nResponsiveControl.displayName = 'ResponsiveControl';\n"
  }
};
