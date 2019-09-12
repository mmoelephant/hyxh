<template>
    <div class="zhu">
        <banner></banner>
		<div class="part1">
			<div class="parTitle"><h1>{{oneList.name?oneList.name:'综合动态信息'}}</h1></div>
			<div class="partCon">
				<div class="con1" v-for="item in oneList.data" :key="item.id?item.id:index">
					<div class="conTitle">
						<div class="conTitle_left">
							<img src="../../public/img/smallico1.png" v-show="item.name&&item.name == '协会动态'">
							<img src="../../public/img/smallico2.png" v-show="item.name&&item.name == '行业动态'">
							<img src="../../public/img/smallico3.png" v-show="item.name&&item.name == '会员动态'">
							<span>{{item.name?item.name:'协会动态'}}</span>
						</div>
						<div class="moreBtn" @click="morexhNews(oneList.name,item.name,item.id)">更多</div>
					</div>
					<div class="conText">
						<div class="conItem" v-for="item2 in item.articleData" :key="item2.id?item2.id:index">
							<div @click="toDetail(item2.id)">{{item2.title?item2.title:'我会义务举办2019年大理州建筑“安全生产月”暨...'}}</div>
							<span>{{item2.time?item2.time:'06-19'}}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="ban1"><img src="../../public/img/banner2.jpg"></div>
		<div class="part1">
			<div class="parTitle"><h1>{{twoList.name?twoList.name:'政策公告'}}</h1><div @click="seeMore(twoList.name,twoList.id)">查看更多</div></div>
			<div class="partCon">
				<div class="con1" v-for="item in twoList.data" :key="item.id?item.id:index">
					<div class="conTitle conTitle1">
						<div class="conTitle_left"><span>{{item.name?item.name:'住建部'}}</span></div>
						<div class="moreBtn" @click="morexhNews(twoList.name,item.name,item.id)">更多</div>
					</div>
					<div class="conText">
						<div class="conItem"  v-for="item2 in item.articleData" :key="item2.id?item2.id:index">
							<div @click="toDetail(item2.id)">{{item2.title?item2.title:'我会义务举办2019年大理州建筑“安全生产月”暨...'}}</div>
							<span>{{item2.time?item2.time:'06-19'}}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="part1">
			<div class="parTitle"><h1>{{threeList.name?threeList.name:'行业服务'}}</h1><div @click="seeMore(threeList.name,threeList.id)">查看更多</div></div>
			<div class="partCon">
				<div class="con1"  v-for="item in threeList.data" :key="item.id?item.id:index">
					<div class="conTitle conTitle1">
						<div class="conTitle_left"><span>{{item.name?item.name:'价格信息'}}</span></div>
						<div class="moreBtn" @click="morexhNews(threeList.name,item.name,item.id)">更多</div>
					</div>
					<div class="conText">
						<div class="conItem"  v-for="item2 in item.articleData" :key="item2.id?item2.id:index">
							<div @click="toDetail(item2.id)">{{item2.title?item2.title:'我会义务举办2019年大理州建筑“安全生产月”暨...'}}</div>
							<span>{{item2.time?item2.time:'06-19'}}</span>
						</div>
					</div>
				</div>
			</div>
		</div>

    </div>
</template>
<script>
import banner from '../components/banner'
export default {
	data(){
		return {
			oneList:{},
			twoList:{},
			threeList:{},
		}
	},
	created(){
		var data = {}
		this.$api.get_index(data).then(v => {
			// console.log(v)
			// console.log(v.data.data.topData)
			// console.log(v.data.data.topData.one)
			// console.log(v.data.data.topData.two)
			// console.log(v.data.data.topData.three)
			// if(v.data.data.topData != ''&&v.data.data.topData != {}&&v.data.data.topData != null&&v.data.data.topData != undefined){
			// }
			if(v.data.errcode == 0&&v.data.errmsg == 'ok'){
				this.oneList = v.data.data.topData.one
				this.twoList = v.data.data.topData.two
				this.threeList = v.data.data.topData.three
			}else{
				this.oneList = {}
				this.twoList = {}
				this.threeList = {}
			}
		})

	},
	components:{
		banner
	},
	methods:{
		morexhNews(aa,bb,cc){
			// console.log(typeof aa)
			// console.log(aa)
			if(aa == '综合动态信息'){
				if(bb == '协会动态'){
					this.$router.push({name:'协会概况',query:{id:cc}})
				}else if(bb == '行业动态'){
					this.$router.push({name:'行业服务',query:{id:cc}})
				}else{
					this.$router.push({name:'会员管理',query:{id:cc}})
				}
			}else{
				this.$router.push({name:aa,query:{id:cc}})
			}
		},
		toDetail(aa){
			this.$router.push({name:'articledetail',query:{id:aa}})
		},
		seeMore(aa,bb){
			this.$router.push({name:aa,query:{id:bb}})
		}
	}
}
</script>
<style lang="stylus" scoped>
.zhu
	width 1200px
	padding 30px 0 80px 0
	box-sizing border-box
	margin 0 auto
// .part1
// 	margin-bottom 40px
.parTitle
	display flex
	justify-content space-between
	padding 40px 0 20px 0
	// border 1px green solid
	box-sizing border-box
	h1
		font-size 18px
		font-weight normal
		color #333333
		line-height 18px
	div
		background url(../../public/img/moreIco.png) no-repeat right center
		padding-right 16px
		box-sizing border-box
		font-size 14px
		color #666666
		line-height 18px
		cursor pointer
	div:hover
		color #1892FF

.partCon
	display flex
	justify-content space-between
.con1
	width 380px
	background #fff
.conTitle
	display flex
	justify-content space-between
	align-items center
	height 48px
	background #1892FF
	padding 0 14px
	box-sizing border-box
	font-size 14px
	color #ffffff
	line-height 48px
	img
		width 14px
		height 14px
		margin-right 4px
.conTitle_left
	display flex
	align-items center
	font-weight bold
.conTitle.conTitle1
	background #53B4FF
.moreBtn
	width 50px
	height 20px
	border 1px #ffffff solid
	border-radius 12px
	font-size 12px
	text-align center
	line-height 19px
	cursor pointer
	transition .2s
.moreBtn:hover
	background #ffffff
	color #1892FF
.conText
	min-height 100px
	.conItem
		height 50px
		padding 0 14px
		border-bottom 1px #e6e6e6 solid
		box-sizing border-box
		font-size 12px
		color #666666
		line-height 14px
		cursor pointer
		display flex
		justify-content space-between
		align-items center
		span
			color #a6a6a6
	.conItem div
		width 280px
		overflow hidden
		text-overflow ellipsis
		white-space nowrap
		transition .2s
	.conItem:hover div
		color #1892FF
		text-decoration underline
	.conItem:last-of-type
		border none
	.conItem.nice div
		font-weight bold
		color #FF4720
.ban1
	width 100%
	height 120px
	margin-top 40px


</style>


