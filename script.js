const APP = new Vue({
  el:"#root",
  data:{
    mailList : [],
    num : 10
  },
  mounted:function(){
      for(i=0 ; i  < this.num ; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(item => {
          let x = item.data.response;
          this.mailList.includes(x) ? i-- : this.mailList.push(x);
        });
      }
    }
})
