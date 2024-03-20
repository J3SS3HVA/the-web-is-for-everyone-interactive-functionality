//1. setup
// Importeer het npm pakket express uit de node_modules map
import express from 'express'

// Importeer de zelfgemaakte functie fetchJson uit de ./helpers map
import fetchJson from './helpers/fetch-json.js'

// Stel het basis endpoint in
const apiUrl = "https://fdnd-agency.directus.app/items/"
const apiFamily = (apiUrl + 'oba_family')
const apiProfile = (apiUrl + 'oba_profile')
const apiItem = (apiUrl + 'oba_item')


// Maak een nieuwe express app aan
const app = express()

// Stel ejs in als template engine
app.set('view engine', 'ejs')
app.set('views', './views')

// Gebruik de map 'public' voor statische resources, zoals stylesheets, afbeeldingen en client-side JavaScript
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

// 2. routes
app.get('/', function(request, response) {
  fetchJson(apiItem).then((items) => {
      console.log("API Response:", items);

  
      if (items && items.data) {
  
          console.log("Data in Response:", items.data);

  
          response.render('index', {
              data: items.data 
          });
      } else {
          console.error("Invalid or unexpected API response format");
          response.status(500).send("Internal Server Error");
      }
  });
});

app.get('/family', async function(request, response) {
    try {
      const families = await fetchJson(apiFamily);
      const profiles = await fetchJson(apiProfile);
  
      console.log(families.data);
      console.log(profiles.data);
  
      response.render('family', {
        families: families.data,
        profiles: profiles.data,
      });
    } catch (error) {
      console.error('Error fetching data:', error);
      response.status(500).send('Internal Server Error');
    }
  });


app.get('/detail/:id', function(request, response){
    console.log(request.params)
    fetchJson(apiItem + '?filter={"id":' + request.params.id + '}').then((items) => {
        response.render('detail', {
            
            items: items.data/*hier zeg ik dat iedereen getoond moet worden*/

        });
    })
})

app.post('/detail/:id', function(request, response){
    fetchJson(apiItem + '?filter={"id":' + request.params.id + '}').then((items) => {
        response.render('detail', {
        
            items: items.data/*hier zeg ik dat iedereen getoond moet worden*/

         });
    })
})

// 3. Start de webserver

// Stel het poortnummer in waar express op moet gaan luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})
