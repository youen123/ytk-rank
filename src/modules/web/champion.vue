<template>
  <article>
    <section class="tablelist center-box" id="ranklist">
      <section>
        <v-table title="猿题库®2017中国高中排行榜（状元榜）" :columns="columns"
        :dataSource="championData">
      </v-table>
    </section>   
  </section>
</article>
</template>
<script>
import vTable from '@/components/table.vue'
import {championData} from '../../data/data.js'

export default {
  name: 'Champion',
  components: {
    vTable: vTable
  },
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
  }
}
</script>