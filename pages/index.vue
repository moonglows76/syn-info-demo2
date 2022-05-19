<template>
  <div>
    <section class="top-info">
      <template v-if="importantContents.length > 0">
        <div class="top-info__category top-info__category--important">
          <h2 class="top-info__heading">重要なお知らせ</h2>
          <InformationList :contents="importantContents" />
        </div>
      </template>
      <template v-if="recruitContents.length > 0">
        <div class="top-info__category top-info__category--recruit">
          <h2 class="top-info__heading">採用</h2>
          <InformationList :contents="recruitContents" />
        </div>
      </template>
      <div class="top-info__category top-info__category--normal">
        <h2 class="top-info__heading">シナプスからのお知らせ</h2>
        <InformationList :contents="normalContents" />
        <div class="top-info__btn-container">
          <NuxtLink to="/info" class="top-info__btn">
            お知らせ一覧へ
            <i class="fa-solid fa-angle-right top-info__btn-icon" />
          </NuxtLink>
        </div>
      </div>
    </section>
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
<style lang="scss" scoped>
@import "~/assets/sass/top/style.scss";
</style>
