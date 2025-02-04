<script lang="ts">
	import { page } from '$app/state';
	import { Image, Media } from '$components';
	import type { ModuleWebsite } from '$sanity';

	type Props = { data: ModuleWebsite };

	let { data }: Props = $props();
	let { theme, showFrame, backgroundImg, media } = $derived(data);
</script>

<div
	style:background={data.backgroundColor || data.theme?.background}
	class="my-standard relative w-full bg-black p-[10%]"
>
	<div class="relative z-10 bg-white">
		{#if showFrame !== false && theme?.frame}
			{@render browserFrame()}
		{/if}

		{#if media}
			<Media sizes="80vw" data={media} alt={null} />
		{/if}
	</div>

	{#if backgroundImg}
		<div>
			<Image
				image={backgroundImg}
				alt={null}
				sizes="90vw"
				aspect={1.5}
				class="absolute inset-0 z-0 h-full w-full object-cover"
			/>
		</div>
	{/if}
</div>

{#snippet browserFrame()}
	<svg
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 439 13"
		preserveAspectRatio="none"
		class="block w-full"
	>
		<g fill="none" fill-rule="evenodd">
			<path
				d="M4 0h431c2.209139 0 4 1.790861 4 4v9H0V4c0-2.209139 1.790861-4 4-4z"
				fill={data.theme?.frame}
			/>
			<circle fill={data.theme?.dots || '#FF6158'} cx="6.5" cy="6.5" r="2.5" />
			<circle fill={data.theme?.dots || '#FFBE2D'} cx="22.5" cy="6.5" r="2.5" />
			<circle fill={data.theme?.dots || '#27C93F'} cx="14.5" cy="6.5" r="2.5" />
		</g>
	</svg>
{/snippet}

{#snippet browserFrameWithUI()}
	<svg fill="none" viewBox="0 0 1440 52">
		<path
			d="M0 8a8 8 0 0 1 8-8h1424c4.42 0 8 3.582 8 8v44H0V8Z"
			fill={data.theme?.frame || '#282828'}
		/>
		<rect
			x="457.5"
			y="11.5"
			width="525"
			height="27"
			rx="5.5"
			fill="#000"
			fill-opacity=".15"
		/>
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M970.354 18.646a.502.502 0 0 0-.708.708l2.147 2.146H971c-2.947 0-5.5 1.852-5.5 4.804 0 2.9 2.492 5.196 5.5 5.196s5.5-2.297 5.5-5.196a.503.503 0 0 0-.5-.5.5.5 0 0 0-.5.5c0 2.288-1.985 4.196-4.5 4.196-2.515 0-4.5-1.908-4.5-4.196 0-2.234 1.924-3.804 4.5-3.804h.793l-1.647 1.646a.5.5 0 1 0 .708.708l2.499-2.5"
			fill="#B8B7B9"
			fill-opacity=".5"
		/>
		<rect
			x="16"
			y="20"
			width="12"
			height="12"
			rx="6"
			fill={data.theme?.dots || '#FF6158'}
		/>
		<rect
			x="36"
			y="20"
			width="12"
			height="12"
			rx="6"
			fill={data.theme?.dots || '#29C93F'}
		/>
		<rect
			x="56"
			y="20"
			width="12"
			height="12"
			rx="6"
			fill={data.theme?.dots || '#FFBE2C'}
		/>
		<g
			opacity=".4"
			stroke="#B8B7B9"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"><path d="m107 19-7 7 7 7M135 33l7-7-7-7" /></g
		>
		<g
			opacity=".4"
			stroke="#B8B7B9"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"><path d="M1406 18.5v16M1414 26.5h-16" /></g
		>
		<text
			x="50%"
			y="50%"
			font-size="10.5"
			fill="white"
			opacity={0.6}
			font-weight="bold"
			text-anchor="middle"
			dominant-baseline="middle"
			letter-spacing=".5"
		>
			{page.data.caseStudy.title}
		</text>
	</svg>
{/snippet}
