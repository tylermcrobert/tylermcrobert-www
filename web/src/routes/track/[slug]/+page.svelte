<script lang="ts">
  import { formatTime } from '$lib/util/msToTime';

  export let data: { link: string };

  let duration: number;
  let time = 0;
  let paused = true;

  $: progress = Math.round((time / duration) * 10000) / 100;
  $: scrubberStyle = `transform: translate3d(${progress}%, 0, 0)`;
</script>

<audio controls bind:duration bind:currentTime={time} bind:paused>
  <source src={data.link} />
</audio>

<div class="scrubberWrapper">
  <div class="scrubber" style={scrubberStyle} />
</div>

<button on:click={() => (paused = !paused)}>
  {paused ? 'Play' : 'Pause'}
</button>

{#if duration}
  {formatTime(time * 1000, 'mm:ss')} /
  {formatTime(duration * 1000, 'mm:ss')}
{/if}

<style lang="scss">
  .scrubberWrapper {
    height: 1rem;
    width: 20rem;
    border: 1px solid blue;
    position: relative;
    margin: 1rem;
  }

  .scrubber {
    height: 100%;
    left: 0;
    border-left: 1px solid red;
  }
</style>
