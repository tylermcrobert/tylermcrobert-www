<script lang="ts">
  import Modules from '$lib/Modules.svelte';
  import type { CaseStudyQuery } from '$lib/sanity/queries';
  import { PortableText } from '@portabletext/svelte';

  export let data: CaseStudyQuery;
</script>

<header>
  <h1>{data.title}</h1>
  <h2>{data.intro}</h2>
  <p>{data.date}</p>

  <ul>
    {#each data.deliverables as deliverable}
      <li>{deliverable}</li>
    {/each}
  </ul>
  <div>
    <PortableText value={data.description} />
  </div>
</header>

<div>
  <Modules modules={data.modules} />
</div>
