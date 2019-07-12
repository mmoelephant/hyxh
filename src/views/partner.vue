<template>
<div class="partner">
    <div class="breadNav">
        <span @click="toIndex">首页 > </span>
        <span>合作伙伴</span>
    </div>
    <div class="hb">
        <div class="hbItem">
            <div class="itemUp"><img src="../../public/img/logo1.png"></div>
            <div class="itemDown">
                <div class="comName">云南城投众和建设集团有限公司</div>
                <div class="comAddre">地址：昆明市民航路融城金阶A座8楼</div>
                <div class="comPhone">电话：0871-65322579</div>
            </div>
        </div>
        <div class="hbItem">
            <div class="itemUp"><img src="../../public/img/logo2.png"></div>
            <div class="itemDown">
                <div class="comName">云南省建设投资控股集团有限公司</div>
                <div class="comAddre">地址：昆明市经开区信息产业基地林...</div>
                <div class="comPhone">电话：0871-65322579</div>
            </div>
        </div>
        <div class="hbItem">
            <div class="itemUp"><img src="../../public/img/logo1.png"></div>
            <div class="itemDown">
                <div class="comName">云南城投众和建设集团有限公司</div>
                <div class="comAddre">地址：昆明市民航路融城金阶A座8楼</div>
                <div class="comPhone">电话：0871-65322579</div>
            </div>
        </div>
        <div class="hbItem">
            <div class="itemUp"><img src="../../public/img/logo2.png"></div>
            <div class="itemDown">
                <div class="comName">云南省建设投资控股集团有限公司</div>
                <div class="comAddre">地址：昆明市经开区信息产业基地林...</div>
                <div class="comPhone">电话：0871-65322579</div>
            </div>
        </div>
        <div class="hbItem">
            <div class="itemUp"><img src="../../public/img/logo1.png"></div>
            <div class="itemDown">
                <div class="comName">云南城投众和建设集团有限公司</div>
                <div class="comAddre">地址：昆明市民航路融城金阶A座8楼</div>
                <div class="comPhone">电话：0871-65322579</div>
            </div>
        </div>
        <div class="hbItem">
            <div class="itemUp"><img src="../../public/img/logo1.png"></div>
            <div class="itemDown">
                <div class="comName">云南城投众和建设集团有限公司</div>
                <div class="comAddre">地址：昆明市民航路融城金阶A座8楼</div>
                <div class="comPhone">电话：0871-65322579</div>
            </div>
        </div>
        <div class="hbItem">
            <div class="itemUp"><img src="../../public/img/logo2.png"></div>
            <div class="itemDown">
                <div class="comName">云南省建设投资控股集团有限公司</div>
                <div class="comAddre">地址：昆明市经开区信息产业基地林...</div>
                <div class="comPhone">电话：0871-65322579</div>
            </div>
        </div>
        <div class="hbItem">
            <div class="itemUp"><img src="../../public/img/logo1.png"></div>
            <div class="itemDown">
                <div class="comName">云南城投众和建设集团有限公司</div>
                <div class="comAddre">地址：昆明市民航路融城金阶A座8楼</div>
                <div class="comPhone">电话：0871-65322579</div>
            </div>
        </div>
        <div class="hbItem">
            <div class="itemUp"><img src="../../public/img/logo2.png"></div>
            <div class="itemDown">
                <div class="comName">云南省建设投资控股集团有限公司</div>
                <div class="comAddre">地址：昆明市经开区信息产业基地林...</div>
                <div class="comPhone">电话：0871-65322579</div>
            </div>
        </div>
        <div class="hbItem">
            <div class="itemUp"><img src="../../public/img/logo1.png"></div>
            <div class="itemDown">
                <div class="comName">云南城投众和建设集团有限公司</div>
                <div class="comAddre">地址：昆明市民航路融城金阶A座8楼</div>
                <div class="comPhone">电话：0871-65322579</div>
            </div>
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
        },
    }
}
</script>
<style lang="stylus" scoped>
.partner
    width 1200px
    padding-bottom 80px
    box-sizing border-box
    margin 0 auto
.hb
    display flex
    flex-wrap wrap
    justify-content space-between
.hbItem
    width 224px
    height 206px
    background #ffffff
    margin 0 20px 20px 0
    cursor pointer

.hbItem:nth-child(5n)
    margin-right 0

.itemUp
    height 120px
    display flex
    flex-direction column
    justify-content center
    align-items center


.itemDown
    height 86px
    background #1892FF
    padding 14px
    box-sizing border-box
    font-size 12px
    color #ffffff
    line-height 12px
    >div
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
.comName
    margin-bottom 15px
    font-weight bold
.comAddre
    margin-bottom 10px


</style>


