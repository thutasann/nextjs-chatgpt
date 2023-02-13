import ClientProvider from '@/components/client-provider';
import Login from '@/components/login';
import SessionProvider from '@/components/session-provider';
import SideBar from '@/components/sidebar';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import '@/styles/globals.css';
import { getServerSession } from 'next-auth';

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const session = await getServerSession(authOptions);

	return (
		<html>
			<head />
			<body>
				<SessionProvider session={session}>
					{!session ? (
						<Login />
					) : (
						<div className="flex">
							<div className="sidebarWrapper">
								<SideBar />
							</div>
							<ClientProvider />
							<div className="flex-1 bg-primary">{children}</div>
						</div>
					)}
				</SessionProvider>
			</body>
		</html>
	);
}
