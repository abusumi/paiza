# 1 行の出力 Ruby編
puts 813

# 2 行の出力 Ruby編
puts 8
puts 13

# 3 行の出力 Ruby編
puts 8
puts 1
puts 3

# 10 行の出力 Ruby編
n = [813, 1, 2, 923874, 23648, 782356, 3256, 2342, 24324, 112]
n.each do |y|
    puts y
end

# 【改行あり出力】1,000 行の出力 Ruby編
(1..1000).each do |n|
  puts n
end

# 2 つの数値を出力 Ruby編
n = ["1", "1"]
puts n.join(' ')

#3 つの数値を出力 Ruby編
n = ["8","1","3"]
puts n.join(" ")

# 10 個の数値を出力 (末尾に半角スペース有) Ruby編
puts (1..10).to_a.join(" ") + " "

# 10 個の数値を出力 Ruby編
puts (1..10).to_a.join(" ")

# 【半角スペース区切りの出力】1,000 個の数値を出力 Ruby編
puts (1..1000).to_a.join(" ")

# 1 つの文字列を出力 Ruby編
puts "paiza"

# 2 つの文字列を出力 Ruby編
puts "paiza learning"

# 入力された 2 つの文字列を出力 Ruby編
s = gets 
puts s
t = gets
puts t

# 入力された 10 個の文字列を出力 Ruby編
arr = []
10.times do
  arr << gets.chomp
end
puts arr.join(" ")

# 【文字列の出力】入力された 10 個の文字列を出力 Ruby編
n = gets.chomp
t = n.split
t.each do |a|
    puts a
end

# 1 行または 2 行の出力
n = gets.chomp.to_i
if n == 1
    puts 1
elsif n == 2
    puts 1
    puts 2
end

# 数行の出力
n = gets.chomp.to_i
(1..n).each do |i|
    puts i
end

# 10 行以内の出力
n = gets.chomp.to_i
(1..n).each do |i|
    puts i
end

# 【n 行の出力】1,000 行以内の出力
n = gets.chomp.to_i
(1..n).each do |i|
    puts i
end

# カンマ区切りで 2 つ出力
n, m = gets.split.map(&:to_i)
puts("#{n},#{m}")

# バーティカルライン区切りで 3 つの文字列を出力
s1 = gets.chomp
s2 = gets.chomp
s3 = gets.chomp

puts("#{s1}|#{s2}|#{s3}")

# カンマ区切りで 10 個出力
ary = gets.split.map(&:to_i)

puts(ary.join(",") + ",")

# カンマ区切りで 10 個出力
ary = gets.split.map(&:to_i)

puts(ary.join(","))
# 半角スペースとバーティカルライン区切りで 10 個出力
ary = 10.times.map{gets.to_i}

puts(ary.join(" | "))

# 大きな数値を 3 けたごとにカンマ区切りで出力
n = gets.to_i
# n を文字列に変換する
s = n.to_s
# s 末尾のインデックス
e_i = s.length - 1
# c_s を空文字で初期化
c_s = ""
# i=0 から e_i までカウントアップしながら繰り返す
0.upto(e_i) do |i|
  # s[i] を文字列 c_s に追加
  c_s += s[i]
  # 末尾以外かつ 3 の倍数のなら文字列 c_s にカンマ"," を追加
  if i != e_i && (i + 1) % 3 == 0
    c_s += ","
  end
end
# 出力
puts(c_s)
