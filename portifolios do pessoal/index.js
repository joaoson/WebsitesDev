
document.getElementById("Henrique").addEventListener("mouseover",()=>{
    document.getElementById("Henriquefoto").classList.add("visivel")
    document.getElementById("body").classList.add("henrique")
    document.getElementById("Leuckfoto").classList.remove("visivel")
    document.getElementById("Kureskifoto").classList.remove("visivel")
    document.getElementById("Joaofoto").classList.remove("visivel")
    document.getElementById("Tiagofoto").classList.remove("visivel")
    document.getElementById("Danilofoto").classList.remove("visivel")

})

document.getElementById("Leuck").addEventListener("mouseover",()=>{
    document.getElementById("Leuckfoto").classList.add("visivel")
    document.getElementById("body").classList.add("leuck")
    document.getElementById("Henriquefoto").classList.remove("visivel")
    document.getElementById("Kureskifoto").classList.remove("visivel")
    document.getElementById("Joaofoto").classList.remove("visivel")
    document.getElementById("Tiagofoto").classList.remove("visivel")
    document.getElementById("Danilofoto").classList.remove("visivel")
})

document.getElementById("Kureski").addEventListener("mouseover",()=>{
    document.getElementById("Kureskifoto").classList.add("visivel")
    document.getElementById("body").classList.add("kureski")
    document.getElementById("Leuckfoto").classList.remove("visivel")
    document.getElementById("Henriquefoto").classList.remove("visivel")
    document.getElementById("Joaofoto").classList.remove("visivel")
    document.getElementById("Tiagofoto").classList.remove("visivel")
    document.getElementById("Danilofoto").classList.remove("visivel")

})

document.getElementById("Danilo").addEventListener("mouseover",()=>{
    document.getElementById("Danilofoto").classList.add("visivel")
    document.getElementById("body").classList.add("danilo")
    document.getElementById("Leuckfoto").classList.remove("visivel")
    document.getElementById("Henriquefoto").classList.remove("visivel")
    document.getElementById("Kureskifoto").classList.remove("visivel")
    document.getElementById("Joaofoto").classList.remove("visivel")
    document.getElementById("Tiagofoto").classList.remove("visivel")
})

document.getElementById("Tiago").addEventListener("mouseover",()=>{
    document.getElementById("Tiagofoto").classList.add("visivel")
    document.getElementById("body").classList.add("tiago")
    document.getElementById("Danilofoto").classList.remove("visivel")
    document.getElementById("Leuckfoto").classList.remove("visivel")
    document.getElementById("Henriquefoto").classList.remove("visivel")
    document.getElementById("Kureskifoto").classList.remove("visivel")
    document.getElementById("Joaofoto").classList.remove("visivel")
})

document.getElementById("Joao").addEventListener("mouseover",()=>{
    document.getElementById("Joaofoto").classList.add("visivel")
    document.getElementById("body").classList.add("joao")
    document.getElementById("Danilofoto").classList.remove("visivel")
    document.getElementById("Leuckfoto").classList.remove("visivel")
    document.getElementById("Henriquefoto").classList.remove("visivel")
    document.getElementById("Tiagofoto").classList.remove("visivel")
    document.getElementById("Kureskifoto").classList.remove("visivel")
})

document.getElementById("Joao").addEventListener("mouseout",()=>{
    document.getElementById("Joaofoto").classList.remove("visivel")
    document.getElementById("body").classList.remove("joao")
})

document.getElementById("Henrique").addEventListener("mouseout",()=>{
    document.getElementById("Henriquefoto").classList.remove("visivel")
    document.getElementById("body").classList.remove("henrique")
})

document.getElementById("Kureski").addEventListener("mouseout",()=>{
    document.getElementById("Kureskifoto").classList.remove("visivel")
    document.getElementById("body").classList.remove("kureski")
})

document.getElementById("Leuck").addEventListener("mouseout",()=>{
    document.getElementById("Leuckfoto").classList.remove("visivel")
    document.getElementById("body").classList.remove("leuck")
})

document.getElementById("Tiago").addEventListener("mouseout",()=>{
    document.getElementById("Tiagofoto").classList.remove("visivel")
    document.getElementById("body").classList.remove("tiago")
})

document.getElementById("Danilo").addEventListener("mouseout",()=>{
    document.getElementById("Danilofoto").classList.remove("visivel")
    document.getElementById("body").classList.remove("danilo")
})
