function contactUs(){
    
    //first-name
    const nombre= document.getElementById("first-name");
    const nombre_err= document.getElementById("first-name-err");
    
    if(nombre.value === ""){
        nombre_err.classList.add("visible");
        nombre.className = "redBorder";
    } else {
        nombre_err.classList.remove("visible");
        nombre.className = "";
    }
    
    //last-name
    const lastName= document.getElementById("last-name");
    const lastName_err= document.getElementById("last-name-err");
    
    if(lastName.value === ""){
        lastName_err.classList.add("visible");
        lastName.className = "redBorder";
    } else {
        lastName_err.classList.remove("visible");
        lastName.className = "";
    }

    //email
    const emailAddress= document.getElementById("email-address");
    const emailErr= document.getElementById("email-err");
    
    if(emailAddress.value === ""){
        emailErr.classList.add("visible");
        emailAddress.className = "redBorder";
    } else {
        emailErr.classList.remove("visible");
        emailAddress.className = "";
    }






const mensajeExito = document.querySelector(".form-success");
    mensajeExito.classList.add("visible");
    

    setTimeout(() => {
        mensajeExito.classList.remove("visible");
    }, 3000);
}