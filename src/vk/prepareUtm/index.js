/**
 * Исправляем Utm параметры в заголовке, что бы гугл их нормально воспринимал из мини-аппа
 */
const prepareUtm = () => {
    const newLink = window.location.href
        .replace('#utm_content', '&utm_content')
        .replace('#utm_campaign', '&utm_campaign')
        .replace('#utm_source', '&utm_source')
        .replace('#utm_medium', '&utm_medium')
        .replace('#utm_term', '&utm_term');

    window.history.replaceState(null, '', newLink);
};

export default prepareUtm;
