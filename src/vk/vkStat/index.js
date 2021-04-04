import googleGtmEvent from '../../googleGtm/googleGtmEvent';
import bridgeStatEvent from '../bridgeStatEvent';

/**
 * Отслеживание гугл и ВК статистики
 * @param {string} category - Название категории.
 * @param {string} action - Название действия.
 * @param {string} label - Название метки.
 * @param {object} bridgeStatEventParams - Параметры для метода bridgeStatEvent.
 * @param {boolean} isDebug - режим отладки.
 */
const vkStat = async (
    category,
    action,
    label = undefined,
    bridgeStatEventParams = {},
    isDebug = false,
) => {
    const delimiter = bridgeStatEventParams.delimiter || '--';

    let json = bridgeStatEventParams && bridgeStatEventParams.json
        ? bridgeStatEventParams.json
        : {};
    if (label) {
        json = { ...json, label };
    }

    const googleGtmEventResult = googleGtmEvent(category, action, label);

    const bridgeStatEventResult = await bridgeStatEvent(
        `${category}${delimiter}${action}`,
        bridgeStatEventParams.screen,
        json,
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
