'use client';
import { signIn } from 'next-auth/react';
import Image from 'next/image';

function Login() {
	return (
		<div className="loginWrapper">
			<Image
				src="/logo.png"
				width={90}
				height={90}
				alt="NextJS ChatGPT"
				loading="lazy"
				placeholder="blur"
				blurDataURL="/logo.png"
			/>
			<button
				onClick={() => signIn('google')}
				className="text-white font-bold text-3xl animate-pulse mt-3"
			>
				Sign In to use ChatGPT
			</button>
		</div>
	);
}

export default Login;
