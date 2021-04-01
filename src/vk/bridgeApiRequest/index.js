import vkBridge from '@vkontakte/vk-bridge';
import randomizeRequestId from '../randomizeRequestId/index';
import STATS from '../../locals/STATS/index';

/**
 * Вызов метода АПИ
 * @return {Promise}
 */
const bridgeApiRequest = (
    method,
    params = {},
    accessToken = STATS.VK_ACCESS_TOKEN,
    version = STATS.VK_API_VERSION,
) => vkBridge
    .send('VKWebAppCallAPIMethod', {
        method,
        request_id: randomizeRequestId(),
        params: {
            ...params,
            access_token: accessToken,
            v: version,
        },
    })
    .then((success) => ({ result: 'success', data: success.response }))
    .catch((error) => ({ result: 'fail', error }));

export default bridgeApiRequest;
