import bridgeGetAccessToken from '../bridgeGetAccessToken/index';
import setVkAccessToken from '../../locals/setVkAccessToken/index';

/**
 * Получаем токен пользователя ВК и сразу записываем его в случае успеха
 * @param {array | string} scope - Массив прав.
 * @return {Promise}
 */
const bridgeGetAccessTokenAndSave = (scope = []) => bridgeGetAccessToken(scope)
    .then((response) => {
        setVkAccessToken(response.access_token);
        return response.access_token;
    })
    .catch(console.log);

export default bridgeGetAccessTokenAndSave;
