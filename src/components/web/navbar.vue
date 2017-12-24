<template>
  <nav>
    <ul class="center-box">
      <li><router-link to="/index">首页</router-link></li>
      <li><router-link to="/national">全国榜单</router-link></li>
      <li><router-link to="/province">分省榜单</router-link></li>
      <li><router-link to="/competition">竞赛榜</router-link></li>
      <li><router-link to="/champion">状元榜</router-link></li>
      <li><router-link to="/about">关于</router-link></li>
    </ul>
  </nav>
</template>
<style scoped>
nav {background: #a92433;color:#fff;font-size: 0px; min-width: 1000px;}
li {display: inline-block;margin-right: 70px;font-size: 16px}
li:first-child {margin-left: 70px;}
li:last-child {margin-right: 70px;}
a {color: #fff;line-height: 60px;padding: 0 15px;display: inline-block;border-bottom: 3px solid transparent;}
a:hover {border-bottom: 3px solid #fff;transition: border 1s;}
.router-link-active {border-bottom: 3px solid #fff;transition: border 1s;}
</style>