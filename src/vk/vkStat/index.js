import googleGtmEvent from '../../googleGtm/googleGtmEvent';
import bridgeStatEvent from '../bridgeStatEvent';

/**
 * Отслеживание гугл и ВК статистики
 * @param {Object} params - Параметры функции.
 * @param {string} params.category - Название категории.
 * @param {string} params.action - Название действия.
 * @param {string} params.label - Название метки.
 * @param {object} bridgeStatEventParams - Параметры для метода bridgeStatEvent.
 * @param {boolean} isDebug - режим отладки.
 */
const vkStat = async (params, bridgeStatEventParams = {}, isDebug = false) => {
    const { category, action, label } = params;
    const delimiter = bridgeStatEventParams.delimiter || '--';

    let json = bridgeStatEventParams && bridgeStatEventParams.json
        ? bridgeStatEventParams.json
        : {};
    if (label) {
        json = { ...json, label };
    }

    const googleGtmEventResult = googleGtmEvent(category || 'main', action, label);

    const bridgeStatEventResult = await bridgeStatEvent(
        category ? `${category}${delimiter}${action}_front` : `${action}_front`,
        json,
        bridgeStatEventParams.screen,
        bridgeStatEventParams.params,
        bridgeStatEventParams.accessToken,
        bridgeStatEventParams.version,
    ).catch(console.log);

    if (isDebug) {
        console.log('-------------');
        console.log('stats result:');
        console.log('google');
        console.log(googleGtmEventResult);
        console.log('vk');
        console.log(bridgeStatEventResult);
        console.log('-------------');
    }
};

export default vkStat;
