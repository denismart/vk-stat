import vkBridge from '@vkontakte/vk-bridge';
import getAppId from '../getAppId/index';

/**
 * Получаем токен пользователя ВК
 * @param {array | string} scope - Массив прав
 * @return {Promise}
 */
const bridgeGetAccessToken = (scope = []) => vkBridge.send(
    'VKWebAppGetAuthToken',
    { app_id: getAppId(), scope: Array.isArray(scope) ? scope.join(',') : scope },
);

export default bridgeGetAccessToken;
