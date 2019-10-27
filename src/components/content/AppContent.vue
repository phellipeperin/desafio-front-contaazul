<template>
    <section class="application-content">
        <weather-city-list :city-list="cityList" />
    </section>
</template>

<script>
    import cityList from '../../assets/js/cityList';

    import WeatherCityList from '../weather/WeatherCityList.vue';

    export default {
        name: 'AppContent',
        components: { WeatherCityList },
        data() {
            return {
                cityList: [],
            };
        },
        created() {
            this.cityList = cityList;
        },
    };
</script>

<style scoped lang="scss">
    .application-content {
        height: calc(100% - #{$header-height});
        padding: 0;
        overflow-x: hidden;
        overflow-y: auto;
        background-color: $color-background;
    }
</style>
