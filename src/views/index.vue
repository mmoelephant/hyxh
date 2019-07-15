<template>
    <div class="zhu">
        <banner></banner>
		<div class="part1">
			<div class="parTitle"><h1>综合动态消息</h1></div>
			<div class="partCon">
				<div class="con1">
					<div class="conTitle">
						<div class="conTitle_left"><img src="../../public/img/smallico1.png"><span>协会动态</span></div>
						<div class="moreBtn" @click="morexhNews">更多</div>
					</div>
					<div class="conText">
						<div class="conItem nice"><div @click="toDetail">我会义务举办2019年大理州建筑“安全生产月”暨...</div><span>6-19</span></div>
						<div class="conItem"><div>州建设工会组织看电影《反腐枪声》</div><span>6-19</span></div>
						<div class="conItem"><div>省建筑行业协会组织专家到中铁大厦、中铁佳苑项...</div><span>6-19</span></div>
						<div class="conItem"><div>云南省建筑行业协会召开技术成果评价会</div><span>6-19</span></div>
						<div class="conItem"><div>2019年云南省工程建设质量管理小组竞赛活动成果...</div><span>6-19</span></div>
						<div class="conItem"><div>我会与陕西省建筑业协会缔结友好合作关系</div><span>6-19</span></div>
					</div>
				</div>
				<div class="con1">
					<div class="conTitle">
						<div class="conTitle_left"><img src="../../public/img/smallico2.png"><span>行业动态</span></div>
						<div class="moreBtn" @click="newsMore">更多</div>
					</div>
					<div class="conText">
						<div class="conItem"><div>我会义务举办2019年大理州建筑“安全生产月”暨...</div><span>6-19</span></div>
						<div class="conItem"><div>州建设工会组织看电影《反腐枪声》</div><span>6-19</span></div>
						<div class="conItem"><div>省建筑行业协会组织专家到中铁大厦、中铁佳苑项...</div><span>6-19</span></div>
						<div class="conItem"><div>云南省建筑行业协会召开技术成果评价会</div><span>6-19</span></div>
						<div class="conItem"><div>2019年云南省工程建设质量管理小组竞赛活动成果...</div><span>6-19</span></div>
						<div class="conItem"><div>我会与陕西省建筑业协会缔结友好合作关系</div><span>6-19</span></div>
					</div>
				</div>
				<div class="con1">
					<div class="conTitle">
						<div class="conTitle_left"><img src="../../public/img/smallico3.png"><span>会员动态</span></div>
						<div class="moreBtn" @click="memberMore">更多</div>
					</div>
					<div class="conText">
						<div class="conItem"><div>我会义务举办2019年大理州建筑“安全生产月”暨...</div><span>6-19</span></div>
						<div class="conItem"><div>州建设工会组织看电影《反腐枪声》</div><span>6-19</span></div>
						<div class="conItem"><div>省建筑行业协会组织专家到中铁大厦、中铁佳苑项...</div><span>6-19</span></div>
						<div class="conItem"><div>云南省建筑行业协会召开技术成果评价会</div><span>6-19</span></div>
						<div class="conItem"><div>2019年云南省工程建设质量管理小组竞赛活动成果...</div><span>6-19</span></div>
						<div class="conItem"><div>我会与陕西省建筑业协会缔结友好合作关系</div><span>6-19</span></div>
					</div>
				</div>
			</div>
		</div>
		<div class="ban1"><img src="../../public/img/banner2.jpg"></div>
		<div class="part1">
			<div class="parTitle"><h1>政策公告</h1><div @click="seeMore">查看更多</div></div>
			<div class="partCon">
				<div class="con1">
					<div class="conTitle">
						<div class="conTitle_left"><span>住建部</span></div>
						<div class="moreBtn" @click="policyMore(1)">更多</div>
					</div>
					<div class="conText">
						<div class="conItem nice"><div>我会义务举办2019年大理州建筑“安全生产月”暨...</div><span>6-19</span></div>
						<div class="conItem"><div>州建设工会组织看电影《反腐枪声》</div><span>6-19</span></div>
						<div class="conItem"><div>省建筑行业协会组织专家到中铁大厦、中铁佳苑项...</div><span>6-19</span></div>
						<div class="conItem"><div>云南省建筑行业协会召开技术成果评价会</div><span>6-19</span></div>
						<div class="conItem"><div>2019年云南省工程建设质量管理小组竞赛活动成果...</div><span>6-19</span></div>
						<div class="conItem"><div>我会与陕西省建筑业协会缔结友好合作关系</div><span>6-19</span></div>
					</div>
				</div>
				<div class="con1">
					<div class="conTitle">
						<div class="conTitle_left"><span>住建厅</span></div>
						<div class="moreBtn" @click="policyMore(2)">更多</div>
					</div>
					<div class="conText">
						<div class="conItem"><div>我会义务举办2019年大理州建筑“安全生产月”暨...</div><span>6-19</span></div>
						<div class="conItem"><div>州建设工会组织看电影《反腐枪声》</div><span>6-19</span></div>
						<div class="conItem"><div>省建筑行业协会组织专家到中铁大厦、中铁佳苑项...</div><span>6-19</span></div>
						<div class="conItem"><div>云南省建筑行业协会召开技术成果评价会</div><span>6-19</span></div>
						<div class="conItem"><div>2019年云南省工程建设质量管理小组竞赛活动成果...</div><span>6-19</span></div>
						<div class="conItem"><div>我会与陕西省建筑业协会缔结友好合作关系</div><span>6-19</span></div>
					</div>
				</div>
				<div class="con1">
					<div class="conTitle">
						<div class="conTitle_left"><span>州住建局</span></div>
						<div class="moreBtn" @click="policyMore(3)">更多</div>
					</div>
					<div class="conText">
						<div class="conItem"><div>我会义务举办2019年大理州建筑“安全生产月”暨...</div><span>6-19</span></div>
						<div class="conItem"><div>州建设工会组织看电影《反腐枪声》</div><span>6-19</span></div>
						<div class="conItem"><div>省建筑行业协会组织专家到中铁大厦、中铁佳苑项...</div><span>6-19</span></div>
						<div class="conItem"><div>云南省建筑行业协会召开技术成果评价会</div><span>6-19</span></div>
						<div class="conItem"><div>2019年云南省工程建设质量管理小组竞赛活动成果...</div><span>6-19</span></div>
						<div class="conItem"><div>我会与陕西省建筑业协会缔结友好合作关系</div><span>6-19</span></div>
					</div>
				</div>
			</div>
		</div>
		<div class="part1">
			<div class="parTitle"><h1>行业服务</h1><div @click="seeMore2">查看更多</div></div>
			<div class="partCon">
				<div class="con1">
					<div class="conTitle">
						<div class="conTitle_left"><span>价格信息</span></div>
						<div class="moreBtn" @click="industryMore(1)">更多</div>
					</div>
					<div class="conText">
						<div class="conItem nice"><div>我会义务举办2019年大理州建筑“安全生产月”暨...</div><span>6-19</span></div>
						<div class="conItem"><div>州建设工会组织看电影《反腐枪声》</div><span>6-19</span></div>
						<div class="conItem"><div>省建筑行业协会组织专家到中铁大厦、中铁佳苑项...</div><span>6-19</span></div>
						<div class="conItem"><div>云南省建筑行业协会召开技术成果评价会</div><span>6-19</span></div>
						<div class="conItem"><div>2019年云南省工程建设质量管理小组竞赛活动成果...</div><span>6-19</span></div>
						<div class="conItem"><div>我会与陕西省建筑业协会缔结友好合作关系</div><span>6-19</span></div>
					</div>
				</div>
				<div class="con1">
					<div class="conTitle">
						<div class="conTitle_left"><span>优质工程评审</span></div>
						<div class="moreBtn" @click="industryMore(2)">更多</div>
					</div>
					<div class="conText">
						<div class="conItem"><div>我会义务举办2019年大理州建筑“安全生产月”暨...</div><span>6-19</span></div>
						<div class="conItem"><div>州建设工会组织看电影《反腐枪声》</div><span>6-19</span></div>
						<div class="conItem"><div>省建筑行业协会组织专家到中铁大厦、中铁佳苑项...</div><span>6-19</span></div>
						<div class="conItem"><div>云南省建筑行业协会召开技术成果评价会</div><span>6-19</span></div>
						<div class="conItem"><div>2019年云南省工程建设质量管理小组竞赛活动成果...</div><span>6-19</span></div>
						<div class="conItem"><div>我会与陕西省建筑业协会缔结友好合作关系</div><span>6-19</span></div>
					</div>
				</div>
				<div class="con1">
					<div class="conTitle">
						<div class="conTitle_left"><span>专业培训</span></div>
						<div class="moreBtn" @click="industryMore(3)">更多</div>
					</div>
					<div class="conText">
						<div class="conItem"><div>我会义务举办2019年大理州建筑“安全生产月”暨...</div><span>6-19</span></div>
						<div class="conItem"><div>州建设工会组织看电影《反腐枪声》</div><span>6-19</span></div>
						<div class="conItem"><div>省建筑行业协会组织专家到中铁大厦、中铁佳苑项...</div><span>6-19</span></div>
						<div class="conItem"><div>云南省建筑行业协会召开技术成果评价会</div><span>6-19</span></div>
						<div class="conItem"><div>2019年云南省工程建设质量管理小组竞赛活动成果...</div><span>6-19</span></div>
						<div class="conItem"><div>我会与陕西省建筑业协会缔结友好合作关系</div><span>6-19</span></div>
					</div>
				</div>
			</div>
		</div>

    </div>
</template>
<script>
import banner from '../components/banner'
export default {
	components:{
		banner
	},
	methods:{
		morexhNews(){
			this.$router.push({name:'aboutus',query:{id:3}})
		},
		toDetail(){
			this.$router.push('/articledetail')
		},
		newsMore(){
			this.$router.push({name:'news',query:{id:1}})
		},
		memberMore(){
			this.$router.push({name:'member',query:{id:3}})
		},
		policyMore(aa){
			this.$router.push({name:'policystate',query:{id:aa}})
		},
		// policyMore2(){
		// 	this.$router.push({name:'policystate',query:{id:2}})
		// },
		// policyMore3(){
		// 	this.$router.push({name:'policystate',query:{id:3}})
		// },
		industryMore(aa){
			this.$router.push({name:'industryserve',query:{id:aa}})
		},
		seeMore(){
			this.$router.push('/policystate')
		},
		seeMore2(){
			this.$router.push('/industryserve')
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
.moreBtn
	width 50px
	height 20px
	border 1px #ffffff solid
	border-radius 12px
	font-size 12px
	text-align center
	line-height 20px
	cursor pointer
	transition .2s
.moreBtn:hover
	background #ffffff
	color #1892FF
.conText
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


