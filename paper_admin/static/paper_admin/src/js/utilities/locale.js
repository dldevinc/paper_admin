/**
 * Возвращает список вероятных локалей в порядке уменьшения вероятности.
 * Используется для локализации JS-библиотек.
 * @returns {String[]}
 */
export default function getPossibleLocales() {
    const locales = [];

    let locale = document.documentElement.lang;
    if (locale) {
        // оригинальное значение в нижнем регистре
        locale = locale.toLowerCase();
        locales.push(locale);

        if (locale.indexOf("-") !== -1) {
            // версия, где дефис заменен на нижнее подчеркивание
            locale = locale.replace("-", "_");
            locales.push(locale);
        }

        if (locale.indexOf("_") !== -1) {
            // версия без диалекта
            locale = locale.replace(/_.*$/, "");
            locales.push(locale);
        }
    }

    // версия по-умолчанию
    locales.push("en");

    return locales
}
