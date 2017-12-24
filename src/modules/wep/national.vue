<template>
  <article>
    <Navbar></Navbar>
    <section class="tablelist center-box text-center" id="national">
    <div>
      <h1>猿题库®2016中国高中排行榜（100强）</h1>
      <div class="shadow"></div>
      <v-table class="fixhead" :columns="columns_country"
      :dataSource="nationData"></v-table>
      <v-table :columns="columns_country"
      :dataSource="nationData"></v-table>
    </div>
    </section>
  </article>
</template>
<script>
import vTable from '@/components/table.vue'
import Navbar from '@/components/wep/navbar.vue'
import {nationData} from '../../data/data.js'

export default {
  name: 'Nation',
  components: { vTable, Navbar },
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
        name: '15年排名',
        dataIndex: 'lastRank'
      },
      {
        name: '排名变化',
        dataIndex: 'change'
      }],
      nationData
    }
  }
}
</script>
<style scoped>
</style>
