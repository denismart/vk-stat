import STATS from '../../locals/STATS/index';
import getAppHash from '../getAppHash/index';

/**
 * Хэш приложения разделяется и записывается в специальную локальную переменную,
 * чтобы его можно было использовать далее.
 */
const prepareHash = () => {
    const hash = getAppHash();

    if (hash !== '') {
        const preparedHash = hash.split('&');
        preparedHash.forEach((oneHash) => {
            const hashParts = oneHash.split('=');
            const hashKey = hashParts[0];
            const hashValue = hashParts[1] ? hashParts[1] : hashKey;

            STATS.APP_HASH[hashKey] = hashValue;
            STATS.APP_HASH_FULL = hash;
        });
    }
};

export default prepareHash;
