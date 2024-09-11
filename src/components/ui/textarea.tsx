import * as React from "react"

import { cn } from "@/lib/utils"

const tw = [44, 48, 52, 56, 60, 64, 72, 80, 96] as const
type TwHeight = (typeof tw)[number]

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	error?: string
	height?: `h-${TwHeight}`
	label?: string
	wrapperClassName?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ className, error, height, label, required, wrapperClassName, ...props }, ref) => {
		return (
			<div className={cn("flex w-full flex-col gap-2", wrapperClassName)}>
				{label && (
					<label htmlFor={props.id ?? props.name} className="text-sm font-medium text-neutral-800">
						{label} {required && <span className="text-red-500">*</span>}
					</label>
				)}
				<div
					className={cn(
						"flex h-40 w-full items-center gap-2 rounded-md border border-neutral-400 px-3 py-2",
						height
					)}>
					<textarea
						className={cn(
							"flex h-full w-full resize-none bg-transparent text-sm placeholder:text-neutral-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
							className
						)}
						ref={ref}
						{...props}
					/>
				</div>
				{error && <span className="text-xs font-medium text-error-400">{error}</span>}
			</div>
		)
	}
)
Textarea.displayName = "Textarea"

export { Textarea }
