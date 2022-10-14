<template>
  <div class="barClass" :style="{width: '300px', height: '300px'}">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'EchartBar',
  data() {
    return {
      msg: 'Welcome to  echart'
    }
  },
  mounted() {
    this.drawLine()
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(document.getElementById('myChart'), 'macarons')
      // 绘制图表
      myChart.setOption({
        title: { text: 'ECharts 入门示例' },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      })
    }
  }
}
</script >

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.barClass{
  position: relative;
  width: 100%;
  height: 100%;
h1 {
  font-weight: normal;
}
}

</style>
