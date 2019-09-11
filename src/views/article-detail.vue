<template>
    <div class="detail">
        <div class="breadNav">
            <span @click="toIndex">首页 > </span>
            <span>{{firstNav}}</span>
            <span>&nbsp{{secondNav}}</span>
            <span>&nbsp文章详情</span>
        </div>
        <div class="detailBox">
            <h1 class="acTitle">{{conTitle?conTitle:'-'}}</h1>
            <div class="info">
                <div class="info-source">来源：<span>{{conAuthor?conAuthor:'-'}}</span></div>
                <div class="info-time">时间：<span>{{conTime?conTime:'-'}}</span></div>
                <div class="info-click">点击量：<span>{{conView?conView:'-'}}</span></div>
            </div>
            <div class="abstract">
                摘要：《云南省建设工程材料及设备价格信息》是由云南省住建厅科技与标准定额处领导，云南省工程建设技术经济室监督管理，
                “行列资讯”具体运作实施的云南省权威工程材料价格系列期刊，《云南省建设工程材料及设备价格信息》是由云南省住建厅科技与标准定额处领导
            </div>
            <div class="mainBody">
                <h1>{{conTitle?conTitle:'-'}}</h1>
                <div class="context" v-html="conTent">
                </div>
            </div>
            <div class="btns">
                <div class="pre" @click="preOne"> < 上一篇</div>
                <div class="next" @click="nextOne">下一篇 ></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            firstNav:'',
            secondNav:'',
            addreId:-1,
            conTitle:'',
            conAuthor:'',
            conTime:'',
            conView:'',
            conTent:'',
            preId:-1,
            nextId:-1

        }
    },
    created(){
        console.log(this.$route.query.id)
        var data = {
            id:this.$route.query.id
        }
        this.$api.get_article_detail(data).then(v => {
            console.log(v)
            if(v.data.errcode == 0&&v.data.errmsg =='ok'){
                this.addreId = parseInt(v.data.data.ac_id)
                this.conTitle = v.data.data.title
                this.conAuthor = v.data.data.author
                this.conTime = v.data.data.showtime
                this.conView = v.data.data.views
                this.conTent = v.data.data.content
                this.preId = v.data.data.relate.prev.id
                this.nextId = v.data.data.relate.next.id
                this.$api.get_article_category_detail({id:this.addreId}).then(v => {
                    console.log(v)
                    console.log(v.data.data.treeData.one.id)
                    if(v.data.data.treeData.data.indexOf('>') != -1){
                        this.firstNav = v.data.data.treeData.data.split('>')[0] + ' >'
                        this.secondNav = v.data.data.treeData.data.split('>')[1] + '>'
                    }else{
                        this.firstNav = v.data.data.treeData.data
                        this.secondNav = ''
                    }
                })
            }else{
                this.conTitle = ''
                this.conAuthor = ''
                this.conTime = ''
                this.conView = ''
                this.conTent = ''
            }
        })
    },
    methods:{
        toIndex(){
            this.$router.push({name:'index'})
        },
        preOne(){
            this.$api.get_article_detail({id:this.preId}).then(v => {
                console.log(v)
                if(v.data.errcode == 0&&v.data.errmsg =='ok'){
                    this.conTitle = v.data.data.title
                    this.conAuthor = v.data.data.author
                    this.conTime = v.data.data.showtime
                    this.conView = v.data.data.views
                    this.conTent = v.data.data.content
                    this.preId = v.data.data.relate.prev.id
                    this.nextId = v.data.data.relate.next.id
                }else{
                    this.$message({
                        message: v.data.errmsg,
                        type: 'info',
                        // duration:100000
                    });
                }
            })
        },
        nextOne(){
            this.$api.get_article_detail({id:this.nextId}).then(v => {
                console.log(v)
                if(v.data.errcode == 0&&v.data.errmsg =='ok'){
                    this.conTitle = v.data.data.title
                    this.conAuthor = v.data.data.author
                    this.conTime = v.data.data.showtime
                    this.conView = v.data.data.views
                    this.conTent = v.data.data.content
                    this.preId = v.data.data.relate.prev.id
                    this.nextId = v.data.data.relate.next.id
                }else{
                    this.$message({
                        message: v.data.errmsg,
                        type: 'info',
                        // duration:100000
                    });
                    // this.conTitle = ''
                    // this.conAuthor = ''
                    // this.conTime = ''
                    // this.conView = ''
                    // this.conTent = ''
                }
            })

        }
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
    margin-top 6px
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
    div:hover
        background #f5f5f5
// div.pre:hover
//     background #f5f5f5
div.next
    // background #f2f2f2
    margin-left 20px
    // color #666
// div.next:hover
//     background #e8e8e8
</style>


