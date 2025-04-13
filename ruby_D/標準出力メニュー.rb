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
puts (1..10).to_a.join(" ")
