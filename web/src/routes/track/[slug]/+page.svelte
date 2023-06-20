<script lang="ts">
  import { formatTime } from '$lib/util/msToTime';

  export let data: { link: string };

  let duration: number;
  let time = 0;

  $: progress = Math.round((time / duration) * 10000) / 100;
  $: scrubberStyle = `transform: translate3d(${progress}%, 0, 0)`;
</script>

<audio controls bind:duration bind:currentTime={time}>
  <source src={data.link} />
</audio>

<div class="scrubberWrapper">
  <div class="scrubber" style={scrubberStyle} />
</div>

{#if duration}
  {formatTime(time * 1000, 'mm:ss')} /
  {formatTime(duration * 1000, 'mm:ss')}
{/if}

<style lang="scss">
  .scrubberWrapper {
    height: 1rem;
    width: 10rem;
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
