<template>
    <div class="error-container">
        <h4>Something went wrong</h4>
        <button
            type="button"
            class="btn-try-again"
            @click="reload"
        >
            Try Again
        </button>
    </div>
</template>

<script>
    export default {
        name: 'ErrorContainer',
        methods: {
            reload() { this.$emit('reload'); },
        },
    };
</script>

<style scoped lang="scss">
    .error-container {
        box-sizing: border-box;
        width: 100%;
        text-align: center;

        h4 {
            font-size: 1.1rem;
            font-weight: 300;
            margin-top: 0;
            color: $color-error-text;
        }

        .btn-try-again {
            font-size: 1rem;
            padding: 12px 20px;
            border: 2px solid $color-primary-button;
            border-radius: 28px;
            color: $color-primary-button;
            background-color: transparent;
            @include btn-transition();

            &:focus,
            &:hover {
                background-color: $color-primary-button;
                color: white;
                cursor: pointer;
                @include btn-transition();
            }
        }
    }
</style>
