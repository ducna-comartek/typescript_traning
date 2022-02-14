var Fibo = []
Fibo[1] = 1
Fibo[2] = 1
for(i = 3; i<=10; i++){
    Fibo[i] = Fibo[i-1] + Fibo[i-2]
}
console.log(Fibo[11])