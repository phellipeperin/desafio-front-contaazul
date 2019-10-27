import storage from './storage';

const ONE_MINUTE = 60 * 1000;

export default {
    name: 'cachedStorage',
    mixins: [storage],
    data() {
        return {
            defaultCacheTime: 10 * ONE_MINUTE,
        };
    },
    methods: {
        saveCachedData(name, data, cacheTime = this.defaultCacheTime) {
            this.saveData(name, { data, expireAt: new Date().getTime() + cacheTime });
        },
        loadCachedData(name) {
            const loadedData = this.loadData(name);
            if (loadedData) {
                if (loadedData.expireAt && loadedData.expireAt > new Date().getTime()) {
                    return loadedData.data;
                }
                this.clearData(name);
            }
            return null;
        },
    },
};
