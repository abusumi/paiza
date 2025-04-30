// 02:複数の条件を組み合わせてみよう
// if文による条件分岐　else if文
process.stdin.resume();
process.stdin.setEncoding('utf8');
var number = parseInt(Math.random() * 5) + 1;
console.log("あなたの順位は" + number + "位です");
// ここにif文を追加する
if (number == 1) {
  console.log("おめでとう");
} else if (number == 2) {
  console.log("あと少し");
} else {
  console.log("よくがんばったね");
}

// 03:比較演算子で条件分岐してみよう
// if文による条件分岐　比較演算子
process.stdin.resume();
process.stdin.setEncoding('utf8');
var age = parseInt(Math.random() * 5) + 18;
process.stdout.write (age  + "才は");
// ここにif文を追加
if (age < 20) {
    console.log("飲酒不可");
}else {
    console.log("飲酒可能");
}

// if文による条件分岐　比較演算子
process.stdin.resume();
process.stdin.setEncoding('utf8');
var place = parseInt(Math.random() * 12) + 1;
process.stdout.write (place + "位");
// ここにif文を追加する
if (place <= 6) {
    console.log("入賞");
} else {
    console.log("入賞圏外");
}

// 04:おみくじを作ってみよう
// おみくじを作る
process.stdin.resume();
process.stdin.setEncoding('utf8');
var omikuji = parseInt(Math.random() * 100) + 1;
if (omikuji > 29) {
  console.log("omikujiの中身は" + omikuji  + "なので大吉");
} else {
  console.log("omikujiの中身は" + omikuji  + "なので大凶");
}

// 05:RPGのクリティカルヒットを再現
process.stdin.resume();
process.stdin.setEncoding('utf8');
var dice = parseInt(Math.random() * 6) + 1;
console.log("サイコロは" + dice);
if (dice >= 4){
    console.log("スライムの攻撃をかわした");
} else {
    console.log("スライムから10のダメージを受けた");
}

// 06:西暦から平成何年か求めてみよう
// 西暦年から昭和年を求める
process.stdin.resume();
process.stdin.setEncoding('utf8');
var seireki = parseInt(Math.random() * 63) + 1926;
process.stdout.write ("西暦" + seireki + "年は");

// 昭和年を計算
var showa = seireki - 1925;
console.log("昭和" + showa + "年です");

// 01:条件によるくり返し処理1 - while
// 「ハローpaizaラーニング」と10回表示する

process.stdin.resume();
process.stdin.setEncoding('utf8');
var count = 0;
while (count < 10) {
    console.log("ハローpaizaラーニング");
    count = count + 1;
}

// 数値を0から15まで表示する

process.stdin.resume();
process.stdin.setEncoding('utf8');
var count = 0;
while (count < 16){
    console.log(count);
    count = count + 1;
}

// 02:条件によるくり返し処理2 - while
// 1から10までの偶数を表示する

process.stdin.resume();
process.stdin.setEncoding('utf8');
var count = 2;
while (count <= 10){
    console.log(count);
    count = count + 2;
}

03:RPGの攻撃シーンを作る
// 数値を10から1までカウントダウン表示する

process.stdin.resume();
process.stdin.setEncoding('utf8');
var count = 10
while (count > 0){
    console.log(count);
    count -= 1;
}

// 数値を20から10までカウントダウン表示する

process.stdin.resume();
process.stdin.setEncoding('utf8');
var count = 20
while (count >= 10){
    console.log(count);
    count -= 1;
}

// 20から10までの奇数を表示する

process.stdin.resume();
process.stdin.setEncoding('utf8');
var count = 20;
while (count > 10){
    console.log(count - 1);
    count = count - 2;
}

// 04:条件によるくり返し処理3 - for
// 「ハローpaizaラーニング」を10回表示する

process.stdin.resume();
process.stdin.setEncoding('utf8');
for (var count = 0; count < 10; count ++){
    console.log("ハローpaizaラーニング");
}

// 数値を0から15まで表示する

process.stdin.resume();
process.stdin.setEncoding('utf8');
for (var count = 0; count <= 15; count++){
    console.log(count);
}

// 1月から12月まで表示する

process.stdin.resume();
process.stdin.setEncoding('utf8');
for (var month = 1; month <= 12; month++){
    console.log(month + "月");
}

// 06:標準入力で1行データを受け取ってみよう
// 標準入力からテキストを取得する

process.stdin.resume();
process.stdin.setEncoding('utf8');

var input_string = "";
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', (line) => {
    // ここで入力を処理する
    input_string = line
});
reader.on('close', () => {
    // ここで出力する
    console.log(input_string);
});

// 07:標準入力で複数行データを受け取ってみよう
// 複数行の標準入力を取得する

process.stdin.resume();
process.stdin.setEncoding('utf8');

var lines = [];
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
reader.on('line', (line) => {
    // ここで入力を処理する
    lines.push(line)
});
reader.on('close', () => {
    // ここで出力する
    console.log(lines[0]);
    console.log(lines[1]);
    console.log(lines[2]);


});

// 08:西暦年と平成年の対応表を作る
// 西暦年と昭和年の対応表を作ろう

process.stdin.resume();
process.stdin.setEncoding('utf8');
for (var seireki = 1926; seireki <=1988; seireki++){
    let showa = seireki - 1925;
    console.log("西暦" + seireki +"年は昭和" + showa + "年です");
}

// 01:配列とは何かを学ぼう

// ＃02:配列を作ろう
// 配列の中身を出力してみよう

process.stdin.resume();
process.stdin.setEncoding('utf8');

var party = ["戦士", "侍", "僧侶", "魔法使い"];

// ここで配列を出力する
console.log (party);

// 指定の文字を配列にしてみよう

process.stdin.resume();
process.stdin.setEncoding('utf8');

// ここで配列を定義する
var item = [ 'ロングソード', 'ブレードソード', 'エクスカリバー' ];

// ここで配列を出力する
console.log (item);

// 変数を配列に代入しよう

process.stdin.resume();
process.stdin.setEncoding('utf8');

var player_1 = '勇者';
var player_2 = '魔法使い';
var player_3 = '戦士';

// ここで配列を定義する
var jobs = [player_1, player_2, player_3];

// ここで出力する
console.log (jobs);

// ＃03:配列の要素を取り出してみよう
// 配列の最初の要素を取り出してみよう

process.stdin.resume();
process.stdin.setEncoding('utf8');

team = ["勇者", "戦士", "侍", "忍者", "魔法使い"];

// ここで最初の要素を出力する
console.log (team[0]);

// ＃04:配列を操作しよう
// 配列に要素を追加してみよう

process.stdin.resume();
process.stdin.setEncoding('utf-8');

var weapon = ["木の棒", "鉄の棒", "鉄の剣", "鋼の剣"];

// ここで要素を追加する
weapon.push("石斧");

console.log(weapon);

// 配列の要素を上書きしてみよう

process.stdin.resume();
process.stdin.setEncoding('utf-8');

var weapon = ["木の棒", "鉄の棒", "鉄の剣", "鋼の剣"];

// ここで配列の要素を上書きする
weapon[3] = "石斧";

console.log(weapon);

// #05:ループで配列の要素を処理しよう1
// 配列の中身を1行ずつ表示してみよう

process.stdin.resume();
process.stdin.setEncoding('utf-8');

var enemy = ["スライム", "モンスター", "ゾンビ", "ドラゴン", "魔王"];

// for文で配列の要素を1つずつ出力する
for (var value of enemy){
    console.log(value);
}

// ＃06:ループで配列の要素を処理しよう2
// forEachで配列の要素を出力してみよう
process.stdin.resume();
process.stdin.setEncoding('utf-8');

var cities = ["Tokyo", "Kanagawa", "Chiba", "Shizuoka", "Saitama"];


// forEachで配列の要素を1行ずつ出力する

cities.forEach(value => {
    console.log(value);
})

// ＃07:splitで文字列を分割しよう
// 文字列をカンマで分割してみよう

process.stdin.resume();
process.stdin.setEncoding('utf-8');

var team_str = "勇者,戦士,忍者,魔法使い";

// splitで分割し配列に格納、標準出力に出力する
var team = team_str.split(",");
console.log(team);

// 文字列をカンマで分割してみよう

process.stdin.resume();
process.stdin.setEncoding('utf-8');

var input_string = "";
var reader = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.on('line', (line) => {
    input_string = line;
});

reader.on('close', () => {
    var array = [];

    // ここでカンマで区切って配列に格納する
    var array = input_string.split(",");

    console.log(array);
});

