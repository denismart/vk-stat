import STATS from '../STATS/index';

/**
 * Устанавливаем MINI_VK_API_VERSION
 */
const setVkApiVersion = (value) => {
    STATS.VK_API_VERSION = value;
};

export default setVkApiVersion;
