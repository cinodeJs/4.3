<template>
  <div class="home">
    <div id="lunbo">
      <img src="http://ccdn.goodq.top/caches/7f72634bb4b7fbd4cacee150ae5ac686/aHR0cDovLzVhNWM1YzVmNjU5NmQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wMS84MzY4MTYwYTk5NWQ4OTg4YWNmNmM5NjIxYWJiYzg5My0xODAweDYwMC5qcGc_p_p100_p_3D.jpg" alt="">
    </div>
    <div id="neirong">
      <div id="neirong-left">
       <div id="stu">
          <div id="neirong-left-smal" > <img src="http://ccdn.goodq.top/caches/7f72634bb4b7fbd4cacee150ae5ac686/aHR0cDovLzVhNWM1YzVmNjU5NmQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wMS8zNTMyOGMwMzgzNDcxMjYzYjFjMzYzNThjYjVjOTc3OC02MDB4MjA0LmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt=""></div>
          <div class="neirong-left-smal"> <img src="http://ccdn.goodq.top/caches/7f72634bb4b7fbd4cacee150ae5ac686/aHR0cDovLzVhNWM1YzVmNjU5NmQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wMS8xZWM4Yzg2ODQ5MjVkMDVhODc4MDg4M2JhYzQxOThmOC02MDB4MjA0LmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt=""></div>
          <div class="neirong-left-smal"> <img src="http://ccdn.goodq.top/caches/7f72634bb4b7fbd4cacee150ae5ac686/aHR0cDovLzVhNWM1YzVmNjU5NmQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wMS8yMmEyZTgzODY3ZDk2MzU3ZDA2YWU1N2VmYjE1NzNiZC00NzR4MTYxLmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt=""></div>
          <div class="neirong-left-smal"> <img src="http://ccdn.goodq.top/caches/7f72634bb4b7fbd4cacee150ae5ac686/aHR0cDovLzVhNWM1YzVmNjU5NmQudDczLnFpZmVpeWUuY29tL3FmeS1jb250ZW50L3VwbG9hZHMvMjAxOC8wMS8xODUxNThhNTMyNzA3OTcwMDM0ZjUwZDFkZjAyMGQxZi02MDB4MjA0LmpwZw_p_p100_p_3D_p_p100_p_3D.jpg" alt=""></div>
       </div>
       <div id="qxlp">
         <div id="biaozhi">
           <span>全新楼盘</span><br>
           <span>- New Apartment -</span>
         </div>
         <div id="qxlp-xun" v-for="i in arr">
           <img :src="i.img" alt="">
           <span>{{i.name}}</span><br>
           <span>地区：{{i.des}}</span><br>
           <span>户型：{{i.huxing}}</span><br>
           <span>价格：{{i.price}}</span><br>
         </div>
         <span id="liulan">浏览更多新楼盘</span>
       </div>
       <div id="qxlp">
         <div id="biaozhi">
           <span>二手楼盘</span><br>
           <span>- New Shops -</span>
         </div>
         <div id="qxlp-xun" v-for="i in arr">
           <img :src="i.img" alt="">
           <span>{{i.name}}</span><br>
           <span>地区：{{i.des}}</span><br>
           <span>户型：{{i.huxing}}</span><br>
           <span>价格：{{i.price}}</span><br>
         </div>
         <span id="liulan">浏览更多二手楼盘</span>
       </div>
       <div id="qxlp">
         <div id="biaozhi">
           <span>全新商铺</span><br>
           <span>- Second Hand -</span>
         </div>
         <div id="qxlp-xun" v-for="i in arr">
           <img :src="i.img" alt="">
           <span>{{i.name}}</span><br>
           <span>地区：{{i.des}}</span><br>
           <span>户型：{{i.huxing}}</span><br>
           <span>价格：{{i.price}}</span><br>
         </div>
         <span id="liulan">浏览更多商铺</span>
       </div>
      </div>
      <div id="neirong-right">
        <div id="neirong-right-top">
          <span></span>
          楼市动向-News
          <button>阅读更多</button>
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


      <div id="neirong-right">
        <div id="neirong-right-top">
          <span></span>
          联系我们 - CONTACT
        </div>
        <div id="neirong-right-lei">
          <div >
            <h5>Tom</h5> <img src="../assets/03_03.jpg" alt="" srcset="">
            <h6>188 0000 0000  /  008-6666 6666</h6>
          </div>
          <div >
            <h5>Smith </h5> <img src="../assets/03_03.jpg" alt="" srcset="">
            <h6>188 0000 0000  /  008-6666 6666</h6>
          </div>
          <div >
            <h5>Andy</h5> <img src="../assets/03_03.jpg" alt="" srcset="">
            <h6>188 0000 0000  /  008-6666 6666</h6>
          </div>

        </div>
      </div>

       <div id="neirong-right">
        <div id="neirong-right-top">
          <span></span>
          在线表单 - FORM
        </div>
        <div id="neirong-right-lei">
          <div>
           <input type="text" placeholder="称呼">
          </div>
          <div >
            <input type="text" placeholder="邮箱">
          </div>
          <div >
            <input type="text" placeholder="电话">
          </div>
          <div >
            <textarea placeholder="内容"></textarea>
          </div>
          <div >
            <input type="chebox" placeholder="验证码">
          </div>
          <div >
            <button>提交</button>
          </div>
        </div>
      </div>



      <div id="neirong-right">
        <div id="neirong-right-top">
          <span></span>
          地址 - ADDRESS
          <button>阅读更多</button>
        </div>
        <div id="neirong-right-lei">
          <div >
            <h4>郵箱：info@realestate.com</h4>
            <h6>地址：上海市静安区南京西路时代大厦</h6>
          </div>
        </div>
        
      </div>
    </div>

    <div id="bottom">
      地产REALSTATE  © 2020 All Rights Reserved.
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
export default {
  data() {
    return {
      arr: []
    };
  },
  created() {
    this.$http.get("http://localhost:8000").then(e => {
      this.arr = e.body;
    });
  }
};
</script>


<style>
#lunbo {
  width: 88%;
  margin: 0 auto;
}
#lunbo img {
  width: 100%;
  display: block;
}
#neirong {
  width: 80%;
  margin: 0 auto;
  padding-top: 5%;
  overflow: hidden;
}
#neirong-left {
  width: 70%;
  float: left;
  margin-right: 2%;
  overflow: hidden;
}
#stu{
  width: 100%;
  overflow: hidden;
}
#neirong-right {
  margin-top: 15px;
  width: 28%;
  background-color: #f7f7f7;
  float: left;
}
#stu div {
  width: 49%;
  height: 125.84px;
  margin-right: 2%;
  float: left;
  margin-top: 2%;
}
#stu div img{
  display: block;
  width: 100%;
}
#stu div:nth-of-type(2n) {
  width: 49%;
  height: 125.84px;
  margin-right: 0;
  float: left;
}
#stu div:nth-of-type(1){
  margin-top: 0;
}
#stu div:nth-of-type(2){
  margin-top: 0;
}
#qxlp{
  margin-top: 8%;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid #ccc;
  background-color: #f7f7f7;
  overflow: hidden;
}
#biaozhi{
  text-align: center;
  margin-top: 1%;
}
#qxlp-xun{
  width: 33%;
  background-color: white;
  float: left;
  margin-right: 0.3333%;
}
#qxlp-xun img{
  width: 100%;
}
#liulan{
  width: 20%;
  height: 40px;
  line-height: 40px;
  border: 1px solid #3a79e8;
  background: white;
  display: flex;
  justify-content: center;
  margin-left: 40%;
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

#neirong-right-lei div input{
  line-height: 35px;
  outline: none;
  border: none;
  background-color: #f7f7f7;
  border-bottom: 1px solid #ccc;
}
#neirong-right-lei div textarea{
  border: none;
  background-color: #f7f7f7; 
  border-bottom: 1px solid #ccc;
}

#neirong-right-lei div button{
  background-color: #393939;
  color: white;
  border: none;
  width: 100px;
  height: 30px;
}

#neirong-right:nth-of-type(1){
  margin-top: 0;
}
#neirong-right-lei div img{
  position: absolute;
  left: 17%;
  top: 1%;

}
#bottom{
  text-align: center;
  line-height: 60px;
  margin-top: 50px;
  width: 100%;
  height: 60px;
  color: #ccc;
  background-color: #393939;
}
</style>

