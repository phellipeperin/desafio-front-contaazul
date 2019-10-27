<template>
    <div class="weather-city">
        <div class="weather-city-header">
            <h4>{{ cityName }}</h4>
        </div>
        <div class="weather-city-content">
            <h1>
                -4º
            </h1>
        </div>
        <div class="weather-city-footer">
            <p>Updated at ____</p>
        </div>
    </div>
</template>

<script>
    import weatherApi from '../../mixins/api/weatherApi';

    export default {
        name: 'WeatherCityItem',
        mixins: [weatherApi],
        props: {
            cityName: { type: String, required: true },
            showExtraInfo: { type: Boolean, default: false },
        },
        data() {
            return {
                weatherData: {},
                onLoading: true,
            };
        },
        created() {
            // base: "stations"
            // clouds: {all: 75}
            // cod: 200
            // coord: {lon: -51.74, lat: 64.17}
            // dt: 1572191716
            // id: 3421319
            // main:
            //     humidity: 75
            // pressure: 1021
            // temp: 273.15
            // temp_max: 273.15
            // temp_min: 273.15
            // __proto__: Object
            // name: "Nuuk"
            // sys: {type: 1, id: 86, country: "GL", sunrise: 1572173596, sunset: 1572204492}
            // timezone: -10800
            // visibility: 10000
            // weather: Array(1)
            // 0:
            // description: "broken clouds"
            // icon: "04d"
            // id: 803
            // main: "Clouds"
            // __proto__: Object
            // length: 1
            // __proto__: Array(0)
            // wind: {speed: 4.1, deg: 50}
            // TODO verificar o cache
            // this.getCityWeather(this.cityName).then((response) => {
            //     console.log(response);
            // });
        },
    };
</script>

<style scoped lang="scss">
    .weather-city {
        @include bow-shadow(2px, 2px, 5px, 0, $color-box-shadow);
        max-width: 280px;
        margin: 0 auto;

        div[class^="weather-city-"] {
            box-sizing: border-box;
            text-align: center;

            h1, h2, h3, h4, h5, h6, p, span {
                margin: 0;
            }
        }
    }

    .weather-city-header {
        padding: 12px 8px;
        background-color: $color-card-background;

        h4 {
            color: $color-main-text;
            font-size: 1.3em;
            font-weight: 300;
        }
    }

    .weather-city-content {
        padding: 24px 8px;
        background-color: $color-card-background;

        h1 {
            font-size: 5em;
            font-weight: 300;
            margin: 0;
        }
    }

    .weather-city-footer {
        padding: 16px 8px;
        background-color: $color-card-footer-background;

        p {
            color: $color-auxiliar-text;
            font-size: 0.75em;
        }
    }
</style>
