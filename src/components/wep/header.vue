<template>
  <header id='mh'>
    <h1 class='text-center'>猿题库®2017中国高中排行榜</h1>
    <span class='more' @click='changeMenu()' id='more'>
      <span></span>
      <span></span>
      <span></span>
    </span>
  </header>  
</template>
<script>
export default {
  methods: {
    changeMenu () {
      var state = document.querySelector('#more').className
      if (state === 'more') {
        $('#more').removeClass('more').addClass('close')
        $('#mask').slideDown()
        $('.main').hide()
      } else if (state === 'close') {
        $('#more').removeClass('close').addClass('more')
        $('#mask').slideUp()
        $('.main').show()
      } else if (state === 'back') {
        $('#more').removeClass('back').addClass('more')
        $('.main').show()
        history.go(-1)
      }
    }
  }
}
</script>
<style scoped>
header#mh {height: 40px;background: #a92433;width: 100%;z-index:3;}
header h1 {font-size: 15px;color: #ffffff;line-height: 40px;font-weight: normal;}
#more {position: absolute;top:13px;left:15px; width:16px;height:16px;}
#more span {height: 1px;display: block;background: #fff;}
#more span:nth-child(2) {margin: 5px 0;}
.close span:nth-child(2) {visibility: hidden;}
.close span:first-of-type {transform:translate(0px, 5px) rotate(45deg);}
.close span:last-of-type {transform:translate(0px, -7px) rotate(135deg);}
.back span:first-of-type {width: 9px;transform: translate(0px, 3px) rotate(-45deg);}
.back span:nth-child(2) {visibility: hidden;}
.back span:last-of-type {width: 9px;transform: translate(0px, -3px) rotate(45deg);}
</style>