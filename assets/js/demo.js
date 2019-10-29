// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

// 指定图表的配置项和数据
var option = {
  
  xAxis: {
    type: 'category',
    data: ['14:00', '16:00', '18:00', '20:00', '22:00', '00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00']
  },
  yAxis: {
      type: 'value'
  },
  series: [{
      data: [820, 932, 901, 934, 1290, 1330, 1320, 870, 1503, 812, 800, 1100],
      type: 'line'
  }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

var myChart = echarts.init(document.getElementById('main-BTC'));

// 指定图表的配置项和数据
var option = {
  
  xAxis: {
    type: 'category',
    data: ['14:00', '16:00', '18:00', '20:00', '22:00', '00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00']
  },
  yAxis: {
      type: 'value'
  },
  series: [{
      data: [1000, 982, 991, 985, 985, 930, 900, 912, 915, 1000, 800, 1100],
      type: 'line'
  }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

var myChart = echarts.init(document.getElementById('main-fav'));

// 指定图表的配置项和数据
var option = {
  
  xAxis: {
    type: 'category',
    data: ['14:00', '16:00', '18:00', '20:00', '22:00', '00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00']
  },
  yAxis: {
      type: 'value'
  },
  series: [{
      data: [1000, 982, 991, 985, 985, 930, 900, 912, 915, 1000, 800, 1100],
      type: 'line'
  }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
