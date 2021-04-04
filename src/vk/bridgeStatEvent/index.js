import bridgeApiRequest from '../bridgeApiRequest';
import getAppId from '../getAppId';
import getAppPlatform from '../getAppPlatform';

/**
 * Отслеживание статистики для ВК
 * @param {string} event - Название евента.
 * @param {Object} json - Действие после загрузки.
 * @param {string} screen - Экран на котором происходит.
 * @param {Object} params - Другие параметры.
 * @param {string} accessToken - VK Токен.
 * @param {string} version - Версия АПИ.
 * @return {Promise}
 */
const bridgeStatEvent = async (event, json = {}, screen = '', params = {}, accessToken, version) => bridgeApiRequest('statEvents.addMiniApps', {
    events: JSON.stringify([{
        type: 'type_navgo',
        type_navgo: {
            type: 'type_mini_app_custom_event_item',
        },
        timezone: 'gtm3',
        timestamp: Math.round((new Date()).getTime() / 1000),
        mini_app_id: getAppId(),
        vk_platform: getAppPlatform(),
        event,
        screen,
        url: window.location.href,
        json: JSON.stringify(json),
        ...params,
    }]),
}, accessToken, version);

export default bridgeStatEvent;
