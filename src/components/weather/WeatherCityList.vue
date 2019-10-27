<template>
    <div class="container full-height">
        <div class="row full-height">
            <div
                v-for="(city, i) in cityList"
                :key="city.name"
                class="city col-4 col-mobile-12"
                :class="[getMobileOrder(city, i)]"
            >
                <weather-city-item
                    :show-extra-info="city.extraInfo"
                    :city-name="city.name"
                />
            </div>
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
        methods: {
            getMobileOrder(city, index) {
                return `col-mobile-order-${city.extraInfo ? 1 : index + 2}`;
            },
        },
    };
</script>

<style scoped lang="scss">
    @media only screen and (min-width: $mobile-max-width) {
        .city {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    }

</style>
