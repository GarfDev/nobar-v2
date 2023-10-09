import English from './locales/en.json'
import Vietnamese from './locales/vi.json'

export const getMessages = (locale: string) => {
    switch (locale) {
        case 'en': return English
        case 'vi': return Vietnamese
        default: return Vietnamese
    }
}