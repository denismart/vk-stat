/**
 * Посылает событие в гугл тег
 * @param {string} category - Категория события.
 * @param {string} action - Действие события.
 * @param {string} event - Название события.
 * @param {string} dataLayer - Слой данных.
 */
const googleGtmEvent = (category, action, event = 'event_gtm', dataLayer = 'dataLayer') => {
    if (window[dataLayer]) {
        window[dataLayer].push({ event, ec: category, ea: action });
        return true;
    }

    return false;
};

export default googleGtmEvent;
