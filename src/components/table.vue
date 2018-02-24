<template>
  <table>
    <thead>
      <tr v-if="title">
        <th :colspan="columns.length">{{ title }}</th>
      </tr>
      <tr class="second">
        <td v-for="item in columns" :width="item.width">{{ item.name }}</td>
      </tr>
    </thead>
    <tbody>
      <tr class="text-center" v-for="item in dataSource">
        <td v-for="attr in columns">
          <span v-if="attr.dataIndex !== 'change' && attr.dataIndex !== 'nationRank'" :class="{small: item[attr.dataIndex].length > 10}">{{ item[attr.dataIndex] }}</span>
          <span v-if="attr.dataIndex === 'nationRank' && item[attr.dataIndex] > 200">-</span>
          <span v-if="attr.dataIndex === 'nationRank' && item[attr.dataIndex] <= 200">{{ item[attr.dataIndex] }}</span>
          <span v-if="attr.dataIndex === 'nationRank' && isNaN(item[attr.dataIndex])">{{ item[attr.dataIndex] }}</span>
          <span v-if="attr.dataIndex === 'change' && item[attr.dataIndex] > 0" class="up">{{ item[attr.dataIndex] }}</span>
          <span v-if="attr.dataIndex === 'change' && item[attr.dataIndex] < 0" class="down">{{ -item[attr.dataIndex] }}</span>
          <span v-if="attr.dataIndex === 'change' && item[attr.dataIndex] === '0'" class="right">0</span>
          <span v-if="attr.dataIndex === 'change' && item[attr.dataIndex] === '-'">-</span>
        </td>                        
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: 'vTable',
  props: {
    title: {
      type: String,
      default: ''
    },
    columns: {
      type: Array,
      default: function () {
        return []
      }
    },
    dataSource: {
      type: Array,
      default: function () {
        return []
      }
    }
  }
}
</script>
<style type="text/css">
table {width: 100%;max-width:1000px;border-spacing: 0;border: 1px solid #dcdcdc;border-right:none;border-radius: 10px;}
table tr:hover {background: #FCFCFC; }
table th,td {border-right: 1px solid #dcdcdc;}
table tr:first-child th{border-bottom: 1px solid #dcdcdc;border-top-left-radius: 10px;border-top-right-radius: 10px;}
tbody tr:last-child td:last-child {border-bottom-right-radius: 10px;}
tbody tr:last-child td:first-child {border-bottom-left-radius: 10px;}
tbody td {color: #444444;}
</style>
