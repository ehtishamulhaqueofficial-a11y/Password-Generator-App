let input = document.querySelector(".passwordbox");

let slide = document.querySelector(".slider");  // this is slider

let sliderNo = document.querySelector(".no"); // length of slider

let lc = document.getElementById("lowercase");
let uc = document.getElementById("uppercase");
let digits = document.getElementById("digits");
let symbols = document.getElementById("symbols");
let btn = document.querySelector(".btn");

slide.addEventListener("input", () => {
    sliderNo.textContent = slide.value
})

btn.addEventListener("click" , () => {
    input.value = generatePassword();
})

let upercase_Char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase_Char = "abcdefghijklmnopqrstuvwxyz";
let digit_Char = "0123456789";
let symbol_Char = "!@#$%^&*()_+{}[]|:;<>,.?/~`-=";

function generatePassword() {
    let passwordStore = "";
    let allChar = "";

    // if(lc.checked){
    //     allChar += lowercase_Char;   also write this 
    // }

    allChar += lc.checked ? lowercase_Char : "";
    allChar += uc.checked ? upercase_Char : "";
    allChar += digits.checked ? digit_Char : "";
    allChar += symbols.checked ? symbol_Char : "";
    
    if(allChar === ""){
        input.style.color = "red";
        input.style.fontSize = "1.2rem";
        return "⚠ Select at least one option!";
    }

    for (let i = 0; i < slide.value; i++) {
        passwordStore += allChar.charAt(Math.floor(Math.random() * allChar.length))
    }

    // passwordStore = upercase_Char.charAt(Math.floor(Math.random() * upercase_Char.length));

    input.style.color = "gold";
    input.style.fontSize = "1.5rem";

    return passwordStore;
}

let copyIcon = document.getElementById("icon");


copyIcon.addEventListener("click", () => {
        if(input.value && input.value !== "⚠ Select at least one option!") {
        navigator.clipboard.writeText(input.value);
        
        alert("Password copied to clipboard!");

        setTimeout(() => copyIcon.style.color = "rgb(0, 255, 0)", 400);

         setTimeout(() => {
            copyIcon.style.color = "white";
        }, 2000);

    }
});



