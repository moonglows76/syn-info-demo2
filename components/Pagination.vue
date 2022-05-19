<template>
  <div>
    <ul class="pagination">
      <li class="pagination__item pagination__item--prev">
        <NuxtLink v-if="current > 1" :to="getPath(current - 1)" class="pagination__link">
          <i class="fa-solid fa-angle-left" />
        </NuxtLink>
      </li>
      <li
        v-for="p in pager"
        :key="p"
        class="pagination__item"
        :class="{ active: current === p + 1 }"
      >
        <NuxtLink :to="getPath(p + 1)" class="pagination__link">
          {{ p + 1 }}
        </NuxtLink>
      </li>
      <li class="pagination__item pagination__item--next">
        <nuxt-link v-if="current < pager.length" :to="getPath(current + 1)" class="pagination__link">
          <i class="fa-solid fa-angle-right" />
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pager: {
      type: Array,
      default: () => [],
    },
    current: {
      type: Number,
      required: true,
    },
    path: {
      type: String,
      default: '/info/',
      required: true,
    },
  },
  methods: {
    getPath(p) {
      return `/${
        this.path !== undefined ? `${this.path}/` : ''
      }page/${p}`;
    },
  },
}
</script>

<style lang="scss" scoped>
.pagination {
  $self: &;

  margin: 2em 0 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  justify-content: center;
  &__item {
    margin: 0 5px;
    &.active {
      #{$self}__link {
        background: $gray;
        color: #fff;
      }
    }
    &--prev,
    &--next {
      margin: 0;
      min-width: 32px;
      #{$self}__link {
        border: none;
      }
    }
  }
  &__link {
    display: block;
    border-radius: var(--border-radius);
    padding: 3px 5px;
    border: 1px solid $gray;
    min-width: 32px;
    box-sizing: border-box;
    text-align: center;
    text-decoration: none;
    color: $gray;
  }
}
</style>
