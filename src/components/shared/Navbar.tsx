import React from "react";
import Container from "./Container";
import { Bell, Globe, CircleHelp } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Badge } from "../ui/badge";

import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { SidebarTrigger } from "../ui/sidebar";
export default function Navbar() {
	return (
		<div className="border-b w-full">
			<nav className=" h-20 md:h-24 border-b w-full ">
				<Container className="h-full w-full">
					<div className="flex items-center justify-between sm:hidden w-full h-full">
						<SidebarTrigger className="p-0 m-0" />
						<div>Logo</div>
						<ul className="flex items-center gap-x-8">
							<li className=" relative">
								<Bell />
								<Badge
									variant="destructive"
									className="absolute -top-3.5 -right-3.5 size-5 rounded-full text-center"
								>
									3
								</Badge>
							</li>
							<li>
								<DropdownMenu>
									<DropdownMenuTrigger className="text-black font-medium">
										<Avatar>
											<AvatarImage src="https://github.com/shadcn.png" />
											<AvatarFallback>CN</AvatarFallback>
										</Avatar>
									</DropdownMenuTrigger>
									<DropdownMenuContent>
										<DropdownMenuLabel>
											My Account
										</DropdownMenuLabel>
										<DropdownMenuSeparator />
										<DropdownMenuItem>
											Profile
										</DropdownMenuItem>
										<DropdownMenuItem>
											Billing
										</DropdownMenuItem>
										<DropdownMenuItem>
											Team
										</DropdownMenuItem>
										<DropdownMenuItem>
											Subscription
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</li>
						</ul>
					</div>

					<div className="hidden sm:flex items-center h-full ">
						<div className="flex-1/2">logo</div>

						{/* nav section  */}

						<ul className="flex items-center gap-x-8 text-muted">
							<li className="inline-flex gap-x-2 items-center">
								<Globe />
								<Select>
									<SelectTrigger className="border-0 w-[80px]">
										<SelectValue placeholder="EN" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="en">EN</SelectItem>
										<SelectItem value="bn">BN</SelectItem>
										<SelectItem value="latin">
											Latin
										</SelectItem>
									</SelectContent>
								</Select>
							</li>
							<li className="inline-flex gap-x-2">
								<CircleHelp />
								<span>Help</span>
							</li>
							<li className="inline-flex gap-x-1 relative">
								<Bell />
								<Badge
									variant="destructive"
									className="absolute -top-3.5 -right-3.5 size-5 rounded-full text-center"
								>
									3
								</Badge>
							</li>
							<li className="inline-flex gap-x-1 ml-5">
								<Avatar>
									<AvatarImage src="https://github.com/shadcn.png" />
									<AvatarFallback>CN</AvatarFallback>
								</Avatar>
								<DropdownMenu>
									<DropdownMenuTrigger className="text-black font-medium">
										John Doe
									</DropdownMenuTrigger>
									<DropdownMenuContent>
										<DropdownMenuLabel>
											My Account
										</DropdownMenuLabel>
										<DropdownMenuSeparator />
										<DropdownMenuItem>
											Profile
										</DropdownMenuItem>
										<DropdownMenuItem>
											Billing
										</DropdownMenuItem>
										<DropdownMenuItem>
											Team
										</DropdownMenuItem>
										<DropdownMenuItem>
											Subscription
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</li>
						</ul>
					</div>
				</Container>
			</nav>

			{/* search bar  */}
			<div className="border-b py-5">
				<Container className="flex items-center justify-between gap-x-10 my-2">
					<Input type="text" className="" />
					<Button>Search</Button>
				</Container>
			</div>
		</div>
	);
}
