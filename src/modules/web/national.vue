<template>
  <article>
    <section class="tablelist center-box text-center">
      <div class="shadow"></div>
      <v-table :title="'猿题库®2017中国高中排行榜（100强）'" :columns="columns_country"
      :dataSource="nationData">
      </v-table>      
      </v-table>
    </section>
</article>
</template>
<script>
import vTable from '@/components/table.vue'
import {nationData} from '../../data/data.js'

export default {
  name: 'Nation',
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
      nationData
    }
  }
}
</script>