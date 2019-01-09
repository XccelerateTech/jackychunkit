var asia = {
    countries: {
        India: {
            Mumbai: {
                population: 18.5
            }
        },
        China: {
            Beijing: {
                population: 21.5
            },
            "Hong Kong": {
                population: 7.3
            },
        }
    }
}

var MumbaiPopulation = asia.countries.Mumbai.population;
var BeijingPopulation = asia.countries.China.Beijing.population;
var HKPopulation = asia.countries.China["Hong Kong"].population;