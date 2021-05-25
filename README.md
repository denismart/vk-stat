# Библиотека для работыс GTM и statEvents.addMiniApps

### Установка с помощью npm:

    npm i vk-stat

### Установка с помощью yarn:

    yarn add vk-stat

### Пример импорта

    import { googleGtmInit } from 'mini-juice/googleGtm';
    import googleGtmInit from 'mini-juice/googleGtm/googleGtmInit';

### Подготовка UTM-тегов
Это необходимо чтобы UTM-теги, переданные через хэш приложения, попадали в статистику Google и любых других метрик.

	prepareUtm();

***Важно! Если вы передаете в хеше какие-либо другие данные, кроме UTM-тегов, то перед запуском функции **prepareUtm**, вам необходимо сначала выгрузить нужные вам данные из хеша***.

### Использования GTM
Для инициализации Google Tag Manager вставить **googleGtmInit** как можно ближе к началу инициализации React приложения, например в основной index.js сразу после импортов:

    googleGtmInit('GTM-XXXXXXX');

***Важно! При инициализации так же происходит автоматическая подготовка UTM-тегов в строке запуска, для того чтобы они попадали в GTM.***

Чтобы отсылать события используется **googleGtmEvent**:

    googleGtmEvent('', 'action');
    googleGtmEvent('category', 'action');
    googleGtmEvent('category', 'action', 'label');

Если надо отправить событие сразу после инициализации:

    googleGtmInit('GTM-XXXXXXX', () => {
        googleGtmEvent('app', 'init');
    });

### Использование statEvents.addMiniApps
Первым шагом вы должны получить **accessToken** с помощью **vk-bridge** и сохранить его с помощью **setVkAccessToken**:

    setVkAccessToken(accessToken);

После можно отправлять события напрямую в ВК, используя **bridgeStatEvent**. Название отправляемого события желательно использовать как ***action***. Старый формат записи ***category--action*** Метку *label* можно передать через json, указав вторым параметром:

    bridgeStatEvent('action', { label });
    bridgeStatEvent('category--action', { label });	// Старый формат

### Одновременное использование GTM + statEvents.addMiniApps
1. Ициниализируем GTM через **googleGtmInit**
2. Устанавливаем accessToken через **setVkAccessToken**
3. Используем **vkStat**, который одновременно отпраляет событие в GTM и VK (*action* обязательный параметр):

        vkStat({ action: 'action' });
        vkStat({ action: 'action', label: 'label' });
        vkStat({ category: 'category', action: 'action' });
        vkStat({ category: 'category', action: 'action', label: 'label' });

    При этом название события для статистики VK сгенерируются автоматически как *category--action* (если категорию передать в параметрах), и как *action* (если категорию не передавать в параметрах), а **label** (если он указан) упадет сразу в json.



Для отладки событий можно использовать следующий код:

    vkStat({ category: 'category', action: 'action', label: 'label'}, {}, true);


## Автор
vk: <a href="https://vk.com/denismart" target="_blank">Денис Кот</a>

## License

GPL © <a href="https://github.com/denismart" target="_blank">denismart</a>
