/**
 * @Desc:根据经纬度获取城市天气指数
 *
 * */
import {useEffect, useState} from 'react';
import {getIndicesAPI, ILocation} from '@/apis/location.tsx';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import useCoord from '@/hooks/coord.tsx';
import {WINDOW_WIDTH} from '@/utils/height.tsx';
import CityScreen from '@/components/city';
import SwiperScreen from '@/components/swiper';

const INDICES = [
    {
        'date': '2025-05-29',
        'type': '1',
        'name': '运动指数',
        'level': '2',
        'category': '较适宜',
        'text': '天气较好，户外运动请注意防晒。推荐您进行室内运动。'
    },
    {
        'date': '2025-05-29',
        'type': '2',
        'name': '洗车指数',
        'level': '1',
        'category': '适宜',
        'text': '适宜洗车，未来持续两天无雨天气较好，适合擦洗汽车，蓝天白云、风和日丽将伴您的车子连日洁净。'
    },
    {
        'date': '2025-05-29',
        'type': '3',
        'name': '穿衣指数',
        'level': '6',
        'category': '热',
        'text': '天气热，建议着短裙、短裤、短薄外套、T恤等夏季服装。'
    },
    {
        'date': '2025-05-29',
        'type': '4',
        'name': '钓鱼指数',
        'level': '2',
        'category': '较适宜',
        'text': '较适合垂钓，但天气稍热，会对垂钓产生一定的影响。'
    },
    {
        'date': '2025-05-29',
        'type': '5',
        'name': '紫外线指数',
        'level': '5',
        'category': '很强',
        'text': '紫外线辐射极强，建议涂擦SPF20以上、PA++的防晒护肤品，尽量避免暴露于日光下。'
    },
    {
        'date': '2025-05-29',
        'type': '6',
        'name': '旅游指数',
        'level': '1',
        'category': '适宜',
        'text': '天气较好，温度适宜，是个好天气哦。这样的天气适宜旅游，您可以尽情地享受大自然的风光。'
    },
    {
        'date': '2025-05-29',
        'type': '7',
        'name': '过敏指数',
        'level': '4',
        'category': '易发',
        'text': '天气条件易诱发过敏，易过敏人群应减少外出，外出宜穿长衣长裤并佩戴好眼镜和口罩，外出归来时及时清洁手和口鼻。'
    },
    {
        'date': '2025-05-29',
        'type': '8',
        'name': '舒适度指数',
        'level': '2',
        'category': '较舒适',
        'text': '白天天气晴好，您在这种天气条件下，会感觉早晚凉爽、舒适，午后偏热。'
    },
    {
        'date': '2025-05-29',
        'type': '9',
        'name': '感冒指数',
        'level': '1',
        'category': '少发',
        'text': '各项气象条件适宜，无明显降温过程，发生感冒机率较低。'
    },
    {
        'date': '2025-05-29',
        'type': '10',
        'name': '空气污染扩散条件指数',
        'level': '2',
        'category': '良',
        'text': '气象条件对空气污染物稀释、扩散和清除无明显影响，易感人群应适当减少室外活动时间。'
    },
    {
        'date': '2025-05-29',
        'type': '11',
        'name': '空调开启指数',
        'level': '3',
        'category': '较少开启',
        'text': '您将感到很舒适，一般不需要开启空调。'
    },
    {
        'date': '2025-05-29',
        'type': '12',
        'name': '太阳镜指数',
        'level': '4',
        'category': '很必要',
        'text': '白天天空晴朗，太阳辐射很强，建议佩戴透射比2级且标注UV400的遮阳镜'
    },
    {
        'date': '2025-05-29',
        'type': '13',
        'name': '化妆指数',
        'level': '3',
        'category': '去油防晒',
        'text': '建议用蜜质SPF20面霜打底，水质无油粉底霜。'
    },
    {
        'date': '2025-05-29',
        'type': '14',
        'name': '晾晒指数',
        'level': '1',
        'category': '极适宜',
        'text': '天气不错，适宜晾晒。抓紧时机把久未见阳光的衣物搬出来晒晒太阳吧！'
    },
    {
        'date': '2025-05-29',
        'type': '15',
        'name': '交通指数',
        'level': '1',
        'category': '良好',
        'text': '天气较好，路面干燥，交通气象条件良好，车辆可以正常行驶。'
    },
    {
        'date': '2025-05-29',
        'type': '16',
        'name': '防晒指数',
        'level': '4',
        'category': '强',
        'text': '属强紫外辐射天气，外出时应加强防护，建议涂擦SPF在15-20之间，PA++的防晒护肤品。'
    }
];
const IndicesScreen = () => {
    const [coord, setCoord] = useState<any>(useCoord());
    console.log('coord===', coord);
    const [indices, setIndices] = useState<any>([]);

    useEffect(() => {
        async function getIndices() {
            // try {
            //     const res = await getIndicesAPI(coord);
            //     console.log(res);
            //     setIndices(res.data.daily);
            // } catch (e) {
            //     console.log('indices get error===', e);
            // }
            setTimeout(() => {
                const res = JSON.stringify(INDICES);
                setIndices(JSON.parse(res));
            }, 1500);
        }

        getIndices();

    }, []);
    const onPress = () => {
        console.log('onPress===');
    };
    const renderItem = ({item}) => {
        return (<TouchableOpacity onPress={onPress}>
            <View style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#DFEDBC',
                width: 100,
                height: 50,
                borderRadius: 10,
                marginHorizontal: 5,
            }}>
                <Text style={{textAlign: 'center', color: '#333', marginBottom: 3}}>{item.name}</Text>
                <Text style={{textAlign: 'center', color: '#02B38D'}}>{item.category}</Text>
            </View>
        </TouchableOpacity>);
    };
    return (<View style={styles.container}>
        {/*initialNumToRender={10},最好刚刚填满一屏幕*/}
        <FlatList
            data={indices}
            renderItem={renderItem}
            keyExtractor={(item) => item.type}
            initialNumToRender={5}
            horizontal={true}
        />
    </View>);
};
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default IndicesScreen;
/**
 * @Desc：警告
 * VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead. Error Component Stack:
 * 原因:FlatList不能嵌套在ScrollView；FlatList本身就是一个高性能的列表组件；
 *
 *
 * */
