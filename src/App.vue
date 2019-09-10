<template>
  <div>
	  <div class="commonHead">
		<div class="bigBan">
			<div class="bigBan_con">
				<div class="banLeft">
					<div><h1>大理州建筑业协会</h1><p>Dali Construction Industry Association</p></div>
					<div class="searchBox"><input placeholder="请输入查询关键字" class="searchInput"><div class="searchIco" @click="searchIt"></div></div>
				</div>
				<div class="banRight">
					<!-- <div class="rightItem"><div class="ii1"></div><div class="tt1"><h1>申请入会</h1><p>Apply membership</p></div></div>
					<div class="rightItem"><div class="ii2"></div><div class="tt1"><h1>价格信息</h1><p>Price information</p></div></div>
					<div class="rightItem"><div class="ii3"></div><div class="tt1"><h1>联系我们</h1><p>Contact us</p></div></div> -->
					<div class="rightItem" v-for="item in headerlist" v-bind:key="item.id" @click="gotoTheHeader(item.id)">
						<div class="ii3" v-show="item.name&&item.name == '联系方式'"></div>
						<div class="ii2" v-show="item.name&&item.name == '价格信息'"></div>
						<div class="ii1" v-show="item.name&&item.name == '申请入会'"></div>
						<div class="tt1">
							<h1>{{item.name?item.name:'-'}}</h1>
							<p v-show="item.name&&item.name == '联系方式'">Contact us</p>
							<p v-show="item.name&&item.name == '价格信息'">Price information</p>
							<p v-show="item.name&&item.name == '申请入会'">Apply membership</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="navBox">
			<ul class="nav">
				<li :class='(route.name=="index" || route.name=="search")?"navAct":""' @click='$router.push("/")'>首页</li>
				<li :class='route.name=="aboutus"?"navAct":""' @mouseenter="show1=true" @mouseleave="show1=false">协会概况
					<transition name="fade">
						<div class="showBox1" v-show='show1'>
							<p @click="toAbout(1)">协会简介</p>
							<p @click="toAbout(2)">协会章程</p>
							<p @click="toAbout(3)">协会动态</p>
							<p @click="toAbout(4)">联系方式</p>
						</div>
					</transition>
				</li>
				<li :class='route.name=="policystate"?"navAct":""' @mouseenter="show2=true" @mouseleave="show2=false">政策公告
					<transition name="fade">
						<div class="showBox1" v-show='show2'> 
							<p @click="toPolicy(1)">住建部</p>
							<p @click="toPolicy(2)">住建厅</p>
							<p @click="toPolicy(3)">州住建局</p>
							<p @click="toPolicy(4)">州建筑业协会</p>
							<p @click="toPolicy(5)">规范性文件</p>
						</div>
					</transition>
				</li>
				<li :class='route.name=="news"?"navAct":""' @mouseenter="show3=true" @mouseleave="show3=false">新闻动态
					<transition name="fade">
						<div class="showBox1" v-show='show3'>
							<p @click="toNews(1)">行业动态</p>
							<p @click="toNews(2)">党政要闻</p>
							<p @click="toNews(3)">党建工作</p>
							<p @click="toNews(4)">行业前瞻</p>
						</div>
					</transition>
				</li>
				<li :class='route.name=="industryserve"?"navAct":""' @mouseenter="show4=true" @mouseleave="show4=false">行业服务
					<transition name="fade">
						<div class="showBox1" v-show='show4'>
							<p @click="toIndustry(1)">价格信息</p>
							<p @click="toIndustry(2)">优质工程评审</p>
							<p @click="toIndustry(3)">专业培训</p>
							<!-- <p>联系方式</p> -->
						</div>
					</transition>
				</li>
				<li :class='route.name=="member"?"navAct":""' @mouseenter="show5=true" @mouseleave="show5=false">会员管理
					<transition name="fade">
						<div class="showBox1" v-show='show5'>
							<p @click="toMember(1)">申请入会</p>
							<p @click="toMember(2)">会员权利与义务</p>
							<p @click="toMember(3)">会员动态</p>
							<p @click="toMember(4)">会员展示</p>
							<p @click="toMember(5)">会费标准</p>
							<p @click="toMember(6)">下载中心</p>
						</div>
					</transition>
				</li>
				<li @click="$router.push('/partner')" :class='route.name=="partner"?"navAct":""'>合作伙伴</li>
			</ul>
		</div>
	</div>
	<div style='flex-direction:column;overflow:auto'>
		<router-view></router-view>
	</div>
	<div>
		<ul class="quickLink">
			<li>中国建筑业协会</li>
			<li>中国施工企业管理协会</li>
			<li>中华人民共和国国家发改委</li>
			<li>中华人民共和国住房和城乡建设部</li>
			<li>中华人民共和国民政部</li>
			<li>云南省建筑业协会</li>
			<li>云南造价协会</li>
		</ul>
		<div class="bottomInfo">
			<div class="info1"><span>联系地址：{{addre}}</span><span> &nbsp联系电话：{{tel}}</span><span> &nbspICP备案：{{icp}}</span></div>
			<!-- <div class="info2">Copyright © 大理州建筑业协会（Dali Construction Association All Rights Reserved）</div> -->
			<div class="info2">{{copyRight}}</div>
			<div class="info3">技术支持：<span>昆明行列科技有限公司</span></div>
			
		</div>
	</div>
  </div>
</template>
<script>
export default {
	data(){
		return {
			message:'这里是一些文字...',
			navOn:1,
			show1:false,
			show2:false,
			show3:false,
			show4:false,
			show5:false,
			headerlist:[],
			addre:'',
			tel:'',
			icp:'',
			copyRight:''
		}
	},
	created(){
		var data = {}
		this.$api.get_header(data).then(v => {
			if(v.data.errcode == 0&&v.data.errmsg == 'ok'&&v.data.data != []&&v.data.data != null&&v.data.data != ''){
				this.headerlist = v.data.data	
			}else{
				this.headerlist = []
			}
		})
		this.$api.get_footer(data).then(v => {
			if(v.data.errcode == 0&&v.data.errmsg == 'ok'&&v.data.data != {}&&v.data.data != null&&v.data.data != ''){
				this.addre = v.data.data.site_address
				this.tel = v.data.data.site_tel
				this.icp = v.data.data.site_icpnumber
				this.copyRight = v.data.data.site_copyright
			}else{
				this.addre = ''
				this.tel = ''
				this.icp = ''
				this.copyRight = ''
			}
		})
	},
	computed: {
		route(){
			return this.$route
		}
	},
	watch:{
		route(val) {
			// console.log(val)
			// console.log(val.query.id)
			// if(val.name == 'index'){
			// }else if(val.name == 'aboutus'){
			// }
		}
	},
	methods:{
		searchIt(){
			this.$router.push({name:'search'})
		},
		toAbout(aa){
			this.$router.push({name:'aboutus',query:{id:aa}})
		},
		toPolicy(aa){
			this.$router.push({name:'policystate',query:{id:aa}})
		},
		toNews(aa){
			this.$router.push({name:'news',query:{id:aa}})
		},
		toIndustry(aa){
			this.$router.push({name:'industryserve',query:{id:aa}})
		},
		toMember(aa){
			this.$router.push({name:'member',query:{id:aa}})
		},
		gotoTheHeader(aa){
			// do something
		}
	}
}
</script>

<style lang="stylus" scoped>
// .commonHead
// 	height 416px

// 	// border 10px red solid
// 	// box-sizing border-box
.bigBan
	width 100%
	height 360px
	background url(../public/img/headBan.jpg) no-repeat center
.bigBan_con
	width 1200px
	height 100%
	padding 0 30px
	box-sizing border-box
	margin 0 auto
	display flex
	justify-content space-between
	align-items center
.banLeft
	h1
		font-size 36px
		font-weight bold
		color #ffffff
		line-height 36px
	p
		margin-top 14px
		font-size 14px
		color #8A99B8
		line-height 14px
.searchBox
	width 470px
	height 42px
	background #ffffff
	border-radius 4px
	margin-top 32px
	display flex
	justify-content space-between
	align-items center
	input
		width 428px
		height 42px
		background-color transparent
		border none
		border-radius 4px 0 0 4px
		outline none
		text-indent 14px
	.searchIco
		width 42px
		height 42px
		background url(../public/img/serachi.png) no-repeat center
		cursor pointer
	.searchIco:hover
		background-image url(../public/img/serachi2.png)
.banRight
	width 220px
	height 240px
	background #343C4C
	box-shadow 0px 6px 8px 0px rgba(19,21,30,0.5)
	border-radius 4px
	display flex
	flex-direction column
	justify-content space-between
	align-items center
.rightItem
	width 100%
	height 33.3333%
	padding 0 30px
	border-bottom 1px #404859 solid
	box-sizing border-box
	display flex
	align-items center
	cursor pointer
	.ii1,.ii2,.ii3
		width 38px
		height 38px
		margin-right 4px
	.ii1
		background url(../public/img/ico1.png) no-repeat center
		background-size 38px
	.ii2
		background url(../public/img/ico2.png) no-repeat center
		background-size 38px
	.ii3
		background url(../public/img/ico3.png) no-repeat center
		background-size 38px
	h1
		font-size 14px
		color #ffffff
		line-height 14px
	p
		margin-top 10px
		font-size 12px
		color #BFBFBF
		line-height 12px
.navBox
	width 100%
	height 56px
	background #ffffff
.nav
	width 1200px
	margin 0 auto
	display flex
	justify-content flex-start
	font-size 14px
	color #666666
	line-height 56px
	li
		padding 0 30px
		box-sizing border-box
		cursor pointer
		// transition .2s
		position relative
	li:hover
		background #EFF7FF
		color #1892FF
	li.navAct
		background linear-gradient(180deg,rgba(24,144,255,1) 0%,rgba(24,225,255,1) 100%)
		font-weight bold
		color #ffffff
.showBox1
	width 120px
	min-height 120px
	background #ffffff
	box-shadow 0px 2px 4px 0px rgba(0, 0, 0, 0.3)
	font-size 12px
	font-weight normal
	color #666666
	text-align center
	line-height 40px
	position absolute
	top 56px
	left 0
	z-index 2
	p
		border-bottom 1px #e6e6e6 solid
		box-sizing border-box
		cursor pointer
	p:hover
		background #fafafa
		color #1890FF
.showBox1 p:last-of-type
	border none
.fade-enter-active, .fade-leave-active
	transition .5s

.fade-enter, .fade-leave-to
	opacity 0
	height 0
.quickLink
	width 100%
	height 40px
	background #343C4C
	font-size 12px
	color #ffffff
	line-height 12px
	display flex
	justify-content center
	align-items center
	li
		padding 0 20px
		border-left 1px #4B5465 solid
		box-sizing border-box
		cursor pointer
	li:hover
		color #53B4FF
		text-decoration underline
		// color #1892FF
		
.quickLink li:nth-of-type(1)
	border none
.bottomInfo
	padding 20px 0 24px 0
	box-sizing border-box
	font-size 12px
	color #a6a6a6
	text-align center
	line-height 12px
.info2,.info3
	margin-top 8px
.info3 span
	color #333




</style>
