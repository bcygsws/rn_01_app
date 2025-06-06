/**
 * @Desc:  新闻头条
 * @Author: Bao Chengyi
 * 头条新闻，接口：https://www.juhe.cn/docs/api/id/235
 * 分类：
 * @param {string}
 * 支持类型,type请求参数的可能取值
 * top(推荐,默认)
 * guonei(国内)
 * guoji(国际)
 * yule(娱乐)
 * tiyu(体育)
 * junshi(军事)
 * keji(科技)
 * caijing(财经)
 * youxi(游戏)
 * qiche(汽车)
 * jiankang(健康)
 *
 * */
import {$http} from '@/utils';

export interface ICatList {
    key?: string;
    type: string;
    page: number;
    page_size: number;
    is_filter: number;
}

const api_key = 'c6af93fdbd0615aab2a1ba0eea80676a';
const getCatListAPI = (val: ICatList) => {
    const {type, page, page_size, is_filter} = val;
    return $http.request({
        url: 'http://v.juhe.cn/toutiao/index',
        method: 'GET',
        params: {
            key: api_key,
            type,
            page,
            page_size,
            is_filter
        },
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
};
export  {
    getCatListAPI
};
