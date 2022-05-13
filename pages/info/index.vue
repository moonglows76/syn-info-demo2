<template>
  <div class="content-container">
    <Breadcrumb :breadcrumbs="breadcrumbs" />
    <section class="info-top">
      <h1 class="info-top__title">お知らせ</h1>
      <InformationList :contents="contents" />
      <Pagination
        :pager="pager"
        :current="Number(page)"
        :path="path"
      />
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `お知らせ`,
    }
  },
  async asyncData({ $microcms, params, $constants }) {
    const page = params.p || '1'
    const path = 'info'
    const limit = $constants.info.LIST_LIMIT
    const { contents, totalCount } = await $microcms.get({
      endpoint: 'info',
      queries: {
        limit: limit,
        offset: (page - 1) * limit
      },
    })
    // const monthContents = await $microcms.get({
    //   endpoint: 'info',
    //   queries: {
    //     fields: 'publishedAt',
    //     limit: $constants.info.MONTH_LIST_LIMIT,
    //   },
    // })
    return {
      contents,
      pager: [...Array(Math.ceil(totalCount / limit)).keys()],
      page,
      path,
      // monthContents: monthContents.contents,
    }
  },
  data() {
    return {
      breadcrumbs: [
        { title: "トップページ", link: "/" },
        { title: "お知らせ", link: "current" }, // 現在地にはlinkにcurrentを入れる
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
@import "~/assets/sass/info/style.scss";
</style>
