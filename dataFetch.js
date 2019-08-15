const fs = require('fs');
const fetchSiteData = require('./src/util/fetchSiteData');
// const getContext = async () => api.getByUID('context', 'homepage');

async function getData() {
  console.log('FETCHING API...');
  const data = await fetchSiteData();
  fs.writeFileSync('src/app-data.json', JSON.stringify({ data }));
  console.log('FETCHED DATA');
}

getData();
