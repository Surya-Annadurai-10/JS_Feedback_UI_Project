let btn = document.querySelector(".button");
let container = document.querySelector(".container");

let arr = document.querySelectorAll(".reactions");
let result = "";
arr.forEach((value , index) =>{
   value.addEventListener("click" , (event) =>{
    result = value.childNodes[3].innerText;   
    value.style.color = "white";
    value.style.fontWeight = "bold"
    value.style.backgroundColor =" #8FBC8F";
    console.log(result);
  
    console.log(event.target)
   
   
   })
})

container.addEventListener("click" , (event) =>{
 if(event.target.classList.contains("button")){
     container.remove();
        container.innerHTML =`
           <div class="container">
                <h1>Thank You</h1>
                <h1>Feedback : ${value.childNodes[3].innerText}</h1>
    
                <p class = "para">We'll use your feedback to improve </br> our customer support.</p>
      
          </div>
            <button class="button">Send Review</button>
             </div>
       `
 }
})

