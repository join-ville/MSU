<template>
  <section>
    <head-top crossover="true" search="true">
      <section slot="searchpart">
        <section class="searchpart">
          <div class="searchpart_svg">
            <svg fill="#fff">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#search"></use>
            </svg>
          </div>
          <div class="searchpart_input">
            <input type="text" :placeholder="reminder" v-model="groupname"/>
          </div>
        </section>
      </section>
    </head-top>
  <section class="search" v-if="show">
    <div class="login_botton" @click="find">
      搜索
    </div>
  </section>
  <section class="changename" v-if="!show && searchlist.length">
    <ul>群名</ul>
    <ul>
        <router-link :to="{path: '/groupDetails', query: {groupname: item.groupName, id:item.id, username: item.username, hasEntered: item.isJoined}}" v-for="item in searchlist" style="cursor: pointer">
          <li>
            <div>
              {{item.groupName}}
            </div>
          </li>

        </router-link>
    </ul>
  </section>
  </section>
</template>

<script>
    import headTop from 'src/components/header/head'
    export default {
        name: "searchGroupChat",
        data() {
          return {
            reminder: "搜索群聊名",
            searchlist: [],		//搜索字段数据
            groupname: '',
            show: true,
          }
        },
        components: {
          headTop
        },
        mounted() {

        },
        methods: {
          find() {

            if(this.groupname){
              this.axios({
                method: "post",
                url: this.$store.state.baseurl+'group/searchGroup',
                data: {
                  groupName: this.groupname,
                  Token: localStorage.getItem('token')
                },
                crossDomain: true
              })
              .then(response => {
                  console.log(response)
                  console.log(response.data.data.length)
                if(response.data.code == 200) {
                    if(!response.data.data.length) this.$message.error('无搜索结果')
                    else {
                        this.searchlist = response.data.data
                        this.show = false
                    }

                }
              })
            }

          }
        }
    }
</script>

<style lang="scss" scoped>
  @import "../../style/public";
  .searchpart{
  @include widthHeight(12rem,1.2rem);
    border-bottom:1px solid #45c01a;
  @include justify(flex-start);
    align-items:center;
  .searchpart_svg{
  @include widthHeight(.8rem,.8rem);
    margin-right:0.4693333333rem;
  svg{
  @include widthHeight(100%,100%);

  }
  }
  .searchpart_input{
  input{
    display:block;
    width:10rem;
    line-height:1rem;
    background:none;
  @include sizeColor(0.615rem,#fff);
  }
  }
  }
  .login_botton{
    width: 100px;
    margin: 0 auto;
    text-align:center;
    background:#1aad19;
    border-radius:5px;
    line-height:1.6rem;
  @include sizeColor(.7rem,#fff);
  }
  .search{
    padding-top:4.5rem;
  h1{
    width:100%;
    text-align:center;
  @include sizeColor(0.6rem,#b1b1b1);
    padding-bottom:2.1333333333rem;
  }
  ul{
    width:12.8rem;
    margin:0 auto;
    box-sizing:border-box;
  li{
    float:left;
    width:33.33%;
    border-right:1px solid #dadada;
    text-align:center;
  @include sizeColor(0.6rem,#45c01a);
    margin-bottom:2.24rem;
  }
  li:nth-of-type(3n+3){
    border-right:0;
  }
  }
  }
  .error{
    padding-top:2.5rem;
  h1{
    width:100%;
    text-align:center;
  @include sizeColor(0.6rem,#b1b1b1);
    padding-bottom:0rem;
  }
  ul{
    width:12.8rem;
    box-sizing:border-box;
  li{
    float:left;
    width:33.33%;
    border-right:1px solid #dadada;
    text-align:center;
  @include sizeColor(0.6rem,#45c01a);
    margin-bottom:0rem;
  }
  li:nth-of-type(3n+3){
    border-right:0;
  }
  }
  }
  .changename{
    padding-top: 3.06933rem;
    ul{
      background:#fff;
      padding:0 0.64rem;
      margin-bottom:1rem;
      li{
        border-bottom:1px solid #f1f1f1;
        padding:0.4266666667rem 0;
        @include sizeColor(0.64rem,#333);
        @include justify;
        align-items:center;
        .push-button{

        }
        .voice-music{
          @include sizeColor(0.512rem,#9c9c9c);
        }
      }
      li:last-child{
        border:0;
      }
    }
  }
</style>
