<template>
    <div class="weather-city">
        <div class="weather-city-header">
            <h4>{{ city }}</h4>
        </div>
        <div class="weather-city-content">

        </div>
        <div class="weather-city-footer">

        </div>
    </div>
</template>

<script>
    export default {
        name: 'WeatherCityItem',
        props: {
            city: { type: String, required: true },
        },
    };
</script>

<style scoped lang="scss">
    .weather-city {
        @include bow-shadow(2px, 2px, 5px, 0, $color-box-shadow);
    }

    .weather-city-header {
        background-color: $color-card-background;
    }
</style>
