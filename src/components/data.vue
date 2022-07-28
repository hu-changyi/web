<template>
  <div class='bg' style="clear: both">
    <div class="top">
      <div class="time"></div>
      <div class="title">
        <a class="a1">{{ title }}</a>
      </div>
      <div class="time">
        <a class="a2">{{ time }}</a>
      </div>
    </div>
    <div class="middle">
      <div class="box">
        <div class="box_title">
          <a class="a3" style="">{{ title1 }}</a>
        </div>
        <div class="box_data">
          <div ref="chart1" style="width:100%;height:100%"></div>
        </div>
      </div>
      <div class="box">
        <div class="box_title">
          <a class="a3" style="">{{ title2 }}</a>
        </div>
        <div class="box_data">
          <div ref="chart2" style="width:100%;height:100%">
          </div>
        </div>
      </div>
      <div class="map3">
        <div class="box_title3">
          <a class="a3" style="">{{ title3 }}</a>
        </div>
        <div class="box_data3">
          <div ref="chart3" style="width:100%;height:100%">
          </div>
        </div>
      </div>
      <div class="box">
        <div class="box_title">
          <a class="a3" style="">{{ title4 }}</a>
        </div>
        <div class="box_data">
          <a class="a2"></a>
          <div ref="chart4" style="width:100%;height:100%;"></div>
        </div>
      </div>
      <div class="box">
        <div class="box_title">
          <a class="a3" style="">{{ title5 }}</a>
        </div>
        <div class="box_data">
          <div ref="chart5" style="width:100%;height:100%;"></div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom_box">
        <div class="bottom_box_title">
          <a class="a3" style="">{{ title6 }}</a>
        </div>
        <div class="bottom_box_data">
          <div ref="chart6" style="width:100%;height:100%;"></div>
        </div>
      </div>
      <div class="bottom_box">
        <div class="bottom_box_title">
          <a class="a3" style="">{{ title7 }}</a>
        </div>
        <div class="bottom_box_data">
          <div ref="chart7" style="width:100%;height:100%;"></div>
        </div>
      </div>
      <div class="bottom_box">
        <div class="bottom_box_title">
          <a class="a3" style="">{{ title8 }}</a>
        </div>
        <div class="bottom_box_data">
          <div ref="chart8" style="width:100%;height:100%;"></div>
        </div>
      </div>
      <div class="bottom_box">
        <div class="bottom_box_title">
          <a class="a3" style="">{{ title9 }}</a>
        </div>
        <div class="bottom_box_data">
          <div ref="chart9" style="width:100%;height:100%;"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../assets/china.js';
var titlelist = '';
export default {
  data() {
    this.getData();
    return {
      title: "111",
    };
  },
  created() {

  },
  beforeMount() {
  },
  mounted() {

  },
  updated() {
    this.getEchartData1();
    this.getEchartData2();
    this.getEchartData3();
    this.getEchartData4();
    this.getEchartData5();
    this.getEchartData6();
    this.getEchartData7();
    this.getEchartData8();
    this.getEchartData9();
  },
  methods: {
    getData() {
      let title3 = '';
      //this.axios.get('/static/test.json').then((response) => {console.log(response.data)}),
      this.axios.get('/static/test.json').then((response) => {
        //this.title = response.data;
        var obj = JSON.stringify(response.data);//JSON.stringify() 方法将 JavaScript 对象转换为字符串
        //var obj1 = JSON.parse(obj); //JSON.parse() 方法将数据转换为 JavaScript 对象
        titlelist = JSON.parse(obj); //JSON.parse() 方法将数据转换为 JavaScript 对象
        this.title = titlelist.data[0].title;
        this.title1 = titlelist.data[0].title1;
        this.title2 = titlelist.data[0].title2;
        this.title3 = titlelist.data[0].title3;
        this.title4 = titlelist.data[0].title4;
        this.title5 = titlelist.data[0].title5;
        this.title6 = titlelist.data[0].title6;
        this.title7 = titlelist.data[0].title7;
        this.title8 = titlelist.data[0].title8;
        this.title9 = titlelist.data[0].title9;
      })
    },
    getEchartData1() {
      let myChart1 = this.$echarts.init(this.$refs.chart1)
      myChart1.setOption({
        title: {
          text: '活动次数',
          textStyle: {
            color: 'rgb(175, 198, 223)',
            fontSize: 18,
          },
        },
        textStyle: {
          color: 'rgb(175, 198, 223)',
          fontSize: 14,
        },
        grid: {
          top: "15%",
          bottom: "12%",
          left: "28%",
          right: "5%",
        },
        xAxis: {
        },
        yAxis: {
          data: ['党史学习', '红色观影', '党会座谈', '参观学习'],
          axisLabel: {
            interval: 0,
            showMaxLabel: true,
            textStyle: {}
          }
        },
        series: [
          {
            type: 'bar',
            barWidth: '15%',
            data: [11, 2, 3, 1],
            itemStyle: {
              color: 'rgb(98, 201, 141)',
              shadowColor: '#91cc75',
              barBorderRadius: 10,
            }
          }
        ]
      })
      window.onresize = function () {
        myChart1.resize();
      };
    },
    getEchartData2() {
      let myChart2 = this.$echarts.init(this.$refs.chart2, 'shine')
      myChart2.setOption({
        textStyle: {
          color: 'rgb(175, 198, 223)',
          fontSize: 14,
        },
        series: [
          {
            type: 'pie',
            data: [
              {
                value: 35,
                name: '便民利民'
              },
              {
                value: 34,
                name: '扶贫帮困'
              },
              {
                value: 548,
                name: '就业指导'
              },
              {
                value: 548,
                name: '治安维稳'
              },
              {
                value: 548,
                name: '卫生保健'
              },
              {
                value: 148,
                name: '环境维护'
              },
              {
                value: 158,
                name: '宣传教育'
              },
              {
                value: 154,
                name: '文体娱乐'
              },
              {
                value: 22,
                name: '助农增收'
              },
              {
                value: 12,
                name: '心理咨询'
              }
            ]
          }
        ]
      })
      window.onresize = function () {
        myChart2.resize();
      };
    },
    getEchartData3() {
      let myChart3 = this.$echarts.init(this.$refs.chart3)
      myChart3.setOption({
        /* backgroundColor: "#FFFFFF", */
        textStyle: {
          color: 'rgb(175, 198, 223)',
          fontSize: 14,
        },
        title: {
          text: '',
          subtext: "",
          x: "center",
          textStyle: {
            color: 'rgb(175, 198, 223)',
            fontSize: 18,
          },
        },
        tooltip: {
          trigger: "item"
        },
        //左侧小导航图标
        visualMap: {
          min: 0,
          max: 600,
          text: ["高", "低"],
          inRange: {
            color: ["#D8FAFE", "#006EDD"]//此处是设置颜色过渡
          }
        },
        //配置属性
        series: [
          {
            name: "参与人数人数",
            type: "map",
            mapType: "china",  //---此处是中国地图样式-------需要注意：省份中应使用汉字即如 ‘mapType:"河南"’
            roam: true,
            label: {
              normal: {
                show: false //省份名称----你可以选择true，展示每个省份的名称
              },
              emphasis: {
                show: false
              }
            },
            data: [//这是数据，500以内的随机数
              { name: "北京", value: "600" },
              { name: "天津", value: "400" },
              { name: "上海", value: "100" },
              { name: "重庆", value: "400" },
              { name: "河北", value: "400" },
              { name: "河南", value: "400" },
              { name: "云南", value: "100" },
              { name: "辽宁", value: "100" },
              { name: "黑龙江", value: "100" },
              { name: "湖南", value: "300" },
              { name: "安徽", value: "300" },
              { name: "山东", value: "100" },
              { name: "新疆", value: "100" },
              { name: "江苏", value: "300" },
              { name: "浙江", value: "600" },
              { name: "江西", value: "300" },
              { name: "湖北", value: "600" },
              { name: "广西", value: "200" },
              { name: "甘肃", value: "100" },
              { name: "山西", value: "100" },
              { name: "内蒙古", value: "100" },
              { name: "陕西", value: "100" },
              { name: "吉林", value: "200" },
              { name: "福建", value: "200" },
              { name: "贵州", value: "200" },
              { name: "广东", value: "600" },
              { name: "青海", value: "100" },
              { name: "西藏", value: "100" },
              { name: "四川", value: "200" },
              { name: "宁夏", value: "100" },
              { name: "海南", value: "200" },
              { name: "台湾", value: "100" },
              /* { name: "香港", value: Math.round(Math.random() * 500) },
              { name: "澳门", value: Math.round(Math.random() * 500) } */
            ] //数据
          }
        ]
      })
      window.onresize = function () {
        myChart3.resize();
      };
    },
    getEchartData4() {
      let myChart4 = this.$echarts.init(this.$refs.chart4)
      myChart4.setOption({
        textStyle: {
          color: 'rgb(175, 198, 223)',
          fontSize: 14,
        },
        title: {
          text: '',
          subtext: "",
          x: "center",
          textStyle: {
            color: 'rgb(175, 198, 223)',
            fontSize: 18,
          },
        },
        radar: {
          // shape: 'circle',
          indicator: [
            { name: '书画乐器'},
            { name: '摄影技术'},
            { name: '舞蹈戏曲'},
            { name: '养生保健'},
            { name: '美食制作'},
            { name: '游学研学'}
          ]
        },
        series: [
          {
            type: 'radar',
            data: [
              {
                value: [4200, 311000, 20000, 35000, 50000, 18000],
              }
            ]
          }
        ]
      })
      window.onresize = function () {
        myChart4.resize();
      };
    },
    getEchartData5() {
      let myChart5 = this.$echarts.init(this.$refs.chart5, 'shine')
      myChart5.setOption({
        title: {
          text: '回收数量',
          textStyle: {
            color: 'rgb(175, 198, 223)',
            fontSize: 18,
          },
        },
        textStyle: {
          color: 'rgb(175, 198, 223)',
          fontSize: 14,
        },
        xAxis: {
          type: 'category',
          data: ['废纸', '塑料', '玻璃', '金属', '布料']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [320, 200, 150, 50, 250],
            type: 'line'
          }
        ]
      })
      window.onresize = function () {
        myChart5.resize();
      };
    },
    getEchartData6() {
      let myChart6 = this.$echarts.init(this.$refs.chart6, 'shine')
      myChart6.setOption({
        textStyle: {
          color: 'rgb(175, 198, 223)',
          fontSize: 14,
        },
        xAxis: {
          data: ['助餐', '助洁', '助医', '远程照护']
        },
        yAxis: {},
        series: [
          {
            type: 'scatter',
            data: [220, 182, 191, 234]
          }
        ]
      })
      window.onresize = function () {
        myChart6.resize();
      };
    },
    getEchartData7() {
      let myChart7 = this.$echarts.init(this.$refs.chart7, 'shine')
      myChart7.setOption({
        textStyle: {
          color: 'rgb(175, 198, 223)',
          fontSize: 14,
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          textStyle: {
            color: 'rgb(175, 198, 223)',
            fontSize: 14,
          },
        },
        xAxis: {
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
        },
        yAxis: {},
        series: [
          {
            name: '短视频',
            type: 'bar',
            data: [4, 5, 8, 5, 7, 8, 5, 8, 5, 7, 8, 5]
          },
          {
            name: '图文秀',
            type: 'bar',
            data: [26, 24, 18, 22, 23, 20, 27, 18, 22, 23, 20, 27]
          }
        ]
      })
      window.onresize = function () {
        myChart7.resize();
      };
    },
    getEchartData8() {
      let myChart8 = this.$echarts.init(this.$refs.chart8, 'shine')
      myChart8.setOption({
        legend: {
          left: 'center',
          top: 'bottom',
          data: [
            'rose1',
            'rose2',
            'rose3',
            'rose4',
            'rose5'
          ]
        },
        series: [
          {
            name: '',
            type: 'pie',
            radius: [20, 40],
            center: ['25%', '50%'],
            roseType: 'radius',
            itemStyle: {
              borderRadius: 5
            },
            label: {
              //show: false
            },
            emphasis: {
              label: {
                show: true
              }
            },
            data: [
              { value: 1, name: '门禁' },
              { value: 1, name: '停车' },
              { value: 1, name: '电梯广告' },
              { value: 1, name: '广播' },
              { value: 1, name: '公共WiFi' }
            ]
          },
          {
            name: '',
            type: 'pie',
            radius: [20, 40],
            center: ['75%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 5
            },
            data: [
              { value: 1, name: '停车诱导' },
              { value: 1, name: '消防' },
              { value: 1, name: '监控' },
              { value: 1, name: '巡更' },
              { value: '', name: '' }
            ]
          }
        ]
      })
      window.onresize = function () {
        myChart8.resize();
      };
    },
    getEchartData9() {
      let myChart9 = this.$echarts.init(this.$refs.chart9, 'shine')
      myChart9.setOption({

        angleAxis: {
          type: 'category',
          /* data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] */
        },
        radiusAxis: {},
        polar: {
        },
        series: [
          {
            type: 'bar',
            data: [1, 2, 3, 4, 3, 5, 2, 4, 6, 1, 3, 2],
            coordinateSystem: 'polar',
            name: '传统节日',
            stack: 'a',
            emphasis: {
              focus: 'series'
            }
          },
          {
            type: 'bar',
            data: [2, 4, 6, 1, 3, 2, 2, 4, 6, 1, 3, 2],
            coordinateSystem: 'polar',
            name: '二十四节气',
            stack: 'a',
            emphasis: {
              focus: 'series'
            }
          },
          {
            type: 'bar',
            data: [1, 2, 3, 4, 1, 2, 2, 4, 6, 1, 3, 2],
            coordinateSystem: 'polar',
            name: '新媒体',
            stack: 'a',
            emphasis: {
              focus: 'series'
            }
          }
        ],
        legend: {
          textStyle: {
            color: 'rgb(175, 198, 223)',
            fontSize: 14,
          },
          show: true,
          left: 'right',
          top: 'top',
          data: ['传统节日', '二十四节气', '新媒体']
        }
      })
      window.onresize = function () {
        myChart9.resize();
      };
    },
  },
}
/* window.onbeforeunload = function () {
  this.getEchartData1();
  this.getEchartData2();
  this.getEchartData3();
} */
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bg {
  width: 100%;
  height: 100%;
  background-image: url('../assets/bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-size: 100% 100%;
}

.top {
  display: flex;
  width: 100%;
  height: 7%;
  /* Flex是Flexible Box的缩写，意为”弹性布局”，用来为盒状模型提供最大的灵活性。 */
  /* 任何一个容器都可以指定为Flex布局。 */
  flex-direction: row;
  /* 决定主轴的方向。
  row（默认值）：主轴为水平方向，起点在左端。
  row-reverse：主轴为水平方向，起点在右端。
  column：主轴为垂直方向，起点在上沿。
  column-reverse：主轴为垂直方向，起点在下沿。 */
  flex-wrap: wrap;
  /* 如果一条轴线排不下，如何换行。
  nowrap（默认）：不换行。
  wrap：换行，第一行在上方。
  wrap-reverse：换行，第一行在下方。 */
  /* flex-flow */
  /* 是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。 */
  justify-content: space-between;
  /* 项目在主轴上的对齐方式。
  flex-start（默认值）：左对齐
  flex-end：右对齐
  center： 居中
  space-between：两端对齐，项目之间的间隔都相等。
  space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。 */
  align-items: center;
  /* 项目在交叉轴上如何对齐。
  flex-start：交叉轴的起点对齐。
  flex-end：交叉轴的终点对齐。
  center：交叉轴的中点对齐。
  baseline: 项目的第一行文字的基线对齐。
  stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。 */
  align-content: center;
  /* 多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
  flex-start：与交叉轴的起点对齐。
  flex-end：与交叉轴的终点对齐。
  center：与交叉轴的中点对齐。
  space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
  space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
  stretch（默认值）：轴线占满整个交叉轴。 */
}

.title {
  /* Flex以下6个属性设置在项目上。 */
  width: 60%;
  order: 0;
  /* order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。 */
  flex-grow: 2;
  /* flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
  如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。
  如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。 */
  flex-shrink: 1;
  /* flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
  如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。
  如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。 */
  flex-basis: auto;
  /* flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。
  浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。 */
  /* flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。 */
  align-self: auto;
  /* align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。
  默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。 */
}

.time {
  align-items: center;
  width: 12%;
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
}

.middle {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  height: 62%;
}

.box {
  width: 21%;
  height: calc(50% - 10px);
  margin: 5px;
}

.box_title {
  width: 100%;
  height: 14%;
  border: 1px solid rgb(47, 137, 196);
  box-shadow: inset 0 0 10px rgba(7, 118, 181, .4);
  border-radius: 2px;
}

.box_data {
  align-items: center;
  width: 100%;
  height: 86%;
  border: 1px solid rgb(47, 137, 196);
  box-shadow: inset 0 0 10px rgba(7, 118, 181, .4);
  border-radius: 2px;
}

.box_title3 {
  width: 100%;
  height: 7%;
  border: 1px solid rgb(47, 137, 196);
  box-shadow: inset 0 0 10px rgba(7, 118, 181, .4);
  border-radius: 2px;
}

.box_data3 {
  align-items: center;
  width: 100%;
  height: 93%;
  border: 1px solid rgb(47, 137, 196);
  box-shadow: inset 0 0 10px rgba(7, 118, 181, .4);
  border-radius: 2px;
}

.map {
  width: calc(58% - 35px);
  height: calc(100%);
  margin: 5px;
  margin-bottom: 1px;
  border: 1px solid rgb(47, 137, 196);
  box-shadow: inset 0 0 10px rgba(7, 118, 181, .4);
  border-radius: 2px;
}

.map3 {
  width: calc(58% - 35px);
  height: calc(100%);
  margin: 5px;
}

.bottom {
  display: flex;
  flex-direction: row;
  width: 100%-10px;
  height: 31%;
}

.bottom_box {
  width: 25%;
  height: calc(100% - 15px);
  margin: 5px;
  border: 1px solid rgb(47, 137, 196);
  box-shadow: inset 0 0 10px rgba(7, 118, 181, .4);
  border-radius: 2px;
}

.bottom_box_title {
  width: 100%;
  height: 14%;
}

.bottom_box_data {
  width: 100%;
  height: 86%;
  border: 1px solid rgb(47, 137, 196);
  border-top: none;
  border-left: none;
}



/*.test #test{
  background-image: url('../assets/bg.png');
}*/
.a1 {
  height: 59px;
  top: 14px;
  color: rgb(218, 249, 255);
  font-family: PingFang SC;
  font-size: 38px;
  font-weight: undefined;
  line-height: 59px;
  letter-spacing: 2.3314878940582275px;
  text-align: justify;
}

.a2 {
  height: 27px;
  color: rgb(218, 249, 255);
  font-family: PingFang SC;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 1.5634554624557495px;
  text-align: justify;
}

.a3 {
  height: 27px;
  color: rgb(218, 249, 255);
  font-family: PingFang SC;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 1.5634554624557495px;
  text-align: end;
  position: relative;
}

.a3:before {
  position: absolute;
  content: "";
  width: 6px;
  height: 6px;
  background: rgba(22, 214, 255, .9);
  box-shadow: 0 0 5px rgb(22 214 255 / 90%);
  border-radius: 10px;
  left: -18px;
  top: 9px;
}
</style>
