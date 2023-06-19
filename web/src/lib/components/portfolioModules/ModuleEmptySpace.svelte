<div class="emptySpace" />

<style lang="scss">
  @import '../../../styles/mixins';

  .emptySpace {
    display: none;

    @include min-width('tablet') {
      grid-column: span 3;
      display: block;
    }
  }
</style>
