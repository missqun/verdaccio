<template>
    <div class="alert">
        <div class="alert-container">
              <p class="alert-title">{{title}}</p>
              <p :class="['alert-content',content.length>14 ? '':'center']">{{content}}<span v-if="tel.length>0" @click="callPhone(tel)" class="tel">{{tel}}</span></p>
              <p class="alert-btn" @click="close">确定</p>
        </div>
    </div>
</template>
<script>
export default {
  name: 'xAlert',
  props: {
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    tel: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      alertShow: true
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
  }
}
</script>
<style lang="scss" scoped>
 .alert{
     width:100%;
     height:100%;
     position: fixed;
     font-family: 'PingFangSCMedium';
     color: #2D3A4A;
     left: 0;
     top:0;
     z-index:100;
     background: rgba(0,0,0,.6);
     display :flex;
     justify-content :center;
     align-items :center;
     .alert-container{
        width:562px;
        height:450px;
        border-radius: 4px;
        background:#fff;
        padding:50px 50px 40px 50px;
        box-sizing: border-box;
        position: relative;
        .alert-title{
           width:100%;
           font-size:36px;
           color:#000;
           font-weight:bold;
           text-align: center;
        }
        p{
          margin:0;
        }
        .alert-content{
           font-size:30px;
           margin:80px 0;
           line-height: 50px;
           text-align:left;
           &.center{
             text-align: center;
           }
           .tel{
             color:#0074E1;
             font-family:'DINProMedium';
             margin-left:10px;
           }
        }
        .alert-btn{
            width:250px;
            position: absolute;
            bottom:40px;
            left:50%;
            transform :translateX(-50%);
            height:80px;
            line-height: 80px;
            font-size:32px;
            color:#fff;
            text-align: center;
            background-image: linear-gradient(111deg, #BA9456 0%, #EDC18D 100%);
            border-radius: 40px;
        }
     }
 }

</style>
