//Redo the Regular Expressions Course on FreeCodeCamp 
//and come back to modify this project

const pass = document.getElementById("password");
const msg = document.getElementById("message");
const str = document.getElementById("strength");


pass.addEventListener("input", () => {
    if (pass.value.length > 0){
        msg.style.display = "block";
    }else{
        msg.style.display = "none";
    }
    if(pass.value.length < 6){
        str.innerHTML = "weak";
        pass.style.borderColor = "red";
        msg.style.color = "red";

    } else if(pass.value.length >= 6 && pass.value.length < 10){
        str.innerHTML = "medium";
        pass.style.borderColor = "yellow";
        msg.style.color = "yellow";

    } 
     if(pass.value.length >= 11 ){
        str.innerHTML = "strong";
        pass.style.borderColor = "green";
        msg.style.color = "green";

    }
})