<script lang="ts">
  import { formatTime } from '$lib/util/msToTime';

  export let data: { link: string };

  let windowWidth: number;
  let pressed = false;
  let muted: boolean;
  let duration: number;
  let time = 0;
  let paused = true;

  function handleMouse(e: MouseEvent) {
    if (!pressed) return;
    let windowPercent = e.clientX / windowWidth;
    time = windowPercent * duration;
    muted = true;
  }

  $: percent = (time / duration) * 100;
  $: scrubWrapStyle = `transform: translate3d(${percent}vw, 0, 0)`;
</script>

<div class="wrapper">
  <div
    class="scrubberLine"
    on:mousedown={() => (pressed = true)}
    style={scrubWrapStyle}
  />

  <button on:click={() => (paused = !paused)} class="playPauseBtn">
    {paused ? 'Play' : 'Pause'}
  </button>

  {#if duration}
    {formatTime(time * 1000, 'mm:ss')} /
    {formatTime(duration * 1000, 'mm:ss')}
  {/if}
</div>

<audio bind:duration bind:currentTime={time} bind:paused bind:muted>
  <source src={data.link} />
</audio>

<svelte:window
  bind:innerWidth={windowWidth}
  on:mousemove={handleMouse}
  on:mouseup={() => ((pressed = false), (muted = false))}
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
