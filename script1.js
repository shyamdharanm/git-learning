var request=new XMLHttpRequest();
fetch('https://restcountries.com/v2/all')
  .then(response => response.json())
  .then(data => {
    const europeCountries = data.filter(country => country.region === 'Europe');
    const totalPopulation = europeCountries.reduce((acc, country) => acc + country.population, 0);
    console.log(`Total population of Europe region: ${totalPopulation}`);
  })
  .catch(error => console.log(error));
