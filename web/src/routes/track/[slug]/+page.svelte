<script lang="ts">
  import { formatTime } from '$lib/util/msToTime';
  import { onMount } from 'svelte';

  export let data: { link: string };

  let time = 0;
  let angle = 0;
  let pressed = false;
  let muted: boolean;
  let paused = true;

  let raf: number;

  let windowWidth: number;
  let duration: number;

  let playPauseEl: HTMLElement;
  let player: HTMLAudioElement;
  let scrubberEl: HTMLDivElement;

  function handleMouseMove(e: MouseEvent) {
    if (!pressed) return;

    let percent = e.clientX / windowWidth;
    if (percent <= 0) percent = 0;
    if (percent >= 1) percent = 1;

    time = percent * duration;
    player.currentTime = time;
    muted = true;
  }

  function handleMouseUp() {
    pressed = false;
    muted = false;
  }

  function moveLine() {
    const percent = (time / duration) * 100;
    scrubberEl.style.transform = `translate3d(${percent}vw, 0, 0)`;
  }

  function rotateDiv() {
    angle = (time / duration) * 2000;
    playPauseEl.style.transform = `rotate(${angle}deg)`;
  }

  function handleAnimationFrame() {
    if (!pressed) time = player.currentTime;
    raf = requestAnimationFrame(handleAnimationFrame);
    rotateDiv();
    moveLine();
  }

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

  <button
    class="playPauseBtn"
    on:click={() => (paused = !paused)}
    bind:this={playPauseEl}
  >
    {paused ? 'Play' : 'Pause'}
  </button>

  {#if duration}
    {formatTime(time * 1000, 'mm:ss')} /
    {formatTime(duration * 1000, 'mm:ss')}
  {/if}
</div>

<audio bind:this={player} bind:duration bind:paused bind:muted>
  <source src={data.link} />
</audio>

<svelte:window
  bind:innerWidth={windowWidth}
  on:mousemove={handleMouseMove}
  on:mouseup={handleMouseUp}
/>

<style lang="scss">
  .wrapper {
    user-select: none;
  }

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
