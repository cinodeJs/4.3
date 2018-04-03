<template>
  <div>
   <div id="qxlp-left">
      <div id="qxlp-xun" v-for="i in arr">
        <img :src="i.img" alt="">
        <span>{{i.name}}</span><br>
        <span>地区：{{i.des}}</span><br>
        <span>户型：{{i.huxing}}</span><br>
        <span>价格：{{i.price}}</span><br>
    </div>
   </div>
   <div id="qxlp-right">
     <div id="neirong-right-top">
          <span></span>
          楼市动向-News
        </div>
        <div id="neirong-right-lei">
          <div >
            <h4>攔金31億元！中山第四季度土地成...</h4>
            <h6>In this chapter in our series ...</h6>
          </div>
          <div >
            <h4>商業地產差異化服務運營將成為商業...</h4>
            <h6>In this chapter in our series ...</h6>
          </div>
          <div >
            <h4>遠洋地產3.26億競得中山南頭5...</h4>
            <h6>In this chapter in our series ...</h6>
          </div>
          <div >
            <h4>中山VS珠海 未來大灣區你更看好...</h4>
            <h6>In this chapter in our series ...</h6>
          </div>
          <div >
            <h4>降息、限貸鬆綁加上深中通道利好中...</h4>
            <h6>In this chapter in our series ...</h6>
          </div>
          <div >
            <h4>上半年固定資產投資 中山居珠三角...</h4>
            <h6>In this chapter in our series ...</h6>
          </div>
        </div>
   </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: []
    };
  },
  created() {
    this.$http.get("http://localhost:8000/ha").then(e => {
      this.arr = e.body;
    });
  }
};
</script>

<style>
#qxlp-left{
  width: 60%;
  float: left;
  margin-left: 8%;
}
#qxlp-right{
  width: 23%;
  float: left;
  margin-left: 3%;
  background-color: #f7f7f7;
}
#qxlp-xun {
  width: 33%;
  margin-top: 8%;
  background-color: white;
  float: left;
  margin-right: 0.3333%;
}
#qxlp-xun img {
  width: 100%;
}

#neirong-right-top{
  overflow: hidden;
}
#neirong-right-top span{
  width: 10px;
  height: 10px;
  background-color: black;
  display: inline-block;
  margin-top: 5px;
  margin-right: 8%;
  margin-left: 10%;
}
#neirong-right-top button{
  margin-left: 8%;
}
#neirong-right-lei{
  text-align: center;
}
#neirong-right-lei div{
  margin-left: 8%;
  text-align: left;
  margin-top: 5%;
  position: relative;
}

</style>

