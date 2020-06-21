<template>
	<header>
		<section class="logoPart" v-if="logoPart">
			微信
		</section>
		<section class="logoPart" v-if="crossover">
			<section class="goback" @click="goBackThing">
				<svg fill="#fff">
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#back"></use>
				</svg>
			</section>
			<section class="wall">|</section>
			<slot name='searchpart'></slot>
			<!-- <slot name='clickrefresh' ></slot>-->
			<section class="covers_name" v-if="$route.path.indexOf('search') == -1" @click="refreshPage">
				<span class="ellipsis">
					{{crossover}}
				</span>
			</section>
		</section>
		<section class="searchPart" v-if="searchPart">
			<router-link to='/search' class="searchlink">
				<svg class="icon-search" fill="#fff">
				    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#search"></use>
				</svg>
			</router-link>
		</section>
		<section class="addPart" v-if="add" @click="controlShow">
			<svg class="icon-search">
			    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#add"></use>
			</svg>
		</section>
    <section class="addPart" v-if="newpost" @click="newPost">
      <svg class="icon-search">
        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#add"></use>
      </svg>
    </section>
		<!-- 下拉框 -->
		<section class="selectpart" v-show="addthing">
			<div class="cover" @click="controlhide"></div>
			<div class="selectlist">
				<ul>
					<router-link :to="{path:'/createGroupChat'}" tag="li" class="selectpart_li">
						<section class="selectsvg">
							<svg fill="#fff">
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wxspeak"></use>
							</svg>
						</section>
						<section class="selectext">
							发起群聊
						</section>
					</router-link>
          <router-link :to="{path:'/searchGroup'}" tag="li" class="selectpart_li">
            <section class="selectsvg">
              <svg fill="#fff">
                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#wxspeak"></use>
              </svg>
            </section>
            <section class="selectext">
              加入群聊
            </section>
          </router-link>
					<router-link to='/addFriend' tag="li" class="selectpart_li">
						<section class="selectsvg">
							<svg fill="#fff">
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#addfriend"></use>
							</svg>
						</section>
						<section class="selectext">
							添加朋友
						</section>
					</router-link>
					<router-link to='' tag="li" class="selectpart_li">
						<section class="selectsvg">
							<svg fill="#fff">
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#onesweep"></use>
							</svg>
						</section>
						<section class="selectext">
							扫一扫
						</section>
					</router-link>
					<router-link to='' tag="li" class="selectpart_li">
						<section class="selectsvg">
							<svg fill="#fff">
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#receipt"></use>
							</svg>
						</section>
						<section class="selectext">
							收付款
						</section>
					</router-link>
					<router-link to='' tag="li" class="selectpart_li">
						<section class="selectsvg">
							<svg fill="#fff">
								<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#help"></use>
							</svg>
						</section>
						<section class="selectext">
							帮助与反馈
						</section>
					</router-link>
				</ul>
			</div>
		</section>
		<slot name='person'></slot>
	</header>
<!--  <section>-->

<!--    <div class="line"></div>-->
<!--    <el-menu-->
<!--      :default-active="activeIndex2"-->
<!--      class="el-menu-demo"-->
<!--      mode="horizontal"-->
<!--      @select="handleSelect"-->
<!--      background-color="#409eff"-->
<!--      text-color="#fff"-->
<!--      active-text-color="#ffd04b">-->
<!--      <el-menu-item index="1">MSU</el-menu-item>-->

<!--      <el-submenu index="2" style="float: right">-->
<!--        <template slot="title">我的工作台</template>-->
<!--        <el-menu-item index="2-1" v-on:click="gotoCreateGroup">发起群聊</el-menu-item>-->
<!--        <el-menu-item index="2-2" v-on:click="gotoJoinGroup">加入群聊</el-menu-item>-->
<!--        <el-menu-item index="2-3" v-on:click="gotoAddFriend">添加朋友</el-menu-item>-->
<!--        <el-submenu index="2-4">-->
<!--          <template slot="title">选项4</template>-->
<!--          <el-menu-item index="2-4-1">选项1</el-menu-item>-->
<!--          <el-menu-item index="2-4-2">选项2</el-menu-item>-->
<!--          <el-menu-item index="2-4-3">选项3</el-menu-item>-->
<!--        </el-submenu>-->
<!--      </el-submenu>-->
<!--    </el-menu>-->
<!--  </section>-->
</template>

<script>

	export default{
		data(){
			return{
				addthing:false,
        activeIndex1: '1',
        activeIndex2: '1'
			}
		},
		props: ['logoPart', 'crossover', 'searchPart', 'add', 'person', "search", "clickrefresh", "newpost"],
		created(){

		},
		mounted(){

		},
		components:{

		},
		computed:{

		},
		methods:{
		  gotoCreateGroup() {
		    this.$router.push('/createGroupChat')
      },
      gotoJoinGroup() {
        this.$router.push('/searchGroup')
      },
      gotoAddFriend() {
        this.$router.push('/addFriend')
      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
			controlShow(){
				this.addthing=true;
			},
			controlhide(){
				this.addthing=false;
			},
			goBackThing(){
				this.$route.path == '/singlechat' ? this.$router.push('/dialogue') : window.history.go(-1);
			},
			refreshPage(){//点击头部刷新页面
				this.$emit('refreshPage');
			},
      newPost(){
		      this.$router.push('/find/writeFC')
      }
		}
	}
</script>
<style lang="scss" scoped>
	@import "../../style/public";
	header{
		@include widthHeight(100%,2.06933rem);
		background:$black;
		z-index:200;
		color:#fff;
		position: fixed;
		.logoPart{
			@include topcenter;
			@include sizeColor(0.704rem,#fff);
			left:0.5973333333rem;
			@include justify(flex-start);
			align-items:center;
			.goback{
				@include widthHeight(1rem,1rem);
				svg{
					@include widthHeight(100%,100%);
				}
			}
			.wall{
				margin:0 0.5333333333rem;
				@include sizeColor(1.0666666667rem,#2e3235);
			}

			.covers_name{
				span{
					@include sizeColor(0.704rem,#fff);
					display:block;
					width:9.5rem;
				}
			}
		}
		.searchPart{
			@include topcenter;
			right:3.52rem;
			@include widthHeight(0.8106666667rem,0.8106666667rem);
			.searchlink{
				dispaly:block;
				@include widthHeight(0.8106666667rem,0.8106666667rem);
				svg{
					@include widthHeight(100%,100%);
				}
			}
		}
		.addPart{
			@include topcenter;
			right:1.0453333333rem;
			@include widthHeight(0.8106666667rem,0.8106666667rem);
			svg{
				@include widthHeight(100%,100%);
			}

		}
		.selectpart{
			position: fixed;
			z-index:2;
			width:100%;
			height:100%;
			top:0;
			right:0;
			.cover{
				position: fixed;
				width:100%;
				height:100%;
				background:#000;
				opacity: 0;
			}
			.selectlist{
				position: absolute;
				z-index:100;
				top:2.06933rem;
				right:0.4693333333rem;
				width:8.5333333333rem;
				background:#373b3e;
				ul{
					width:8.5333333333rem;
					.selectpart_li{
						@include widthHeight(100%,1.9626666667rem);
						border-bottom:1px solid #2f3336;
						@include justify(flex-start);
						align-items:center;
						.selectsvg{
							@include widthHeight(0.96rem,0.9386666667rem);
							margin:0 0.7466666667rem;
							svg{
								@include widthHeight(100%,100%);
							}
						}
						.selectext{
							@include sizeColor(0.64rem,#fff);
						}
					}
				}
			}

		}
	}
</style>
