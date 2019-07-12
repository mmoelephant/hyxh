<template>
<div class="bannerPart">
    <div class='banner' @mouseenter="cleartimer" @mouseleave="settimer">
        <ul :class='animate==true?"banner-ul anim":"banner-ul"' :style='"marginLeft:" + -1200*ac_index+"px"'>
            <li><img src="../../public/img/banner1.jpg" alt=""></li>
            <li><img src="../../public/img/banner1.jpg" alt=""></li>
            <li><img src="../../public/img/banner1.jpg" alt=""></li>
        </ul>
        <div class='left-btn' @click='page(-1)'><i></i></div>
        <div class='right-btn' @click='page(1)'><i></i></div>
        <div class='dot'><p v-for ='(item,i) in img_li' :key='i' :class='ac_index==item.index?"ac":""' @click='dot(item.index)'></p></div>
    </div>
</div>
</template>
<script>
// import $ from 'jquery'
export default {
    data() {
        return {
            img_li:[
                {path:'123',index:0},
                {path:'123',index:1},
                {path:'123',index:2},
            ],
            ac_index:0,
            timer:null,
            animate:false
        }
    },
    created(){
    },
    mounted() {
        this.settimer()
    },
    methods: {
        t() {
            this.animate=true;    // 因为在消息向上滚动的时候需要添加css3过渡动画，所以这里需要设置true
            if(this.ac_index==this.img_li.length-1) {
                this.ac_index =0 
            } else {
                this.ac_index++
            } 
        },
        cleartimer() {
            clearInterval(this.timer)
            this.timer = null
        },
        settimer() {
            this.timer = setInterval(this.t,5000)
        },
        dot(s) {
            this.ac_index = s
        },
        page(sta) {
            if(sta > 0 ) {
                this.animate=true
                if(this.ac_index==this.img_li.length-1) {
                    this.ac_index =0 
                } else {
                    this.ac_index++
                } 
            } else {
                if(this.ac_index==0) {
                    this.ac_index = this.img_li.length-1
                } else {
                    this.ac_index--
                } 
            }
        },
    },
    beforeRouteLeave(to,form,next) {
        this.timer = null 
        next()
    }
}
</script>
<style lang="stylus" scoped>
    .banner 
        width 1200px
        height 260px
        box-shadow 0px 4px 8px 0px rgba(0, 0, 0, 0.35)
        overflow hidden
        position relative

    .banner-ul
        width 1200px
        height 260px
        display flex
        li
            width 1200px
            height 260px
            flex-shrink 0
        img
            width 100%
            height 100%
            margin 0 auto      
    .anim
        transition all 0.6s
    .left-btn
        width 12px
        height 22px
        background url(../../public/img/leftii1.png) no-repeat center
        position absolute
        left 20px
        top 50%
        margin-top -11px
        cursor pointer
        transition .3s
    .right-btn
        width 12px
        height 22px
        background url(../../public/img/rightii1.png) no-repeat center
        position absolute
        right 20px
        top 50%
        margin-top -11px
        cursor pointer
        transition .3s
    .left-btn:hover
        background-image url(../../public/img/leftii2.png)
    .right-btn:hover
        background-image url(../../public/img/rightii2.png)

    .dot
        display flex
        justify-content center
        position absolute 
        bottom 20px
        right 30px
        p 
            width 24px
            height 2px
            background #808080  
            margin-right 12px
            cursor pointer
        p:last-child
            margin-right 0
        .ac 
            background #FF7F18   

</style>
