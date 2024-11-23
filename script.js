function getCaracter(caracter){

    const valorInput = document.querySelector(".display").value
    
    document.querySelector(".display").value = valorInput + caracter

    
}


function cleanInput(){
    document.querySelector(".display").value = ""
}


function calcular(){
    const valorInput = document.querySelector(".display").value
    document.querySelector(".display").value = eval(valorInput)
}


function apagueLuz(){
    const apagandoLuz = document.querySelector("body")
    apagandoLuz.classList.toggle("dark")
}