'use client';

import React from 'react';
import useSWR from 'swr';
import Select from 'react-select';

const fetchModels = () => fetch(`/api/getEngines`).then((res) => res.json());

const customStyles = {
	singleValue: (provided: any) => ({
		...provided,
		height: '100%',
		color: '#c4bfbf',
		paddingTop: '3px',
	}),
};

function Modalselection() {
	const { data: models, isLoading } = useSWR('models', fetchModels);
	const { data: model, mutate: setModel } = useSWR('model', {
		fallbackData: 'text-davinci-003',
	});

	return (
		<div>
			<Select
				className="mt-2 "
				styles={customStyles}
				options={models?.modelOptions}
				defaultValue={models}
				placeholder={model}
				isSearchable
				isLoading={isLoading}
				menuPosition="fixed"
				classNames={{
					control: (state) => 'bg-[#434654] border-[#434654]',
				}}
				onChange={(e) => setModel(e.value)}
			/>
		</div>
	);
}

export default Modalselection;
