const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

var cities = [];
const citiesData = fetch(endpoint).then(res=> res.json()).then(data=> cities.push(...data));
console.log(citiesData);

function filterCitites(keyword, data) {
    const regex = new RegExp(keyword, 'gi');
    return data.filter(place=> {
        return place.city.match(regex) || place.state.match(regex);
    });
}

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

function typeAhead(e) {
    const filtered = filterCitites(this.value, cities);
    const suggestions = document.querySelector('.suggestions');
    const html = filtered.map(result => {

        const regex = new RegExp(this.value, 'gi');
        const cityName = result.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = result.state.replace(regex, `<span class="hl">${this.value}</span>`);
        const population = formatNumber(result.population);
        return `<li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${population}</span>
        </li>`;
    }).join('');
    suggestions.innerHTML = html;

}

const search = document.querySelector('.search');
search.addEventListener('keyup', typeAhead);
search.addEventListener('change', typeAhead);