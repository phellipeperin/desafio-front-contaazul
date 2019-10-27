<template>
    <div class="app">
        <app-header />
        <app-content />
    </div>
</template>

<script>
    import AppHeader from './components/header/AppHeader.vue';
    import AppContent from './components/content/AppContent.vue';

    export default {
        name: 'App',
        components: {
            AppHeader,
            AppContent,
        },
    };
</script>

<style scoped lang="scss">
    .app {
        height: 100%;
        color: $color-main-text;
        font-family: Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>
