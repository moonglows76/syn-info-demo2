export default {
  // トップ用
  'TOP_LIST_LIMIT': 20,
  'TOP_IMPORTANT_LIST_LIMIT': 3,
  'TOP_RECRUIT_LIST_LIMIT': 3,
  'TOP_INFO_LIST_LIMIT': 5,
  // お知らせ一覧用
  // 本番用
  // 'LIST_LIMIT': 20,
  'LIST_LIMIT': 5,
  'MONTH_LIST_LIMIT': 100,
  'INFO_CATEGORIES': [
    {
      id: 1,
      name: '通常',
      text: 'お知らせ',
      slug: 'normal',
    },
    {
      id: 2,
      name: '重要',
      text: '重要なお知らせ',
      slug: 'important',
    },
    {
      id: 3,
      name: '採用',
      text: '採用',
      slug: 'recruit',
    },
  ],
}
