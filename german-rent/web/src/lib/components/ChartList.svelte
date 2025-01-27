<script>
	import { dev } from '$app/environment';

	let { project = '', charts = [], baseURL = '' } = $props();
</script>

<main>
	<div class="inner">
		<h1>Grafiken für {project}</h1>
		<table>
			<thead>
				<tr>
					<th>Title</th>
					<th>Embed URL</th>
				</tr>
			</thead>
			<tbody>
				{#each charts as chart}
					<tr>
						<td>
							<a href="./{chart.slug}{dev ? '' : '.html'}">{chart.title}</a>
						</td>
						<td>
							<input type="text" value={`${baseURL}/${chart.slug}.html`} />
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</main>

<style>
	:global(*) {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		color: inherit;
	}
	main {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		flex-flow: column;
		font-size: var(--fs-small-1);
		max-width: 60rem;
		margin: 0 auto;
		font-family: monospace;
	}
	.inner {
		width: 100%;
		border: 1px solid black;
	}
	h1 {
		font-size: var(--fs-small-1);
		width: 100%;
		border-bottom: 1px solid black;
		padding-bottom: 0.2em;
		background-color: rgb(223, 232, 245);
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
		width: 100%;
	}
	a {
		display: block;
		text-decoration: none;
	}
	th,
	td,
	h1 {
		padding: 0.2em 0.4em;
		text-align: left;
	}
	th {
		border-bottom: 1px solid black;
	}
	tr {
		border-bottom: 1px solid black;
		&:last-child {
			border-bottom: 0;
		}
	}

	input {
		display: block;
		width: 100%;
		padding: 0.1em 0.3em;
	}

	a:hover,
	a:focus-visible {
		text-decoration: underline;
	}
	a:last-child {
		border-bottom: 0;
	}
</style>
