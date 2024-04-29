<script lang="ts">
  // TODO: Add dots
  export let color: string;
  export let dotColor: string | null = null;
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 439 13"
  preserveAspectRatio="none"
  class="block"
>
  <g fill="none" fill-rule="evenodd">
    <path
      d="M4 0h431c2.209139 0 4 1.790861 4 4v9H0V4c0-2.209139 1.790861-4 4-4z"
      fill={color}
    />
    <circle fill={dotColor || '#FF6158'} cx="6.5" cy="6.5" r="2.5" />
    <circle fill={dotColor || '#FFBE2D'} cx="22.5" cy="6.5" r="2.5" />
    <circle fill={dotColor || '#27C93F'} cx="14.5" cy="6.5" r="2.5" />
  </g>
</svg>
