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

# divmodメソッドを使うと、割り算と剰余を一度に取得できる
x = gets.chomp.to_i
a, x = x.divmod(500)
b, x = x.divmod(100)
c, x = x.divmod(50)
d, x = x.divmod(10)
e, x = x.divmod(5)
j = x
puts a + b + c + d + e + j

# C070:簡易カードゲーム