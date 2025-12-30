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