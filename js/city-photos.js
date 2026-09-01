/**
 * ETC 城市实景照片数据（Unsplash 实景图，已下载到本地 images/cities/）
 * 每城 3-4 张不同特色场景，双语图注便于海外学员学习
 */

const CITY_PHOTOS = {
    beijing: [
        { src: 'images/cities/beijing-1.jpg', labelEn: 'The Forbidden City', labelCn: '故宫', credit: 'Unsplash' },
        { src: 'images/cities/beijing-2.jpg', labelEn: 'Temple of Heaven', labelCn: '天坛', credit: 'Unsplash' },
        { src: 'images/cities/beijing-3.jpg', labelEn: 'The Great Wall', labelCn: '长城', credit: 'Unsplash' },
    ],
    shanghai: [
        { src: 'images/cities/shanghai-1.jpg', labelEn: 'The Bund & Pudong skyline', labelCn: '外滩与陆家嘴天际线', credit: 'Unsplash' },
        { src: 'images/cities/shanghai-2.jpg', labelEn: 'Yu Garden & City God Temple', labelCn: '豫园 · 城隍庙', credit: 'Unsplash' },
        { src: 'images/cities/shanghai-3.jpg', labelEn: 'Nanjing Road shopping street', labelCn: '南京路步行街', credit: 'Unsplash' },
    ],
    xian: [
        { src: 'images/cities/xian-1.jpg', labelEn: 'Terracotta Army', labelCn: '兵马俑', credit: 'Unsplash' },
        { src: 'images/cities/xian-2.jpg', labelEn: 'Big Wild Goose Pagoda', labelCn: '大雁塔', credit: 'Unsplash' },
        { src: 'images/cities/xian-3.jpg', labelEn: 'Xi\'an Bell Tower', labelCn: '西安钟楼', credit: 'Unsplash' },
    ],
    chengdu: [
        { src: 'images/cities/chengdu-1.jpg', labelEn: 'Giant panda', labelCn: '大熊猫', credit: 'Unsplash' },
        { src: 'images/cities/chengdu-2.jpg', labelEn: 'Kuanzhai Alley', labelCn: '宽窄巷子', credit: 'Unsplash' },
        { src: 'images/cities/chengdu-3.jpg', labelEn: 'Wuhou Shrine', labelCn: '武侯祠', credit: 'Unsplash' },
    ],
    chongqing: [
        { src: 'images/cities/chongqing-1.jpg', labelEn: 'Hongyadong at night', labelCn: '洪崖洞夜景', credit: 'Unsplash' },
        { src: 'images/cities/chongqing-2.jpg', labelEn: 'Monorail passing through a building (Liziba)', labelCn: '李子坝轻轨穿楼', credit: 'Unsplash' },
        { src: 'images/cities/chongqing-3.jpg', labelEn: 'Chongqing night bridge', labelCn: '重庆夜间大桥', credit: 'Unsplash' },
    ],
    hangzhou: [
        { src: 'images/cities/hangzhou-1.jpg', labelEn: 'Sunset at West Lake', labelCn: '西湖日落', credit: 'Unsplash' },
        { src: 'images/cities/hangzhou-2.jpg', labelEn: 'Hangzhou city', labelCn: '杭州城景', credit: 'Unsplash' },
        { src: 'images/cities/hangzhou-3.jpg', labelEn: 'Pavilion by West Lake', labelCn: '西湖亭台', credit: 'Unsplash' },
    ],
    suzhou: [
        { src: 'images/cities/suzhou-1.jpg', labelEn: 'Classical garden moon gate', labelCn: '园林月洞门', credit: 'Unsplash' },
        { src: 'images/cities/suzhou-2.jpg', labelEn: 'Garden bridge & pagoda', labelCn: '园林桥与塔', credit: 'Unsplash' },
        { src: 'images/cities/suzhou-3.jpg', labelEn: 'Lotus pond pavilion', labelCn: '荷塘亭台', credit: 'Unsplash' },
    ],
    guangzhou: [
        { src: 'images/cities/guangzhou-1.jpg', labelEn: 'Canton Tower', labelCn: '广州塔', credit: 'Unsplash' },
        { src: 'images/cities/guangzhou-2.jpg', labelEn: 'Lingnan architecture (Chen Clan Ancestral Hall)', labelCn: '陈家祠 · 岭南建筑', credit: 'Unsplash' },
        { src: 'images/cities/guangzhou-3.jpg', labelEn: 'Cantonese morning tea set', labelCn: '广式早茶', credit: 'Unsplash' },
    ],
    shenzhen: [
        { src: 'images/cities/shenzhen-1.jpg', labelEn: 'Qianhai Bay at night', labelCn: '前海夜景', credit: 'Unsplash' },
        { src: 'images/cities/shenzhen-2.jpg', labelEn: 'Shenzhen skyscrapers', labelCn: '深圳高楼', credit: 'Unsplash' },
        { src: 'images/cities/shenzhen-3.jpg', labelEn: 'Shenzhen skyline', labelCn: '深圳天际线', credit: 'Unsplash' },
    ],
    harbin: [
        { src: 'images/cities/harbin-1.jpg', labelEn: 'Ice & Snow World', labelCn: '冰雪大世界', credit: 'Unsplash' },
        { src: 'images/cities/harbin-2.jpg', labelEn: 'Ice sculptures', labelCn: '冰雕', credit: 'Unsplash' },
        { src: 'images/cities/harbin-3.jpg', labelEn: 'Ice castle', labelCn: '冰城堡', credit: 'Unsplash' },
    ],
    lasa: [
        { src: 'images/cities/lasa-1.jpg', labelEn: 'Potala Palace', labelCn: '布达拉宫', credit: 'Unsplash' },
        { src: 'images/cities/lasa-2.jpg', labelEn: 'Potala Palace on the mountain', labelCn: '山上的布达拉宫', credit: 'Unsplash' },
        { src: 'images/cities/lasa-3.jpg', labelEn: 'Lhasa city', labelCn: '拉萨城景', credit: 'Unsplash' },
    ],
    changsha: [
        { src: 'images/cities/changsha-1.jpg', labelEn: 'Changsha cityscape', labelCn: '长沙城景', credit: 'Unsplash' },
        { src: 'images/cities/changsha-2.jpg', labelEn: 'Changsha at night', labelCn: '长沙夜景', credit: 'Unsplash' },
        { src: 'images/cities/changsha-3.jpg', labelEn: 'River city view', labelCn: '江畔城景', credit: 'Unsplash' },
    ],
    xiamen: [
        { src: 'images/cities/xiamen-1.jpg', labelEn: 'Xiamen aerial view', labelCn: '厦门航拍', credit: 'Unsplash' },
        { src: 'images/cities/xiamen-2.jpg', labelEn: 'Xiamen city & sea', labelCn: '厦门城海景观', credit: 'Unsplash' },
        { src: 'images/cities/xiamen-3.jpg', labelEn: 'Coastal Xiamen', labelCn: '厦门海岸', credit: 'Unsplash' },
    ],
    kunming: [
        { src: 'images/cities/kunming-1.jpg', labelEn: 'Stone Forest', labelCn: '石林', credit: 'Unsplash' },
        { src: 'images/cities/kunming-2.jpg', labelEn: 'Dianchi Lake boats', labelCn: '滇池泛舟', credit: 'Unsplash' },
        { src: 'images/cities/kunming-3.jpg', labelEn: 'Kunming park', labelCn: '昆明公园', credit: 'Unsplash' },
    ],
    jingdezhen: [
        { src: 'images/cities/jingdezhen-1.jpg', labelEn: 'Porcelain vases', labelCn: '瓷器花瓶', credit: 'Unsplash' },
        { src: 'images/cities/jingdezhen-2.jpg', labelEn: 'Hand-painted ceramics', labelCn: '手绘瓷器', credit: 'Unsplash' },
        { src: 'images/cities/jingdezhen-3.jpg', labelEn: 'Potter at work', labelCn: '制瓷匠人', credit: 'Unsplash' },
    ],
    yiwu: [
        { src: 'images/cities/yiwu-1.jpg', labelEn: 'Yiwu city at night', labelCn: '义乌夜景', credit: 'Unsplash' },
        { src: 'images/cities/yiwu-2.jpg', labelEn: 'Yiwu International Trade City market', labelCn: '义乌国际商贸城', credit: 'Unsplash' },
    ],
    wuhan: [
        { src: 'images/cities/wuhan-1.jpg', labelEn: 'Yellow Crane Tower', labelCn: '黄鹤楼', credit: 'Unsplash' },
        { src: 'images/cities/wuhan-2.jpg', labelEn: 'Yellow Crane Tower at night', labelCn: '黄鹤楼夜景', credit: 'Unsplash' },
        { src: 'images/cities/wuhan-3.jpg', labelEn: 'Wuhan river bridge', labelCn: '武汉长江大桥', credit: 'Unsplash' },
    ],
    tianjin: [
        { src: 'images/cities/tianjin-1.jpg', labelEn: 'Tianjin Eye Ferris wheel', labelCn: '天津之眼摩天轮', credit: 'Unsplash' },
        { src: 'images/cities/tianjin-2.jpg', labelEn: 'Porcelain House', labelCn: '天津瓷房子', credit: 'Unsplash' },
        { src: 'images/cities/tianjin-3.jpg', labelEn: 'Five Great Avenues', labelCn: '天津五大道', credit: 'Unsplash' },
    ],
    qingdao: [
        { src: 'images/cities/qingdao-1.jpg', labelEn: 'Qingdao skyline across the bay', labelCn: '青岛海湾天际线', credit: 'Unsplash' },
        { src: 'images/cities/qingdao-2.jpg', labelEn: 'Qingdao waterfront', labelCn: '青岛海岸城景', credit: 'Unsplash' },
        { src: 'images/cities/qingdao-3.jpg', labelEn: 'Sunset over the sea', labelCn: '海上日落', credit: 'Unsplash' },
    ],
    zhengzhou: [
        { src: 'images/cities/zhengzhou-1.jpg', labelEn: 'Shaolin Temple gate', labelCn: '少林寺山门', credit: 'Unsplash' },
        { src: 'images/cities/zhengzhou-2.jpg', labelEn: 'Shaolin kung fu training', labelCn: '少林功夫训练', credit: 'Unsplash' },
        { src: 'images/cities/zhengzhou-3.jpg', labelEn: 'Shaolin temple architecture', labelCn: '少林寺建筑', credit: 'Unsplash' },
    ],
    hohhot: [
        { src: 'images/cities/hohhot-1.jpg', labelEn: 'Mongolian yurt on grassland', labelCn: '草原蒙古包', credit: 'Unsplash' },
        { src: 'images/cities/hohhot-2.jpg', labelEn: 'Inner Mongolia grassland', labelCn: '内蒙古大草原', credit: 'Unsplash' },
        { src: 'images/cities/hohhot-3.jpg', labelEn: 'Grassland road', labelCn: '草原公路', credit: 'Unsplash' },
    ],
    nanjing: [
        { src: 'images/cities/nanjing-1.jpg', labelEn: 'Zifeng Tower at night', labelCn: '南京紫峰大厦夜景', credit: 'Unsplash' },
        { src: 'images/cities/nanjing-2.jpg', labelEn: 'City river at sunset', labelCn: '城市河流日落', credit: 'Unsplash' },
        { src: 'images/cities/nanjing-3.jpg', labelEn: 'Nanjing skyline at night', labelCn: '南京夜景天际线', credit: 'Unsplash' },
    ],
    urumqi: [
        { src: 'images/cities/urumqi-1.jpg', labelEn: 'Snow mountains & horses in Xinjiang', labelCn: '新疆雪山草原牧马', credit: 'Unsplash' },
        { src: 'images/cities/urumqi-2.jpg', labelEn: 'Grassland tents (Jiangbulak)', labelCn: '江布拉克草原帐篷', credit: 'Unsplash' },
        { src: 'images/cities/urumqi-3.jpg', labelEn: 'Tianshan mountains & forest', labelCn: '天山山脉草原云杉', credit: 'Unsplash' },
    ],
    london: [
        { src: 'images/cities/london-1.jpg', labelEn: 'Big Ben & the Houses of Parliament', labelCn: '大本钟与国会大厦', credit: 'Unsplash' },
        { src: 'images/cities/london-2.jpg', labelEn: 'Tower Bridge over the Thames', labelCn: '泰晤士河上的塔桥', credit: 'Unsplash' },
        { src: 'images/cities/london-3.jpg', labelEn: 'London Eye & the South Bank', labelCn: '伦敦眼与南岸', credit: 'Unsplash' },
    ],
};