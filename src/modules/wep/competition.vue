<template>
  <article>
    <Navbar></Navbar>
    <section class="tablelist center-box text-center" id="competition">
      <div class="fixed">
        <h1>猿题库®2017中国高中排行榜（竞赛榜）</h1>
        <div class="shadow">
          <div class="small-table-box"><v-table :columns="columns"
        :dataSource="competitionData"></v-table></div>
        </div>
      </div>
      <div class="container">
        <v-table :columns="columns" class="small-thead"
        :dataSource="competitionData"></v-table>
      </div>
    </section>
  </article>
</template>
<script>
import vTable from '@/components/table.vue'
import Navbar from '@/components/wep/navbar.vue'
import { competitionData } from '../../data/data.js'

export default {
  name: 'Competition',
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
        name: '省内排名',
        dataIndex: 'provinceRank'
      }],
      competitionData
    }
  },
  mounted () {
    $('#app').css('overflow', 'hidden')
    $('.container').height($(window).height() - $('#mh').height() - $('#ranklist').height() - $('.fixed').height())
  }
}
</script>
<style>
</style>
