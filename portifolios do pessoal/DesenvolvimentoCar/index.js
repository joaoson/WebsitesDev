sol = document.getElementById("sol")

sol.addEventListener("click", moverBack)

function moverBack(){
    console.log("passou")
    sol.classList.add("diminui")
    document.getElementById("lua1").classList.add("diminui")
    document.getElementById("lua2").classList.add("diminui")
    document.getElementById("lua3").classList.add("diminui")
    document.getElementById("lua4").classList.add("diminui")

    setTimeout(retirarElem, 810);
}

function retirarElem(){
    sol.classList.add("hidden")
    document.getElementById("main").classList.add("diminui")
    document.getElementById("lua1").classList.add("hidden")
    document.getElementById("lua2").classList.add("hidden")
    document.getElementById("lua3").classList.add("hidden")
    document.getElementById("lua4").classList.add("hidden")
    document.getElementById("body").classList.remove("overflow")
    document.getElementById("html").classList.add("smooth")
    console.log("rodou")
}

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

function soletrarPalavra(palavraNova){
    texto = document.getElementById("text")
    let newWord = palavraNova
    let comp = newWord.length
    texto.textContent = ""
    let i = 0
    let intervalo = setInterval(()=>{
        texto.textContent += newWord[i]
        i++
        if(i>= newWord.length){
            clearInterval(intervalo)
        }
    },500)
   
    setTimeout(()=>{
        let segundoIntervalo = setInterval(()=>{
            texto.textContent = texto.textContent.slice(0,comp)
            comp--
            if(comp< 0){
                clearInterval(segundoIntervalo)
            }
        },500)
    }, newWord.length*501)
}

const textLoad = () => {
    setTimeout(()=>{
        soletrarPalavra("Developer")}
        ,0)
    setTimeout(()=>{
        soletrarPalavra("Designer")
    },9508)
    setTimeout(()=>{
        soletrarPalavra("Programmer")
    },18017)
}

textLoad()
setInterval(textLoad,28527)

window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 500)
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
})