<template>
  <nav class="breadcrumb">
    <ul class="breadcrumb__list">
      <li
        class="breadcrumb__item"
        v-for="breadcrumb in breadcrumbs"
        :key="breadcrumb.id"
      >
        <a
          v-if="breadcrumb.link !== '' && breadcrumb.link !== 'current'"
          :href="breadcrumb.link"
          class="breadcrumb__link"
          >{{ breadcrumb.title }}</a
        >
        <span v-else-if="breadcrumb.link === ''" class="breadcrumb__text">{{
          breadcrumb.title
        }}</span>
        <span v-else class="breadcrumb__current">{{ breadcrumb.title }}</span>
      </li>
      <!-- /.breadcrumb__item -->
    </ul>
    <!-- /.breadcrumb__list -->
  </nav>
  <!-- /.breadcrumb -->
</template>

<script>
export default {
  props: {
    breadcrumbs: { type: Array },
  },
};
</script>

<style lang="scss" scoped>
/* パンくずナビ */
/** @define breadcrumb */
.breadcrumb {
  @include for-sp {
    padding-top: 30px;
    padding-bottom: 20px;
  }
  @include for-pc {
    padding-bottom: 9px;
  }
  &__list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
  }
  &__item {
    &:nth-child(n + 2) {
      &::before {
        content: '>';
        display: inline-block;
        margin: 0 6px;
      }
    }
  }
  &__link {
  }
  &__current {
  }
}
/** @end */
</style>
