<template>
  <div class="content-container">
    <Breadcrumb :breadcrumbs="breadcrumbs" />
    <article class="info-detail">
      <h1 class="info-detail__title">{{ title }}</h1>
      <div class="info-detail__category-datetime">
        <div class="info-detail__category">
          <span :class="categoryClass">{{ categoryText }}</span>
        </div>
        <div class="info-detail__datetime">
          <time :datetime="$dayjs(publishedAt).format('YYYY-MM-DD')">
            {{ $dayjs(publishedAt).format('YYYY年M月D日') }}
          </time>
        </div>
      </div>
      <div
        class="info-detail__content"
      >
        <template
          v-for="(body_content, index) in body"
        >
          <!-- heading_l -->
          <template v-if="body_content.fieldId === 'heading_l'">
            <h2
              v-html="body_content.title"
              :key="`body_content_${index}`"
              class="info-detail__heading-l"
            />
          </template>
          <!-- heading_m -->
          <template v-if="body_content.fieldId === 'heading_m'">
            <h3
              v-html="body_content.title"
              :key="`body_content_${index}`"
              class="info-detail__heading-m"
            />
          </template>
          <!-- heading_s -->
          <template v-if="body_content.fieldId === 'heading_s'">
            <h4
              v-html="body_content.title"
              :key="`body_content_${index}`"
              class="info-detail__heading-s"
            />
          </template>
          <!-- paragraph -->
          <template v-if="body_content.fieldId === 'paragraph'">
            <div
              v-html="body_content.text"
              :key="`body_content_${index}`"
              class="info-detail__paragraph"
            />
          </template>
          <!-- list -->
          <template v-if="body_content.fieldId === 'list'">
            <ul
              :key="`body_content_${index}`"
              class="info-detail__list"
            >
              <li
                v-for="(list_content, list_content_index) in body_content.item"
                :key="`list_content_${list_content_index}`"
                v-html="list_content.text"
              />
            </ul>
          </template>
          <!-- table -->
          <template v-if="body_content.fieldId === 'table'">
            <div
              v-html="body_content.table"
              :key="`body_content_${index}`"
              class="info-detail__table"
            />
          </template>
          <!-- custom_support -->
          <template v-if="body_content.fieldId === 'custom_support'">
            <div
              :key="`body_content_${index}`"
              class="info-detail__support"
            >
              <div
                class="info-detail__support-inner"
                v-html="body_content.text"
              />
            </div>
          </template>
        </template>
        <div
          v-if="support"
          class="info-detail__support"
        >
          <div class="info-detail__support-inner">
            ＜お問い合わせ先＞<br>
            <strong>シナプスサポートセンター</strong><br>
            電話：099-813-8699（受付時間　9：00 - 21：00 年中無休）<br>
            メール：<a href="mailto:support@synapse.jp">support@synapse.jp</a>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: `${this.title} | お知らせ`,
    }
  },
  async asyncData({ $microcms, params }) {
    const data = await $microcms.get({
      endpoint: 'info',
      contentId: params.id,
    })
    return data
  },
  data() {
    return {
      // 現在地のテキストがasyncDataから取得できない…
      breadcrumbs: [
        { title: "トップページ", link: "/" },
        { title: "お知らせ", link: "/info" },
        { title: "", link: "current" }, // 現在地にはlinkにcurrentを入れる
      ],
    }
  },
  computed: {
    // カテゴリごとの表記を返す
    categoryText() {
      // plugins内の定数から名称を取得
      const category = this.$constants.info.INFO_CATEGORIES.filter(category => category.name === this.category[0])
      return category[0].text
    },
    // カテゴリごとのクラス名を返す
    categoryClass() {
      // plugins内の定数からクラス名を取得
      const category = this.$constants.info.INFO_CATEGORIES.filter(category => category.name === this.category[0])
      return `info-detail__category-${category[0].slug}`
    },
  },
}
</script>

<style lang="scss" scoped>
@import "~/assets/sass/info/style.scss";
</style>
