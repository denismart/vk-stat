/**
 * Получаем ID приложения
 * @return {string}
 */
const getAppPlatform = () => new URL(window.location.href).searchParams.get('vk_platform');

export default getAppPlatform;
