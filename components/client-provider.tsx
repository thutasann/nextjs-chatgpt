'use client';

import React from 'react';
import { Toaster } from 'react-hot-toast';

function ClientProvider() {
	return (
		<>
			<Toaster position="top-right" />
		</>
	);
}

export default ClientProvider;
