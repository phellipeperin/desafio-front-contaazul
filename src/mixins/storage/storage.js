const APP_PREFIX = 'weather_';

export default {
    name: 'storage',
    methods: {
        saveData(name, value) {
            window.localStorage.setItem(`${APP_PREFIX}${name}`, JSON.stringify(value));
        },
        loadData(name) {
            return JSON.parse(window.localStorage.getItem(`${APP_PREFIX}${name}`));
        },
        clearData(name) {
            window.localStorage.removeItem(`${APP_PREFIX}${name}`);
        },
    },
};
