import { reactive } from 'vue'

export const store = reactive({
    filmList: [],
    seriesList: [],
    langAvaible: [
        'de', 'en', 'es', 'fr', 'it', 'ja', 'ru', 'us', 'zh'
    ],
});