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