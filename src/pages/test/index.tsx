/**
 * @Desc:测试react的react-redux+RTK实现的转态管理方案
 *
 * */
import {View, Text, Button} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {inc} from '@/store/modules/userStore';

const Test = () => {
    const {num} = useSelector((state: any) => state.user);
    const dispatch = useDispatch();
    return (<View>
        <Text>测试react的react-redux+RTK实现的转态管理方案</Text>
        <Button title={'+'} onPress={() => dispatch(inc(2))}/>
        <Text>num:{num}</Text>
        <Button title={'-'} onPress={() => dispatch(inc(1))}/>
    </View>);
};
export default Test;
