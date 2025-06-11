# C166:ちょうどの支払い
x = gets.chomp.to_i
a = x/500
f = x%500
b = f/100
g = f%100
c = g/50
h = g%50
d = h/10
i = h%10
e = i/5
j = i%5
puts a+b+c+d+e+j
