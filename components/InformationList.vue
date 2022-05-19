<template>
  <ul
    class="information-list"
  >
    <li
      v-for="content in contents"
      :key="content.id"
      class="information-list__item"
    >
      <a
        v-if="content.url !== undefined"
        :href="content.url"
        target="_blank"
        class="information-list__link"
      >
        <span class="information-list__datetime">
          {{ $dayjs(content.publishedAt).format('M月D日') }}
        </span>
        <span
          class="information-list__category"
          :class="categoryClass(content.category[0])"
        >
          {{ content.category[0] }}
        </span>
        <span class="information-list__title">
          {{ content.title }}
          <i class="fa-solid fa-up-right-from-square"></i>
        </span>
      </a>
      <NuxtLink
        v-else
        :to="`/info/posts/${content.id}`"
        class="information-list__link"
      >
        <span class="information-list__datetime">
          {{ $dayjs(content.publishedAt).format('M月D日') }}
        </span>
        <span
          class="information-list__category"
          :class="categoryClass(content.category[0])"
        >
          {{ content.category[0] }}
        </span>
        <span class="information-list__title">
          {{ content.title }}
        </span>
      </NuxtLink>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    contents: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    categoryClass(text) {
      // plugins内の定数からクラス名を取得
      const category = this.$constants.info.INFO_CATEGORIES.filter(category => category.name === text)
      return `information-list__category-${category[0].slug}`
    },
  },
}
</script>

<style lang="scss" scoped>
.information-list {
  list-style-type: none;
  margin: 0;
  padding: 0;
  &__item {
    border-bottom: 1px solid lightgray;
    &:last-child {
      border-bottom: none;
    }
  }
  &__link {
    display: flex;
    align-items: flex-start;
    padding: 10px 15px;
    text-decoration: none;
    color: $font-color--base;
    transition: background-color var(--timing) var(--duration);
    &:hover {
      background-color: $blue-thin;
    }
  }
  &__datetime {
    flex-basis: 80px;
    flex-shrink: 0;
  }
  &__category {
    border-radius: var(--border-radius);
    border: 1px solid currentColor;
    padding: 3px 5px;
    line-height: 1;
    margin-right: 20px;
    flex-shrink: 0;
    &-normal {
    }
    &-important {
      color: $red;
    }
    &-recruit {
      color: $blue;
    }
  }
  &__title {
    flex-grow: 1;
  }
}
</style>
