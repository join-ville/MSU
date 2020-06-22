<template>
    <section class="child_page">
      <head-top crossover="群列表"></head-top>

        <section class="privacy">
          <router-link :to="{path: '/groupDetails', query: {groupname: item.groupName, id:item.id, username: item.username, hasEntered: true}}"
                       style="cursor: pointer"
                       v-for="item in this.grouplist">
          <section class="privacy_top">
            <div class="privacy_child">
                {{item.groupName}}
            </div>
          </section>
          </router-link>
        </section>
    </section>
</template>

<script>
    import headTop from 'src/components/header/head'
    export default {
        name: "grouplist",
        components: {
          headTop
        },
        data() {
          return {
            username: this.$store.state.username,
            Token: this.$store.state.token,
            grouplist: []
          }
        },
        created() {
          this.axios({
            method: 'post',
            url: this.$store.state.baseurl+'group/returnGroupList',
            data: {
              username: this.username,
              Token: this.Token
            },
            crossDomain: true
          })
          .then(response => {
            if(response.data.code == 200)
              this.grouplist = response.data.data
          })
        }
    }
</script>

<style lang="scss"scoped>
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
  .router-show-enter-active,
  .router-show-leave-active {
    transition: all 0.4s;
  }
  .router-show-enter,
  .router-show-leave {
    transform: translateX(100%);
  }
  .acc_botton{
    width: 50px;
    margin-left: 0px;
    text-align:center;
    background:#1aad19;
    border-radius:5px;
    line-height:1.6rem;
    @include sizeColor(.7rem,#fff);
  }
  .refuse_botton{
    width: 50px;
    margin-left: 10px;
    text-align:center;
    background: orangered;
    border-radius:5px;
    line-height:1.6rem;
    @include sizeColor(.7rem,#fff);
  }
  .contacts {
    width: 100%;
    background: #fff;
    padding-top: 2.06933rem;
    .contacts_top {
      ul {
        width: 14rem;
        margin: 0 auto;
        -webkit-overflow-scrolling: touch;
        .contacts_li {
          width: 100%;
          margin: 0.3413333333rem 0;
          border-bottom: 1px solid #e0e0e0;
          @include justify(flex-start);
          align-items: center;
          .contacts_img {
            @include widthHeight(1.5786666667rem, 1.5786666667rem);
            svg {
              @include widthHeight(100%, 100%);
            }
          }
          .contacts_text {
            @include sizeColor(0.64rem, #2a2a2a);
            margin-left: 0.5333333333rem;
            margin-right: 100px;
          }
        }
        .contacts_li:last-child {
          border: 0;
        }
      }
    }
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
