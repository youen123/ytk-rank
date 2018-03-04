<template>
  <article>
    <Navbar></Navbar>
    <section class='tablelist center-box text-center' id='province'>
      <nav class='text-center' id='navscroll'>
        <ul id='tab'>
          <li :class='{active: activeProvince == item}' v-for='item in provinceList' @click='changeProvince(item)'>{{item}}</li>
        </ul>
      </nav>
      <div class="fixed">
        <h1>猿题库®2017中国高中排行榜（{{activeProvince}}10强）</h1>
        <div class="shadow">
          <div class='table-box'>
            <v-table class="province" :columns='columns_province'
        :dataSource='provinceData[activeProvince]'></v-table>
          </div>
        </div>
      </div>
      <div class="container">
        <v-table class="province" :columns='columns_province'
        :dataSource='provinceData[activeProvince]'></v-table>
      </div>
    </section>
  </article>
</template>
<script>
import vTable from '@/components/table.vue'
import Navbar from '@/components/wep/navbar.vue'
import {provinceData} from '../../data/data.js'

export default {
  name: 'Province',
  components: { vTable, Navbar },
  data () {
    return {
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
        name: '16年省内排名',
        dataIndex: 'lastRank'
      },
      {
        name: '17年全国排名',
        dataIndex: 'nationRank'
      }],
      provinceData,
      activeProvince: '北京',
      provinceList: ['安徽', '北京', '重庆', '福建', '甘肃', '广东', '广西', '贵州', '海南', '河北', '河南', '湖南', '江西', '辽宁', '青海', '新疆', '浙江', '天津', '上海', '云南', '江苏', '内蒙古', '山东', '陕西', '山西', '湖北', '黑龙江', '吉林', '宁夏', '四川', '西藏'
      ]
    }
  },
  methods: {
    changeProvince (item) {
      this.activeProvince = item
    }
  },
  mounted () {
    $('#app').css('overflow', 'hidden')
    $('.container').height($(window).height() - $('#mh').height() - $('#ranklist').height() - $('#navscroll').height() - $('.fixed').height())
  }
}
</script>
<style scoped>
.shadow {height: 45px;}
.table-box {height: 45px;overflow: hidden;}
.tablelist h1 {margin-top: 35px;}
#navscroll {overflow: hidden;height:35px;position: fixed;top:85px;width: 100%;background: #f7f8f9;}
::-webkit-scrollbar {display:none}
#tab  {white-space: nowrap;list-style-type: none;font-size: 0;padding-bottom: 20px;overflow-x: scroll;overflow-y:hidden;margin: 0 5px;-webkit-overflow-scrolling: touch;}
#tab li {font-size: 13px;color: #666;line-height: 1;display: inline-block;padding: 11px 10px;}
#tab .active {color: #a92433;}
#navscroll:before {
    content: "";
    display: inline-block;
    width: 25px;
    height: 35px;
    position: absolute;
    left: 0;
    top: 0;
    background: -webkit-linear-gradient(left, rgba(255,255,255,1), rgba(255,255,255,0)); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, rgba(255,255,255,1), rgba(255,255,255,0)); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, rgba(255,255,255,1), rgba(255,255,255,0)); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, rgba(255,255,255,1), rgba(255,255,255,0)); 
}
#navscroll:after {
    content: "";
    display: inline-block;
    width: 30px;
    height: 35px;
    position: absolute;
    right: 0;
    top: 0;
    background: -webkit-linear-gradient(left, rgba(255,255,255,0), rgba(255,255,255,1)); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, rgba(255,255,255,0), rgba(255,255,255,1)); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, rgba(255,255,255,0), rgba(255,255,255,1)); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,1)); 
}
#tab li:last-child {margin-right:10px;}
</style>
