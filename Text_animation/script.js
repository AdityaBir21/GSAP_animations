function breakTheText() {

var h1 = document.querySelector("h1")
var h1text = h1.textContent

var splittedText = h1text.split("")
var halfValue = splittedText.length/2

var blank = "" 
splittedText.forEach(function(elem,idx){
    if(idx<halfValue){
        blank += `<span class="a">${elem}</span>`
    }
    else{
        blank += `<span class="b">${elem}</span>`
    }
    
})

h1.innerHTML = blank

}

breakTheText()

// gsap.from("h1 span",{
//     y: 60,
//     duration:0.7,
//     delay:0.5,
//     opacity: 0,
//     stagger:0.15,

// })

gsap.from("h1 .a",{
    y: 60,
    duration:0.7,
    delay:0.5,
    opacity: 0,
    stagger:0.15,
})
gsap.from("h1 .b",{
    y: 60,
    duration:0.7,
    delay:0.5,
    opacity: 0,
    stagger:-0.15,
})
