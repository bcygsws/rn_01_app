import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * @Desc:async storage-异步存储的使用
 * 参考文档：https://react-native-async-storage.github.io/async-storage/docs/install/
 * 封装本地存储的增删改查的方法
 * set
 * get
 * update
 * remove 删除指定键的数据
 * delete 清空所有数据
 *
 *
 **/
class Storage {
    /**
     * @param {string} key
     * @param {string|Object,联合类型} value
     * @return {Promise}
     *
     * */
    static set(key: string, value: string | Object) {
        let val = JSON.stringify(value);
        return AsyncStorage.setItem(key, val);
    }

    /**
     * @param {string} key
     * @return {Promise}
     *
     * */
    static get(key: string) {
        return AsyncStorage.getItem(key).then(val => {
            if (val) {
                return JSON.parse(val);// parse可能返回的是一个对象，具体看存入的数据类型
            }
        }).catch(() => null);
    }

    /**
     * @param {string} key
     * @param {string|Object,联合类型} value
     * @return {Promise}
     *
     * */
    static update(key: string, newVal: string | Object) {
        return AsyncStorage.getItem(key).then(oldVal => {
            let val = typeof oldVal === 'string' ? newVal : Object.assign({}, oldVal, newVal);
            return AsyncStorage.setItem(key, JSON.stringify(val));
        });

    }

    /**
     * @param {string} key
     * @return {Promise}
     *
     * */

    static delete(key: string) {
        return AsyncStorage.removeItem(key);
    }

    /**
     * @return {Promise}
     *
     * */
    static clear() {
        return AsyncStorage.clear();
    }
}

export default Storage;
