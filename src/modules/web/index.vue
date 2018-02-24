<template>
  <article>
    <section id="banner" class="text-center">
      <img src="../../images/web/ytk.png">
      <h1>中国高中排行榜</h1>
      <p>猿题库2017中国高中排行榜，是猿题库评价研究中心针对全国普通高中做的一个公正、权威的排名。 </p>
      <p>榜单以全国百强榜为主，另有分省十强榜、竞赛榜、状元榜等子榜。</p>
      <div class="btnGroup">
        <a @click="scrollto('ranklist')">查看榜单</a>
        <a href="http://2015top.yuantiku.com/pdfs/top-2015.pdf" target="_blank">下载报告</a>
      </div>
    </section>
    <section class="tablelist center-box" id="ranklist">
      <section>
        <h1 class="n1">全国榜（100强）</h1>
        <v-table title="猿题库®2017中国高中排行榜（100强）" :columns="columns_country"
        :dataSource="nationData"></v-table>
      </section>
      <section class="fc">
        <h1 class="n2">分省榜（10强）</h1>
        <section class="half" v-for="(value,key) in provinceData">
          <v-table :title="'猿题库®2017中国高中排行榜（' + key + '10强）'" :columns="columns_province"
          :dataSource="value"></v-table>
        </section>
      </section> 
      <div class="text-center">
        <div class="media">
          <span>出品</span>
        </div>
        <div class="m5">
          <a href="http://www.yuantiku.com" title="猿题库" target="_blank"><img src="../../images/ytklogo.png" alt="猿题库"></a>
        </div>  
      </div>    
    </section>
  </article>
</template>
<script>
import vTable from '@/components/table.vue'
import {provinceData, nationData} from '../../data/data.js'

export default {
  name: 'Index',
  components: {
    vTable: vTable
  },
  data () {
    return {
      columns_country: [{
        name: '排名',
        dataIndex: 'rank'
      },
      {
        name: '学校名称',
        dataIndex: 'school'
      },
      {
        name: '省份',
        dataIndex: 'province'
      },
      {
        name: '2016年排名',
        dataIndex: 'lastRank'
      },
      {
        name: '排名变化',
        dataIndex: 'change'
      }],
      columns_province: [{
        name: '排名',
        dataIndex: 'rank'
      },
      {
        name: '学校名称',
        dataIndex: 'school'
      },
      {
        name: '城市',
        dataIndex: 'city'
      },
      {
        name: '2016年省内排名',
        dataIndex: 'lastRank'
      },
      {
        name: '2017年全国排名',
        dataIndex: 'nationRank'
      }],
      provinceData,
      nationData
    }
  },
  methods: {
    scrollto (name) {
      document.getElementById(name).scrollIntoView(true)
    }
  }
}
</script>
<style scoped>
#banner {min-width: 1000px;padding:70px 0 50px;background: url('../../images/web/banner.png') bottom center no-repeat rgba(255, 47, 71, 0.04);}
#banner h1 {font-size: 46px;color: #3c1e1e;margin: 16px auto 34px;}
#banner p {font-size: 12px;line-height: 2;color: #966c6c;}
#banner .btnGroup {margin-top: 34px;}
#banner .btnGroup a { display: inline-block;padding: 20px 50px 35px;background: url('../../images/web/btn.png') top center no-repeat; background-size: 100%;color: #fff;cursor: pointer;}
#banner .btnGroup a:first-child {margin-right: 24px;}
.tablelist h1 {font-size: 20px;color: #222222;padding-left: 20px;margin:50px 0 20px;}
.n1 {background: url('../../images/web/n1.png') left center no-repeat;}
.n2 {background: url('../../images/web/n2.png') left center no-repeat;}
.media {font-size: 18px;margin:70px 0 30px;font-weight: normal;color: #222222;background: url('../../images/line.png') center repeat-x;}
.media span {background: #fff;padding: 0 8px;}
.m5 {display: inline-block;vertical-align: middle;}
.sep {margin: 0 30px;}
.sep:after {content: "";width:1px;display:inline-block;height:30px;background: #dcdcdc;vertical-align: top;line-height: 56px;}
</style>