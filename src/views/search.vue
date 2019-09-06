<template>
    <div class="searchRes">
        <div class="breadNav">
            <span @click="toIndex">首页 > </span>
            <span>站内搜索</span>
        </div>
        <div class="resTip">以下是<span>“大理州建筑”</span>的相关搜索结果：</div>
        <div class="resBox">
            <div class="resItem">
                <div class="resTitle"><span>大理州建筑</span>业协会今日与山西省建筑协会达成合作关系</div>
                <div class="resTime">2019-05-16</div>
            </div>
            <div class="resItem">
                <div class="resTitle">关于<span>大理州</span>近期建筑材料整改的通知</div>
                <div class="resTime">2019-05-16</div>
            </div>
            <div class="resItem">
                <div class="resTitle">2018年“<span>建筑</span>月”活动暨质量宣贯会的视频材料</div>
                <div class="resTime">2019-05-16</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            
        }
    },
    methods:{
        toIndex(){
            this.$router.push({name:'index'})
        }
    }
}
</script>
<style lang="stylus" scoped>
.searchRes
    width 1200px
    padding-bottom 100px
    box-sizing border-box
    margin 0 auto
.resTip
    width 100%
    height 60px
    background #ffffff
    padding-left 30px
    box-sizing border-box
    font-size 14px
    color #666666
    line-height 60px
    span
        color #1892FF
.resBox
    width 100%
    background #ffffff
    margin-top 10px
.resBox .resItem:last-of-type
    border none

.resItem
    height 80px
    padding 0 40px
    border-bottom 1px #e6e6e6 solid
    box-sizing border-box
    font-size 16px
    color #333333
    line-height 16px
    cursor pointer
    display flex
    justify-content space-between
    align-items center


.resItem:hover .resTitle
    color #1892FF
    text-decoration underline
    transition .2s

.resItem:hover .resTime
    text-decoration none
.resTitle span
    color #1892FF

.resTime
    font-size 14px
    color #a6a6a6
</style>


