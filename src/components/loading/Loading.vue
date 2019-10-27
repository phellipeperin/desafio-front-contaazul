<template>
    <div>
        <div v-if="condition">
            <slot />
        </div>
        <div v-if="!condition">
            <img
                alt="Loading..."
                src="../../assets/img/loader.svg"
                :width="size"
            >
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Loading',
        props: {
            condition: { type: Boolean, required: true },
            size: { type: Number, default: 42 },
        },
    };
</script>

<style scoped>

</style>
