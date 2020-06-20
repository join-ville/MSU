<template>
    <section>
      <head-top crossover="群列表"></head-top>
      <section class="contacts"
               ref="contactList">
        <div class="contacts_bottom"
             ref="addlistfather">
          <ul class="contacts_bottom_ul"
              ref="addlist">
            <router-link :to="{path: '/groupDetails', query: {groupname: item.groupName, id:item.id, username: item.username, hasEntered: true}}"
                         style="cursor: pointer"
                         v-for="item in this.grouplist">
              <div class="personlist_name ellipsis">
                {{item.groupName}}
              </div>
            </router-link>
          </ul>
        </div>
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
    .contacts_bottom {
      .contacts_bottom_ul {
        li {
          width: 100%;
          h1 {
            display: block;
            background: #ebebeb;
            line-height: 0.9813333333rem;
            padding-left: 0.5973333333rem;
            @include sizeColor(0.384rem, #8a8a8a);
          }
          ul {
            width: 14rem;
            margin: 0 auto;
            li {
              padding: 0.3413333333rem 0;
              @include justify(flex-start);
              border-bottom: 1px solid #e0e0e0;
              align-items: center;
              .personlist_img {
                @include widthHeight(
                    1.5786666667rem,
                    1.5786666667rem
                );
                img {
                  @include widthHeight(100%, 100%);
                }
              }
              .personlist_name {
                @include sizeColor(0.64rem, #2a2a2a);
                margin-left: 0.5333333333rem;
                width: 12.6rem;
              }
            }
            li:last-child {
              border: 0;
            }
          }
        }
      }
      .guide_wipe {
        position: fixed;
        width: 30px;
        height: 100%;
        top: 0;
        right: 0;
        .list_guide {
          position: fixed;
          z-index: 10;
          top: 50%;
          transform: translateY(-50%);
          right: 0.2986666667rem;
          dl {
            dd {
              @include sizeColor(0.58rem, #585858);
              text-align: center;
            }
          }
          p {
            @include sizeColor(0.54rem, #585858);
          }
        }
      }

      .big-letter {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 3.3706666667rem;
        height: 3.3706666667rem;
        .letter-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 3.3706666667rem;
          height: 3.3706666667rem;
          background: #000;
          opacity: 0.6;
          border-radius: 5px;
        }
        .letter {
          position: relative;
          z-index: 10;
          width: 3.3706666667rem;
          line-height: 3.3706666667rem;
          text-align: center;
          font-size: 2rem;
          color: #fff;
          font-family: SimSun !important;
        }
      }
    }
  }
  .peoplenum {
    padding-bottom: 3rem;
    text-align: center;
    margin-top: 0.5rem;
    @include sizeColor(0.6rem, #666);
  }
    .sendmessage{
      width:14.1653333333rem;
      margin:0 auto;
      margin-top:0.8533333333rem;
      .send{
        display:block;
        border-radius:5px;
        text-align:center;
        width:14.1226666667rem;
        border:1px solid #3e8d3e;
        background:#1aad16;
        @include sizeColor(0.7253333333rem,#fff);
        letter-spacing:4px;
        line-height:2.0053333333rem;
      }
    }


</style>
