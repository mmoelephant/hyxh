<template>
    <div class="policy" v-loading.fullscreen="loading">
        <div class="breadNav">
            <span @click="toIndex">首页 > </span>
            <span @click="toMainPage(fatherName,fatherId)">{{firstNav}}</span>
            <span>&nbsp{{secondNav}}</span>
        </div>
        <div class="tabBar">
            <ul class="tabLeft">
                <li v-for="item in childNav" :key="item.id" @click="toggleTab(item.id)" :class="tabOn == item.id?'tabAct':''">{{item.name}}</li>
            </ul>
            <div class="tabRight">
                <input placeholder="请输入文章标题关键字" v-model="words">
                <div class="ico" @click="searchNow"></div>
            </div>
        </div>
        <div class="articles">
            <div class="resItem" v-for="item in articles" :key="item.id" @click="toArticleDetail(item.id)">
                <div class="resTitle">{{item.title}}</div>
                <div class="resTime">{{item.showtime}}</div>
            </div>
        </div>
        <div class="noImg">
            <img src="../../public/img/noArticle.png" v-show="articles.length == 0">
            <div class="noTxt" v-show="articles.length == 0">没有找到相关的文章信息...</div>
            <div class="noTxt2" v-show="articles.length == 0">不要着急，请稍后重试！</div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            loading:true,
            firstNav:'',
            secondNav:'',
            tabOn:-1,
            fatherId:-1,
            fatherName:'',
            childNav:[],
            articles:[],
            words:'',
        }
    },
    created(){
        this.tabOn = parseInt(this.$route.query.id)
        var data = {
            id:parseInt(this.$route.query.id)
        }
        var data2 = {
            ac_id:parseInt(this.$route.query.id)
        }
		this.$api.get_article_category_detail(data).then(v => {
            this.fatherId = parseInt(v.data.data.treeData.one.id)
            this.fatherName = v.data.data.treeData.one.name
            if(v.data.data.treeData.data.indexOf('>') != -1){
                this.firstNav = v.data.data.treeData.data.split('>')[0] + ' >'
                this.secondNav = v.data.data.treeData.data.split('>')[1]
            }else{
                this.firstNav = v.data.data.treeData.data
                this.secondNav = ''
            }
            this.$api.get_article_category({}).then(v => {
                v.data.data.map((item)=>{
                    if(item.id == this.fatherId){
                        this.childNav = item.children
                    }
                })
            })
			this.$nextTick(() => {
				this.loading = false
			})
		})
		// this.$api.get_article_category({}).then(v => {
        //     v.data.data.map((item)=>{
        //         if(item.id == this.fatherId){
        //             this.childNav = item.children
        //         }
        //     })
        // })
        this.$api.get_articles(data2).then(v => {
            this.articles = v.data.data.data
        })
    },
    mounted(){
        // console.log(this.$route.query.id)
    },
    computed:{
		route1(){
            return this.$route
        }
    },
    watch:{
        route1(val){
            this.tabOn = parseInt(val.query.id)
            this.$api.get_article_category_detail({id:parseInt(val.query.id)}).then(v => {
                this.fatherId = parseInt(v.data.data.treeData.one.id)
                this.fatherName = v.data.data.treeData.one.name
                if(v.data.data.treeData.data.indexOf('>') != -1){
                    this.firstNav = v.data.data.treeData.data.split('>')[0] + ' >'
                    this.secondNav = v.data.data.treeData.data.split('>')[1]
                }else{
                    this.firstNav = v.data.data.treeData.data
                    this.secondNav = ''
                }
            })
            this.$api.get_articles({ac_id:parseInt(val.query.id)}).then(v => {
                this.articles = v.data.data.data
            })
        }
    },
    methods:{
        toIndex(){
            this.$router.push({name:'index'})
        },
        toMainPage(aa,bb){
            this.$router.push({name:aa,query:{id:bb}})
        },
        searchNow(){
            if(this.words != ''){
                this.loading = true
                var data0 = {
                    ac_id:this.tabOn,
                    keyword:this.words
                }
                this.$api.get_articles(data0).then(v => {
                    this.loading = false
                    if(v.data.errcode == 0&&v.data.errmsg == 'ok'){
                        this.articles = v.data.data.data
                    }else{
                        this.$message({
                            type:'info',
                            message:'搜索出错，请稍后重试！'
                        })
                    }
                })
            }else{
                this.$message({
                    type:'info',
                    message:'请先输入关键词！'
                })
            }
        },
        toggleTab(aa){
            this.tabOn = aa
            var data1 = {
                ac_id:aa
            }
            var data3 = {
                id:aa
            }
            this.$api.get_articles(data1).then(v => {
                this.articles = v.data.data.data
            })
            this.$api.get_article_category_detail(data3).then(v => {
                this.fatherId = parseInt(v.data.data.treeData.one.id)
                this.fatherName = v.data.data.treeData.one.name
                if(v.data.data.treeData.data.indexOf('>') != -1){
                    this.firstNav = v.data.data.treeData.data.split('>')[0] + ' >'
                    this.secondNav = v.data.data.treeData.data.split('>')[1]
                }else{
                    this.firstNav = v.data.data.treeData.data
                    this.secondNav = ''
                }
            })
        },
        toArticleDetail(aa){
            this.$router.push({name:'articledetail',query:{id:aa}})
        }
    }
}
</script>
<style lang="stylus" scoped>
.policy
    width 1200px
    padding-bottom 100px
    box-sizing border-box
    margin 0 auto
.noImg
    background #fff
    box-sizing border-box
    padding-bottom 80px
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


