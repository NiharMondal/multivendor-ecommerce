import { Button } from "@/components/ui/button";
import { BadgeInfo } from "lucide-react";
import React from "react";

export default function SellerPage() {
	return (
		<div>
			<div className="mb-5">
				<h2>Welcome back, John Doe!</h2>
				<p>
					You have made <b>$2000</b> today.
				</p>
			</div>
			<div className="space-y-8">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
					<div className="p-5 bg-white border rounded-md">
						<p className="text-muted">
							Sales Today
							<br />
							<b className="text-black">$2000</b>
							<br />
							<span className="text-special font-medium text-[14px] font-roboto">
								+15% from last period
							</span>
						</p>
					</div>
					<div className="p-5 bg-white border rounded-md">
						<p className="text-muted">
							Sales Today
							<br />
							<b className="text-black">$2000</b>
							<br />
							<span className="text-special font-medium text-[14px] font-roboto">
								+15% from last period
							</span>
						</p>
					</div>
					<div className="p-5 bg-white border rounded-md">
						<p className="text-muted">
							Sales Today
							<br />
							<b className="text-black">$2000</b>
							<br />
							<span className="text-special font-medium text-[14px] font-roboto">
								+15% from last period
							</span>
						</p>
					</div>
				</div>
				<div className="bg-white border rounded-md p-3">
					<h3>Order Status</h3>

					<div className="mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
						<div className=" border px-8 py-3 rounded-md">
							<p>
								Pending <br />
								<b className="text-[20px]">20</b>
							</p>
						</div>
						<div className=" border px-8 py-3 rounded-md">
							<p>
								Pending <br />
								<b className="text-[20px]">20</b>
							</p>
						</div>
						<div className=" border px-8 py-3 rounded-md">
							<p>
								Pending <br />
								<b className="text-[20px]">20</b>
							</p>
						</div>
						<div className=" border px-8 py-3 rounded-md">
							<p>
								Pending <br />
								<b className="text-[20px]">20</b>
							</p>
						</div>
					</div>
				</div>

				<div className="p-5 border border-[#264D82] rounded-md">
					<h3>Revenue Trend (30 days)</h3>
					<div className="mt-2 bg-gray-100 h-[150px]"></div>
				</div>

				<div className="bg-[#FCCF9C] border border-[#C77414] py-4 px-5 pr-4 flex items-center justify-between rounded-md">
					<div className="flex items-center gap-x-3 text-[#C77414]">
						<BadgeInfo />
						<span>
							You have 2 products running low. Restock now.
						</span>
					</div>
					<Button
						variant={"outline"}
						size={"lg"}
						className="border border-[#C77414] text-[#C77414]"
					>
						View Products
					</Button>
				</div>
			</div>
		</div>
	);
}
