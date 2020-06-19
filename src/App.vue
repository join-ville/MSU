<template>
	<div>
    <router-view v-if="isRouterAlive"></router-view>
<!--		<transition name="router-fade" mode="out-in">-->
<!--			<keep-alive>-->
<!--				<router-view v-if="$route.meta.keepAlive"></router-view>-->
<!--			</keep-alive>-->
<!--		</transition>-->
<!--		<transition name="router-fade" mode="out-in">-->
<!--			<router-view v-if="!$route.meta.keepAlive"></router-view>-->
<!--		</transition>-->
	</div>
</template>
<script>
  export default {
    provide (){
      return {
        reload: this.reload
      }
    },
    data (){
      return {
        isRouterAlive: true
      }
    },
    methods: {
      reload() {
        this.isRouterAlive = false
        this.$nextTick(function () {
          this.isRouterAlive = true

        })
      }
    }
  }
</script>
<style lang="scss">
	.router-fade-enter-active, .router-fade-leave-active {
	  	transition: opacity .2s;
	}
	.router-fade-enter, .router-fade-leave-active {
	  	opacity: 0;
	}
</style>
