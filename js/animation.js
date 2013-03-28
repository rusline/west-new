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
	$('.home-menu').delay(12000).animate({'opacity': '1'},300);
	$('.west-box').delay(12000).animate({'opacity': '1'},300);
	$('.login-box').delay(12000).animate({'opacity': '1'},300);
	
	function banner() {
		$('#demo4').delay(3000).animate({'width': '0'},500).animate({'width': '200'},500, banner);
	};
	banner();
	
	
	function tr1() {
		$('.traser').delay(9000).animate({'opacity': '1'},300).animate({'marginTop': '130', 'marginLeft': '110', widht: 397, 'opacity': '0'}, 2000)
		.animate({'marginTop': '0', 'marginLeft': '0', widht: 300, 'opacity': '0'}, tr1);
	};
	tr1();
	
	
	function blicks1() {
		$('.m01').delay(16000).animate({'backgroundPosition': '10px 0'},100).animate({'backgroundPosition': '15px 0'},100).animate({'backgroundPosition': '20px 0'},100).animate({'backgroundPosition': '25px 0'},100).animate({'backgroundPosition': '30px 0'},100).animate({'backgroundPosition': '35px 0'},100).animate({'backgroundPosition': '40px 0'},100).animate({'backgroundPosition': '45px 0'},100).animate({'backgroundPosition': '50px 0'},100).animate({'backgroundPosition': '55px 0'},100).animate({'backgroundPosition': '60px 0'},100).animate({'backgroundPosition': '65px 0'},100).animate({'backgroundPosition': '70px 0'},100).animate({'backgroundPosition': '75px 0'},100).animate({'backgroundPosition': '80px 0'},100).animate({'backgroundPosition': '150px 0'},100);
	};
	blicks1();
	
	function blicks2() {
		$('.m02').delay(17000).animate({'backgroundPosition': '10px 0'},100).animate({'backgroundPosition': '15px 0'},100).animate({'backgroundPosition': '20px 0'},100).animate({'backgroundPosition': '25px 0'},100).animate({'backgroundPosition': '30px 0'},100).animate({'backgroundPosition': '35px 0'},100).animate({'backgroundPosition': '40px 0'},100).animate({'backgroundPosition': '45px 0'},100).animate({'backgroundPosition': '50px 0'},100).animate({'backgroundPosition': '55px 0'},100).animate({'backgroundPosition': '60px 0'},100).animate({'backgroundPosition': '65px 0'},100).animate({'backgroundPosition': '70px 0'},100).animate({'backgroundPosition': '75px 0'},100).animate({'backgroundPosition': '80px 0'},100).animate({'backgroundPosition': '150px 0'},100);
	};
	blicks2();
	
	
	function blicks3() {
		$('.m03').delay(18000).animate({'backgroundPosition': '10px 0'},100).animate({'backgroundPosition': '15px 0'},100).animate({'backgroundPosition': '20px 0'},100).animate({'backgroundPosition': '25px 0'},100).animate({'backgroundPosition': '30px 0'},100).animate({'backgroundPosition': '35px 0'},100).animate({'backgroundPosition': '40px 0'},100).animate({'backgroundPosition': '45px 0'},100).animate({'backgroundPosition': '50px 0'},100).animate({'backgroundPosition': '55px 0'},100).animate({'backgroundPosition': '60px 0'},100).animate({'backgroundPosition': '65px 0'},100).animate({'backgroundPosition': '70px 0'},100).animate({'backgroundPosition': '75px 0'},100).animate({'backgroundPosition': '80px 0'},100).animate({'backgroundPosition': '150px 0'},100);
	};
	blicks3();
		
	function blicks4() {
		$('.m04').delay(19000).animate({'backgroundPosition': '10px 0'},100).animate({'backgroundPosition': '15px 0'},100).animate({'backgroundPosition': '20px 0'},100).animate({'backgroundPosition': '25px 0'},100).animate({'backgroundPosition': '30px 0'},100).animate({'backgroundPosition': '35px 0'},100).animate({'backgroundPosition': '40px 0'},100).animate({'backgroundPosition': '45px 0'},100).animate({'backgroundPosition': '50px 0'},100).animate({'backgroundPosition': '55px 0'},100).animate({'backgroundPosition': '60px 0'},100).animate({'backgroundPosition': '65px 0'},100).animate({'backgroundPosition': '70px 0'},100).animate({'backgroundPosition': '75px 0'},100).animate({'backgroundPosition': '80px 0'},100).animate({'backgroundPosition': '150px 0'},100);
	};
	blicks4();
	
	$('.shane').delay(1500).animate({'opacity': '1'},2000);
	
	$(".content").hover(
		function () {
			$('div.cloud1').animate({left:1200}, 36000);
			$('div.cloud2').animate({left:900}, 30000);
			$('div.cloud3').animate({right:-600}, 25000);
		},
		function () {
			$('div.cloud1').stop();
			$('div.cloud2').stop();
			$('div.cloud3').stop();
		}
	);
	
	
	if ($.browser.msie  && parseInt($.browser.version, 10) === 8) {
  $('.moto1').css({'width' : '168px', 'top': '280px', 'left': '650px', 'opacity': ''});	
	$('.moto2').css({'opacity': '', 'left': '0'});
	$('.bg').css({'opacity': ''});
	$('.home-menu').css({'opacity': ''});
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
	
	if ($.browser.msie && $.browser.version == 7) {
		$(".content").hover(
		function () {
			$('div.cloud1').animate({left:0}, 36000);
			$('div.cloud2').animate({left:0}, 30000);
			$('div.cloud3').animate({right:0}, 25000);
		},
		function () {
			$('div.cloud1').stop();
			$('div.cloud2').stop();
			$('div.cloud3').stop();
		}
	);
	};
	 
	
	
})