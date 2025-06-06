/**
 * @Desc；新闻列表，页面详情
 * @Autor: Bao Chengyi
 * 装包：npm i react-native-webview --save
 *
 * react-native获取查询路由参数，使用useRoute钩子
 * 方式一
 *  const [searchParams, setSearchParams] = useSearchParams();
 *
 * 方式二
 * const {search}=useLocation();
 * const param=new URLSearchParams(search);
 *
 * */
import {View} from 'react-native';
import {WebView} from 'react-native-webview';
import {RouteProp, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '@/routes';

const Detail = () => {
    const route = useRoute<RouteProp<RootStackParamList, 'Detail'>>();
    const {url} = route.params ?? '';
    console.log('url===', url);
    return (
        <View style={{flex: 1}}>
            <WebView source={{uri: url}}/>
        </View>
    );
};
export default Detail;

