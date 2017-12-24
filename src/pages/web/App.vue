<template>
  <div id="app">
    <Header></Header>
    <Navbar></Navbar>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/web/header.vue'
import Navbar from '@/components/web/navbar.vue'
import Footer from '@/components/web/footer.vue'
export default {
  name: 'app',
  components: {Header, Navbar, Footer}
}
</script>

<style>
*{margin:0; padding:0;}
body { font: 14px Microsoft YaHei,SimHei,Tahoma, Arial;-webkit-font-smoothing: antialiased; background:#fff;line-height: 1}
a { text-decoration: none }
ul {list-style-type: none;padding: 0}
.text-center { text-align: center}
.text-left {text-align: left}
.center-box {width: 1000px;margin: 0 auto;}
.pull-right {float: right;}
.pull-left {float: left;}
.fc {overflow: hidden;}
/*table*/
table {margin-top: 20px;text-align: center;}
table thead {background: #f7f8f9;color: #222222;font-size: 16px;line-height: 58px;font-weight: normal;}
table .second {background: #fff;font-size: 14px;line-height: 50px; text-align: center; }
table tr:nth-child(even) {background: #fff;}  
table tr:nth-child(odd) {background: #f7f8f9;} 
table tbody td{color: #444444; line-height: 50px;}
table td:nth-child(1) {width: 130px;}
table tbody td:nth-child(2) {text-align: left;padding-left: 20px;}
table td:nth-child(3) {width: 140px;}
table td:nth-child(4) {width: 140px;}
table td:nth-child(5) {width: 140px;}
.up {color:#f00;padding-left: 20px;background: url('../../images/web/up.png') left no-repeat;}
.down {color: #008000;padding-left: 20px;background: url('../../images/web/down.png') left no-repeat;}
.right {color: #444;padding-left: 20px;background: url('../../images/web/right.png') left no-repeat;}
.half {float: left;box-sizing: border-box;-moz-box-sizing: border-box;width: 50%;margin: 20px 0;}
.half table{margin-top: 0;}
.half .second {line-height: 1;}
.half .second td {height: 50px;padding-left: 1px;padding-right: 1px;}
.half:nth-of-type(odd) {padding-right: 10px;}
.half:nth-of-type(even) {padding-left: 10px;}
.half table td:nth-child(1) {width: 38px;}
.half table td:nth-child(3) {width: 70px;padding-left:4px;padding-right: 4px;}
.half table td:nth-child(4) {width: 58px;}
.half table td:nth-child(5) {width: 58px;}
</style>
