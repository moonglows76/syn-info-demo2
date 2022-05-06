<template>
  <div>
    <template v-if="importantContents.length > 0">
      <h2>重要なお知らせ</h2>
      <InformationList :contents="importantContents" />
    </template>
    <template v-if="recruitContents.length > 0">
      <h2>採用</h2>
      <InformationList :contents="recruitContents" />
    </template>
    <h2>シナプスからのお知らせ</h2>
    <p><b>通常</b></p>
    <InformationList :contents="normalContents" />
    <NuxtLink to="/info">お知らせ一覧へ</NuxtLink>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `鹿児島のプロバイダSYNAPSE（シナプス）`,
    }
  },
  async asyncData({ $microcms, $constants }) {
    const limit = $constants.info.TOP_LIST_LIMIT
    const { contents } = await $microcms.get({
      endpoint: 'info',
      queries: {
        fields: 'id,publishedAt,title,category,url',
        limit: limit,
      },
    })
    return {
      contents,
    }
  },
  computed: {
    importantContents() {
      return this.contents
        .filter(content => content.category[0] === this.$constants.info.INFO_CATEGORIES[1].name)
        .slice(0, this.$constants.info.TOP_IMPORTANT_LIST_LIMIT)
    },
    recruitContents() {
      return this.contents
        .filter(content => content.category[0] === this.$constants.info.INFO_CATEGORIES[2].name)
        .slice(0, this.$constants.info.TOP_RECRUIT_LIST_LIMIT)
    },
    normalContents() {
      return this.contents
        .filter(content => content.category[0] === this.$constants.info.INFO_CATEGORIES[0].name)
        .slice(0, this.$constants.info.TOP_INFO_LIST_LIMIT)
    },
  }
}
</script>
