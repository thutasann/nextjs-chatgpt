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
				<div className="flex ">
					{/* Sidebar */}

					{/* Client Provider - Notification */}
					<div className="bg-primary flex-1">{children}</div>
				</div>
			</body>
		</html>
	);
}
