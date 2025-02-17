import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import { cn } from "@/lib/utils"; // Make sure you have the cn function

interface TooltipImageProps {
  imgSrc: string;
  altText: string;
  tooltipText: string;
  imgWidth?: number;
  imgHeight?: number;
  className?: string;
  tooltipSide?: "top" | "right" | "bottom" | "left"; // Optional
  tooltipAlign?: "start" | "center" | "end"; // Optional
  tooltipSideOffset?: number; // Optional
}

const TooltipImage = ({
  imgSrc,
  altText,
  tooltipText,
  imgWidth,
  imgHeight,
  className,
  tooltipSide = "right", // Default side "right"
  tooltipAlign = "center", // Default alignment "center"
  tooltipSideOffset = 20, // Default offset 20
}: TooltipImageProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={250}>
        <TooltipTrigger asChild>
          <Image
            src={imgSrc}
            alt={altText}
            width={imgWidth || 20}
            height={imgHeight || 20}
            className={cn("hover:opacity-80", className)}
          />
        </TooltipTrigger>
        <TooltipContent
          side={tooltipSide}
          align={tooltipAlign}
          sideOffset={tooltipSideOffset}
        >
          {tooltipText}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipImage;
