<template>
    <div class="member">
        <div class="breadNav">
            <span @click="toIndex">首页 > </span>
            <span>会员管理 > </span>
            <span>{{lastNav}}</span>
        </div>
        <div class="tabBar">
            <ul class="tabLeft">
                <li :class="tabOn == 1?'tabAct':''" @click="toggleTab(1)">申请入会</li>
                <li :class="tabOn == 2?'tabAct':''" @click="toggleTab(2)">会员权利与义务</li>
                <li :class="tabOn == 3?'tabAct':''" @click="toggleTab(3)">会员动态</li>
                <li :class="tabOn == 4?'tabAct':''" @click="toggleTab(4)">会员展示</li>
                <li :class="tabOn == 5?'tabAct':''" @click="toggleTab(5)">会费标准</li>
                <li :class="tabOn == 6?'tabAct':''" @click="toggleTab(6)">下载中心</li>
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
            lastNav:'申请入会',
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
        // console.log(this.$route.query.id)
        if(this.$route.query.id == 1){
            this.lastNav = '申请入会'
            this.articles = [
                {id:1,context:'我会义务开展2018年云南省工程建设质量提升行动暨质量安全标准化工地观摩活动',time:'2019-05-16'},
                {id:2,context:'2018年云南省工程建设行业“质量月”活动暨质量宣贯会在昆明召开',time:'2019-05-16'},
                {id:3,context:'质量发展纲要（2011-2020年）',time:'2019-05-16'},
                {id:4,context:'工程建设科学技术奖评选办法',time:'2019-05-16'},
                {id:5,context:'国家发展改革 住房城乡建设部关于推荐全过程过程资讯服务发展的指导意见',time:'2019-05-16'},
                {id:6,context:'大理州建筑业协会今日与山西省建筑协会达成合作关系',time:'2019-05-16'}
            ]
        }else if(this.$route.query.id == 2){
            this.lastNav = '会员权利与义务'
            this.articles = [
                {id:1,context:'我会义务开展2018年云南省工程建设质量提升行动暨质量安全标准化工地观摩活动',time:'2019-05-16'},
                {id:2,context:'2018年云南省工程建设行业“质量月”活动暨质量宣贯会在昆明召开',time:'2019-05-16'},
                {id:3,context:'质量发展纲要（2011-2020年）',time:'2019-05-16'},
            ]
        }else if(this.$route.query.id == 3){
            this.lastNav = '会员动态'
            this.articles = [
                {id:1,context:'我会义务开展2018年云南省工程建设质量提升行动暨质量安全标准化工地观摩活动',time:'2019-05-16'},
                {id:2,context:'2018年云南省工程建设行业“质量月”活动暨质量宣贯会在昆明召开',time:'2019-05-16'},
                {id:3,context:'质量发展纲要（2011-2020年）',time:'2019-05-16'},
                {id:4,context:'工程建设科学技术奖评选办法',time:'2019-05-16'},
            ]
        }else if(this.$route.query.id == 4){
            this.lastNav = '会员展示'
            this.articles = [
                {id:1,context:'我会义务开展2018年云南省工程建设质量提升行动暨质量安全标准化工地观摩活动',time:'2019-05-16'},
                {id:2,context:'2018年云南省工程建设行业“质量月”活动暨质量宣贯会在昆明召开',time:'2019-05-16'},
            ]
        }else if(this.$route.query.id == 5){
            this.lastNav = '会费标准'
            this.articles = [
                {id:1,context:'我会义务开展2018年云南省工程建设质量提升行动暨质量安全标准化工地观摩活动',time:'2019-05-16'},
                {id:2,context:'2018年云南省工程建设行业“质量月”活动暨质量宣贯会在昆明召开',time:'2019-05-16'},
                {id:3,context:'质量发展纲要（2011-2020年）',time:'2019-05-16'},
            ]
        }else{
            this.lastNav = '下载中心'
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
                    this.lastNav = '申请入会'
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
                    this.lastNav = '会员权利与义务'
                    this.articles = [
                        {id:1,context:'我会义务开展2018年云南省工程建设质量提升行动暨质量安全标准化工地观摩活动',time:'2019-05-16'},
                        {id:2,context:'2018年云南省工程建设行业“质量月”活动暨质量宣贯会在昆明召开',time:'2019-05-16'},
                        {id:3,context:'质量发展纲要（2011-2020年）',time:'2019-05-16'},
                    ]
                    break;
				case 3:
                    this.tabOn = 3
                    this.lastNav = '会员动态'
                    this.articles = [
                        {id:1,context:'我会义务开展2018年云南省工程建设质量提升行动暨质量安全标准化工地观摩活动',time:'2019-05-16'},
                        {id:2,context:'2018年云南省工程建设行业“质量月”活动暨质量宣贯会在昆明召开',time:'2019-05-16'},
                        {id:3,context:'质量发展纲要（2011-2020年）',time:'2019-05-16'},
                        {id:4,context:'工程建设科学技术奖评选办法',time:'2019-05-16'},
                    ]
                    break;
				case 4:
                    this.tabOn = 4
                    this.lastNav = '会员展示'
                    this.articles = [
                        {id:1,context:'我会义务开展2018年云南省工程建设质量提升行动暨质量安全标准化工地观摩活动',time:'2019-05-16'},
                        {id:2,context:'2018年云南省工程建设行业“质量月”活动暨质量宣贯会在昆明召开',time:'2019-05-16'},
                    ]
                    break;
				case 5:
                    this.tabOn = 5
                    this.lastNav = '会费标准'
                    this.articles = [
                        {id:1,context:'我会义务开展2018年云南省工程建设质量提升行动暨质量安全标准化工地观摩活动',time:'2019-05-16'},
                        {id:2,context:'2018年云南省工程建设行业“质量月”活动暨质量宣贯会在昆明召开',time:'2019-05-16'},
                        {id:3,context:'质量发展纲要（2011-2020年）',time:'2019-05-16'},
                    ]
                    break;
				case 6:
                    this.tabOn = 6
                    this.lastNav = '下载中心'
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
                this.lastNav = '申请入会'
                this.articles = [
                    {id:1,context:'我会义务开展2018年云南省工程建设质量提升行动暨质量安全标准化工地观摩活动',time:'2019-05-16'},
                    {id:2,context:'2018年云南省工程建设行业“质量月”活动暨质量宣贯会在昆明召开',time:'2019-05-16'},
                    {id:3,context:'质量发展纲要（2011-2020年）',time:'2019-05-16'},
                    {id:4,context:'工程建设科学技术奖评选办法',time:'2019-05-16'},
                    {id:5,context:'国家发展改革 住房城乡建设部关于推荐全过程过程资讯服务发展的指导意见',time:'2019-05-16'},
                    {id:6,context:'大理州建筑业协会今日与山西省建筑协会达成合作关系',time:'2019-05-16'}
                ]
            }else if(aa == 2){
                this.lastNav = '会员权利与义务'
                this.articles = [
                    {id:1,context:'我会义务开展2018年云南省工程建设质量提升行动暨质量安全标准化工地观摩活动',time:'2019-05-16'},
                    {id:2,context:'2018年云南省工程建设行业“质量月”活动暨质量宣贯会在昆明召开',time:'2019-05-16'},
                    {id:3,context:'质量发展纲要（2011-2020年）',time:'2019-05-16'},
                ]
            }else if(aa == 3){
                this.lastNav = '会员动态'
                this.articles = [
                    {id:1,context:'我会义务开展2018年云南省工程建设质量提升行动暨质量安全标准化工地观摩活动',time:'2019-05-16'},
                    {id:2,context:'2018年云南省工程建设行业“质量月”活动暨质量宣贯会在昆明召开',time:'2019-05-16'},
                    {id:3,context:'质量发展纲要（2011-2020年）',time:'2019-05-16'},
                    {id:4,context:'工程建设科学技术奖评选办法',time:'2019-05-16'},
                ]
            }else if(aa == 4){
                this.lastNav = '会员展示'
                this.articles = [
                    {id:1,context:'我会义务开展2018年云南省工程建设质量提升行动暨质量安全标准化工地观摩活动',time:'2019-05-16'},
                    {id:2,context:'2018年云南省工程建设行业“质量月”活动暨质量宣贯会在昆明召开',time:'2019-05-16'},
                ]
            }else if(aa == 5){
                this.lastNav = '会费标准'
                this.articles = [
                    {id:1,context:'我会义务开展2018年云南省工程建设质量提升行动暨质量安全标准化工地观摩活动',time:'2019-05-16'},
                    {id:2,context:'2018年云南省工程建设行业“质量月”活动暨质量宣贯会在昆明召开',time:'2019-05-16'},
                    {id:3,context:'质量发展纲要（2011-2020年）',time:'2019-05-16'},
                ] 
            }else{
                this.lastNav = '下载中心'
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
.member
    width 1200px
    padding-bottom 100px
    box-sizing border-box
    margin 0 auto
</style>


