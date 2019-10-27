<template>
    <div class="flex-grid">
        <div
            v-for="city in cityList"
            :key="city"
            class="col"
        >
            <weather-city-item :city="city" />
        </div>
    </div>
</template>

<script>
    import WeatherCityItem from './WeatherCityItem.vue';

    export default {
        name: 'WeatherCityList',
        components: { WeatherCityItem },
        props: {
            cityList: { type: Array, required: true },
        },
    };
</script>

<style scoped>

</style>
