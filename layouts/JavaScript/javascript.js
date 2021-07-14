$( document ).ready(function() {
    console.log( "ready!" );

    $('.Service').click(function(){
        var allClasses = ['projectManagmentContent' , 'BusinessAnalysisContent' , 'ManagementSkillContent' , 'CustmizedContent'];
        $(this).addClass('Active');
        $(this).parent().siblings().children().removeClass('Active');
        //console.log($(this).attr('id')+'Content');
        var currentClass = $('.'+$(this).attr('id')+'Content');

        for(let i=0;i<allClasses.length;i++){
          $('.'+allClasses[i]).hide();
        }
        $(currentClass).show();
        // $(('.'+$(this)+'Content')).hide()


    });
});
