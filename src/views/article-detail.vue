<template>
    <div class="detail">
        <div class="breadNav">
            <span @click="toIndex">首页 > </span>
            <span>行业服务 > </span>
            <span>价格信息 > </span>
            <span>文章详情</span>
        </div>
        <div class="detailBox">
            <h1 class="acTitle">云南省建设工程材料及设备价格信息（装修装修）专刊征订通知</h1>
            <div class="info">
                <div class="info-source">来源：<span>住建部</span></div>
                <div class="info-time">时间：<span>2019-05-23 10:01:50</span></div>
                <div class="info-click">点击量：<span>6210</span></div>
            </div>
            <div class="abstract">
                摘要：《云南省建设工程材料及设备价格信息》是由云南省住建厅科技与标准定额处领导，云南省工程建设技术经济室监督管理，
                “行列资讯”具体运作实施的云南省权威工程材料价格系列期刊，《云南省建设工程材料及设备价格信息》是由云南省住建厅科技与标准定额处领导
            </div>
            <div class="mainBody">
                <h1>云南省建设工程材料及设备价格信息（装修装修）专刊征订通知</h1>
                <div class="context">

                </div>
            </div>
            <div class="btns">
                <div class="pre"> < 上一篇</div>
                <div class="next">下一篇 ></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            lastNav:''
        }
    },
    methods:{
        toIndex(){
            this.$router.push({name:'index'})
        },
    }
}
</script>
<style lang="stylus" scoped>
.detail
    width 1200px
    padding-bottom 100px
    box-sizing border-box
    margin 0 auto
.detailBox
    width 100%
    // height 200px
    background #ffffff
    padding 110px 120px 70px 100px
    box-sizing border-box
.acTitle
    font-size 24px
    color #333333
    line-height 24px
    text-align center
.info
    display flex
    margin-top 30px
    font-size 14px
    color #666666
    line-height 14px
.info-source
    margin-right 40px
    span
        color #1892FF
.info-time
    margin-right 40px
.abstract
    width 100%
    height 68px
    background #F2F2F2
    padding 10px 16px 0 16px
    box-sizing border-box
    margin 15px 0 17px 0
    font-size 12px
    color #666666
    line-height 24px
.mainBody
    width 100%
    padding 20px 0 46px 0
    border-bottom 1px #e6e6e6 solid
    box-sizing border-box
    h1
        padding 0 300px
        font-size 16px
        color #333333
        text-align center
        line-height 28px
.context
    width 100%
    font-size 12px
    color #666666
    line-height 20px
    text-align justify
.btns
    display flex
    justify-content flex-end
    align-items center
    margin-top 20px
    >div
        width 100px
        height 30px
        border 1px #ccc solid
        box-sizing border-box
        border-radius 16px
        font-size 14px
        color #a6a6a6
        line-height 28px
        text-align center
        cursor pointer
div.pre:hover
    background #f5f5f5
div.next
    background #f2f2f2
    margin-left 20px
    color #666
div.next:hover
    background #e8e8e8
</style>


