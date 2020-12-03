$(document).ready(function(){

    $.fn.hadary=function(){
    $('.container img').on('click',function(){

               let mysrc=$(this);
        $('.galaryimg').attr('src',mysrc.attr('src'));
            
        $('.mygalary').css({visibility :'visible'});

console.log(mysrc.index());
        
    $('.next').on('click',function(){

        $('.galaryimg').attr('src',mysrc.next().attr('src'));
        if(mysrc.index() == 3)
        {
             mysrc=$('.container').children(":first")
             $('.galaryimg').attr('src',mysrc.attr('src'));
    
        }
        mysrc=mysrc.next()

        
        
    })
    $('.prev').on('click',function(){
      
       
            $('.galaryimg').attr('src',mysrc.prev().attr('src'));
      
               if(mysrc.index()==0)
               {
                mysrc=$('.container').children(":last")
                $('.galaryimg').attr('src',mysrc.attr('src'));
               }
               mysrc=mysrc.prev()
    })

    $('.close').on('click',function(){
        $('.mygalary').css({visibility:'hidden'})
    })
});
}
$('img').hadary();
})