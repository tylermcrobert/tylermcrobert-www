<script lang="ts">
  export let data;
</script>

<!-- <div class="px-standard text-head bg-black py-10 text-center text-white">
  <h1>{data.moodboard.title}</h1>
</div> -->

{#each data.moodboard.contents || [] as item}
  {@const image = item.image?.original.url}

  {#if image}
    <a href={item.source?.url} target="_blank">
      <div class="h-[100vh] w-[100vw] bg-black p-[10%]">
        <img
          src={item.image?.original.url}
          alt=""
          loading="lazy"
          class="block h-full w-full object-contain"
        />
      </div>
    </a>
  {/if}
{/each}
