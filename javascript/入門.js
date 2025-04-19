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
