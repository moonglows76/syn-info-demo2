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
      >
        【{{ content.category[0] }}】
        {{ content.title }} - {{ $dayjs(content.publishedAt).format('M月D日') }}
      </a>
      <NuxtLink
        v-else
        :to="`/info/posts/${content.id}`"
      >
        【{{ content.category[0] }}】
        {{ content.title }} - {{ $dayjs(content.publishedAt).format('M月D日') }}
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
}
</script>

<style>

</style>
