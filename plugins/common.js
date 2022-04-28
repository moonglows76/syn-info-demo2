const publishedMonths = (contents) => {
  // 記事から年月のみ抜き出し
  // map: 配列内のすべての要素になにかの処理をして新しい配列を作る
  // substr(開始位置, 文字数): 文字列の開始位置（0が1文字目）から文字数分を抜き出す
  const arr = contents.map(content => content.publishedAt.substr(0,7))
  // 年月の重複を削除
  // filter: 条件に合うものだけ残して新しい配列を作る
  // arr.indexOf(item) === index: 「配列内で該当の要素（item: 2022-03など）が最初にでてくる位置」と「今見ている要素の位置」をチェック
  // 条件がイコールになるのは最初に出てきたときだけ、2回目以降はfilterで除外される
  return arr.filter((item, index) => arr.indexOf(item) === index )
}

export default (context, inject) => {
  inject('publishedMonths', publishedMonths)
}
