import translations from './translations.json';

const language =  "pl";

export function translate(key) {
    const allItems = translations.items;
    const item = allItems[key];
    if (item && item[language]) {
        return item[language];
    }
    return key;
}

export function translateArray(array, separator) {
    if (separator) {
        const translated = array.map(item => translate(item));
        return translated.join(`${separator} `);
    }
    return array.reduce((total, item) => `${total} ${translate(item)}`, '');
}
