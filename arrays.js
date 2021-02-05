function response(){
    var r = new XMLHttpRequest();
    r.open('GET','https://restcountries.eu/rest/v2/all',true);
    r.send();
    r.onload=function(){
      var data = JSON.parse(this.response);
      var country = data.filter((i)=>i.region=="Asia").map((e)=>{return e.name});
      console.log("Countries in Asia : "+country)
      var twolakh = data.filter((i)=> i.population<200000).map((e)=>{return e.name});
      console.log("Population Less than 2 lakh: "+twolakh);
      var totalpop = data.reduce((acc,cv)=>{
          return acc+cv.population;
      },0);
      console.log("Total populatiion: "+totalpop);
      var currency = data.filter((i)=> i.currencies[0].code==="USD").map((e)=>{return e.name});
      console.log("Contries using USD as currency : "+currency);
      data.forEach((i)=>{
          console.log("Name : "+i.name+" Capital : "+i.capital+" Flag : "+i.flag);
      })
    }
  }