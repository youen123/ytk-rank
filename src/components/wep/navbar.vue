<template>
  <nav id="ranklist">
    <ul>
      <li>
        <router-link to="/national">
          <span class="i"></span><br/>
          <span>全国榜</span>
        </router-link>
      </li>
      <li>
        <router-link to="/province">                    
          <span class="i"></span><br/>
          <span>分省榜</span>
        </router-link>
      </li>
      <li>
        <router-link to="/competition">                    
          <span class="i"></span><br/>
          <span>竞赛榜</span>
        </router-link>
      </li>
      <li>
        <router-link to="/champion">                    
          <span class="i"></span><br/>
          <span>状元榜</span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<style scoped>
nav {font-size: 0px;border-bottom: 1px solid #e7e7e7;text-align: center;overflow: hidden;position:fixed;top:40px;width: 100%;background: #fff}
nav a {color:#666666;padding: 5px 0;width: 100%;display: inline-block;}
nav a.router-link-active {color: #a92433}
nav a span.i {display: inline-block;width: 16px;height: 16px;}
#ranklist>ul>li {display: inline-block;width:25%;font-size: 12px;color:#666666;}
#ranklist span.i {margin-bottom: 5px;}
#ranklist li:nth-child(1) span.i{background: url('../../images/wep/type.png') left top no-repeat;background-size: 33px;}
#ranklist li:nth-child(1) a.router-link-active span.i{background: url('../../images/wep/type.png') right 0 no-repeat;background-size: 33px;}
#ranklist li:nth-child(2) span.i{background: url('../../images/wep/type.png') left 51px ;background-size: 33px;}
#ranklist li:nth-child(2) a.router-link-active span.i{background: url('../../images/wep/type.png') right 51px ;background-size: 33px;}
#ranklist li:nth-child(3) span.i{background: url('../../images/wep/type.png') left 16px ;background-size: 33px;}
#ranklist li:nth-child(3) a.router-link-active span.i{background: url('../../images/wep/type.png') right 16px ;background-size: 33px;}
#ranklist li:nth-child(4) span.i{background: url('../../images/wep/type.png') left 34px;background-size: 33px;}
#ranklist li:nth-child(4) a.router-link-active span.i{background: url('../../images/wep/type.png') right 34px;background-size: 33px;}  
</style>