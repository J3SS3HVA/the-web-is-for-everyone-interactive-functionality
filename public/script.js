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
const currentUrl = window.location.href;
const button = document.querySelector(".add");
const filter = document.querySelector('.filter')

closelist.addEventListener("click" , () =>{
    listpopup.classList.add("closed");
    filter.classList.remove('filter-active')
})


function setButtonText() {
    // Haal de URL op van de huidige pagina
    

    // Controleer of de URL het "added=true" query parameter bevat
    if (currentUrl.includes("added=true")) {
      // Dynamisch de tekst van de knop instellen
      
      button.innerText = "added";
      listpopup.classList.add("show");
      filter.classList.toggle('filter-active')
    }
  }

  // Roep de functie aan zodra de pagina geladen is
  window.onload = setButtonText;
  
