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
