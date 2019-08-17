const fs = require('fs');
const esm = require('esm')(module);

const fetchSiteData = esm('./src/util/fetchSiteData').default;

async function getData() {
  console.log('FETCHING API...');
  const data = await fetchSiteData();
  fs.writeFileSync('src/app-data.json', JSON.stringify({ data }));
  console.log('FETCHED DATA');
}

getData();
