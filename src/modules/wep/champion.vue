<template>
  <article>
    <Navbar></Navbar>
    <section class="tablelist center-box text-center" id="champion">
      <div>
        <h1>猿题库®2016中国高中排行榜（状元榜）</h1>
        <div class="shadow"></div>
        <v-table class="fixhead" :columns="columns"
        :dataSource="championData"></v-table>
        <v-table :columns="columns"
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
        name: '近6年总数',
        dataIndex: 'total_amount'
      }],
      championData
    }
  }
}
</script>
<style>
#champion table td:nth-child(5) {width: 56px;}
</style>
