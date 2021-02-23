
const sizes = document.querySelectorAll(".size")
const card = document.querySelector(".card")
const container = document.querySelector(".container")
const img = document.querySelector(".img")
const card_text = document.querySelector(".card-text")
const btn = document.querySelector(".btn")


sizes.forEach((size) =>{
    size.addEventListener("click", () =>{
        removeActiveSizes()
        size.classList.add("active")
    })
})

function removeActiveSizes(){
    sizes.forEach((size) =>{
        size.classList.remove("active")
    })
}


//Animasyon
container.addEventListener( "mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) /15; 
    let yAxis = (window.innerHeight / 2 - e.pageY) /15; 
    card.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`

}); 


//animasyon giriş

container.addEventListener("mouseenter",(e) =>{

    img.style.transform = "translateZ(150px)" ;
    card_text.style.transform = "translateZ(100px)";
    btn.style.transform = "translateZ(100px)";
    sizes.style.transform = "translateZ(100px)";



})




//animasyon çıkış

container.addEventListener("mouseleave",(e) =>{

    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    
    img.style.transform = "translateZ(0px)";
    card_text.style.transform = "translateZ(0px)";
    btn.style.transform = "translateZ(0px)";
    sizes.style.transform = "translateZ(0px)";


    
})
