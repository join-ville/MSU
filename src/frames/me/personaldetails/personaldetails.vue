<template>
	<section class="child_page">
		<head-top crossover="个人信息"></head-top>
		<section class="privacy">
			<section class="privacy_top">
				<div class="privacy_child" v-on:click="gotoMenu('changeAvatar')">
					<span>头像</span>
					<img :src="userHeader" alt="">
				</div>
				<div class="privacy_child" @click="gotoMenu('changename')">
					<span>昵称</span>
					<span>{{nickName}}</span>
				</div>
				<div class="privacy_child">
					<span>MSU</span>
					<span>{{userName}}</span>
				</div>
				<div class="privacy_child">
					<span>二维码名片</span>
					<svg fill="#949494">
						<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#QRcode"></use>
					</svg>
				</div>
<!--				<div class="privacy_child">-->
<!--					<span>我的地址</span>-->
<!--					<span>{{userInfo.district}}</span>-->
<!--				</div>-->
			</section>
			<section class="privacy_top">
				<div class="privacy_child" @click="gotoMenu('changesex')">
					<span>性别</span>
					<span>{{gender == 1 ? '女' : '男' }}</span>
				</div>
<!--				<div class="privacy_child">-->
<!--					<span>地区</span>-->
<!--					<span>{{userInfo.district}}</span>-->
<!--				</div>-->
				<div class="privacy_child" @click="gotoMenu('changeword')">
					<span>个性签名</span>
					<span>{{word}}</span>
				</div>
			</section>
		</section>
    <transition name="router-show">
      <router-view></router-view>
    </transition>
	</section>
</template>

<script>
	import headTop from 'src/components/header/head'
	import {imgurl} from 'src/config/env';
	import {mapState, mapActions} from 'vuex'
	export default{
		data(){
			return{
				// userInfo:{},			//用户信息
				// userHeader:'',			//用户头像
          userHeader: '',
          userName: '',
          nickName: '',
          gender: -1,
          word: ''
			}
		},
		created(){
			//this.getUserInfo();
        this.axios({
            method: 'post',
            url: 'http://106.53.58.194:8888/msu_im/user/home',
            data: {
                username: this.$store.state.username,
                Token:  this.$store.state.token,
            },
            crossDomain: true
        }).then(body => {
            console.log(body.data)
            this.info = body

            var that = this
            this.userHeader = body.data.data.faceImage
            this.userName = body.data.data.username
            this.nickName = body.data.data.nickname
            if (body.data.data.gender === 1)  this.gender = 1
              else this.gender = 0
            // this.gender = body.data.data.gender
            this.word = body.data.data.userSignature

            this.$store.state.head = this.userHeader
            localStorage.setItem('head',this.userHeader) //  本地存储更新userHeader

            this.$store.state.nickname = this.nickName
            localStorage.setItem('nickname',this.nickName)  // 本地存储更新nickname

            this.$store.state.gender = this.gender
            localStorage.setItem('gender',this.gender)  //  本地存储更新gender

            this.$store.state.sign = this.word
            localStorage.setItem('sign',this.word)  //  本地存储更新signature

            // 错误信息
            if (this.info.data.code !== 200) {
                console.log(this.info)
                setTimeout(function () {
                    that.password_wrong_show = false
                }, 2000)
            }
            else{
                console.log("this.info.data.data.token")

            }
        })
		},
		mounted(){
			// this.userInfo=this.userInfo;
			// this.userHeader=imgurl + this.userInfo.avatar
		},
    watch:{
		    '$route'(){
		        this.userHeader = this.$store.state.head
		        this.nickName = this.$store.state.nickname
            this.gender = this.$store.state.gender
            this.word = this.$store.state.sign
        }
    },
		components:{
			headTop,
		},
		computed:{

			// ...mapState([
			// 	 "userInfo",
			// ]),

		},
		methods:{
		    gotoMenu(a){
		      this.$router.push('/me/personaldetails/'+a);
        },


			// ...mapActions([
			// 	'getUserInfo',
			// ])

		}
	}
</script>
<style lang="scss" scoped>
	@import "src/style/public";
	.child_page{
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 203;
		background-color: #ebebeb;
	}
  .router-show-enter-active,.router-show-leave-active{
    transition: all .4s;
  }
  .router-show-enter,.router-show-leave-active{
    transform:translateX(100%)
  }
	.privacy{
		padding-top: 3.06933rem;
		.privacy_top{
			background:#fff;
			margin-bottom:0.8533333333rem;
			padding:0 0.5973333333rem;
			.privacy_child{
				@include justify(space-between);
				border-bottom:1px solid #e2e2e2;
				align-items:center;
				position: relative;
				span{
					display:block;
					@include sizeColor(0.64rem,#333);
					@include align;
					line-height:2.0266666667rem;
				}
				span+span{
					@include sizeColor(0.5546666667rem,#999);
				}
				img{
					display:block;
					@include widthHeight(2.7306666667rem,2.7306666667rem);
					margin:0.3413333333rem 0;
				}
				svg{
					display:block;
					@include widthHeight(0.768rem,0.768rem);
				}
			}
			.privacy_child:last-child{
				border:0;
			}
		}
	}
</style>
