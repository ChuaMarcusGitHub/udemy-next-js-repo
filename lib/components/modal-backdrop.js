'use client';

import { useRouter } from 'next/navigation';

export const Modalbackdrop = () => {
	const router = useRouter();

	return <div className="modal-backdrop" onClick={router.back} />;
};
