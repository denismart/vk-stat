import prepareUtm from '../../vk/prepareUtm';

/**
 * Инициализирует гугл тег, необходимо вставить как можно раньше
 * @param {string} gtmCode - Код гугл тега.
 * @param {boolean} isNeedPrepareGtm - Нужно ли подготавливать GTM-теги автоматически.
 * @param {function} actionAfterLoad - Действие после загрузки.
 * @param {string} dataLayer - Название слоя с данными.
 * @return {Promise}
 */
const googleGtmInit = async (
    gtmCode,
    isNeedPrepareGtm = true,
    actionAfterLoad = () => {},
    dataLayer = 'dataLayer',
) => new Promise((resolve) => {
    if (isNeedPrepareGtm) {
        prepareUtm();
    }

    window[dataLayer] = window[dataLayer] || [];
    window[dataLayer].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    const head = document.getElementsByTagName('head')[0];
    const script = document.createElement('script');
    const dataLayerParam = dataLayer !== 'dataLayer' ? `&l=${dataLayer}` : '';
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmCode}${dataLayerParam}`;
    script.onload = () => {
        actionAfterLoad();
        resolve();
    };
    head.prepend(script);

    const body = document.getElementsByTagName('body')[0];
    const noscript = document.createElement('noscript');
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.googletagmanager.com/ns.html?id=${gtmCode}`;
    iframe.width = '0';
    iframe.height = '0';
    iframe.style.display = 'none';
    iframe.style.visibility = 'hidden';
    noscript.append(iframe);
    body.prepend(noscript);
});

export default googleGtmInit;
