import Link from 'next/link';
// Custom component
import { RootHeader } from '@/lib/components/header';
export default function Home() {
	return (
		<main>
			<RootHeader />

			<p>🔥 Let&apos;s get started! 🔥</p>
			<p>
				<Link href={'/about'}> About Us</Link>
			</p>
			<p>
				<Link href={'/blog'}> Blog</Link>
			</p>
		</main>
	);
}
