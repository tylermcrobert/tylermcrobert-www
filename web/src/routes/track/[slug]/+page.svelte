<script lang="ts">
  import { formatTime } from '$lib/util/msToTime';
  import { onMount } from 'svelte';

  export let data: { link: string };

  let progressLeft = 0;
  let progressBar: HTMLElement;
  let progressRect: DOMRect | undefined;

  let pressed = false;

  let duration: number;
  let time = 0;
  let paused = true;

  function handleMouse(e: MouseEvent) {
    if (!pressed || !progressRect) return;

    paused = true;

    let percent = (e.clientX - progressRect.x) / progressRect.width;
    if (percent < 0) percent = 0;
    else if (percent > 1) percent = 1;

    progressLeft = percent * progressRect.width;
    time = percent * duration;
  }

  function handleMouseUp() {
    if (pressed) paused = false;
    pressed = false;
  }

  onMount(() => (progressRect = progressBar.getBoundingClientRect()));

  $: progressLeft = (time / duration) * (progressRect?.width || 0);
  $: scrubWrapStyle = `transform: translate3d(${progressLeft}px, 0, 0)`;
</script>

<div class="wrapper">
  <audio controls bind:duration bind:currentTime={time} bind:paused>
    <source src={data.link} />
  </audio>

  <div class="scrubberWrapper" bind:this={progressBar}>
    <div
      class="scrubberLine"
      style={scrubWrapStyle}
      on:mousedown={() => (pressed = true)}
    />
  </div>

  <button on:click={() => (paused = !paused)}>
    {paused ? 'Play' : 'Pause'}
  </button>

  {#if duration}
    {formatTime(time * 1000, 'mm:ss')} /
    {formatTime(duration * 1000, 'mm:ss')}
  {/if}
</div>

<svelte:window on:mousemove={handleMouse} on:mouseup={handleMouseUp} />

<style lang="scss">
  .scrubberWrapper {
    height: 1rem;
    width: 20rem;
    background: rgba(0, 0, 255, 0.1);
    position: relative;

    overflow: hidden;
  }

  .scrubberLine {
    width: 1px;
    height: 100%;
    background: black;
    position: relative;

    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 1rem;
      height: 100%;
      background: rgba(0, 0, 255, 0.1);
      cursor: pointer;
      transform: translateX(-50%);
    }
  }
</style>
