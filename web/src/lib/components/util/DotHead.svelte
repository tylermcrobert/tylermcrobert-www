<script>
  import { DOT } from '../../../constants';

  export let noMarginBottom = false;
</script>

<span class="inline-block uppercase" class:mb-4={!noMarginBottom}>
  {DOT}&nbsp;<slot />
</span>
