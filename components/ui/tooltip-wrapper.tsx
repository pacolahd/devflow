import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils"; // Assuming this utility is available for className merging

interface TooltipWrapperProps {
    tooltipText: string;
    children: React.ReactNode;
    tooltipSide?: "top" | "right" | "bottom" | "left";
    tooltipAlign?: "start" | "center" | "end";
    tooltipSideOffset?: number;
    showTooltip?: boolean; // Prop to conditionally show the tooltip
    hideAboveScreenSize?: string; // Prop to specify the screen size above which tooltip should be hidden
    className?: string;
}

const TooltipWrapper = ({
                            tooltipText,
                            children,
                            tooltipSide = "right",
                            tooltipAlign = "center",
                            tooltipSideOffset = 10,
    showTooltip = true, // Default to true, so it shows the tooltip
                            hideAboveScreenSize,
    className,
                        }: TooltipWrapperProps) => {
    return(        showTooltip ? (<TooltipProvider>
            <Tooltip delayDuration={250}>
                <TooltipTrigger asChild>
                    <div className="relative">
                        {children}
                        {/* Conditionally show the tooltip based on screen size prop */}
                        <TooltipContent
                            side={tooltipSide}
                            align={tooltipAlign}
                            sideOffset={tooltipSideOffset}
                            className={cn(
                                // Show the tooltip on all sizes by default,
                                // but hide above the specified screen size
                                hideAboveScreenSize
                                    ? `${hideAboveScreenSize}:hidden` // Tooltip will hide above the specified screen size
                                    : "", // If no hideAboveScreenSize is provided, tooltip will always show
                                className
                            )}
                        >
                            {tooltipText}
                        </TooltipContent>
                    </div>
                </TooltipTrigger>
            </Tooltip>
        </TooltipProvider>): <>{children}</>);

};

export default TooltipWrapper;
