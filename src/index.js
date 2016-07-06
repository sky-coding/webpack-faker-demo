var faker = require('faker');

try {
  var account = faker.finance.account().toString();
  console.log('faker account:', account);
  document.write('faker account', account);
} catch(e) {
  console.log('error', e);
}

