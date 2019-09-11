<template>
    <div class="member">
        <div class="breadNav">
            <span @click="toIndex">首页 > </span>
            <span>{{firstNav}}</span>
            <span>&nbsp{{secondNav}}</span>
        </div>
        <div class="tabBar">
            <ul class="tabLeft">
                <li v-for="item in childNav" :key="item.id" @click="toggleTab(item.id)" :class="tabOn == item.id?'tabAct':''">{{item.name}}</li>
            </ul>
            <div class="tabRight">
                <input placeholder="请输入文章标题关键字">
                <div class="ico"></div>
            </div>
        </div>
        <div class="articles">
            <div class="resItem" v-for="item in articles" :key="item.id" @click="toArticleDetail(item.id)">
                <div class="resTitle">{{item.title}}</div>
                <div class="resTime">{{item.showtime}}</div>
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
            tabOn:-1,
            fatherId:-1,
            childNav:[],
            articles:[]
        }
    },
    created(){
        this.tabOn = this.$route.query.id
        var data = {
            id:this.$route.query.id
        }
        var data2 = {
            ac_id:this.$route.query.id
        }
		this.$api.get_article_category_detail(data).then(v => {
            this.fatherId = v.data.data.treeData.one.id
            if(v.data.data.treeData.data.indexOf('>') != -1){
                this.firstNav = v.data.data.treeData.data.split('>')[0] + ' >'
                this.secondNav = v.data.data.treeData.data.split('>')[1]
            }else{
                this.firstNav = v.data.data.treeData.data
                this.secondNav = ''
            }
		})
		this.$api.get_article_category({}).then(v => {
            // console.log(v)
            v.data.data.map((item)=>{
                if(item.id == this.fatherId){
                    this.childNav = item.children
                }
            })
        })
        this.$api.get_articles(data2).then(v => {
            // console.log(v)
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
            // console.log(val.query.id)
            this.tabOn = val.query.id
            this.$api.get_article_category_detail({id:val.query.id}).then(v => {
                if(v.data.data.treeData.data.indexOf('>') != -1){
                    this.firstNav = v.data.data.treeData.data.split('>')[0] + ' >'
                    this.secondNav = v.data.data.treeData.data.split('>')[1]
                }else{
                    this.firstNav = v.data.data.treeData.data
                    this.secondNav = ''
                }
            })
            this.$api.get_articles({ac_id:val.query.id}).then(v => {
                // console.log(v)
                this.articles = v.data.data.data
            })
        }
    },
    methods:{
        toIndex(){
            this.$router.push({name:'index'})
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
        }
    }
}
</script>
<style lang="stylus" scoped>
.member
    width 1200px
    padding-bottom 100px
    box-sizing border-box
    margin 0 auto
</style>


