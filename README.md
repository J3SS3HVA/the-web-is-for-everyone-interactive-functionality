> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# Titel
Oba

<img width="200px" src="https://github.com/J3SS3HVA/server-side-rendering-server-side-website/assets/144009667/b5976657-f0dc-4057-ad5e-2bf484f74b9f">


## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
<!-- In de Beschrijving staat kort beschreven wat voor project het is en wat je hebt gemaakt -->
<img width="500px" src="https://github.com/J3SS3HVA/server-side-rendering-server-side-website/assets/144009667/6ee5fcd7-3199-4669-8c5d-6fca71640fe2">

Deze sprint zijn wij verder gegaan om voor Oba een gebruikers pagina te maken. 
Het word een pagina waar jij als admin de users binnen de familie kan beheren, items kan lenen, de status van een gebruiker bekijken (bijvoorbeeld of hij zijn item moet inleveren of niet), recensies kan achterlaten en toevoegen aan je favoriete.
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->

## Gebruik
<!--Bij Gebruik staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
Je begint bij de index(de overzichts pagina met allemaal items. Hierbnij heb je de mogelijkheid om op je eigen account dingen toe tevoegen aan iets. klik je op een item dan word je naar zijn detail pagina gestuurd en kan je vervolgens zelf kiezen wat je precies met die item wil doen. Je bent zelf een admin dat betekent dat jij een soort van leider bent in je familie. Dat betekent dat je alles kan beheren aan alle accounts die zich bevinden in jouw famillie omgeving.

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met Javascript gedaan en hoe? Misschien heb je een framwork of library gebruikt? -->
Dingen die wij gebruikten is de directus cms waar wij onze dat hebben toegevoegd bijvoorbeeld de items met al hun info en plaatjes, een family lijst met namen + arrays etc.

de code zelf is in ejs vrij klein omdat, ik veel gebruik heb gemaakt van een for each loop voor de items, en users
bijvoorbeeld hier: 

### ejs/html
je ziet hier vrij weinig qua code maar, met de for each loop doet hij alles wat onder de `<% data.filter(item => item.item_type === 'book').forEach(book => { %>` staat keer het aantal boeken die er zijn.
```html
       <h2>Boeken</h2>
        <% data.filter(item => item.item_type === 'book').forEach(book => { %>
            <li onclick="window.location.href='./detail/<%= book.id %>'">
                <h3><%= book.title %></h3>
                <img src="https://fdnd-agency.directus.app/assets/<%= book.afbeelding %>" alt="<%= book.title %> Image">
                €<%= book.price %>
            </li>
        <% }); %>
```

### css
Voor deze sprint ben ik een beetje bezig geweest met iets dat heet progressive enhancement. Progressive enhancement betekent dat je verbeteringen toevoegd zodat een bepaald iets toegankelijk en werkend is op elke browser. het testen op verschillende browsers is wat ik als eerst deed. ik kwam namelijk bij firefox tegen dat de navbar die ik heb een onnodige scrollbar hebt. Ook het scrollen zelf werkte niet met mobile formaat op fire fox
dus ik heb het volgende gedaan:

De `@-moz-document url-prefix()` zorgt ervoor dat de volgende aanpassingen binnen zijn {} alleen voor firefox gelden.
Ik heb hem zo gemaakt dat hij uiteindelijk precies hetzelfde eruit ziet als bijvoorbeeld in chrome
```css
@-moz-document url-prefix() { 
    @media screen and (max-height: 47.0em) {
      .sidebar .menu-bar {
        overflow-x: hidden;
        scrollbar-width: none;
      }
      
    }
  }
```

### javascript

Deze sprint heb ik ook mijn eerste client side script gemaakt voor dit project

Sinds ik het voor elkaar heb gekregen om items toetevoegen aan een lijst heb ik daarbij ook een functie gemaakt die een popup weergeeft om te laten weten aan een gebruiker dat je item aan de lijst is toegevoegd
```javascript
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
```
## Installatie
<!-- Bij Instalatie staat hoe een andere developer aan jouw repo kan werken -->
1. clone de code. klik op de groene knop code en clone het of download zip.
2. als je node hebt open je de terminal. Boven aan vind je de terminal button of klik ctrl +  `
3. dan type npm start of npm run dev om de server te starten
4. wil je de server sluiten doe dan dit in de terminal ctrl + c

## Bronnen
encouraging-slacks-ant.cyclic.app/
## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
