import getAppHash from '../getAppHash/index';
import prepareHash from '../prepareHash/index';

/**
 * Исправляем Utm параметры в заголовке, что бы гугл их нормально воспринимал из мини-аппа.
 * Так же полученный хеш разделяется и записывается в специальную локальную переменную,
 * чтобы его можно было использовать далее.
 */
const prepareUtm = () => {
    const oldHash = `#${getAppHash()}`;
    const newHash = oldHash.replace('#', '&');

    if (oldHash !== '#') {
        // Подготавливаем и сохраняем хэш
        prepareHash();

        // Обновляем ссылку во фрейме, чтобы сработал гугл
        const newLink = window.location.href
            .replace(oldHash, newHash);

        window.history.replaceState(null, '', newLink);
    }
};

export default prepareUtm;
