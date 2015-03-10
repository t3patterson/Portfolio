;(function(m){

    $(".burger-box").on("click",function(){
        $('.fixed-right-simple').toggle()
        $('.fixed-right-full').toggleClass('active');
    })

     $(".exit-nav").on("click",function(){
        $('.fixed-right-simple').toggle()
        $('.fixed-right-full').toggleClass('active');
    })

    $('a[href*=#]:not([href=#])').on('click',function() {

        //location.pathname takes everything after the hostname
        if ( location.hostname == this.hostname 
            ) {
            
            console.log('current-y-offset: '+$(this).offset().top)

            //capture the hash-tag in the 
            var target = $('[name=' + this.hash.slice(1) + ']');
            
            console.log('target-y-offset: '+target.offset().top)
            //$(el).length > 1 determines that there is an element in the DOM
            if (target.length) {
                $('html,body').animate({
                    //animate from the current position
                    //   and set the target element's top y-offset as the scrollTop position to the 
                    //      $('a[name='contact']). «return positionOfEl». «'top' property»
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

})(typeof module === "object" ? module.exports : window);