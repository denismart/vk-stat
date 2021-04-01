/**
 * Получаем ID приложения
 * @return {number}
 */
const getAppId = () => +new URL(window.location.href).searchParams.get('vk_app_id');

export default getAppId;
