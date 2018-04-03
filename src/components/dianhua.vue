<template>
<div id="box">
     <img src="../assets/dainhua_03.jpg" alt="">	
     <span>008-6666 6666</span>
     <button>咨询电话</button>
</div>
</template>

<script>
export default {
  props: {
    tu: String
  }
};
</script>

<style>
#box{
  float: left;
  margin-left: 8%;
}
#box button{
  width: 85px;
  height: 30px;
  background: #3a79e8;
  border: none;
  border-radius: 5px;
}
</style>
