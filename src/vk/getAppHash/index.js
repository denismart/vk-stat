/**
 * Получаем хэш приложения
 * @return {string}
 */
const getAppHash = () => window.location.hash.replace('#', '');

export default getAppHash;
