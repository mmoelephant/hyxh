<template>
    <div class="searchRes" v-loading.fullscreen="loading">
        <div class="breadNav">
            <span @click="toIndex">首页 > </span>
            <span>站内搜索</span>
        </div>
        <div class="resTip">以下是<span>{{word}}</span>的相关搜索结果：</div>
        <div class="resBox">
            <div class="resItem" v-for="item in results" :key="item.id" @click="goArticleDetail(item.id)">
                <div class="resTitle">
                    {{item.title.substr(0,item.title.indexOf(word))}}
                    <span style="color:#F2342B">{{word}}</span>
                    {{item.title.substr(item.title.indexOf(word) + word.length).length > 15?
                    item.title.substr(item.title.indexOf(word) + word.length).slice(0,15) + '...':
                    item.title.substr(item.title.indexOf(word) + word.length)}}
                </div>
                <div class="resTime">{{item.showtime?item.showtime:'-'}}</div>
            </div>
            <div class="noImg" v-show="results.length == 0">
                <img src="../../public/img/noArticle.png">
                <div class="noTxt">没有找到相关的文章信息...</div>
                <div class="noTxt2">建议输入准确的查询内容，再试一试</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            loading:true,
            results:[],
            word:''
        }
    },
    created(){
        this.word = this.$route.query.word
        if(this.$route.query.word != ''){
            var data = {
                keyword:this.$route.query.word
            }
            this.$api.get_articles(data).then(v => {
                if(v.data.errcode == 0 && v.data.errmsg == 'ok'){
                    this.results = v.data.data.data
                }else{
                    this.results = []
                    this.$message({
                        type:'info',
                        message:'请求出错！'
                    })
                }
                this.$nextTick(() => {
                    this.loading = false
                })
            })
        }else{
            this.$message({
                type:'info',
                message:'搜索出错,请稍候重试！'
            })
        }
    },
	computed: {
		route(){
			return this.$route
		}
	},
	watch:{
		route(val) {
            // console.log(val.query.word)
            this.word = val.query.word
            if(this.$route.query.word != ''){
                this.loading = true
                var data = {
                    keyword:this.$route.query.word
                }
                this.$api.get_articles(data).then(v => {
                    if(v.data.errcode == 0 && v.data.errmsg == 'ok'){
                        this.results = v.data.data.data
                    }else{
                        this.results = []
                        this.$message({
                            type:'info',
                            message:'请求出错！'
                        })
                    }
                    this.$nextTick(() => {
                        this.loading = false
                    })
                })
            }else{
                this.$message({
                    type:'info',
                    message:'搜索出错,请稍候重试！'
                })
            }
		}
	},
    methods:{
        toIndex(){
            this.$router.push({name:'index'})
        },
        goArticleDetail(aa){
            this.$router.push({name:'articledetail',query:{id:aa}})
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
    min-height 300px
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
.noImg
    box-sizing border-box
    padding-top 40px
    text-align center
.noTxt
    font-size 18px
    color #666666
    font-weight bold
.noTxt2
    margin-top 6px
    font-size 12px
    color #a6a6a6

</style>


