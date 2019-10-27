<template>
    <div class="weather-city">
        <div class="weather-city-header">
            <h4>{{ cityName }}</h4>
        </div>
        <div class="weather-city-content">
            <loading :condition="onLoading">
                <h1
                    v-if="!hasError"
                    :class="[getTempColor]"
                >
                    <span>{{ weatherData.temp.toFixed(0).trim() }}</span>
                    <span class="temp-unit">o</span>
                </h1>
                <error-container
                    v-if="hasError"
                    @reload="reload"
                />
            </loading>
        </div>
        <div
            v-if="!onLoading && !hasError"
            class="weather-city-footer"
        >
            <p>
                Updated at
                <span class="updated-time">{{ weatherData.updateTime | hour }}</span>
            </p>
        </div>
    </div>
</template>

<script>
    import weatherApi from '../../mixins/api/weatherApi';
    import weatherCachedStorage from '../../mixins/storage/weatherCachedStorage';

    import Loading from '../loading/Loading.vue';
    import ErrorContainer from '../error/ErrorContainer.vue';

    export default {
        name: 'WeatherCityItem',
        components: { Loading, ErrorContainer },
        mixins: [weatherApi, weatherCachedStorage],
        props: {
            cityName: { type: String, required: true },
            showExtraInfo: { type: Boolean, default: false },
        },
        data() {
            return {
                weatherData: {},
                onLoading: true,
                hasError: false,
            };
        },
        computed: {
            getTempColor() {
                if (this.weatherData.temp <= 5) return 'cold';
                if (this.weatherData.temp <= 25 && this.weatherData.temp > 5) return 'warm';
                if (this.weatherData.temp > 25) return 'hot';
                return '';
            },
        },
        created() {
            const savedWeatherData = this.loadCityData(this.cityName);
            if (savedWeatherData) {
                this.weatherData = savedWeatherData;
                this.onLoading = false;
                this.hasError = true;
            } else {
                this.getWeatherDataFromApi();
            }

            setInterval(() => { this.getWeatherDataFromApi(); }, 10 * 60 * 1000);
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
                    this.hasError = false;
                }).catch(() => {
                    this.onLoading = false;
                    this.hasError = true;
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
            font-size: 1.3rem;
            font-weight: 300;
        }
    }

    .weather-city-content {
        position: relative;
        padding: 24px 8px;
        background-color: $color-card-background;

        h1 {
            font-size: 5rem;
            font-weight: 300;
            margin: 0;

            &.cold { color: $color-temp-cold; }
            &.warm { color: $color-temp-warm; }
            &.hot{ color: $color-temp-hot; }
        }

        span.temp-unit {
            position: absolute;
            top: 32px;
            font-size: 1.5rem;
            font-weight: 600;
        }
    }

    .weather-city-footer {
        padding: 16px 8px;
        background-color: $color-card-footer-background;

        p {
            color: $color-auxiliar-text;
            font-size: 0.75rem;
        }

        .updated-time {
            text-transform: uppercase;
        }
    }
</style>
