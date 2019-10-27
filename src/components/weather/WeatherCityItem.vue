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
    import weatherCachedStorage from '../../mixins/storage/weatherCachedStorage';

    export default {
        name: 'WeatherCityItem',
        mixins: [weatherApi, weatherCachedStorage],
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
            const savedWeatherData = this.loadCityData(this.cityName);
            if (savedWeatherData) {
                this.weatherData = savedWeatherData;
                this.onLoading = false;
            } else {
                this.getWeatherDataFromApi();
            }
        },
        methods: {
            getWeatherDataFromApi() {
                this.getCityWeather(this.cityName).then((response) => {
                    this.weatherData = {
                        ...response.data.main,
                        updateTime: new Date().getTime(),
                    };
                    this.saveCityData(this.cityName, this.weatherData);
                    this.onLoading = false;
                });
            },
            reload() {
                this.onLoading = true;
                this.getWeatherDataFromApi();
            },
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
