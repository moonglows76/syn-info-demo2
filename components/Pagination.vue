<template>
  <div>
    <ul class="pagination">
      <li v-if="current > 1" class="page arrow">
        <NuxtLink :to="getPath(current - 1)">
          &lt;
        </NuxtLink>
      </li>
      <li
        v-for="p in pager"
        :key="p"
        class="page"
        :class="{ active: current === p + 1 }"
      >
        <NuxtLink :to="getPath(p + 1)">
          {{ p + 1 }}
        </NuxtLink>
      </li>
      <li v-if="current < pager.length" class="page arrow">
        <nuxt-link :to="getPath(current + 1)">
          &gt;
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

<style>

</style>
