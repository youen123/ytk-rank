<template>
  <header class="center-box">
    <img src="../../images/web/logo.png">
    <ul class="pull-right social">
      <li class="weibo"><a @click="weiboShare()">微博分享</a></li>
      <li class="email"><a href="mailto:office@yuantiku-inc.com" target="_blank" title="联系我们">联系我们</a></li>
    </ul>
  </header>
</template>
<script>
export default {
  methods: {
    weiboShare () {
      var weiboShareUrl = 'http://v.t.sina.com.cn/share/share.php'
      var title = '《2016中国高中排行榜》评出了全国前100名以及各省前10名的高中。北京人大附中、河北衡水中学、长沙市长郡中学位列全国三甲。其中一本率100%的8所高中，均在北京。升学率与信息化普及程度直接相关。来看看，你们学校上榜了吗？戳右边查看榜单→'
      var picUrl = 'http://mkt.yuantiku.com/top100/img/post.png'
      var url = weiboShareUrl + '?title=' + title + '&pic=' + picUrl + '&url=' + encodeURIComponent(location.href) + '&source=bookmark'
      window.open(url, '_blank', 'width=450,height=400')
    }
  }
}
</script>
<style scoped>
header {height:50px;padding: 25px 0 25px;}
.social {height: 30px;margin-top: 20px;font-size: 0;}
.social li {display: inline-block;height: 30px;}
.social li:hover {opacity: 0.6;cursor: pointer;}
.social a {display: inline-block;width: 30px;height: 30px;border-radius: 15px;text-indent: 100%;white-space: nowrap;overflow: hidden;text-indent: 100%;white-space: nowrap;overflow: hidden;cursor: hand}
.weibo {background: url('../../images/web/webo.png') no-repeat;margin-right: 10px;}
.email {background: url('../../images/web/mail.png') no-repeat;}
</style>