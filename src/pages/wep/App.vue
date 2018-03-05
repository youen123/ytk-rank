<template>
  <div id="app">
    <Header></Header>
    <ul id='mask'>
        <li>
            <a href='../../images/a.pdf'>
                <span>下载报告</span>
                <span>DOWNLOAD</span>
            </a>
        </li>
        <li>
            <a @click="showApp('#/about')">
                <span>关于榜单</span>
                <span>ABOUT</span>
            </a>    
        </li>
        <li>
            <a @click="showApp('#/contact')">
                <span>联系我们</span>
                <span>CONTACT</span>
            </a>    
        </li>
    </ul>
    <div class="main"><router-view/></div>
  </div>
</template>

<script>
import Header from '@/components/wep/header.vue'
export default {
  name: 'app',
  components: {Header},
  methods: {
    showApp (href) {
      $('#more').removeClass('more').removeClass('close').addClass('back')
      $('.main').show()
      $('#mask').hide()
      window.location = href
    }
  }
}
</script>

<style>
*{margin:0; padding:0;}
body { font: 12px Microsoft YaHei,SimHei,Tahoma, Arial;-webkit-font-smoothing: antialiased; background:#fff;line-height: 1;}
a { text-decoration: none }
ul {list-style-type: none;padding: 0}
.text-center { text-align: center}
.text-left {text-align: left}
.pull-right {float: right;}
.pull-left {float: left;}
h1 {font-weight: normal;}
::-webkit-scrollbar {display:none}
.container {overflow: scroll;-webkit-overflow-scrolling: touch;}
.tablelist h1 {font-size: 14px;color: #222222;padding:15px 0 15px;width: 100%;background: #fff}
table {margin: 0px auto 75px;min-width:320px;border-collapse: collapse;}
tr.second td{padding: 10px 0;background:#f7f8f9;}
table thead {background: #f7f8f9;color: #666666;height: 35px;text-align: center;}
.container table thead {display: none;}
table tr:nth-child(even) {background: #f7f8f9; }  
table tr:nth-child(odd) {background: #fff;}
table tbody td{padding: 12px 0;} 
table td:nth-child(1) {width: 30px;}
tbody td:nth-child(2) {text-align: left;padding:0 4px;}
table td:nth-child(3) {width: 42px;}
table td:nth-child(4) {width: 52px;}
table td:nth-child(5) {width: 52px;}
.province td:nth-child(3) {width: auto;}
table.fixhead {margin: 0 auto;}
table.fixhead tbody {visibility: hidden;}
.up {color:#f00;padding-left: 20px;background: url('../../images/wep/up.png') left no-repeat;background-size: 12px;}
.down {color: #008000;padding-left: 20px;background: url('../../images/wep/down.png') left no-repeat;background-size: 12px;}
.right {color: #444;padding-left: 20px;background: url('../../images/wep/right.png') left no-repeat;background-size: 12px;}
.shadow {position: relative;height: 33px;width: 100%;max-width: 1000px;z-index: 3;box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.12);margin: 0 auto;}
.small-table-box {overflow: hidden;height: 33px;}
#mask {width: 100%;position: absolute;top: 40px;  display: none; z-index: 4;}
#mask {background: white;font-size: 14px;}
#mask li span {line-height: 50px; }
#mask li span:first-child {color: #444;}
#mask li span:last-child {color: #888;float: right;}
#mask li:hover {background: #f7f8f9;}
#mask.show {display: block;visibility: visible;-webkit-transition: visibility 0s linear 1s;transition: visibility 0s linear 1s;   }
#mask a{display: block;margin: 0 15px;}
#mask a::after {content: "";height: 1px;display: block;background: #e7e7e7;-webkit-transform:scaleY(0.5);transform:scaleY(0.5);}
.about {margin: 0 15px;}
.about h1 {color: #222222;font-size: 14px;padding-left: 17px;background: url('../../images/wep/about.png') left no-repeat;background-size: 14px;margin: 20px 0;}
.about p {margin-bottom:14px; color: #444444;line-height: 25px; text-indent:2em;font-size: 13px;}
.about .imgtitle {text-indent: 0;margin-bottom: 10px;font-size: 12px;color:#444444;}
.about img {border:1px solid #dcdcdc;display: block;width: 100%;max-width:580px;margin-bottom: 14px;}
.small {font-size: 10px;}
#app {height: 100vh;}
</style>
