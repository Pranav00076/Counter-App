const num = document.getElementById("num")
const red = document.getElementById("reduce")
const inc = document.getElementById("incre")
const btn = document.getElementById("reset")
red.addEventListener("click",()=>{
    num.innerHTML = Number(num.innerHTML) - 1
    console.log(num.innerHTML)
})
inc.addEventListener("click",()=>{
    num.innerHTML = Number(num.innerHTML) + 1
    console.log(num.innerHTML)
})
btn.addEventListener("click",()=>{
    num.innerHTML = 0
})

const togbut = document.getElementById("theme")
const bodyt = document.body

togbut.addEventListener("click",()=>{
    if (bodyt.classList.contains("light")) {
        bodyt.classList.remove("light");
        bodyt.classList.add("dark");
    } else {
        bodyt.classList.remove("dark");
        bodyt.classList.add("light");;
    }
})