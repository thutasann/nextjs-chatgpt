import SideBar from '@/components/sidebar';
import '@/styles/globals.css';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html>
			<head />
			<body>
				<div className="flex">
					<div className="sidebarWrapper">
						<SideBar />
					</div>
					<div className="bg-primary flex-1">{children}</div>
				</div>
			</body>
		</html>
	);
}
