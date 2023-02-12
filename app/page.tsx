import {
	BoltIcon,
	ExclamationTriangleIcon,
	SunIcon,
} from '@heroicons/react/24/solid';

function HomePage() {
	return (
		<div className="mainWrapper">
			<h1 className="text-5xl font-bold mb-20 mt-7 md:mt-0">ChatGPT</h1>
			<div className="flex space-x-3 text-center flex-col lg:flex-row">
				{/* Examples */}
				<div className="mb-7 lg:mb-0">
					<div className="flex flex-col items-center justify-center mb-5 font-[700]">
						<SunIcon className="icon" />
						<h2>Examples</h2>
					</div>
					<div className="space-y-2">
						<p className="infoText">Exaplin Something to me</p>
						<p className="infoText">
							{'What is the difference between a dog and cat?'}
						</p>
						<p className="infoText">{'What is the color of the sun?'}</p>
					</div>
				</div>

				{/* Capabilities */}
				<div className="mb-7 lg:mb-0">
					<div className="flex flex-col items-center justify-center mb-5 font-[700]">
						<BoltIcon className="icon" />
						<h2>Capabilities</h2>
					</div>
					<div className="space-y-2">
						<p className="infoText">Change the ChatGPT modal to use</p>
						<p className="infoText">
							{'Messages are stored in Firebase Firestore'}
						</p>
						<p className="infoText">
							{'Most Toast notifications when ChatGPT is thinking'}
						</p>
					</div>
				</div>

				{/* Limitations */}
				<div className="mb-7 lg:mb-0">
					<div className="flex flex-col items-center justify-center mb-5 font-[700]">
						<ExclamationTriangleIcon className="icon" />
						<h2>Limitations</h2>
					</div>
					<div className="space-y-2">
						<p className="infoText">
							May occasionally generate incorrect information
						</p>
						<p className="infoText">
							{
								'May occasionally produce harmful instructions or biased content'
							}
						</p>
						<p className="infoText">
							{'Limited knowledge of world and events after 2021'}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomePage;
