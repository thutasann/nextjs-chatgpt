import NewChat from './newchat';

function SideBar() {
	return (
		<div className="p-2 flex flex-col min-h-screen">
			<div className="flex-1">
				<div>
					<NewChat />
					<div>{/* ModalSelection */}</div>
					{/* ChatRows */}
				</div>
			</div>
		</div>
	);
}

export default SideBar;
