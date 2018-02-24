<template>
  <article>
    <section class="tablelist center-box" id="ranklist">
      <section class="fc">
        <section class="half" v-for="(value,key) in provinceData">
          <v-table :title="'猿题库®2017中国高中排行榜（' + key + '10强）'" :columns="columns_province"
          :dataSource="value">
        </v-table>
      </section>
    </section>     
  </section>
</article>
</template>
<script>
import vTable from '@/components/table.vue'
import {provinceData} from '../../data/data.js'

export default {
  name: 'Province',
  components: {
    vTable: vTable
  },
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
        name: '2016年省内排名',
        dataIndex: 'lastRank'
      },
      {
        name: '2017年全国排名',
        dataIndex: 'nationRank'
      }],
      provinceData
    }
  }
}
</script>