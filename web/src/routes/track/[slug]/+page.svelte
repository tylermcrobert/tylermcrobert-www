<script lang="ts">
  import { formatTime } from '$lib/util/msToTime';
  import { onMount } from 'svelte';
  import { formatTitle } from '$lib/util/formatTitle';

  export let data;

  let time = 0;
  let angle = 0;
  let pressed = false;
  let muted = false;
  let paused = true;

  let raf: number;

  let windowWidth: number;
  let duration: number;

  let playPauseEl: HTMLElement;
  let player: HTMLAudioElement;
  let scrubberEl: HTMLDivElement;

  /**
   * Runs on mouse move but executes when
   * mouse is clicked down to drag slider
   * and update player.
   */

  function handleMouseMove(e: MouseEvent) {
    if (!pressed) return;

    let percent = e.clientX / windowWidth;
    let percentClamped = Math.min(Math.max(percent, 0), 1);

    time = percentClamped * duration;
    player.currentTime = time;
    muted = true;
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
    const percent = (time / duration) * 100;
    scrubberEl.style.transform = `translate3d(${percent}vw, 0, 0)`;
  }

  /**
   * Rotates the play button synced with the
   * current time. Allows for button to
   * rotate when dragging forward/backwards
   */

  function rotateDiv() {
    angle = (time * 60) % 360;
    playPauseEl.style.transform = `rotate(${angle}deg)`;
  }

  /**
   * Run on every tick because binding to
   * player is slow. Updates current time
   * and run nescessary DOM mutation
   * functions functions.
   */

  function handleAnimationFrame() {
    if (!pressed) time = player.currentTime;
    raf = requestAnimationFrame(handleAnimationFrame);
    rotateDiv();
    moveLine();
  }

  /**
   * Set up and cancel RAF
   */

  onMount(() => {
    raf = requestAnimationFrame(handleAnimationFrame);
    return () => cancelAnimationFrame(raf);
  });
</script>

<div
  class="wrapper flex h-[calc(100dvh-theme(space.nav-height))] select-none flex-col justify-center"
>
  <div
    on:mousedown={() => (pressed = true)}
    bind:this={scrubberEl}
    role="presentation"
    class="scrubber fixed left-0 top-0 h-full w-px bg-black"
  />

  <div class="flex flex-1 items-center justify-center">
    <button
      on:click={() => (paused = !paused)}
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
  <title>{formatTitle(data.title || '')}</title>
  <meta name="robots" content="noindex" />
</svelte:head>

<style>
  .scrubber:after {
    content: '';
    @apply absolute left-0 top-0 block h-full w-4 -translate-x-1/2 cursor-pointer;
  }
</style>
