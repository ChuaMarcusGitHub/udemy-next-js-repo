'use client';
import { useFormStatus } from 'react-dom';
export const FormSubmit = () => {
	const status = useFormStatus();
	const { pending } = status;

	if (pending) {
		return <span>ポストを作る中。。。</span>;
	}
	return (
		<>
			<button type="reset">Reset</button>
			<button>Create Post</button>
		</>
	);
};
