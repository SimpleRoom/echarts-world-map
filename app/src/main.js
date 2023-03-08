
// 初始化canvas,指定挂载的DOM元素
var dom = document.getElementById('container');
var myChart = echarts.init(dom, null, {
  renderer: 'canvas',
  useDirtyRect: false
});

// 注册世界地图参数
echarts.registerMap('world', worldMap)

// 悬浮国家区域显示中文
let cityMap = {
  "Afghanistan": "阿富汗",
  "Singapore": "新加坡",
  "Angola": "安哥拉",
  "Albania": "阿尔巴尼亚",
  "United Arab Emirates": "阿拉伯联合酋长国",
  "Argentina": "阿根廷",
  "Armenia": "亚美尼亚",
  "French Southern and Antarctic Lands": "法属南半球和南极领地",
  "Australia": "澳大利亚",
  "Austria": "奥地利",
  "Azerbaijan": "阿塞拜疆",
  "Burundi": "布隆迪",
  "Belgium": "比利时",
  "Benin": "贝宁",
  "Burkina Faso": "布基纳法索",
  "Bangladesh": "孟加拉",
  "Bulgaria": "保加利亚",
  "Bahamas": "巴哈马",
  "Bosnia and Herz.": "波黑",
  "Belarus": "白俄罗斯",
  "Belize": "伯利兹",
  "Bermuda": "百慕大",
  "Bolivia": "玻利维亚",
  "Brazil": "巴西",
  "Brunei": "文莱",
  "Bhutan": "不丹",
  "Botswana": "博茨瓦纳",
  "Central African Rep.": "中非",
  "Canada": "加拿大",
  "Switzerland": "瑞士",
  "Chile": "智利",
  "China": "中国",
  "Côte d'Ivoire": "科特迪瓦",
  "Cameroon": "喀麦隆",
  "Dem. Rep. Congo": "刚果（金）",
  "Congo": "刚果",
  "Colombia": "哥伦比亚",
  "Costa Rica": "哥斯达黎加",
  "Cuba": "古巴",
  "Northern Cyprus": "北塞浦路斯",
  "Cyprus": "塞浦路斯",
  "Czech Rep.": "捷克",
  "Germany": "德国",
  "Djibouti": "吉布提",
  "Denmark": "丹麦",
  "Algeria": "阿尔及利亚",
  "Ecuador": "厄瓜多尔",
  "Egypt": "埃及",
  "Eritrea": "厄立特里亚",
  "Spain": "西班牙",
  "Estonia": "爱沙尼亚",
  "Ethiopia": "埃塞俄比亚",
  "Finland": "芬兰",
  "Fiji": "斐济",
  "Falkland Is.": "福克兰群岛",
  "France": "法国",
  "Gabon": "加蓬",
  "United Kingdom": "英国",
  "Georgia": "格鲁吉亚",
  "Ghana": "加纳",
  "Gambia": "冈比亚",
  "Guinea": "几内亚",
  "Guinea-Bissau": "几内亚比绍",
  "Eq. Guinea": "赤道几内亚",
  "Greece": "希腊",
  "Greenland": "格陵兰",
  "Guatemala": "危地马拉",
  "Fr. S. Antarctic Lands": "留尼汪",
  "Guyana": "圭亚那",
  "Honduras": "洪都拉斯",
  "Croatia": "克罗地亚",
  "Haiti": "海地",
  "Hungary": "匈牙利",
  "Indonesia": "印度尼西亚",
  "India": "印度",
  "Ireland": "爱尔兰",
  "Iran": "伊朗",
  "Iraq": "伊拉克",
  "Iceland": "冰岛",
  "Israel": "以色列",
  "Italy": "意大利",
  "Jamaica": "牙买加",
  "Jordan": "约旦",
  "Japan": "日本本土",
  "Kazakhstan": "哈萨克斯坦",
  "Kenya": "肯尼亚",
  "Kyrgyzstan": "吉尔吉斯斯坦",
  "Cambodia": "柬埔寨",
  "Korea": "韩国",
  "Dem. Rep. Korea": "北朝鲜",
  "Kosovo": "科索沃",
  "Kuwait": "科威特",
  "Lao PDR": "老挝",
  "Lebanon": "黎巴嫩",
  "Liberia": "利比里亚",
  "Libya": "利比亚",
  "Sri Lanka": "斯里兰卡",
  "Lesotho": "莱索托",
  "Lithuania": "立陶宛",
  "Luxembourg": "卢森堡",
  "Latvia": "拉脱维亚",
  "Morocco": "摩洛哥",
  "Moldova": "摩尔多瓦",
  "Madagascar": "马达加斯加",
  "Mexico": "墨西哥",
  "Macedonia": "北马其顿",
  "Mali": "马里",
  "Myanmar": "缅甸",
  "Montenegro": "黑山",
  "Mongolia": "蒙古",
  "Mozambique": "莫桑比克",
  "Mauritania": "毛里塔尼亚",
  "Malawi": "马拉维",
  "Malaysia": "马来西亚",
  "Namibia": "纳米比亚",
  "New Caledonia": "新喀里多尼亚",
  "Niger": "尼日尔",
  "Nigeria": "尼日利亚",
  "Nicaragua": "尼加拉瓜",
  "Netherlands": "荷兰",
  "Norway": "挪威",
  "Nepal": "尼泊尔",
  "New Zealand": "新西兰",
  "Oman": "阿曼",
  "Pakistan": "巴基斯坦",
  "Panama": "巴拿马",
  "Peru": "秘鲁",
  "Philippines": "菲律宾",
  "Papua New Guinea": "巴布亚新几内亚",
  "Poland": "波兰",
  "Puerto Rico": "波多黎各",
  "Portugal": "葡萄牙",
  "Paraguay": "巴拉圭",
  "Qatar": "卡塔尔",
  "Romania": "罗马尼亚",
  "Russia": "俄罗斯",
  "Rwanda": "卢旺达",
  "W. Sahara": "西撒哈拉",
  "Saudi Arabia": "沙特阿拉伯",
  "Sudan": "苏丹",
  "S. Sudan": "南苏丹",
  "Senegal": "塞内加尔",
  "Solomon Is.": "所罗门群岛",
  "Sierra Leone": "塞拉利昂",
  "El Salvador": "萨尔瓦多",
  "Somaliland": "索马里兰",
  "Somalia": "索马里",
  "Serbia": "塞尔维亚",
  "Suriname": "苏里南",
  "Slovakia": "斯洛伐克",
  "Slovenia": "斯洛文尼亚",
  "Sweden": "瑞典",
  "Swaziland": "斯威士兰",
  "Syria": "叙利亚",
  "Chad": "乍得",
  "Togo": "多哥",
  "Thailand": "泰国",
  "Tajikistan": "塔吉克斯坦",
  "Turkmenistan": "土库曼斯坦",
  "Timor-Leste": "东帝汶",
  "Trinidad and Tobago": "特立尼达和多巴哥",
  "Tunisia": "突尼斯",
  "Turkey": "土耳其",
  "Tanzania": "坦桑尼亚",
  "Uganda": "乌干达",
  "Ukraine": "乌克兰",
  "Uruguay": "乌拉圭",
  "United States": "美国",
  "Uzbekistan": "乌兹别克斯坦",
  "Venezuela": "委内瑞拉",
  "Vietnam": "越南",
  "Vanuatu": "瓦努阿图",
  "West Bank": "西岸",
  "Yemen": "也门",
  "South Africa": "南非",
  "Zambia": "赞比亚",
  "Zimbabwe": "津巴布韦",
  "Aland": "奥兰群岛",
  "American Samoa": "美属萨摩亚",
  "Andorra": "安道尔",
  "Anguilla": "安圭拉",
  "Antigua and Barb.": "安提瓜和巴布达",
  "Aruba": "阿鲁巴",
  "Bahrain": "巴林",
  "Barbados": "巴巴多斯",
  "Bouvet Island": "布维岛",
  "Cape Verde": "佛得角",
  "Christmas Islands": "圣诞岛",
  "Cocos (keeling) Islands": "科科斯（基林）群岛",
  "Comoros": "科摩罗",
  "Cook Islands": "库克群岛",
  "Dominica": "多米尼克",
  "Dominican Rep.": "多明尼加共和国",
  "Faeroe Is.": "法罗群岛",
  "MetropolitanFrance": "法国大都会",
  "French Polynesia": "法属波利尼西亚",
  "Gibraltar": "直布罗陀",
  "Grenada": "格林纳达",
  "Guam": "关岛",
  "Guernsey": "根西岛",
  "Isle of Man": "马恩岛",
  "Jersey": "泽西岛",
  "Kiribati": "基里巴斯",
  "Liechtenstein": "列支敦士登公国",
  "Maldives": "马尔代夫",
  "Malta": "马耳他",
  "Marshall Islands": "马绍尔群岛",
  "Mauritius": "毛里求斯",
  "Micronesia": "密克罗尼西亚",
  "Monaco": "摩纳哥",
  "Montserrat": "蒙特塞拉特",
  "Nauru": "瑙鲁",
  "Niue": "纽埃",
  "Norfolk Island": "诺福克岛",
  "Palau": "帕劳",
  "Palestine": "巴勒斯坦",
  "Pitcairn Islands": "皮特凯恩群岛",
  "Russian Federation": "俄罗斯联邦",
  "Saint Helena": "圣赫勒拿",
  "Saint Lucia": "圣卢西亚",
  "Saint Kitts-Nevis": "圣基茨和尼维斯",
  "St. Vin. and Gren.": "圣文森特和格林纳丁斯",
  "Samoa": "萨摩亚",
  "San Marino": "圣马力诺",
  "Sao Tome and Principe": "圣多美和普林西比",
  "Seychelles": "塞舌尔",
  "Tokelau": "托克劳",
  "Tonga": "汤加",
  "Tuvalu": "图瓦卢",
  "Vatican City": "梵蒂冈",
  "Wallis and Futuna": "瓦利斯群岛和富图纳群岛",
  "Yugoslavia": "南斯拉夫"
}

// 初始化参数
var series = [
  {
    type: 'effectScatter',
    coordinateSystem: 'geo',
    zlevel: 2,
    rippleEffect: { //涟漪特效
      period: 4, //动画时间，值越小速度越快
      brushType: 'stroke', //波纹绘制方式 stroke, fill
      scale: 3 //波纹圆环最大限制，值越大波纹越大
    },
    label: {
      normal: {
        show: true,
        areaColor: 'red',
        position: 'right', //显示位置
        offset: [5, 0], //偏移设置
        formatter: function (params) { //圆环显示文字
          return params.data.name.replace(/中国\//g, '');
        },
        fontSize: 14
      },
      emphasis: {
        show: true
      }
    },
    symbol: 'circle',
    symbolSize: function (val) {
      return 4 + val[2] * 5; //圆环大小
    },
    itemStyle: {
      normal: {
        show: true,
        color: '#eb9d8e' // 字体颜色
      }
    },
    data: []
  }
]

// 绘制基础参数
var option = {
  backgroundColor: '#000',
  title: {
    text: '',
    subtext: '',
    left: 'center',
    top: -3,
    itemGap: 0,
    textStyle: {
      color: '#fff',
      fontSize: 20
    },
    z: 200
  },
  tooltip: {
    show: true,
    trigger: 'item',
    backgroundColor: 'rgba(166, 200, 76, 0)',
    borderColor: '#516a89',
    showDelay: 0,
    hideDelay: 0,
    enterable: true,
    transitionDuration: 0,
    extraCssText: 'z-index:100',
    formatter: function (params, ticket, callback) {
      //根据业务自己拓展要显示的内容
      var res = "";
      var name = params.name;
      var hitNum = params.data.hitNum || 0;
      var visitorNum = params.data.visitorNum || 0;
      console.log(params, 'wjf_003')
      res += "<span style='color:#fff;'>" + name + "</span><br/>";
      res += "<span style='color:#fff;'>访客数：" + visitorNum + "</span><br/>";
      res += "<span style='color:#fff;'>点击数：" + hitNum + "</span>";
      return res;
    }
  },
  visualMap: [{
    show: false,
    seriesIndex: 0,
    dimension: 0, //取第一维度,批次
    right: 10,
    bottom: 10,
    zlevel: 10,
    calculable: true,
    min: 0,
    max: 10,
    inRange: { //由低到高， 点亮城市圆圈颜色
      color: ['#11eb11']
    },
    textStyle: {
      color: '#fff',
      fontSize: 12
    }
  }],
  geo: {
    map: 'world',
    roam: true, //不开启缩放和平移
    zoom: 1, //视角缩放比例
    nameMap: cityMap,
    label: {
      normal: {
        show: false, // 默认显示各个国家
        fontSize: '10',
        color: '#eb9d8e'
      },
      emphasis: {
        show: true,
        color: '#fff' // 区域悬浮国家名称颜色
      }
    },
    itemStyle: {
      normal: {
        // borderColor: 'rgba(0, 0, 0, 0.7)',
        areaColor: '#3a7fd5',
        borderColor: '#0a53e9',
        shadowColor: '#092f8f',
        shadowBlur: 20,
        opacity: 1
      },
      emphasis: {
        areaColor: '#F3B329', //鼠标选择区域颜色
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowBlur: 20,
        borderWidth: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        opacity: 1
      }
    }
  },
  series: series
};

/**
 * 接口返回的数据格式
 * name 城市名字
 * scaleVal 闪烁圆圈的大小[0.1-2],不给就是0.2,
 * showText 闪烁圆圈悬浮显示的数据
 * 
 * hits	number	
  必须
  visitors	number	
  必须
  countrycode	string	
  必须
  cityid	number	
  必须
  cityname
  longitude: 经度
  latitude: 维度
 */

// mock data start
// var resList = [
//   {
//       "hits":395,
//       "visitors":6,
//       "countrycode":"CN",
//       "longitude":113.722,
//       "latitude":34.7732
//   },
//   {
//       "hits":348,
//       "visitors":6,
//       "countrycode":"CN",
//       "cityid":1799962,
//       "cityname":"南京",
//       "longitude":118.7738,
//       "latitude":32.0589
//   },
//   {
//       "hits":11,
//       "visitors":1,
//       "countrycode":"CN",
//       "cityid":1796236,
//       "cityname":"上海",
//       "longitude":121.4581,
//       "latitude":31.2222
//   },
//   {
//       "hits":9,
//       "visitors":1,
//       "countrycode":"US",
//       "cityid":5392171,
//       "longitude":-121.7714,
//       "latitude":37.1835
//   },
//   {
//       "hits":8,
//       "visitors":3,
//       "countrycode":"CN",
//       "longitude":113.722,
//       "latitude":34.7732
//   },
//   {
//       "hits":8,
//       "visitors":1,
//       "countrycode":"CN",
//       "longitude":113.722,
//       "latitude":34.7732
//   },
//   {
//       "hits":6,
//       "visitors":1,
//       "countrycode":"CN",
//       "longitude":113.722,
//       "latitude":34.7732
//   },
//   {
//       "hits":6,
//       "visitors":1,
//       "countrycode":"CN",
//       "longitude":113.722,
//       "latitude":34.7732
//   },
//   {
//       "hits":6,
//       "visitors":1,
//       "countrycode":"CN",
//       "longitude":113.722,
//       "latitude":34.7732
//   },
//   {
//       "hits":6,
//       "visitors":1,
//       "countrycode":"JP",
//       "cityid":1850147,
//       "cityname":"东京",
//       "longitude":139.6899,
//       "latitude":35.6893
//   },
//   {
//       "hits":5,
//       "visitors":2,
//       "countrycode":"US",
//       "longitude":-97.822,
//       "latitude":37.751
//   },
//   {
//       "hits":5,
//       "visitors":2,
//       "countrycode":"US",
//       "longitude":-97.822,
//       "latitude":37.751
//   },
//   {
//       "hits":5,
//       "visitors":2,
//       "countrycode":"US",
//       "longitude":-97.822,
//       "latitude":37.751
//   },
//   {
//       "hits":5,
//       "visitors":2,
//       "countrycode":"US",
//       "longitude":-97.822,
//       "latitude":37.751
//   },
//   {
//       "hits":5,
//       "visitors":2,
//       "countrycode":"US",
//       "longitude":-97.822,
//       "latitude":37.751
//   },
//   {
//       "hits":5,
//       "visitors":2,
//       "countrycode":"US",
//       "longitude":-97.822,
//       "latitude":37.751
//   },
//   {
//       "hits":4,
//       "visitors":1,
//       "countrycode":"CN",
//       "cityid":1800627,
//       "cityname":"绵阳",
//       "longitude":104.6693,
//       "latitude":31.4554
//   },
//   {
//       "hits":4,
//       "visitors":1,
//       "countrycode":"CN",
//       "cityid":1800163,
//       "cityname":"南昌",
//       "longitude":115.8655,
//       "latitude":28.6796
//   },
//   {
//       "hits":4,
//       "visitors":1,
//       "countrycode":"CN",
//       "longitude":113.722,
//       "latitude":34.7732
//   },
//   {
//       "hits":4,
//       "visitors":1,
//       "countrycode":"CN",
//       "longitude":113.722,
//       "latitude":34.7732
//   },
//   {
//       "hits":4,
//       "visitors":1,
//       "countrycode":"CN",
//       "longitude":113.722,
//       "latitude":34.7732
//   },
//   {
//       "hits":4,
//       "visitors":1,
//       "countrycode":"CN",
//       "longitude":113.722,
//       "latitude":34.7732
//   },
//   {
//       "hits":4,
//       "visitors":1,
//       "countrycode":"CN",
//       "cityid":1800163,
//       "cityname":"南昌",
//       "longitude":115.8655,
//       "latitude":28.6796
//   },
//   {
//       "hits":4,
//       "visitors":1,
//       "countrycode":"CN",
//       "longitude":113.722,
//       "latitude":34.7732
//   },
//   {
//       "hits":4,
//       "visitors":1,
//       "countrycode":"CN",
//       "cityid":1792947,
//       "cityname":"天津",
//       "longitude":117.1762,
//       "latitude":39.1488
//   },
//   {
//       "hits":4,
//       "visitors":1,
//       "countrycode":"CN",
//       "longitude":113.722,
//       "latitude":34.7732
//   },
//   {
//       "hits":4,
//       "visitors":1,
//       "countrycode":"CN",
//       "longitude":113.722,
//       "latitude":34.7732
//   },
//   {
//       "hits":4,
//       "visitors":2,
//       "countrycode":"US",
//       "longitude":-97.822,
//       "latitude":37.751
//   },
//   {
//       "hits":4,
//       "visitors":2,
//       "countrycode":"US",
//       "longitude":-97.822,
//       "latitude":37.751
//   },
//   {
//       "hits":4,
//       "visitors":2,
//       "countrycode":"US",
//       "longitude":-97.822,
//       "latitude":37.751
//   },
//   {
//       "hits":4,
//       "visitors":2,
//       "countrycode":"US",
//       "longitude":-97.822,
//       "latitude":37.751
//   },
//   {
//       "hits":2,
//       "visitors":2,
//       "countrycode":"CN",
//       "longitude":113.722,
//       "latitude":34.7732
//   },
//   {
//       "hits":2,
//       "visitors":1,
//       "countrycode":"CN",
//       "cityid":1816670,
//       "cityname":"北京",
//       "longitude":116.3861,
//       "latitude":39.9143
//   },
//   {
//       "hits":2,
//       "visitors":2,
//       "countrycode":"CN",
//       "cityid":1816670,
//       "cityname":"北京",
//       "longitude":116.3861,
//       "latitude":39.9143
//   },
//   {
//       "hits":2,
//       "visitors":1,
//       "countrycode":"CN",
//       "cityid":1816670,
//       "cityname":"北京",
//       "longitude":116.3861,
//       "latitude":39.9143
//   },
//   {
//       "hits":2,
//       "visitors":0,
//       "countrycode":"CN",
//       "longitude":113.722,
//       "latitude":34.7732
//   },
//   {
//       "hits":2,
//       "visitors":1,
//       "countrycode":"CN",
//       "cityid":1800163,
//       "cityname":"南昌",
//       "longitude":115.8655,
//       "latitude":28.6796
//   },
//   {
//       "hits":2,
//       "visitors":1,
//       "countrycode":"CN",
//       "longitude":113.722,
//       "latitude":34.7732
//   },
//   {
//       "hits":2,
//       "visitors":1,
//       "countrycode":"CN",
//       "cityid":1800163,
//       "cityname":"南昌",
//       "longitude":115.8655,
//       "latitude":28.6796
//   },
//   {
//       "hits":2,
//       "visitors":1,
//       "countrycode":"CN",
//       "cityid":1800163,
//       "cityname":"南昌",
//       "longitude":115.8655,
//       "latitude":28.6796
//   },
//   {
//       "hits":2,
//       "visitors":1,
//       "countrycode":"CN",
//       "cityid":1792947,
//       "cityname":"天津",
//       "longitude":117.1762,
//       "latitude":39.1488
//   },
//   {
//       "hits":2,
//       "visitors":1,
//       "countrycode":"CN",
//       "cityid":1792947,
//       "cityname":"天津",
//       "longitude":117.1762,
//       "latitude":39.1488
//   },
//   {
//       "hits":2,
//       "visitors":1,
//       "countrycode":"CN",
//       "cityid":1800163,
//       "cityname":"南昌",
//       "longitude":115.8655,
//       "latitude":28.6796
//   },
//   {
//       "hits":2,
//       "visitors":1,
//       "countrycode":"CN",
//       "cityid":1800163,
//       "cityname":"南昌",
//       "longitude":115.8655,
//       "latitude":28.6796
//   },
//   {
//       "hits":2,
//       "visitors":1,
//       "countrycode":"CN",
//       "longitude":113.722,
//       "latitude":34.7732
//   },
//   {
//       "hits":2,
//       "visitors":1,
//       "countrycode":"CN",
//       "longitude":113.722,
//       "latitude":34.7732
//   },
//   {
//       "hits":2,
//       "visitors":1,
//       "countrycode":"CN",
//       "cityid":1800163,
//       "cityname":"南昌",
//       "longitude":115.8655,
//       "latitude":28.6796
//   },
//   {
//       "hits":2,
//       "visitors":1,
//       "countrycode":"CN",
//       "cityid":1800163,
//       "cityname":"南昌",
//       "longitude":115.8655,
//       "latitude":28.6796
//   },
//   {
//       "hits":2,
//       "visitors":1,
//       "countrycode":"CN",
//       "cityid":1790630,
//       "cityname":"西安",
//       "longitude":108.9246,
//       "latitude":34.2635
//   },
//   {
//       "hits":2,
//       "visitors":1,
//       "countrycode":"CN",
//       "longitude":113.722,
//       "latitude":34.7732
//   },
//   {
//       "hits":2,
//       "visitors":1,
//       "countrycode":"CN",
//       "longitude":113.722,
//       "latitude":34.7732
//   },
//   {
//       "hits":2,
//       "visitors":1,
//       "countrycode":"CN",
//       "cityid":1792947,
//       "cityname":"天津",
//       "longitude":117.1762,
//       "latitude":39.1488
//   },
//   {
//       "hits":2,
//       "visitors":1,
//       "countrycode":"CN",
//       "cityid":1800163,
//       "cityname":"南昌",
//       "longitude":115.8655,
//       "latitude":28.6796
//   },
//   {
//       "hits":2,
//       "visitors":1,
//       "countrycode":"CN",
//       "longitude":113.722,
//       "latitude":34.7732
//   },
//   {
//       "hits":2,
//       "visitors":1,
//       "countrycode":"CN",
//       "longitude":113.722,
//       "latitude":34.7732
//   },
//   {
//       "hits":2,
//       "visitors":1,
//       "countrycode":"CN",
//       "longitude":113.722,
//       "latitude":34.7732
//   },
//   {
//       "hits":2,
//       "visitors":1,
//       "countrycode":"CN",
//       "longitude":113.722,
//       "latitude":34.7732
//   },
//   {
//       "hits":2,
//       "visitors":1,
//       "countrycode":"CN",
//       "longitude":113.722,
//       "latitude":34.7732
//   },
//   {
//       "hits":2,
//       "visitors":1,
//       "countrycode":"CN",
//       "longitude":113.722,
//       "latitude":34.7732
//   },
//   {
//       "hits":2,
//       "visitors":2,
//       "countrycode":"CN",
//       "cityid":1816670,
//       "cityname":"北京",
//       "longitude":116.3861,
//       "latitude":39.9143
//   },
//   {
//       "hits":1,
//       "visitors":1,
//       "countrycode":"CN",
//       "longitude":113.722,
//       "latitude":34.7732
//   },
//   {
//       "hits":1,
//       "visitors":1,
//       "countrycode":"CN",
//       "cityid":1886760,
//       "cityname":"苏州市",
//       "longitude":120.602,
//       "latitude":31.3093
//   },
//   {
//       "hits":1,
//       "visitors":1,
//       "countrycode":"CN",
//       "longitude":113.722,
//       "latitude":34.7732
//   },
//   {
//       "hits":1,
//       "visitors":1,
//       "countrycode":"CN",
//       "longitude":113.722,
//       "latitude":34.7732
//   },
//   {
//       "hits":1,
//       "visitors":1,
//       "countrycode":"CN",
//       "cityid":1816670,
//       "cityname":"北京",
//       "longitude":116.3861,
//       "latitude":39.9143
//   },
//   {
//       "hits":1,
//       "visitors":1,
//       "countrycode":"CN",
//       "longitude":113.722,
//       "latitude":34.7732
//   },
//   {
//       "hits":1,
//       "visitors":1,
//       "countrycode":"CN",
//       "cityid":1799962,
//       "cityname":"南京",
//       "longitude":118.7738,
//       "latitude":32.0589
//   },
//   {
//       "hits":1,
//       "visitors":1,
//       "countrycode":"US",
//       "longitude":-97.822,
//       "latitude":37.751
//   },
//   {
//       "hits":1,
//       "visitors":1,
//       "countrycode":"US",
//       "cityid":5392171,
//       "longitude":-121.7714,
//       "latitude":37.1835
//   },
//   {
//       "hits":1,
//       "visitors":1,
//       "countrycode":"JP",
//       "cityid":1850147,
//       "cityname":"东京",
//       "longitude":139.6899,
//       "latitude":35.6893
//   },
//   {
//       "hits":1,
//       "visitors":1,
//       "countrycode":"US",
//       "longitude":-97.822,
//       "latitude":37.751
//   },
//   {
//       "hits":1,
//       "visitors":1,
//       "countrycode":"US",
//       "longitude":-97.822,
//       "latitude":37.751
//   },
//   {
//       "hits":1,
//       "visitors":1,
//       "countrycode":"US",
//       "longitude":-97.822,
//       "latitude":37.751
//   },
//   {
//       "hits":1,
//       "visitors":1,
//       "countrycode":"CN",
//       "longitude":113.722,
//       "latitude":34.7732
//   },
//   {
//       "hits":1,
//       "visitors":1,
//       "countrycode":"US",
//       "longitude":-97.822,
//       "latitude":37.751
//   },
//   {
//       "hits":1,
//       "visitors":1,
//       "countrycode":"CN",
//       "longitude":113.722,
//       "latitude":34.7732
//   },
//   {
//       "hits":1,
//       "visitors":1,
//       "countrycode":"HK",
//       "longitude":114.1657,
//       "latitude":22.2578
//   },
//   {
//       "hits":1,
//       "visitors":0,
//       "countrycode":"HK",
//       "longitude":114.1657,
//       "latitude":22.2578
//   },
//   {
//       "hits":1,
//       "visitors":1,
//       "countrycode":"US",
//       "longitude":-97.822,
//       "latitude":37.751
//   },
//   {
//       "hits":1,
//       "visitors":1,
//       "countrycode":"US",
//       "longitude":-97.822,
//       "latitude":37.751
//   },
//   {
//       "hits":1,
//       "visitors":1,
//       "countrycode":"US",
//       "longitude":-97.822,
//       "latitude":37.751
//   },
//   {
//       "hits":1,
//       "visitors":1,
//       "countrycode":"CN",
//       "longitude":113.722,
//       "latitude":34.7732
//   },
//   {
//       "hits":1,
//       "visitors":1,
//       "countrycode":"CN",
//       "longitude":113.722,
//       "latitude":34.7732
//   },
//   {
//       "hits":1,
//       "visitors":1,
//       "countrycode":"CN",
//       "cityid":1816670,
//       "cityname":"北京",
//       "longitude":116.3861,
//       "latitude":39.9143
//   },
//   {
//       "hits":1,
//       "visitors":1,
//       "countrycode":"US",
//       "longitude":-97.822,
//       "latitude":37.751
//   },
//   {
//       "hits":1,
//       "visitors":1,
//       "countrycode":"US",
//       "cityid":5392171,
//       "longitude":-121.7714,
//       "latitude":37.1835
//   },
//   {
//       "hits":1,
//       "visitors":1,
//       "countrycode":"US",
//       "longitude":-97.822,
//       "latitude":37.751
//   }
// ]
// let endData = [];
// if (resList && resList.length) {
//   resList.forEach(item => {
//     let coordX = item.longitude || 0;
//     if (coordX <= -30) {
//       item.longitude = 360 + coordX;
//     }
//     if (item.cityname) {
//       let value = [item.longitude, item.latitude, (item.scaleVal || 0.5)]
//       endData.push({
//         name: item.cityname,
//         value: value,
//         hitNum: item.hits, // 点击数量
//         visitorNum: item.visitors, // 访客数量
//       });
//     }
//   })
// }
// series[0].data = endData;
// mock data end

// if (option && typeof option === 'object') {
//   myChart.setOption(option);
// }

$.get("/geo/about/get", function(data, status){
  let endData = [];
  if (data && data.length) {
    data.forEach(item => {
      let coordX = item.longitude || 0;
      if (coordX <= -30) {
        item.longitude = 360 + coordX;
      }
      if (item.cityname) {
        let value = [item.longitude, item.latitude, (item.scaleVal || 0.5)]
        endData.push({
          name: item.cityname,
          value: value,
          hitNum: item.hits, // 点击数量
          visitorNum: item.visitors, // 访客数量
        });
      }
    })
  }
  series[0].data = endData;
  if (option && typeof option === 'object') {
    myChart.setOption(option);
  }
});


// window.addEventListener('resize', myChart.resize);