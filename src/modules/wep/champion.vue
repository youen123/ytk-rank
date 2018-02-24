<template>
  <article>
    <Navbar></Navbar>
    <section class="tablelist center-box text-center" id="champion">
      <div class="fixed">
        <h1>猿题库®2017中国高中排行榜（状元榜）</h1>
        <div class="shadow">
          <div class="small-table-box"><v-table class="fixhead" :columns="columns"
        :dataSource="championData"></v-table></div>
        </div>
      </div>
      <div class="container">
        <v-table :columns="columns" class="small-thead"
      :dataSource="championData"></v-table>
      </div>
    </section>
  </article>
</template>
<script>
import vTable from '@/components/table.vue'
import Navbar from '@/components/wep/navbar.vue'
import { championData } from '../../data/data.js'

export default {
  name: 'Champion',
  components: { vTable, Navbar },
  data () {
    return {
      columns: [{
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
        name: '全国排名',
        dataIndex: 'nationRank'
      },
      {
        name: '近7年总数',
        dataIndex: 'total_amount'
      }],
      championData
    }
  },
  mounted () {
    $('#app').css('overflow', 'hidden')
    $('.container').height($(window).height() - $('#mh').height() - $('#ranklist').height() - $('.fixed').height())
  }
}
</script>
<style>
#champion table td:nth-child(5) {width: 56px;}
</style>
