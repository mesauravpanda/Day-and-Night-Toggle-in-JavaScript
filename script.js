
  $(document).ready(function(){$(".toggle").click(function() {
    $(".toggle").toggleClass("active");
    $("body").toggleClass("night");
  })})

  $(document).ready(function(){
    var now=new Date();
    var hour=now.getHours();
    console.log(hour);
    if(hour < 4 && hour > 18){
      $(".toggle").toggleClass("active");
      $("body").toggleClass("night");
    }
  })
  

