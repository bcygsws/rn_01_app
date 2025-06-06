import {
    ScrollView,
    Text,
    View,
    StyleSheet,
    FlatList,
    Image,
    TouchableOpacity
} from 'react-native';
import {STATUS_BAR_HEIGHT, WINDOW_HEIGHT, WINDOW_WIDTH} from '@/utils/height.tsx';
import {useEffect, useState} from 'react';
import {getCatListAPI} from '@/apis/news.tsx';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '@/routes';


const LIST = [
    {
        'uniquekey': 'db61b977d9fabd0429c6d0c671aeb30e',
        'title': '“新时代女性的自我关爱”主题沙龙暨双山街道福泰社区妇儿活动家园启动仪式举行',
        'date': '2021-03-08 13:47:00',
        'category': '头条',
        'author_name': '鲁网',
        'url': 'https://mini.eastday.com/mobile/210308134708834241845.html',
        'thumbnail_pic_s': 'https://s1.imagehub.cc/images/2025/06/05/24c12d14a07c59556c5621c6a648aa11.jpg',
        'thumbnail_pic_s02': 'https://s1.imagehub.cc/images/2023/07/13/img16.jpeg',
        'thumbnail_pic_s03': 'https://s1.imagehub.cc/images/2025/06/05/d97b7c11c6e6eacf1f23b9448aeaeb73.jpg',
        'is_content': '1'
    },
    {
        'uniquekey': '7d246cbfa9000fb5ac42fb3bb934a592',
        'title': '滴滴发布女司机数据：2020年新增女性网约车司机超26万',
        'date': '2021-03-08 13:40:00',
        'category': '头条',
        'author_name': '国青年网',
        'url': 'https://mini.eastday.com/mobile/210308134023641877777.html',
        'thumbnail_pic_s': 'https://s1.imagehub.cc/images/2023/06/28/img3.jpeg',
        'thumbnail_pic_s02': 'https://s1.imagehub.cc/images/2023/06/28/img2.jpeg',
        'is_content': '1'
    },
    {
        'uniquekey': 'c0611bea6eb961a57b21a0d1008bbe2e',
        'title': '点赞！东海县公安局学雷锋见行动',
        'date': '2021-03-08 13:38:00',
        'category': '头条',
        'author_name': '江南时报',
        'url': 'https://mini.eastday.com/mobile/210308133849892734209.html',
        'thumbnail_pic_s': 'https://s1.imagehub.cc/images/2023/06/28/img2.jpeg',
        'thumbnail_pic_s02': 'https://s1.imagehub.cc/images/2023/06/28/img3.jpeg',
        'thumbnail_pic_s03': 'https://s1.imagehub.cc/images/2023/07/13/img16.jpeg',
        'is_content': '1'
    },
    {
        'uniquekey': '7d246cbfa9000fb5ac42fb3bb934a592x',
        'title': '滴滴发布女司机数据：2020年新增女性网约车司机超26万',
        'date': '2021-03-08 13:40:00',
        'category': '头条',
        'author_name': '国青年网',
        'url': 'https://mini.eastday.com/mobile/210308134023641877777.html',
        'thumbnail_pic_s': 'https://s1.imagehub.cc/images/2023/07/13/img16.jpeg',
        'thumbnail_pic_s02': 'https://s1.imagehub.cc/images/2025/06/05/d97b7c11c6e6eacf1f23b9448aeaeb73.jpg',
        'thumbnail_pic_s03': 'https://s1.imagehub.cc/images/2023/06/28/img2.jpeg',
        'is_content': '1'
    },
    {
        'uniquekey': '7d246cbfa9000fb5ac42fb3bb934a5923',
        'title': '滴滴发布女司机数据：2020年新增女性网约车司机超26万',
        'date': '2021-03-08 13:40:00',
        'category': '头条',
        'author_name': '国青年网',
        'url': 'https://mini.eastday.com/mobile/210308134023641877777.html',
        'thumbnail_pic_s': 'https://s1.imagehub.cc/images/2023/06/28/img3.jpeg',
        'thumbnail_pic_s02': 'https://s1.imagehub.cc/images/2023/06/28/img2.jpeg',
        'is_content': '1'
    },
    {
        'uniquekey': 'c0611bea6eb961a57b21a0d1008bbe2eafadsx',
        'title': '点赞！东海县公安局学雷锋见行动',
        'date': '2021-03-08 13:38:00',
        'category': '头条',
        'author_name': '江南时报',
        'url': 'https://mini.eastday.com/mobile/210308133849892734209.html',
        'thumbnail_pic_s': 'https://s1.imagehub.cc/images/2023/06/28/img3.jpeg',
        'thumbnail_pic_s02': 'https://s1.imagehub.cc/images/2023/06/28/img2.jpeg',
        'thumbnail_pic_s03': 'https://s1.imagehub.cc/images/2023/07/13/img16.jpeg',
        'is_content': '1'
    },
    {
        'uniquekey': 'c0611bea6eb961a57b21a0d1008bbe2edffds',
        'title': '点赞！东海县公安局学雷锋见行动',
        'date': '2021-03-08 13:38:00',
        'category': '头条',
        'author_name': '江南时报',
        'url': 'https://mini.eastday.com/mobile/210308133849892734209.html',
        'thumbnail_pic_s': 'https://s1.imagehub.cc/images/2023/07/13/img30.md.jpeg',
        'thumbnail_pic_s02': 'https://s1.imagehub.cc/images/2023/06/28/img2.jpeg',
        'thumbnail_pic_s03': 'https://s1.imagehub.cc/images/2023/07/13/img16.jpeg',
        'is_content': '1'
    },
];
const LIST_GUONEI = [
    {
        'uniquekey': 'c0611bea6eb961a57b21a0d1008bbe2edffdsHOME',
        'title': '国内：点赞！东海县公安局学雷锋见行动',
        'date': '2021-03-08 13:38:00',
        'category': '国内',
        'author_name': '江南时报',
        'url': 'https://mini.eastday.com/mobile/210308133849892734209.html',
        'thumbnail_pic_s': 'https://s1.imagehub.cc/images/2023/07/13/img16.jpeg',
        'thumbnail_pic_s02': 'https://s1.imagehub.cc/images/2025/06/05/d97b7c11c6e6eacf1f23b9448aeaeb73.jpg',
        'thumbnail_pic_s03': 'https://s1.imagehub.cc/images/2023/06/28/img2.jpeg',
        'is_content': '1'
    },
    {
        'uniquekey': 'c0611bea6eb961a57b21a0d1008bbe2edffdsHOMEfdfsda',
        'title': '国内：点赞！东海县公安局学雷锋见行动',
        'date': '2021-03-08 13:38:00',
        'category': '国内',
        'author_name': '江南时报',
        'url': 'https://mini.eastday.com/mobile/210308133849892734209.html',
        'thumbnail_pic_s02': 'https://s1.imagehub.cc/images/2025/06/05/d97b7c11c6e6eacf1f23b9448aeaeb73.jpg',
        'thumbnail_pic_s03': 'https://s1.imagehub.cc/images/2023/06/28/img2.jpeg',
        'is_content': '1'
    },
    {
        'uniquekey': 'c0611bea6eb961a57b21a0d1008bbe2edffdsHOMEsdfasd',
        'title': '国内：点赞！东海县公安局学雷锋见行动',
        'date': '2021-03-08 13:38:00',
        'category': '国内',
        'author_name': '江南时报',
        'url': 'https://mini.eastday.com/mobile/210308133849892734209.html',
        'thumbnail_pic_s': 'https://s1.imagehub.cc/images/2023/07/13/img16.jpeg',
        'thumbnail_pic_s02': 'https://s1.imagehub.cc/images/2023/06/28/img2.jpeg',
        'thumbnail_pic_s03': 'https://s1.imagehub.cc/images/2025/06/05/d97b7c11c6e6eacf1f23b9448aeaeb73.jpg',
        'is_content': '1'
    },
    {
        'uniquekey': 'c0611bea6eb961a57b21a0d1008sadfdfsbbe2edffdsHOME',
        'title': '国内：点赞！东海县公安局学雷锋见行动',
        'date': '2021-03-08 13:38:00',
        'category': '国内',
        'author_name': '江南时报',
        'url': 'https://mini.eastday.com/mobile/210308133849892734209.html',
        'thumbnail_pic_s': 'https://s1.imagehub.cc/images/2023/06/28/img2.jpeg',
        'thumbnail_pic_s02': 'https://s1.imagehub.cc/images/2023/07/13/img30.md.jpeg',
        'is_content': '1'
    },
    {
        'uniquekey': 'c0611bea6ebdd961a57b21a0d1008bbe2edffdsHOME',
        'title': '国内：点赞！东海县公安局学雷锋见行动',
        'date': '2021-03-08 13:38:00',
        'category': '国内',
        'author_name': '江南时报',
        'url': 'https://mini.eastday.com/mobile/210308133849892734209.html',
        'thumbnail_pic_s': 'https://s1.imagehub.cc/images/2025/06/05/d97b7c11c6e6eacf1f23b9448aeaeb73.jpg',
        'thumbnail_pic_s02': 'https://s1.imagehub.cc/images/2023/07/13/img16.jpeg',
        'thumbnail_pic_s03': 'https://s1.imagehub.cc/images/2023/06/28/img2.jpeg',
        'is_content': '1'
    },
    {
        'uniquekey': 'c0611bea6eb961a5xxfsd7b21a0d1008bbe2edffdsHOME',
        'title': '国内：点赞！东海县公安局学雷锋见行动',
        'date': '2021-03-08 13:38:00',
        'category': '国内',
        'author_name': '江南时报',
        'url': 'https://mini.eastday.com/mobile/210308133849892734209.html',
        'thumbnail_pic_s': 'https://s1.imagehub.cc/images/2023/06/28/img2.jpeg',
        'thumbnail_pic_s03': 'https://s1.imagehub.cc/images/2023/07/13/img16.jpeg',
        'is_content': '1'
    },


];
const LIST_GUOJI = [
    {
        'uniquekey': 'c0611bea6eb961a57b21a0d100cfvsd8bbe2edffdsabroad1',
        'title': '国际：点赞！东海县公安局学雷锋见行动',
        'date': '2021-03-08 13:38:00',
        'category': '国内',
        'author_name': '江南时报',
        'url': 'https://mini.eastday.com/mobile/210308133849892734209.html',
        'thumbnail_pic_s': 'https://s1.imagehub.cc/images/2023/07/13/img16.jpeg',
        'thumbnail_pic_s02': 'https://s1.imagehub.cc/images/2025/06/05/d97b7c11c6e6eacf1f23b9448aeaeb73.jpg',
        'thumbnail_pic_s03': 'https://s1.imagehub.cc/images/2023/06/28/img2.jpeg',
        'is_content': '1'
    },
    {
        'uniquekey': 'c0611bea6eb961a57b21a0d1008bbe2eddfdfsffdsabroad2',
        'title': '国际：点赞！东海县公安局学雷锋见行动',
        'date': '2021-03-08 13:38:00',
        'category': '国际',
        'author_name': '江南时报',
        'url': 'https://mini.eastday.com/mobile/210308133849892734209.html',
        'thumbnail_pic_s02': 'https://s1.imagehub.cc/images/2025/06/05/d97b7c11c6e6eacf1f23b9448aeaeb73.jpg',
        'is_content': '1'
    },
    {
        'uniquekey': 'c0611bea6eb961a57b21a0d100xxsfda8dfdbbe2edffdsabroad3',
        'title': '国际：点赞！东海县公安局学雷锋见行动',
        'date': '2021-03-08 13:38:00',
        'category': '国际',
        'author_name': '江南时报',
        'url': 'https://mini.eastday.com/mobile/210308133849892734209.html',
        'thumbnail_pic_s': 'https://s1.imagehub.cc/images/2023/07/13/img16.jpeg',
        'thumbnail_pic_s02': 'https://s1.imagehub.cc/images/2023/06/28/img2.jpeg',
        'thumbnail_pic_s03': 'https://s1.imagehub.cc/images/2025/06/05/d97b7c11c6e6eacf1f23b9448aeaeb73.jpg',
        'is_content': '1'
    },
    {
        'uniquekey': 'c0611bea6eb961a57b21a0d100fdsa8bbe2edffdsabroad3',
        'title': '国际：点赞！东海县公安局学雷锋见行动',
        'date': '2021-03-08 13:38:00',
        'category': '国际',
        'author_name': '江南时报',
        'url': 'https://mini.eastday.com/mobile/210308133849892734209.html',
        'thumbnail_pic_s': 'https://s1.imagehub.cc/images/2023/07/13/img16.jpeg',
        'is_content': '1'
    },
    {
        'uniquekey': 'c0611bea6eb961a57b21a0d10fsda08bbe2edffdsabroad4',
        'title': '国际：点赞！东海县公安局学雷锋见行动',
        'date': '2021-03-08 13:38:00',
        'category': '国际',
        'author_name': '江南时报',
        'url': 'https://mini.eastday.com/mobile/210308133849892734209.html',
        'thumbnail_pic_s': 'https://s1.imagehub.cc/images/2023/07/13/img16.jpeg',
        'thumbnail_pic_s02': 'https://s1.imagehub.cc/images/2025/06/05/d97b7c11c6e6eacf1f23b9448aeaeb73.jpg',
        'thumbnail_pic_s03': 'https://s1.imagehub.cc/images/2023/06/28/img2.jpeg',
        'is_content': '1'
    },
    {
        'uniquekey': 'c0611bea6eb961a57b21a0xxfsdd1008bbe2edffdsabroad5',
        'title': '国际：点赞！东海县公安局学雷锋见行动',
        'date': '2021-03-08 13:38:00',
        'category': '国际',
        'author_name': '江南时报',
        'url': 'https://mini.eastday.com/mobile/210308133849892734209.html',
        'thumbnail_pic_s03': 'https://s1.imagehub.cc/images/2023/06/28/img2.jpeg',
        'is_content': '1'
    },
    {
        'uniquekey': 'c0611bea6eb961a57b21a0fdsad1008bbe2edffdsabroad6',
        'title': '国际：点赞！东海县公安局学雷锋见行动',
        'date': '2021-03-08 13:38:00',
        'category': '国际',
        'author_name': '江南时报',
        'url': 'https://mini.eastday.com/mobile/210308133849892734209.html',
        'thumbnail_pic_s': 'https://s1.imagehub.cc/images/2023/07/13/img16.jpeg',
        'thumbnail_pic_s02': 'https://s1.imagehub.cc/images/2023/06/28/img2.jpeg',
        'thumbnail_pic_s03': 'https://s1.imagehub.cc/images/2025/06/05/d97b7c11c6e6eacf1f23b9448aeaeb73.jpg',
        'is_content': '1'
    },
    {
        'uniquekey': 'c0611bea6eb961a57b21a0d100fdsasfd8bbe2edffdsabroad7',
        'title': '国际：点赞！东海县公安局学雷锋见行动',
        'date': '2021-03-08 13:38:00',
        'category': '国际',
        'author_name': '江南时报',
        'url': 'https://mini.eastday.com/mobile/210308133849892734209.html',
        'thumbnail_pic_s': 'https://s1.imagehub.cc/images/2023/06/28/img2.jpeg',
        'thumbnail_pic_s02': 'https://s1.imagehub.cc/images/2023/07/13/img16.jpeg',
        'thumbnail_pic_s03': 'https://s1.imagehub.cc/images/2023/07/13/img30.md.jpeg',
        'is_content': '1'
    }

];
const LIST_YULE = [
    {
        'uniquekey': 'c0611bea6eb961a57b21a0d1008bbe2edffdsYule',
        'title': '点赞！东海县公安局学雷锋见行动',
        'date': '2021-03-08 13:38:00',
        'category': '娱乐',
        'author_name': '北京时报',
        'url': 'https://mini.eastday.com/mobile/210308133849892734209.html',
        'thumbnail_pic_s': 'https://s1.imagehub.cc/images/2023/07/13/img30.md.jpeg',
        'thumbnail_pic_s02': 'https://s1.imagehub.cc/images/2023/06/28/img2.jpeg',
        'thumbnail_pic_s03': 'https://s1.imagehub.cc/images/2023/07/13/img16.jpeg',
        'is_content': '1'
    }];
const LIST_TIYU = [
    {
        'uniquekey': 'c0611bea6eb961a57b21a0d1008bbe2edffdsTIasfdsxxfdafd',
        'title': '点赞！东海县公安局学雷锋见行动',
        'date': '2021-03-08 13:38:00',
        'category': '体育',
        'author_name': '江南时报',
        'url': 'https://mini.eastday.com/mobile/210308133849892734209.html',
        'thumbnail_pic_s': 'https://s1.imagehub.cc/images/2023/07/13/img30.md.jpeg',
        'thumbnail_pic_s02': 'https://s1.imagehub.cc/images/2023/06/28/img2.jpeg',
        'thumbnail_pic_s03': 'https://s1.imagehub.cc/images/2023/07/13/img16.jpeg',
        'is_content': '1'
    }
];
const LIST_JUNSHI = [
    {
        'uniquekey': 'c0611bea6eb961a57b21a0d1008bbe2edffdsJunshi',
        'title': '点赞！东海县公安局学雷锋见行动',
        'date': '2021-03-08 13:38:00',
        'category': '军事',
        'author_name': '京报网',
        'url': 'https://mini.eastday.com/mobile/210308133849892734209.html',
        'thumbnail_pic_s': 'https://s1.imagehub.cc/images/2023/07/13/img30.md.jpeg',
        'thumbnail_pic_s02': 'https://s1.imagehub.cc/images/2023/06/28/img2.jpeg',
        'thumbnail_pic_s03': 'https://s1.imagehub.cc/images/2023/07/13/img16.jpeg',
        'is_content': '1'
    }
];
const LIST_KEJI = [
    {
        'uniquekey': 'c0611bea6eb961a57b21a0d1008bbe2edffdsKEJI',
        'title': '点赞！东海县公安局学雷锋见行动',
        'date': '2021-03-08 13:38:00',
        'category': '科技',
        'author_name': '科技网',
        'url': 'https://mini.eastday.com/mobile/210308133849892734209.html',
        'thumbnail_pic_s': 'https://s1.imagehub.cc/images/2023/07/13/img30.md.jpeg',
        'thumbnail_pic_s02': 'https://s1.imagehub.cc/images/2023/06/28/img2.jpeg',
        'thumbnail_pic_s03': 'https://s1.imagehub.cc/images/2023/07/13/img16.jpeg',
        'is_content': '1'
    }
];
const LIST_CAIJING = [
    {
        'uniquekey': 'c0611bea6eb961a57b21a0d1008bbe2edffdsCAIJING',
        'title': '点赞！东海县公安局学雷锋见行动',
        'date': '2021-03-08 13:38:00',
        'category': '财经',
        'author_name': '财经网',
        'url': 'https://mini.eastday.com/mobile/210308133849892734209.html',
        'thumbnail_pic_s': 'https://s1.imagehub.cc/images/2023/07/13/img30.md.jpeg',
        'thumbnail_pic_s02': 'https://s1.imagehub.cc/images/2023/06/28/img2.jpeg',
        'thumbnail_pic_s03': 'https://s1.imagehub.cc/images/2023/07/13/img16.jpeg',
        'is_content': '1'
    }
];
const LIST_YOUXI = [
    {
        'uniquekey': 'c0611bea6eb961a57b21a0d1008bbe2edffdsYOUXI',
        'title': '点赞！东海县公安局学雷锋见行动',
        'date': '2021-03-08 13:38:00',
        'category': '游戏',
        'author_name': '腾讯游戏网',
        'url': 'https://mini.eastday.com/mobile/210308133849892734209.html',
        'thumbnail_pic_s': 'https://s1.imagehub.cc/images/2023/07/13/img30.md.jpeg',
        'thumbnail_pic_s02': 'https://s1.imagehub.cc/images/2023/06/28/img2.jpeg',
        'thumbnail_pic_s03': 'https://s1.imagehub.cc/images/2023/07/13/img16.jpeg',
        'is_content': '1'
    }
];
const LIST_QICHE = [
    {
        'uniquekey': 'c0611bea6eb961a57b21a0d1008bbe2edffdsQICHE',
        'title': '点赞！东海县公安局学雷锋见行动',
        'date': '2021-03-08 13:38:00',
        'category': '汽车',
        'author_name': '大众汽车网',
        'url': 'https://mini.eastday.com/mobile/210308133849892734209.html',
        'thumbnail_pic_s': 'https://s1.imagehub.cc/images/2023/07/13/img30.md.jpeg',
        'thumbnail_pic_s02': 'https://s1.imagehub.cc/images/2023/06/28/img2.jpeg',
        'thumbnail_pic_s03': 'https://s1.imagehub.cc/images/2023/07/13/img16.jpeg',
        'is_content': '1'
    }
];
const LIST_JIANKANG = [
    {
        'uniquekey': 'c0611bea6eb961a57b21a0d1008bbe2edffdsJIANKANG',
        'title': '人生无家别，何以为蒸黎；点赞！东海县公安局学雷锋见行动;秋风宝剑孤臣泪，范德萨华发商都发多少法大大发放',
        'date': '2021-03-08 13:38:00',
        'category': '健康',
        'author_name': '百姓网',
        'url': 'https://mini.eastday.com/mobile/210308133849892734209.html',
        'thumbnail_pic_s': 'https://s1.imagehub.cc/images/2025/06/05/ebbcff19b3f89fa994669e083ed755ab.th.jpg',
        'thumbnail_pic_s02': 'https://s1.imagehub.cc/images/2025/06/05/d97b7c11c6e6eacf1f23b9448aeaeb73.th.jpg',
        'is_content': '1'
    },
    {
        'uniquekey': 'c0611bea6eb961a57b21a0d1008bbe2edffdsJIANKANG02',
        'title': '点赞！东海县公安局学雷锋见行动',
        'date': '2021-03-08 13:38:00',
        'category': '健康',
        'author_name': '百姓网',
        'url': 'https://mini.eastday.com/mobile/210308133849892734209.html',
        'thumbnail_pic_s': 'https://s1.imagehub.cc/images/2023/06/28/img2.jpeg',
        'thumbnail_pic_s02': 'https://s1.imagehub.cc/images/2025/06/05/ebbcff19b3f89fa994669e083ed755ab.th.jpg',
        'thumbnail_pic_s03': 'https://s1.imagehub.cc/images/2025/06/05/d97b7c11c6e6eacf1f23b9448aeaeb73.th.jpg',
        'is_content': '1'
    },
    {
        'uniquekey': 'c0611bea6eb961a57b21a0d1008bbe2edffdsJIANKANG03',
        'title': '点赞！东海县公安局学雷锋见行动',
        'date': '2021-03-08 13:38:00',
        'category': '健康',
        'author_name': '百姓网',
        'url': 'https://mini.eastday.com/mobile/210308133849892734209.html',
        'thumbnail_pic_s': 'https://s1.imagehub.cc/images/2025/06/05/ebbcff19b3f89fa994669e083ed755ab.th.jpg',
        'thumbnail_pic_s02': 'https://s1.imagehub.cc/images/2025/06/05/d97b7c11c6e6eacf1f23b9448aeaeb73.th.jpg',
        'is_content': '1'
    },
    {
        'uniquekey': 'c0611bea6eb961a57b21a0d1008bbe2edffdsJIANKANG04',
        'title': '点赞！东海县公安局学雷锋见行动',
        'date': '2021-03-08 13:38:00',
        'category': '健康',
        'author_name': '百姓网',
        'url': 'https://mini.eastday.com/mobile/210308133849892734209.html',
        'thumbnail_pic_s': 'https://s1.imagehub.cc/images/2025/06/05/ebbcff19b3f89fa994669e083ed755ab.th.jpg',
        'thumbnail_pic_s01': 'https://s1.imagehub.cc/images/2025/06/05/ebbcff19b3f89fa994669e083ed755ab.th.jpg',
        'thumbnail_pic_s02': 'https://s1.imagehub.cc/images/2025/06/05/d97b7c11c6e6eacf1f23b9448aeaeb73.th.jpg',
        'is_content': '1'
    },
    {
        'uniquekey': 'c0611bea6eb961a57b21a0d1008bbe2edffdsJIANKANG05',
        'title': '点赞！东海县公安局学雷锋见行动',
        'date': '2021-03-08 13:38:00',
        'category': '健康',
        'author_name': '百姓网',
        'url': 'https://mini.eastday.com/mobile/210308133849892734209.html',
        'thumbnail_pic_s': 'https://s1.imagehub.cc/images/2023/07/13/img30.md.jpeg',
        'thumbnail_pic_s02': 'https://s1.imagehub.cc/images/2023/06/28/img2.jpeg',
        'thumbnail_pic_s03': 'https://s1.imagehub.cc/images/2023/07/13/img16.jpeg',
        'is_content': '1'
    },
    {
        'uniquekey': 'c0611bea6eb961a57b21a0d1008bbe2edffdsJIANKANG06',
        'title': '点赞！东海县公安局学雷锋见行动；人生无家别，何以为蒸黎',
        'date': '2021-03-08 13:38:00',
        'category': '健康',
        'author_name': '百姓网',
        'url': 'https://mini.eastday.com/mobile/210308133849892734209.html',
        'thumbnail_pic_s': 'https://s1.imagehub.cc/images/2025/06/05/ebbcff19b3f89fa994669e083ed755ab.th.jpg',
        'thumbnail_pic_s02': 'https://s1.imagehub.cc/images/2025/06/05/d97b7c11c6e6eacf1f23b9448aeaeb73.th.jpg',
        'thumbnail_pic_s03': 'https://s1.imagehub.cc/images/2025/06/05/bf190e9f1b00ea88db07a5cc609a0740.md.jpg',
        'is_content': '1'
    },
];
const CATLIST = [
    {
        key: 'top',
        value: '默认',
    },
    {
        key: 'guonei',
        value: '国内',
    },
    {
        key: 'guoji',
        value: '国际',
    },
    {
        key: 'yule',
        value: '娱乐',
    },
    {
        key: 'tiyu',
        value: '体育',
    },
    {
        key: 'junshi',
        value: '军事',
    },
    {
        key: 'keji',
        value: '科技',
    },
    {
        key: 'caijing',
        value: '财经',
    },
    {
        key: 'youxi',
        value: '游戏',
    },
    {
        key: 'qiche',
        value: '汽车',
    },
    {
        key: 'jiankang',
        value: '健康',
    },


];
type NavProps= NavigationProp<RootStackParamList, 'News'>;
const News = () => {
    const [type, setType] = useState('top');
    // todo：下拉刷新功能，page也设置为变量
    const [page, setPage] = useState(1);
    // 数据列表list
    const [list, setList] = useState<any>([]);

    const selectData = (typeVal: string) => {
        switch (typeVal) {
            case 'top':
                return JSON.stringify(LIST);
            case 'guonei':
                return JSON.stringify(LIST_GUONEI);
            case 'guoji':
                return JSON.stringify(LIST_GUOJI);
            case 'yule':
                return JSON.stringify(LIST_YULE);
            case 'tiyu':
                return JSON.stringify(LIST_TIYU);
            case 'junshi':
                return JSON.stringify(LIST_JUNSHI);
            case 'keji':
                return JSON.stringify(LIST_KEJI);
            case 'caijing':
                return JSON.stringify(LIST_CAIJING);
            case 'youxi':
                return JSON.stringify(LIST_YOUXI);
            case 'qiche':
                return JSON.stringify(LIST_QICHE);
            case 'jiankang':
                return JSON.stringify(LIST_JIANKANG);
        }
    };
    // 解决中间位置头部导航条，点击后滑动被遮盖的问题
    const [initialIndex, setInitialIndex] = useState(0);

    // 点击列表进入详情页导航
    const navigation = useNavigation<NavProps>();
    useEffect(() => {
        async function getCatList() {
            try {
                // const res = await getCatListAPI({type, page, page_size: 30, is_filter: 0});
                // console.log('res.data===', res.data);
                // setList(res.data);

                setTimeout(() => {
                    const res = selectData(type);
                    setList(JSON.parse(res!) ?? []);
                    console.log('list', list);
                }, 500);

            } catch (e) {
                throw new Error(`出现错误：${e}`);
            }
        }

        getCatList();
    }, [type]);
    const renderSingleItem = (item: any) => {
        // 单图布局
        return (<TouchableOpacity onPress={() => {navigation.navigate('Detail', {url: item.url});}}>
            <View style={{
                boxSizing: 'border-box',
                paddingHorizontal: WINDOW_WIDTH / 50,
                flexDirection: 'row',
                justifyContent: 'space-between',
                minHeight: 100,
                marginVertical: WINDOW_WIDTH / 50,
            }}>

                <View style={{
                    flexDirection: 'column',
                    flex: 1,
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',

                }}>
                    <Text numberOfLines={2}
                          ellipsizeMode={'tail'}
                          style={{fontSize: 14, lineHeight: 22}}>{item?.title}</Text>
                    <View style={{
                        height: 30,
                        width: '100%',
                        flexDirection: 'row',
                        flexWrap: 'nowrap',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                        <Text style={{fontSize: 12}}>{item?.date} {item?.author_name}</Text>
                        <Text>♡</Text>

                    </View>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={{uri: item?.thumbnail_pic_s || item?.thumbnail_pic_s02 || item?.thumbnail_pic_s03}}
                           style={[styles.img, {marginLeft: WINDOW_WIDTH / 50, backgroundColor: 'orange'}]}/>
                </View>
            </View>
        </TouchableOpacity>);
    };

    const renderThreeItem = (item: any) => {
        console.log('three item', item);
        return (<TouchableOpacity onPress={()=>navigation.navigate('Detail', {url: item?.url})}>
            <View style={{
                boxSizing: 'border-box',
                paddingHorizontal: WINDOW_WIDTH / 50,
                marginVertical: WINDOW_WIDTH / 50,
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: 100
            }}>
                <Text
                    style={{fontSize: 14, lineHeight: 22}}
                    ellipsizeMode={'tail'}
                    numberOfLines={2}>{item?.title}</Text>
                <View style={{flexDirection: 'row', flexWrap: 'nowrap', flex: 1, justifyContent: 'space-between'}}>
                    <Image source={{uri: item?.thumbnail_pic_s}} style={styles.img}/>
                    <Image source={{uri: item?.thumbnail_pic_s02}} style={styles.img}/>
                    <Image source={{uri: item?.thumbnail_pic_s03}} style={styles.img}/>
                </View>
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                    flex: 1,
                    height: 30,
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <Text style={{fontSize: 12}}>{item?.date} {item?.author_name}</Text>
                    <Text>♡</Text>
                </View>
            </View>
        </TouchableOpacity>);
    };
    const renderItem = ({item}: any) => {// 注意：这里的renderItem参数是{item}，而不是item
        if (item.thumbnail_pic_s && item.thumbnail_pic_s02 && item.thumbnail_pic_s03) {
            return renderThreeItem(item);
        } else {
            return renderSingleItem(item);
        }
    };

    const catRenderItem = ({item, index}: any) => {

        const onPress = () => {
            setType(item?.key);// 修改type
            setInitialIndex(index > 4 ? index - 4 : 0);
        };
        return (
            <TouchableOpacity onPress={onPress}>
                {
                    type === item.key ?
                        <View style={{borderBottomColor: 'red', borderBottomWidth: 1}}>
                            <Text
                                style={[{fontSize: 15, width: 40, textAlign: 'center'}, {color: 'red'}]}>{item?.value}</Text>
                        </View>
                        :
                        <View>
                            <Text style={{fontSize: 15, textAlign: 'center', width: 40}}>{item?.value}</Text>
                        </View>
                }
            </TouchableOpacity>
        );
    };
    return (
        <View style={styles.container}>
            <View>
                <FlatList data={list}
                          renderItem={renderItem} keyExtractor={(item) => item.uniquekey}
                          ListHeaderComponent={() => {

                              return (<View
                                  style={{flex: 1, height: 35, flexDirection: 'row', alignItems: 'center'}}>
                                  <FlatList
                                      data={CATLIST}
                                      renderItem={catRenderItem}
                                      horizontal={true}
                                      showsHorizontalScrollIndicator={false}
                                      keyExtractor={(item) => item?.key}
                                      initialScrollIndex={0}
                                  />
                              </View>);
                          }}
                          ListFooterComponent={() => {
                              return (<View style={{flex: 1, height: 150}}>
                                  <Text style={{flex: 1, textAlign: 'center'}}>没有更多新闻，见底了……</Text>
                              </View>);
                          }}
                />
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        height: WINDOW_HEIGHT - STATUS_BAR_HEIGHT,
        width: WINDOW_WIDTH,
    },
    img: {
        height: 70,
        // marginLeft: WINDOW_WIDTH / 75,
        // marginRight: WINDOW_WIDTH / 75,
        width: WINDOW_WIDTH * 0.88 / 3,
    },
});
export default News;
