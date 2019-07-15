<template>
    <div class="news">
        <div class="breadNav">
            <span @click="toIndex">首页 > </span>
            <span>新闻动态 > </span>
            <span>{{lastNav}}</span>
        </div>
        <div class="tabBar">
            <ul class="tabLeft">
                <li :class="tabOn == 1?'tabAct':''" @click="toggleTab(1)">协会动态</li>
                <li :class="tabOn == 2?'tabAct':''" @click="toggleTab(2)">党政要闻</li>
                <li :class="tabOn == 3?'tabAct':''" @click="toggleTab(3)">党建工作</li>
                <li :class="tabOn == 4?'tabAct':''" @click="toggleTab(4)">行业前瞻</li>
            </ul>
            <div class="tabRight">
                <input placeholder="请输入文章标题关键字">
                <div class="ico"></div>
            </div>
        </div>
        <div class="articles">
            <div class="resItem" v-for="(item,index) in articles" :key="index">
                <div :class="index == 0?'resTitle titleRed':'resTitle'">{{item.context}}</div>
                <div class="resTime">{{item.time}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            tabOn:1,
            lastNav:'协会动态',
            articles:[
                {id:1,context:'我会义务开展2018年云南省工程建设质量提升行动暨质量安全标准化工地观摩活动',time:'2019-05-16'},
                {id:2,context:'2018年云南省工程建设行业“质量月”活动暨质量宣贯会在昆明召开',time:'2019-05-16'},
                {id:3,context:'质量发展纲要（2011-2020年）',time:'2019-05-16'},
                {id:4,context:'工程建设科学技术奖评选办法',time:'2019-05-16'},
                {id:5,context:'国家发展改革 住房城乡建设部关于推荐全过程过程资讯服务发展的指导意见',time:'2019-05-16'},
                {id:6,context:'大理州建筑业协会今日与山西省建筑协会达成合作关系',time:'2019-05-16'},
            ]
        }
    },
    created(){
        this.tabOn = this.$route.query.id
        if(this.$route.query.id == 1){
            this.lastNav = '协会动态'
            this.articles = [
                {id:1,context:'我会义务开展2018年云南省工程建设质量提升行动暨质量安全标准化工地观摩活动',time:'2019-05-16'},
                {id:2,context:'2018年云南省工程建设行业“质量月”活动暨质量宣贯会在昆明召开',time:'2019-05-16'},
                {id:3,context:'质量发展纲要（2011-2020年）',time:'2019-05-16'},
                {id:4,context:'工程建设科学技术奖评选办法',time:'2019-05-16'},
                {id:5,context:'国家发展改革 住房城乡建设部关于推荐全过程过程资讯服务发展的指导意见',time:'2019-05-16'},
                {id:6,context:'大理州建筑业协会今日与山西省建筑协会达成合作关系',time:'2019-05-16'}
            ]
        }else if(this.$route.query.id == 2){
            this.lastNav = '党政要闻'
            this.articles = [
                {id:1,context:'我会义务开展2018年云南省工程建设质量提升行动暨质量安全标准化工地观摩活动',time:'2019-05-16'},
                {id:2,context:'2018年云南省工程建设行业“质量月”活动暨质量宣贯会在昆明召开',time:'2019-05-16'},
                {id:3,context:'质量发展纲要（2011-2020年）',time:'2019-05-16'},
            ]
        }else if(this.$route.query.id == 3){
            this.lastNav = '党建工作'
            this.articles = [
                {id:1,context:'我会义务开展2018年云南省工程建设质量提升行动暨质量安全标准化工地观摩活动',time:'2019-05-16'},
                {id:2,context:'2018年云南省工程建设行业“质量月”活动暨质量宣贯会在昆明召开',time:'2019-05-16'},
                {id:3,context:'质量发展纲要（2011-2020年）',time:'2019-05-16'},
                {id:4,context:'工程建设科学技术奖评选办法',time:'2019-05-16'},
            ]
        }else{
            this.lastNav = '行业前瞻'
            this.articles = [
                {id:1,context:'我会义务开展2018年云南省工程建设质量提升行动暨质量安全标准化工地观摩活动',time:'2019-05-16'},
                {id:2,context:'2018年云南省工程建设行业“质量月”活动暨质量宣贯会在昆明召开',time:'2019-05-16'},
            ]
        }
    },
    computed:{
		route1(){
            return this.$route
        }
    },
    watch:{
        route1(val){
			switch (val.query.id) {
				case 1:
                    this.tabOn = 1
                    this.lastNav = '协会动态'
                    this.articles = [
                        {id:1,context:'我会义务开展2018年云南省工程建设质量提升行动暨质量安全标准化工地观摩活动',time:'2019-05-16'},
                        {id:2,context:'2018年云南省工程建设行业“质量月”活动暨质量宣贯会在昆明召开',time:'2019-05-16'},
                        {id:3,context:'质量发展纲要（2011-2020年）',time:'2019-05-16'},
                        {id:4,context:'工程建设科学技术奖评选办法',time:'2019-05-16'},
                        {id:5,context:'国家发展改革 住房城乡建设部关于推荐全过程过程资讯服务发展的指导意见',time:'2019-05-16'},
                        {id:6,context:'大理州建筑业协会今日与山西省建筑协会达成合作关系',time:'2019-05-16'}
                    ]
					break;
				case 2:
                    this.tabOn = 2
                    this.lastNav = '党政要闻'
                    this.articles = [
                        {id:1,context:'我会义务开展2018年云南省工程建设质量提升行动暨质量安全标准化工地观摩活动',time:'2019-05-16'},
                        {id:2,context:'2018年云南省工程建设行业“质量月”活动暨质量宣贯会在昆明召开',time:'2019-05-16'},
                        {id:3,context:'质量发展纲要（2011-2020年）',time:'2019-05-16'},
                    ]
                    break;
				case 3:
                    this.tabOn = 3
                    this.lastNav = '党建工作'
                    this.articles = [
                        {id:1,context:'我会义务开展2018年云南省工程建设质量提升行动暨质量安全标准化工地观摩活动',time:'2019-05-16'},
                        {id:2,context:'2018年云南省工程建设行业“质量月”活动暨质量宣贯会在昆明召开',time:'2019-05-16'},
                        {id:3,context:'质量发展纲要（2011-2020年）',time:'2019-05-16'},
                        {id:4,context:'工程建设科学技术奖评选办法',time:'2019-05-16'},
                    ]
                    break;
				case 4:
                    this.tabOn = 4
                    this.lastNav = '行业前瞻'
                    this.articles = [
                        {id:1,context:'我会义务开展2018年云南省工程建设质量提升行动暨质量安全标准化工地观摩活动',time:'2019-05-16'},
                        {id:2,context:'2018年云南省工程建设行业“质量月”活动暨质量宣贯会在昆明召开',time:'2019-05-16'},
                    ]
                    break;
            }
        }
    },
    methods:{
        toIndex(){
            this.$router.push({name:'index'})
        },
        toggleTab(aa){
            this.tabOn = aa
            if(aa == 1){
                this.lastNav = '协会动态'
                this.articles = [
                    {id:1,context:'我会义务开展2018年云南省工程建设质量提升行动暨质量安全标准化工地观摩活动',time:'2019-05-16'},
                    {id:2,context:'2018年云南省工程建设行业“质量月”活动暨质量宣贯会在昆明召开',time:'2019-05-16'},
                    {id:3,context:'质量发展纲要（2011-2020年）',time:'2019-05-16'},
                    {id:4,context:'工程建设科学技术奖评选办法',time:'2019-05-16'},
                    {id:5,context:'国家发展改革 住房城乡建设部关于推荐全过程过程资讯服务发展的指导意见',time:'2019-05-16'},
                    {id:6,context:'大理州建筑业协会今日与山西省建筑协会达成合作关系',time:'2019-05-16'}
                ]
            }else if(aa == 2){
                this.lastNav = '党政要闻'
                this.articles = [
                    {id:1,context:'我会义务开展2018年云南省工程建设质量提升行动暨质量安全标准化工地观摩活动',time:'2019-05-16'},
                    {id:2,context:'2018年云南省工程建设行业“质量月”活动暨质量宣贯会在昆明召开',time:'2019-05-16'},
                    {id:3,context:'质量发展纲要（2011-2020年）',time:'2019-05-16'},
                ]
            }else if(aa == 3){
                this.lastNav = '党建工作'
                this.articles = [
                    {id:1,context:'我会义务开展2018年云南省工程建设质量提升行动暨质量安全标准化工地观摩活动',time:'2019-05-16'},
                    {id:2,context:'2018年云南省工程建设行业“质量月”活动暨质量宣贯会在昆明召开',time:'2019-05-16'},
                    {id:3,context:'质量发展纲要（2011-2020年）',time:'2019-05-16'},
                    {id:4,context:'工程建设科学技术奖评选办法',time:'2019-05-16'},
                ]
            }else{
                this.lastNav = '行业前瞻'
                this.articles = [
                    {id:1,context:'我会义务开展2018年云南省工程建设质量提升行动暨质量安全标准化工地观摩活动',time:'2019-05-16'},
                    {id:2,context:'2018年云南省工程建设行业“质量月”活动暨质量宣贯会在昆明召开',time:'2019-05-16'},
                ]
            }
        }
    }
}
</script>
<style lang="stylus" scoped>
.news
    width 1200px
    padding-bottom 100px
    box-sizing border-box
    margin 0 auto
</style>


