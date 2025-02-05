<script lang="ts">
	import { formatTime } from '$util/msToTime';

	// Types for the component props
	interface AudioData {
		title: string;
		primaryVersion: {
			duration: number;
			date: string;
			assetUrl: string;
		};
	}

	// Props
	let { data } = $props<{ data: AudioData }>();

	// State
	let time = $state(0);
	let angle = $state(0);
	let pressed = $state(false);
	let muted = $state(false);
	let paused = $state(true);
	let windowWidth = $state(0);
	let duration = $state(0);

	// Refs
	let playPauseEl = $state<HTMLElement>();
	let player = $state<HTMLAudioElement>();
	let scrubberEl = $state<HTMLDivElement>();

	/**
	 * Runs on mouse move but executes when
	 * mouse is clicked down to drag slider
	 * and update player.
	 */
	function handleMouseMove(e: MouseEvent) {
		if (!pressed) return;

		const percent = e.clientX / windowWidth;
		const percentClamped = Math.min(Math.max(percent, 0), 1);

		time = percentClamped * duration;
		if (player) {
			player.currentTime = time;
			muted = true;
		}
	}

	/**
	 * Ends drag controls and unmutes.
	 */
	function handleMouseUp() {
		pressed = false;
		muted = false;
	}

	/**
	 * Binds the current time to the drag slider
	 * x translate. Runs on every rAF tick.
	 */
	function moveLine() {
		if (!scrubberEl) return;
		const percent = (time / duration) * 100;
		scrubberEl.style.transform = `translate3d(${percent}vw, 0, 0)`;
	}

	/**
	 * Rotates the play button synced with the
	 * current time. Allows for button to
	 * rotate when dragging forward/backwards
	 */
	function rotateDiv() {
		if (!playPauseEl) return;
		angle = (time * 60) % 360;
		playPauseEl.style.transform = `rotate(${angle}deg)`;
	}

	// Animation frame effect
	$effect(() => {
		let raf: number;

		function handleAnimationFrame() {
			if (!pressed && player) {
				time = player.currentTime;
			}
			raf = requestAnimationFrame(handleAnimationFrame);
			rotateDiv();
			moveLine();
		}

		raf = requestAnimationFrame(handleAnimationFrame);
		return () => cancelAnimationFrame(raf);
	});
</script>

<div
	class="wrapper flex h-[calc(100dvh-theme(space.nav-height))] select-none flex-col justify-center"
>
	<div
		onmousedown={() => (pressed = true)}
		bind:this={scrubberEl}
		role="presentation"
		class="scrubber fixed -left-px top-0 h-full w-px bg-black"
	></div>

	<div class="flex flex-1 items-center justify-center">
		<button
			onclick={() => (paused = !paused)}
			bind:this={playPauseEl}
			class="flex size-40 cursor-pointer items-center justify-center rounded-full border border-solid border-black"
		>
			{paused ? 'Play' : 'Pause'}
		</button>
	</div>

	<div class="pb-standard flex flex-col gap-[0.3rem]">
		<div>{data.title}</div>
		<div class="flex justify-between">
			<div>
				{formatTime(time * 1000, 'mm:ss')} /
				{formatTime((data.primaryVersion.duration || 0) * 1000, 'mm:ss')}
			</div>
			<div>{data.primaryVersion.date?.split('T')[0]}</div>
		</div>
	</div>
</div>

<audio bind:this={player} bind:duration bind:paused bind:muted>
	<source src={data.primaryVersion.assetUrl} />
</audio>

<svelte:window
	bind:innerWidth={windowWidth}
	on:mousemove={handleMouseMove}
	on:mouseup={handleMouseUp}
/>

<svelte:head>
	<meta name="robots" content="noindex" />
</svelte:head>

<style>
	.scrubber:after {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		display: block;
		height: 100%;
		width: 1rem;
		transform: translateX(-50%);
		cursor: pointer;
	}
</style>
