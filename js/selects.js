var func = function()
{
		
	
	  $('.sel-list').click(function(){
			 $(this).addClass('act');
			 $(this).next('div').slideToggle('fast');
			 $('.drop-list ul').show();
			 $('.tcalIcon').attr('src', '../images/cal.png');
			 $('#tcal').css({'visibility': 'hidden'});
				$('#tcalShade').css({'visibility': 'hidden'});
			});
		
			
		$('.drop-list').click(function(){
				$(this).slideUp('fast');
				$('.drop-list ul').hide();
				$(this).prev('div').removeClass('act');
		});
		
		$('.tcalIcon').click(function(){
				$('.drop-list').slideUp('fast');
				$('.sel-list').removeClass('act');
		});
		
		$('.main-container, .gallery-box').hover(function(){
				$('.drop-list').slideUp('fast');
				$('#tcal').css({'visibility': 'hidden'});
				$('#tcalShade').css({'visibility': 'hidden'});
				$('.tcalIcon').attr('src', '../images/cal.png');
				$('.sel-list').removeClass('act');
		});
			
				
		$('.drop-list span').click(function(){
			var tx = $(this).html();
				$(".drop-list").slideUp('fast');
				$('.drop-list ul').hide();
				$(this).parents('div.sel-box').find('div.sel-list span').html(tx);
				$(this).prev('.sel-list').removeClass('act');
		});
		
		
		$('.main-container, .rating-box').hover(function(){
				$('.drop-list').slideUp('fast');
				$('.sel-list').removeClass('act');
		});
		
				
		

};

$(func);

