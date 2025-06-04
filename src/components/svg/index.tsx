import {SvgXml} from 'react-native-svg';
import svgs from '@/assets/svgs.js';
import {ComponentProps} from 'react';

/**
 * @Desc:单独封装svg图片组件
 * @Author: Bao Chengyi
 * 参考：https://article.juejin.cn/post/7116840161215774750
 *
 * */
export interface ISVG {
    size: number;
    icon: string;
    style?: ComponentProps<typeof SvgXml>['style'];
    color?: string;
}

const Svg = (props: ISVG) => {
    const {color, size, icon, style} = props;
    const svgXmlData = svgs[`${icon}`];
    if (!svgXmlData) {
        throw new Error(`${icon} is not a valid icon name.`);
    }
    return <SvgXml
        width={size}
        height={size}
        fill={color}
        style={style}
        xml={svgXmlData}
    />;

};
export default Svg;
