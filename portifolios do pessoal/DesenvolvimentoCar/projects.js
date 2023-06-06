function transition(){
    document.getElementById("transition").classList.add("transition2")
    console.log("rodou")
}

transition()

window.onbeforeunload = function () {
    wtransition()
}

