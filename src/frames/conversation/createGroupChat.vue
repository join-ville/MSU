<template>
  <section class="child_page">
    <div>
      <head-top crossover="创建群聊"></head-top>
    </div>
    <div  class="create_page">
      <div>
        <div>
          <input type="text" placeholder="请输入群聊名" class="groupinput" v-model="name">
        </div>
        <div>
          <input type="button" value="创建" class="btn" v-on:click="submit">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
    import headTop from 'src/components/header/head'
    export default {
        name: "createGroupChat",
        data() {
          return {
            name: ''
          }
        },
        components: {
          headTop
        },
        methods: {
          submit: function() {
            var self = this
            console.log(self.name)
            this.axios({
              method: 'post',
              url: this.$store.state.baseurl+'createGroupChat',
              data: {
                username: this.$store.state.username,
                Token:this.$store.state.token,
                groupName:this.name
              },
              crossDomain: true
            })
              .then(response => {
                if(response.data.code == 200){
                  self.name = ''
                  this.$router.push({path:'/addressbook'})
                }
              })
              .catch(error => {

              })
          }
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
    width: 100%;
  }
  .create_page{
    margin: 0 auto;
    width: 60%;
    position: relative;
    margin-top: 200px;
    .groupinput{
      display: inline-block;
      width: 75%;
      height: 38px;
      border: 1px solid #cccccc;
      float: left;
      box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      border-bottom-left-radius: 5px;
      border-top-left-radius: 5px;
    }
    .btn{
      display: inline-block;
      width: 25%;
      height: 38px;
      line-height: 40px;
      float: left;
      background-color: #00a0e9;
      font-size: 16px;
      cursor: pointer;
      border-bottom-right-radius: 5px;
      border-top-right-radius: 5px;
      border: none;
      color: #fff;
    }
  }

</style>
