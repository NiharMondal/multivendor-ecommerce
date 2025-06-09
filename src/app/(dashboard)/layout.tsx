import { AppSidebar } from "@/components/layout/app-sidebar";
import Container from "@/components/shared/Container";
import Navbar from "@/components/shared/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<SidebarProvider className="flex flex-col">
			<Navbar />
			<Container className="flex">
				<AppSidebar />
				<section className="p-5">{children}</section>
			</Container>
		</SidebarProvider>
	);
}
