function contactUs(){
    let firstNameCheck= false;
    let lastNameCheck= false;
    let emailCheck= false;
    let queryCheck= false;
    let messageCheck= false;
    let agreeLineCheck= false
    
    //first-name
    const nombre= document.getElementById("first-name");
    const nombre_err= document.getElementById("first-name-err");
    
    if(nombre.value === ""){
        nombre_err.classList.add("visible");
        nombre.className = "redBorder";
        firstNameCheck = false;
    } else {
        nombre_err.classList.remove("visible");
        nombre.className = "";
        firstNameCheck = true;
    }
    
    //last-name
    const lastName= document.getElementById("last-name");
    const lastName_err= document.getElementById("last-name-err");
    
    if(lastName.value === ""){
        lastName_err.classList.add("visible");
        lastName.className = "redBorder";
        lastNameCheck = false;
    } else {
        lastName_err.classList.remove("visible");
        lastName.className = ""
        lastNameCheck = true;
    }

    //email
    const emailAddress= document.getElementById("email-address");
    const emailErr= document.getElementById("email-err");
    
    if(emailAddress.value === ""){
        emailErr.classList.add("visible");
        emailAddress.className = "redBorder";
        emailCheck= false;
    } else {
        emailErr.classList.remove("visible");
        emailAddress.className = "";
        emailCheck= true;
    }

    //Query type
    const general= document.getElementById("general");
    const support= document.getElementById("support");
    const radioCard= document.querySelectorAll(".radio-card");
    const queryErr= document.getElementById("query-err");
    

    if(general.checked  === true || support.checked === true ){
        queryErr.classList.remove("visible");
        radioCard.forEach(card => card.classList.remove("redBorder"));   
        queryCheck= true;
    } else {
        queryErr.classList.add("visible");
        radioCard.forEach(card => card.classList.add("redBorder"));
        queryCheck= false;
    }

    //Message
    const message= document.getElementById("message-box");
    const messageErr= document.getElementById("textarea-err");

    console.log("message:"+ message.value);
    
    if(message.value === ""){
        messageErr.classList.add("visible");
        message.className = "redBorder";
        messageCheck= false;
    } else {
        messageErr.classList.remove("visible");
        message.className = "";
        messageCheck= true;
    }

    //Agree check
    const check = document.getElementById("agree");
    const checkErr = document.getElementById("agree-err");

    if(check.checked){
        checkErr.classList.remove("visible");
       
        agreeLineCheck = true;
    } else {
        checkErr.classList.add("visible");
        
        checkErr= false;
        agreeLineCheck = false;            
    }





//Submit
const mensajeExito = document.querySelector(".form-success");
    
if(firstNameCheck == true && 
    lastNameCheck == true && 
    emailCheck == true && 
    messageCheck  == true 
    && queryCheck== true
)
    {
      nombre.value="";
      lastName.value="";
      emailAddress.value="";
      general.checked=false;
      support.checked=false;
      message.value="";
      check.checked=false;

      mensajeExito.classList.add("visible");
    

    setTimeout(() => {
        mensajeExito.classList.remove("visible");
    }, 3000);
}

  
}