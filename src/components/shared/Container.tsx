import { cn } from "@/lib/utils";
import React from "react";
type TContainerProps = {
	children: Readonly<React.ReactNode>;
	className?: string;
};
export default function Container({ children, className }: TContainerProps) {
	return <div className={cn(className, "custom_container")}>{children}</div>;
}
