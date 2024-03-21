const body = document.querySelector('body'),
sidebar = body.querySelector('nav'),
toggle = body.querySelector(".toggle"),
searchBtn = body.querySelector(".search-box"),
modeSwitch = body.querySelector(".toggle-switch"),
modeText = body.querySelector(".mode-text");

toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        
    }
});

const listpopup = body.querySelector(".item-added") 
const closelist = body.querySelector(".item-added button") 

closelist.addEventListener("click" , () =>{
    listpopup.classList.add("closed");
})

function setButtonText() {
    const button = document.querySelector('.add');
    const itemId = button.getAttribute('data-item-id'); // Haal het item ID op uit het attribuut
  
    // Controleer of het item ID overeenkomt met een item in de leeslijst
    if (leeslijst[itemId]) {
      button.innerText = "Toegevoegd";
    }
  }
  
  window.onload = setButtonText;