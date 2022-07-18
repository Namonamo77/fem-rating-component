// Modal pop up

const submitBtn = document.querySelector(".submit-btn")
const modalContainer = document.querySelector(".thankyou-container")
const thankyouInput = document.querySelector("#choosenRateInput")
const errorMess = document.querySelector(".error-message")

let storeRate = 0

// Store Rating variable

function storeVar(value){
    storeRate = value
    console.log(storeRate)
}
console.log(storeRate)

submitBtn.addEventListener("click", function(){
    console.log(`Rating ${storeRate}`) 

    // if statement (ternary)
    storeRate > 0 ? modalContainer.classList.add("show") : 
    errorMess.innerHTML = `<p class="error-text">Sorry you must choose a rate!</p>`, 
    thankyouInput.value = `You selected ${storeRate} out of 5`
})






