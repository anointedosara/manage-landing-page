let input = document.querySelector("#input")
let form = document.querySelector(".form")
let error = document.querySelector(".error")
let gmail = "@gmail.com"
let yahoo = "@yahoo.com"
let outlook = "@outlook.com"

form.addEventListener("submit", (e) => {
    if (input.value.includes(gmail) || input.value.includes(yahoo) || input.value.includes(outlook)) {
        error.innerHTML = ""
        input.style.border = "1px solid white"
    } else {
        e.preventDefault()
        error.innerHTML = "Please insert a valid email"
        input.style.border = "1px solid hsl(12, 88%, 59%)"
    }
})

let imageToShow = 0;

let showImage = () => {
    quotes.forEach((quote, i) => {
        if (i != imageToShow) {
            quote.classList.remove("opacity")
        } else {
            quote.classList.add("opacity")
        }
    })
}

let sliders = document.querySelectorAll(".slider")
let quotes = document.querySelectorAll(".quotes")

sliders.forEach((slider, i) => {
    slider.onclick = () => {
        imageToShow = i;
        sliders.forEach(slider => {
            slider.classList.remove("bg")
        })
        if (i === imageToShow) {
            slider.classList.add("bg")
        }
        showImage()

    }
})

showImage()

let slider = document.querySelector(".slider")

slider.classList.add("bg")

let open = document.querySelector(".open")
let nav = document.querySelector(".nav")
let body = document.querySelector(".body")

open.addEventListener("click", () => {
    nav.classList.add("top")
    open.style.display = "none"
    close.style.display = "block"
    body.style.overflow = "hidden"
})

let close = document.querySelector(".close")

close.addEventListener("click", () => {
    nav.classList.remove("top")
    open.style.display = "block"
    close.style.display = "none"
    body.style.overflow = ""
})