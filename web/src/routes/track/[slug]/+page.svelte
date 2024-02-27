<script lang="ts">
  import { formatTime } from '$lib/util/msToTime';
  import { onMount } from 'svelte';
  import type { TrackQuery } from './+page.server';
  import { formatTitle } from '$lib/util/formatTitle';

  export let data: TrackQuery;

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

<div class="wrapper">
  <div
    class="scrubberLine"
    on:mousedown={() => (pressed = true)}
    bind:this={scrubberEl}
  />

  <div class="playBtnWrap">
    <button
      class="playPauseBtn"
      on:click={() => (paused = !paused)}
      bind:this={playPauseEl}
    >
      {paused ? 'Play' : 'Pause'}
    </button>
  </div>

  <div class="controls">
    <div>{data.title}</div>
    <div class="controlsMeta">
      <div>
        {formatTime(time * 1000, 'mm:ss')} /
        {formatTime((data.duration || 0) * 1000, 'mm:ss')}
      </div>
      <div>{data.date?.split('T')[0]}</div>
    </div>
  </div>
</div>

<audio bind:this={player} bind:duration bind:paused bind:muted>
  <source src={data.file} />
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

<style lang="scss">
  .wrapper {
    user-select: none;

    display: flex;
    flex-direction: column;
    justify-content: center;

    height: calc(100vh - var(--nav-height));
  }

  .playBtnWrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: var(--window-height);

    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    .playPauseBtn {
      border-radius: 50%;
      border: 1px solid black;

      display: flex;
      align-items: center;
      justify-content: center;
      width: 10rem;
      height: 10rem;
      cursor: pointer;
    }
  }

  .controls {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: var(--space-standard);

    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .controlsMeta {
    display: flex;
    justify-content: space-between;
  }

  .scrubberLine {
    width: 1px;
    height: 100%;
    background: black;
    position: fixed;
    top: 0;
    left: 0;

    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 1rem;
      height: 100%;
      cursor: pointer;
      transform: translateX(-50%);
    }
  }
</style>
