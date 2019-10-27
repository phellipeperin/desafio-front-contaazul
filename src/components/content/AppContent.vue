<template>
    <div class="application-content">
        <weather-city-list :city-list="cityList" />
    </div>
</template>

<script>
    import WeatherCityList from '../weather/WeatherCityList.vue';

    export default {
        name: 'AppContent',
        components: { WeatherCityList },
        data() {
            return {
                cityList: [
                    'Nuuk/GL',
                    'Urubici/BR',
                    'Nairobi/KE',
                ],
            };
        },
    };
</script>

<style scoped lang="scss">
    .application-content {
        height: calc(100% - #{$header-height});
        padding: 8px 0;
        overflow-x: hidden;
        overflow-y: auto;
        background-color: $color-background;
    }
</style>
