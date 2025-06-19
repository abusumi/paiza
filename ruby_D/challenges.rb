# D212:繋げた長さ
n = gets.chomp.to_i
s = n*10
puts s

# D172:イヴの日付
n = gets.chomp.to_i
puts n-1

# D214:身長差
a = gets.chomp.to_i
b = gets.chomp.to_i
puts a-b

# D166:何日後になるか
n = gets.chomp.to_i
puts n*7

# D189:何周年の確認
x = gets.chomp.to_i
y = gets.chomp.to_i
puts y-x

# D031:分から秒へ
n = gets.chomp.to_i
puts n*60

# D343:N文字目まで
L = gets.chomp.to_i
S = gets.chomp
N = gets.chomp.to_i
T = S.slice(0, N)
puts T

# D235:5人兄弟
n = gets.chomp.to_i
puts n*5

# D265:薬の処方
n = gets.chomp.to_i
m = gets.chomp.to_i
puts n*3*m

# D242:取引の計算
x = gets.chomp.to_i
y = gets.chomp.to_i
z = gets.chomp.to_i
puts x+y-z

# D156:密度の計算
x = gets.chomp.to_i
y = gets.chomp.to_i
puts x*y

# D344:ボーナスの額
n = gets.chomp.to_i
m = gets.chomp.to_i
puts n*m

# D256:移住
x = gets.chomp.to_i
y = gets.chomp.to_i
puts x-100
puts y+100

# D199:お餅の個数
n = gets.chomp.to_i
m = gets.chomp.to_i
puts n*m

# D170:校庭マラソン
x = gets.chomp.to_i
y = gets.chomp.to_i
puts x*y

# D162:【推しプロコラボ問題】お米の重さ
n = gets.chomp.to_i
puts n*150

# D345:気温の計測
a = gets.chomp.to_i
b = gets.chomp.to_i
c = gets.chomp.to_i
d = [a, b, c].max
puts d
