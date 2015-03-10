;(function(m){

    $(".burger-box").on("click",function(){
        $('.fixed-right-simple').toggle()
        $('.fixed-right-full').toggleClass('active');
    })

     $(".exit-nav").on("click",function(){
        $('.fixed-right-simple').toggle()
        $('.fixed-right-full').toggleClass('active');
    })

})(typeof module === "object" ? module.exports : window);