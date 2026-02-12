// ================================
// 初期化処理（ページ読み込み時に1回だけ実行）
// ================================

// 1. HTML要素を取得する
// - 検索ボタン
const searchBtn = document.getElementById("searchBtn");
// - 郵便番号入力欄
const zipcodeInput = document.getElementById("zipcode");
// - 検索結果表示欄（都道府県・市区町村・町域）
const pref = document.getElementById("pref");
const city = document.getElementById("city");
const town = document.getElementById("town");

const history = [];
// 2. 検索ボタンが押された時の処理を登録する
// （ここではまだ中身は書かない）
searchBtn.addEventListener("click", function () {
  const zipcode = zipcodeInput.value;
  if (zipcode.length !== 7) {
    alert("7桁で入力してください");
    return;
  }
  fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${zipcode}`).then(
    (res) =>
      res.json().then((data) => {
        if (data.results === null) {
          alert("該当する住所が見つかりません");
          return;
        }
        const result = data.results[0];

        const prefecture = result.address1;
        const cityname = result.address2;
        const townname = result.address3;
        console.log(prefecture, city, town);

        history.push({
          prefecture: prefecture,
          city: cityname,
          town: townname,
        });

        pref.textContent = `都道府県：${prefecture}`;
        city.textContent = `市区町村：${cityname}`;
        town.textContent = `町域：${townname}`;
      })
  );
});
// ================================
// イベント処理（検索ボタンが押された時）
// ================================

// 3. 入力された郵便番号を取得する

// 4. 郵便番号を使ってAPIを呼び出す

// 5. APIから返ってきたデータを受け取る

// 6. 受け取った住所データを
//    - 都道府県
//    - 市区町村
//    - 町域
//    に分けて変数に入れる

// 7. それぞれの値をHTMLに反映する
//    （DOMを書き換える）
