$(document).ready(function(){
	
	$('input:text').each(function(){
        var txtval = $(this).val();
        $(this).focus(function(){
					$(this).css({'color':'#000'});
            if($(this).val() == txtval){
                $(this).val('')
            }
        });
        $(this).blur(function(){
						$(this).css({'color':'#a5a5a5'});
            if($(this).val() == ""){
                $(this).val(txtval);
            }
        });
    });
		
		
    $("#passwordEnterToSite").prev().text('ПАРОЛЬ');
		/*  тут привязано одно событие на получение фокуса полю в форме  */
		$(".login-in02 input, .pass1 input").focus(function(e){
	    var clicked = $(e.target),
	    clickedId = clicked.attr("id");
		/* если поле пароль получило фокус, удаляем текст в label для пароль  */
    if(clickedId=="passwordEnterToSite"){
     clicked.prev().text('');
     }
		});
	 
		/* 	тут привязано одно событие на потерю фокуса полем в форме */
		$(".login-in02 input, .pass1 input").blur(function(e){
	    var clicked = $(e.target),
	    clickedId = clicked.attr("id");
	    /* если ушли из поля пароль и его значение пусто, добавляем текст в label для пароль  */
		 if(clickedId=="passwordEnterToSite"){
        if(clicked.val()=='') clicked.prev().text('ПАРОЛЬ');
    }
		});
	
	
    $("#passwordEnterToSite2").prev().text('ПОДТВЕРЖДЕНИЕ ПАРОЛЯ');
		/*  тут привязано одно событие на получение фокуса полю в форме  */
		$(".pass2 input").focus(function(e){
	    var clicked = $(e.target),
	    clickedId = clicked.attr("id");
	  /* если поле пароль получило фокус, удаляем текст в label для пароль  */
    if(clickedId=="passwordEnterToSite2"){
     clicked.prev().text('');
     }
		});
	 
		/* 	тут привязано одно событие на потерю фокуса полем в форме */
		$(".pass2 input").blur(function(e){
	    var clicked = $(e.target),
	    clickedId = clicked.attr("id");
	    /* если ушли из поля пароль и его значение пусто, добавляем текст в label для пароль  */
		 if(clickedId=="passwordEnterToSite2"){
        if(clicked.val()=='') clicked.prev().text('ПОДТВЕРЖДЕНИЕ ПАРОЛЯ');
    }
		});
	
		
	
	
	$('div.step-text').eq(6).show();
	
	$('a.kp').each(function(i, item){
  $(item).bind('click', function(e){
   e.preventDefault();
   $('div.step-text').hide();
   $('div.step-text').eq(i).show(); 
  })
 })

	
	$('.rules').click(function(e){
		$('.rules-box').css({'display':'block', 'z-index': '10'});
		jQuery('.scroll-pane').jScrollPane();
		e.preventDefault();
	});
	
	$('.close').click(function(){
		$('.recovery-box, visa-box').animate({'opacity':'0'},500,function(){
			$('.overlay').fadeOut('fast');
		});
	});
	
	$('.close').click(function(){
		$('.visa-box').css({'display':'none', 'z-index': '-1'});
	});
	
	$('.close-rules').click(function(e){
		$('.rules-box').css({'display':'none', 'z-index': '-1'});
		e.preventDefault();
	});
	
	$(".radioclass").click(function(){
		 if($(this).is(":checked")){
			$(".radioselected:not(:checked)").removeClass("radioselected");
			$(this).next("label").addClass("radioselected");
	  }
	});
	
	$(".checkboxclass").click(function(){
        if($(this).is(":checked")){
            $(this).next("label").addClass("labelselected");
        }else{
            $(this).next("label").removeClass("labelselected");
        }
    });
	
	//* ------------ *//
	$(".add-f").click(function(){
		$('.overlay').fadeIn('fast',function(){
			$('.friend-box').animate({'top':'50%'},500);
		});
	});
	
	$(".close-f a").click(function(){
		 $('.friend-box').animate({'top':'-500px'},500,function(){
			$('.overlay').fadeOut('fast');
		});
	});
	
	
	$('.email a').click(function(){
			var tx1 = $(".email input").val();
				$(this).parents('div.friend-box').find('.email-to span').before($(".email-to em:last")).html('<em class="tt">' + tx1 + '&nbsp;' + '<a href="#"><img src="images/delete.png" alt="#" /></a>' + ',' + '&nbsp;' + '</em>' );
				return false;
		});
		
		 $('.email-to em').live('click', function (){
      $(this).animate({ opacity: 'hide' }, "slow");
      return false;
    });
	
		
	
	
	if( !$('#checkage').length && ($.cookie("is_valid") != '1') ){
		//document.location.href='index.html';
	}
	
	if( $('#checkage').length && ($.cookie("is_remember") == '1') ){
		//document.location.href='main.html';
	}
	
	$('#checkage').bind('click', function(e){
		if( $('#checkbox02').attr('checked') != 'checked' ){
			alert("Извините, к просмотру сайта допускаются только посетители, согласные с правилами");
			return false
		}
		var age = 21;
		var year = Number($("#year").val());
		var month = Number($("#month").val());
		var day = Number($("#day").val());
		if(year > 1000){
		} else {
			if( year > 14 ) {
				year = 1900 + year;
			} else {
				year = 2000 + year;
			}
		}
		if( isNaN(day) || isNaN(month) || isNaN(year) ){
			alert('Вы указали некорректный возраст');
		} else {
			var mydate = new Date(year, month, day);
			var currdate = new Date();
			currdate.setFullYear(currdate.getFullYear() - age);
			if ((currdate.getTime() - mydate.getTime()) < 0){
				alert("Извините, к просмотру сайта допускаются только посетители старше " + age + " года");
				e.preventDefault();
			} else {
				if( $('#checkbox01').attr('checked') == 'checked' ){
					$.cookie("is_remember", "1", {expires: 7});
				}
				$.cookie("is_valid", "1", {expires: 7});
				document.location.href='main.html'
			}
		}
			
	});
	
	

})

