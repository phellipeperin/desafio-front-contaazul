<template>
    <header class="application-header">
        <img
            alt="Logo"
            src="../../assets/img/logo.svg"
            class="logo"
        >
    </header>
</template>

<script>
    export default {
        name: 'AppHeader',
    };
</script>

<style scoped lang="scss">
    .application-header {
        box-sizing: border-box;
        width: 100%;
        height: $header-height;
        padding: $header-y-padding 0;
        background-color: $color-header-background;
        text-align: center;

        .logo {
            height: calc(#{$header-height} - 2 * #{$header-y-padding});
        }
    }
</style>
