$(document).ready(function(){	

var i;
for (i in document.images) {
  if (document.images[i].src) {
    var imgSrc = document.images[i].src;
	  if (imgSrc.substr(imgSrc.length-4) === '.png' || imgSrc.substr(imgSrc.length-4) === '.PNG') {
  	   document.images[i].style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled='true',sizingMethod='crop',src='" + imgSrc + "')";
    }
    }
}


	
	$('.shane').delay(1500).animate({'opacity': '1'},2000);
	$('.west').delay(3000).animate({'opacity': '1'},2000);
	$('.line').delay(4000).animate({'opacity': '1'},2000).animate({'opacity': '0'},500).animate({'opacity': '1'},500);
	$('.menu').delay(12000).animate({'opacity': '1'},300);
	$('.west-box').delay(12000).animate({'opacity': '1'},300);
	$('.login-box').delay(12000).animate({'opacity': '1'},300);
	
	
	if ($.browser.msie  && parseInt($.browser.version, 10) === 8) {
  $('.moto1').css({'width' : '168px', 'top': '280px', 'left': '650px', 'opacity': ''});	
	$('.moto2').css({'opacity': '', 'left': '0'});
	$('.bg').css({'opacity': ''});
	$('.menu').css({'opacity': ''});
	$('.west-box').css({'opacity': ''});
	$('.login-box').css({'opacity': ''});
} else {
	$('.bg').animate({'opacity': '1'},1000);
  $('.moto1').delay(7000).animate({'width' : '168px', 'top': '280px', 'left': '650px', 'opacity': '1'},2000);	
	$('.moto2').delay(9000).animate({'opacity': '1', 'left': '0'},2000);
	$('.menu').delay(12000).animate({'opacity': '1'},300);
	$('.west-box').delay(12000).animate({'opacity': '1'},300);
	$('.login-box').delay(12000).animate({'opacity': '1'},300);
}
	
	
})