// Create a dynamic dropdown menu from GET using Await/Axios and Try/Catch //

const getOptions = async () => {
  const url = 'https://covid-api.mmediagroup.fr/v1/cases';
  try {
    const response = await axios.get(url);
    let countryList = Object.keys(response.data);
    // console.log(countryList);
    setOptions(countryList);
    return countryList;
  }
  catch (error) {
    console.error(error);
  }
}

getOptions()


// Create the form (dropdown menu) option tags //

function setOptions(list) {
  const selectTag = document.querySelector('#select-country');
  list.forEach((country) => {
    const optionTag = document.createElement('option');
    optionTag.textContent = country;
    optionTag.value = country;
    selectTag.append(optionTag);
  })
  return list
}


// Get option tag values //

let tempName = null

function getValue(e) {
  e.preventDefault();
  const optionValue = document.querySelector('#select-country').value;
  tempName = optionValue;
  // console.log(optionValue)
  getCountryName(optionValue)
}


// Eventhandler //

const form = document.querySelector('form');
form.addEventListener("submit", getValue);


// API request for country name //

const getCountryName = async (getName) => {
  try {
    const nameResponse = await axios.get(`https://covid-api.mmediagroup.fr/v1/cases?country=${getName}`);
    const name  = nameResponse.data.all;
    // appendName(name);
    console.log(name);
    return name;
  }
  catch (error) {
    console.error(error);
  }
}

// Create dynamic header tag for country name //

// function appendName(getName) {
//   const nameText = document.createTextNode(`Country: ${getName}`);
//   getName.appendChild(nameText);
//   document.getElementById("country-data-name").appendChild(getName);
// }


// API request attempt 2 //

// function showCountryName(name) {
//   let nameResponse = axios.get(`https://covid-api.mmediagroup.fr/v1/cases?country=${getValue}`);
//   document.getElementById('country-data-name').innerHTML = `Country: ${nameResponse.data}`;
//   return nameResponse;
// }

// API request for population data //

async function getPopulationData(populationValue) {
  try {
    const populationResponse = await axios.get(`https://covid-api.mmediagroup.fr/v1/cases?country=${getValue}`);
    const population = populationResponse.data.all.population;
    console.log(population);
    appendPopulation(population);
    return population;
  }
  catch (error) {
    console.error(error);
  }
}


// API request for confirmed cases //

async function getConfirmedCases(confirmedValue) {
  try {
    const confirmedResponse = await axios.get(`https://covid-api.mmediagroup.fr/v1/cases?country=${getValue}`)
    const confirmed = confirmedResponse.data.all.confirmed;
    console.log(confirmed);
    appendConfirmed(confirmed);
    return confirmed;
  }
  catch (error) {
    console.error(error);
  }
}


// Remove previous text div //

function removeText() {
  const removeTextDiv = document.querySelector()
}