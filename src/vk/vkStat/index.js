import googleGtmEvent from '../../googleGtm/googleGtmEvent';
import bridgeStatEvent from '../bridgeStatEvent';

/**
 * Получение данных из Storage
 * @param {string} category - Название категории.
 * @param {string} action - Название действия.
 * @param {object} bridgeStatEventParams - Параметры для метода bridgeStatEvent.
 * @param {boolean} isDebug - режим отладки.
 */
const vkStat = async (
    category,
    action,
    bridgeStatEventParams,
    isDebug = false,
) => {
    const delimiter = bridgeStatEventParams.delimiter || '--';

    const googleGtmEventResult = googleGtmEvent(category, action);
    const bridgeStatEventResult = await bridgeStatEvent(
        `${category}${delimiter}${action}`,
        bridgeStatEventParams.screen,
        bridgeStatEventParams.json,
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
