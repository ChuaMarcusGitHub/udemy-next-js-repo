/**
 *
 * archive object based on the @archive folder name
 * latest object based on the @latest folder name
 */
export default function ArchiveLayout({ archive, latest }) {
	return (
		<div>
			<h1>News Archive</h1>
			{/* Example of Parallel Routing */}
			<section id={'archive-filter'}>{archive}</section>
			<section id={'archive-latest'}>{latest}</section>
		</div>
	);
}
