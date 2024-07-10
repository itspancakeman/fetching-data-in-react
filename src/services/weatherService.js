const API_KEY = '6ace8497bfa446529c442352241007';
const BASE_URL = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}`;

const show = async (city) => {
    try {
        const queryString = `&q=${city}`;
        const res = await fetch(BASE_URL + queryString);
        const data = await res.json();
        return data;
    } catch (error) {
        console.log('error: ', error);
    }
};

export { show };