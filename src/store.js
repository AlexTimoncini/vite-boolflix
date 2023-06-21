import { reactive } from 'vue'

export const store = reactive({
    filmList: [],
    langAvaible: [
        'de', 'en', 'es', 'fr', 'it', 'ja', 'ru', 'us', 'zh'
    ],
});