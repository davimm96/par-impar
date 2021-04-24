function executar(){
    var res = document.getElementById('res'),
        numero = document.getElementById('numero'),
        executar = document.getElementById(''),
        n = Number(numero.value),
        c = "i"

    function contador(min,max){
        min +=1
        if(min<max){
            contador(++min,max)
            if(min == n){
                res.innerHTML = "Par"
                c = "p"  
            }else {
                res.innerHTML = "Impar"
                if(c == "p"){
                    res.innerHTML = "Par"
                }
            }
        }
    }

    if(n > 20000 || n <= 0 || n == ""){
        alert("Digite um valor válido")
    }else if(n == 1){
        res.innerHTML = "Impar"
    }else{
        contador(0,n)
        }
    }
    