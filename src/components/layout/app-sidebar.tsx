"use client";
import { Box, CreditCard, Home, Settings, ShoppingCart } from "lucide-react";

import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Menu items.
const items = [
	{
		title: "Home",
		url: "/dashboard/seller",
		icon: Home,
		isActive: true,
	},
	{
		title: "Products",
		url: "/dashboard/seller/products",
		icon: Box,
	},
	{
		title: "Orders",
		url: "/dashboard/seller/orders",
		icon: ShoppingCart,
	},
	{
		title: "Payments",
		url: "/dashboard/seller/payments",
		icon: CreditCard,
	},
	{
		title: "Settings",
		url: "/dashboard/seller/settings",
		icon: Settings,
	},
];

export function AppSidebar() {
	const pathName = usePathname();

	return (
		<Sidebar className="relative py-3">
			<SidebarContent>
				<SidebarGroup className="p-0">
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<SidebarMenuItem
									key={item.title}
									className={` ${
										pathName === item.url
											? "bg-accent text-secondary font-medium rounded-md"
											: ""
									}`}
								>
									<SidebarMenuButton
										asChild
										className="h-12 hover:bg-accent hover:text-secondary"
									>
										<Link
											href={item.url}
											className="hover:bg-none"
										>
											<item.icon />
											<span>{item.title}</span>
										</Link>
									</SidebarMenuButton>
								</SidebarMenuItem>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
