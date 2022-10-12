const age = prompt('How old are you?');
const city = prompt('What is your city?');
const sport = prompt('What kind of sport do you like?');
const capital = 'You live in the capital of';
const champion = 'Cool! Wanna be like';
const sorry = `We sorry that you didn't want to enter your`;
let userAge = '';
let userCity = '';
let userSport = '';
if (age === null) {
    userAge = `${sorry} age`;
} else {
    userAge = `Your age is ${age}`;
}
if (city === 'Kyiv' || city === 'kyiv') {
    userCity = `${capital} Ukraine`;
} else if (city === 'London' || city === 'london') {
    userCity = `${capital} Great Britain`;
} else if (city === 'Washington' || city === 'washington') {
    userCity = `${capital} the USA`;
} else if (city === null) {
    userCity = `${sorry} city`;
} else {
    userCity = `You live in ${city}`;
}
if (sport === 'Box' || sport === 'box') {
    userSport = `${champion} Usik?`;
} else if (sport === 'Football' || sport === 'football') {
    userSport = `${champion} Ronaldo?`;
} else if (sport === 'Basketball' || sport === 'basketball') {
    userSport = `${champion} LeBron James?`;
} else if (sport === null) {
    userSport = `${sorry} favorite sport`;
} else {
    userSport = (`${sport} is cool!`);
}
let userInfo = `${userAge}
${userCity}
${userSport}`;
alert(userInfo);