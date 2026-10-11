const path = require('path');
const dotenv = require('dotenv');

const result = dotenv.config({
    path: path.resolve(process.cwd(), '.env.dev')
});

console.log('DOTENV RESULT:', result);
console.log('BASE_URL:', process.env.BASE_URL);
console.log('USERNAME:', process.env.USERNAME);

module.exports = {
    baseUrl: 'https://www.saucedemo.com',
    username: 'standard_user',
    password: 'secret_sauce'
};
