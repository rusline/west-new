var MouseCoords = {
    // координаты x и y
    x: 0,
    y: 0,

    // X-координата
    setX: function(e)
    {
        if (e.pageX)
        {
            this.x = e.pageX;
        }
        else if (e.clientX)
        {
            this.x = e.clientX+(document.documentElement.scrollLeft || document.body.scrollLeft) - document.documentElement.clientLeft;
        }
        else
        {
            this.x = 0;
        }
    },

    setY: function(e)
    {
        if (e.pageY)
        {
            this.y = e.pageY;
        }
        else if (e.clientY)
        {
            this.y = e.clientY+(document.documentElement.scrollTop || document.body.scrollTop) - document.documentElement.clientTop;
        }
        else
        {
            this.y = 0;
        }
    }
}

document.onmousemove = function(e)
{
    if (!e) e = window.event;
    MouseCoords.setX(e);
    MouseCoords.setY(e);
};


$(document).ready(function(){

$('#push').click(function (){
    
    $('.zt').show();
    $('#menu').show(); 
    $('.photo').hide();
    pause = true;
    
});
$(document).keyup(function(e) {

  if (e.keyCode == 27) 
  { 
    if (!pause)
    {
       $('.zt').show();
     $('#menu').show();
     $('.photo').hide();
     pause = true; 
    }
     
  }  
});

$('#back_game').click(function(){
   
    
    $('#menu').hide();
    $('.zt').hide();
    $('.photo').show();
    pause = false;
});

$('#btn_next').click(function(){
    //$('.zt').hide();
    $('.photo').hide();
    $('.history').hide();
    $('.help').show();
});
$('#btn_play').click(function(){
    $('.zt').hide();
    $('.help').hide();
    $('.photo').show();
    reset();
    main();
    pause = false;
});
$('#btn_help').click(function(){
    $('.menu').hide();
    $('.help').show();
});
$('#btn_exit, #retur-map').click(function(){
    $('.popup_finish').hide();
    $('.photo').hide();
    $('.menu').hide();
    $('.history').show();
    reset();
});

$('#game_restart, #game_restart2').click(function(){
    $('.zt').hide();
    $('.menu').hide();
    $('.popup_finish').hide();
    $('.photo').show();
    reset();
    main();
    pause = false;
});
    content_load();
    main();
    $('.wrapper').click(function(){
    if (timer > 1 && timer < 200)
    {
        if (mili < 5)
            mili = 5;
    }
    else if (timer > 200 && timer < 300)
    {
        if (mili < 4)
            mili = 4;
    }
    else if (timer > 300 && timer < 400)
    {
        if (mili < 3)
            mili = 3;
    }
    else if (timer > 500 && timer < 600)
    {
        if (mili < 2)
            mili = 2;
    }
    else if (timer > 700 && timer < 800)
    {
        if (mili < 1)
            mili = 1;
    }
    else 
    {
        if (mili < 1)
            mili = 0;
    }
    
    
});

});


var layer = [];

var cposition;
var pause = true;
var i = 1;
var i2 = 1;
var i3 = 1;
var i4 = 1;
var f = 1;
var f2 = 1;
var sky_i = 1;
var t = 1;
var timer;
var c, finder, finder_red, sky;
var objs = [];
var ob = [];
var map = [];
var pole = [];
var angle = 0;
var sun_x = 425;
var mili = 0;
var sun_move = true;
var sun_left = true;
var sun_sleep = 0;
var sun_ran = true;
var max = 0;

var speed = {i:0, i2:0, i3:0, i4:0, sky:0, f:0, f2:0};
var max_speed = {i:2.5, i2:3, i3:3, i4:3, sky:0.2, f:55, f2:55};

var move_sun = false;

function reset()
{
   speed = {i:0, i2:0, i3:0, i4:0, sky:0, f:0};  
   pause = true;
   t = i = i2 = i3 = i4 = f = f2 = sky_i = 1;
   mili = 0;
   set_ob();
}
function content_load()
{
    layer[1] = document.getElementById('layer1');
    layer[2] = document.getElementById('layer2');
    layer[3] = document.getElementById('layer3');
    layer[4] = document.getElementById('layer4');
    c = document.getElementById('content');
    objs[0] = {img:document.getElementById('station1'), x:0,  y:100, w:1700, h:400, p:0};
    objs[1] = {img:document.getElementById('station2'), x:63500, y:100, w:1700, h:400, p:0};
    objs[2] = {img:document.getElementById('station3'), x:41000, y:100, w:1700, h:400, p:0};
    objs[3] = {img:document.getElementById('train'), x:6000, y:-200, w:850, h:200, p:0};
    objs[4] = {img:document.getElementById('tree1_small'), x:5500, y:0, w:600, h:600, p:0};
    objs[5] = {img:document.getElementById('tree2_small'), x:26000, y:0, w:600, h:600, p:0};
    objs[6] = {img:document.getElementById('wind_plant_1'), x:19000, y:200, w:200, h:300, p:1};
    objs[7] = {img:document.getElementById('wind_plant_2'), x:30000, y:200, w:300, h:300, p:1};
    objs[8] = {img:document.getElementById('lightbox'), x:33000, y:70, w:300, h:150, p:0};
    objs[9] = {img:document.getElementById('road_pole_small'), x:37000, y:-200, w:850, h:200, p:0};
    objs[10] = {img:document.getElementById('house1_small'), x:40000, y:150, w:400, h:400, p:1};
    objs[11] = {img:document.getElementById('house2_small'), x:45000, y:150, w:400, h:400, p:1};
    objs[12] = {img:document.getElementById('flat_house2'), x:48000, y:0, w:1440, h:600, p:0};
    objs[13] = {img:document.getElementById('millhouse_small'), x:53000, y:120, w:400, h:400, p:1};
    objs[14] = {img:document.getElementById('water_tower_small'), x:63000, y:240, w:500, h:500, p:1};
    objs[15] = {img:document.getElementById('train'), x:55000, y:-200, w:4848, h:1012, p:0};
    objs[16] = {img:document.getElementById('tree1_small'), x:3000, y:0, w:600, h:600, p:0};
    objs[17] = {img:document.getElementById('tree1_small'), x:39000, y:0, w:600, h:600, p:0};
    objs[18] = {img:document.getElementById('pole'), x:1500,  y:0, w:50, h:500, p:0};
    objs[19] = {img:document.getElementById('city1'), x:1370,  y:50, w:300, h:55, p:0};
    objs[20] = {img:document.getElementById('tree1_small'), x:11000, y:0, w:600, h:600, p:0};
    objs[21] = {img:document.getElementById('tree2_small'), x:12000, y:0, w:600, h:600, p:0};
    objs[22] = {img:document.getElementById('tree1_small'), x:12500, y:0, w:600, h:600, p:0};
    objs[23] = {img:document.getElementById('tree2_small'), x:13400, y:0, w:600, h:600, p:0};
    objs[24] = {img:document.getElementById('tree2_small'), x:45400, y:0, w:600, h:600, p:0};
    objs[25] = {img:document.getElementById('pole'), x:11000,  y:0, w:50, h:500, p:0};
    objs[26] = {img:document.getElementById('city3'), x:10870,  y:70, w:300, h:32, p:0};
    objs[25] = {img:document.getElementById('pole'), x:27000,  y:0, w:50, h:500, p:0};
    objs[26] = {img:document.getElementById('city3'), x:26870,  y:50, w:300, h:32, p:0};
    objs[25] = {img:document.getElementById('pole'), x:34000,  y:0, w:50, h:500, p:0};
    objs[26] = {img:document.getElementById('city5'), x:33870,  y:50, w:300, h:32, p:0};
    objs[25] = {img:document.getElementById('pole'), x:50000,  y:0, w:50, h:500, p:0};
    objs[26] = {img:document.getElementById('city5'), x:49870,  y:50,w:300, h:32, p:0};
    objs[27] = {img:document.getElementById('pole'), x:32950, y:0, w:50, h:500, p:0};    
    objs[28] = {img:document.getElementById('pole'), x:14950, y:0, w:50, h:500, p:0};
    objs[29] = {img:document.getElementById('lightbox'), x:14850, y:70, w:300, h:150, p:0};
    objs[30] = {img:document.getElementById('station3'), x:15200, y:-200, w:850, h:200, p:0};
    objs[31] = {img:document.getElementById('house1_small'), x:17500, y:150, w:400, h:400, p:1};
    objs[32] = {img:document.getElementById('house2_small'), x:17800, y:150, w:400, h:400, p:1};
    objs[33] = {img:document.getElementById('road_pole_small'), x:21000, y:-200, w:850, h:200, p:0};
    
    
    map[0] = {img:document.getElementById('station1'), x:0,  y:120, w:1700, h:400, p:0};
    map[1] = {img:document.getElementById('station2'), x:0, y:120, w:1700, h:400, p:0};
    map[2] = {img:document.getElementById('station3'), x:0, y:120, w:1700, h:400, p:0};
    map[3] = {img:document.getElementById('train'), x:0, y:-200, w:4848, h:1012, p:0};
    map[4] = {img:document.getElementById('tree1_small'), x:0, y:0, w:600, h:600, p:0};
    map[5] = {img:document.getElementById('tree2_small'), x:0, y:0, w:600, h:600, p:0};
    map[6] = {img:document.getElementById('wind_plant_1'), x:0, y:200, w:200, h:300, p:1};
    map[7] = {img:document.getElementById('wind_plant_2'), x:0, y:200, w:300, h:300, p:1};
    map[8] = {img:document.getElementById('road_pole_small'), x:0, y:-200, w:850, h:200, p:0};
    map[9] = {img:document.getElementById('house1_small'), x:0, y:150, w:400, h:400, p:1};
    map[10] = {img:document.getElementById('house2_small'), x:0, y:150, w:400, h:400, p:1};
    map[11] = {img:document.getElementById('flat_house2'), x:0, y:0, w:1440, h:600, p:0};
    map[12] = {img:document.getElementById('millhouse_small'), x:0, y:120, w:400, h:400, p:1};
    map[13] = {img:document.getElementById('water_tower_small'), x:0, y:240, w:500, h:500, p:1};
    map[14] = {img:document.getElementById('tree1_small'), x:0, y:0, w:600, h:600, p:0};
    map[15] = {img:document.getElementById('tree2_small'), x:0, y:0, w:600, h:600, p:0};
    map[16] = {img:document.getElementById('city1'), x:0,  y:50, w:300, h:55, p:0};
    map[17] = {img:document.getElementById('city2'), x:0,  y:50, w:300, h:55, p:0};
    map[18] = {img:document.getElementById('city3'), x:0,  y:50, w:300, h:55, p:0};
    map[19] = {img:document.getElementById('city4'), x:0,  y:50, w:300, h:55, p:0};
    map[20] = {img:document.getElementById('city5'), x:0,  y:50, w:300, h:55, p:0};
    
    pole = {img:document.getElementById('pole'), x:14950, y:0, w:50, h:500, p:0};
    finder = document.getElementById('finder');
    
    sky = document.getElementById('sky');
    sun_img = document.getElementById('sun');
    finder_red = document.getElementById('finder_red');

    set_ob();
}

function main ()
{
    var frmCounter = 0;
    var IDtime = setInterval(function(){
        console.log(t);
        if (!pause)
        {
            t = t +1;
        }            
        if (t == 45)
        {
            var max_mili = 0;
            if(getCookie("max-mili"))
            {
                if(getCookie("max-mili") < mili)
                {                    
                    setCookie('max-mili', mili, '');
                    max_mili = getCookie("max-mili");                    
                }
                else
                {
                    max_mili = getCookie("max-mili"); 
                }
            }
            else
            {
                setCookie('max-mili', mili,'');
                max_mili = mili;
            }
            if(max_mili == 1)
            {
               $('#mili-max').html(max_mili + ' МИЛЯ');  
            }
            else if(max_mili == 5 || max_mili == 0)
            {
               $('#mili-max').html(max_mili + ' МИЛЬ');  
            }
            else
            {
               $('#mili-max').html(max_mili + ' МИЛИ');  
            } 
            
            $('#mili').attr('class', 'mili' + mili);
            $('#star').attr('class', 'star' + mili);
            $('.zt').show();
            $('.popup_finish').show();
            clearInterval(IDgame);
            clearInterval(IDtime);
            pause = true;
            reset();
        }
    }, 1000);
    
    var IDgame = setInterval(function(){
        
       if (!pause)
       {
            acceleration();       
       }
       var ctx=c.getContext("2d");
       ctx.fillStyle="#ААА"; 
       ctx.fillRect(0,0,850,480);
       var sun = {x: sun_x + (Math.cos(angle) * 500), y: 270 + (Math.sin(angle) * 180)};
       ctx.drawImage(sky, sky_i, 0);
       
       if(move_sun)
            movesun();
        
       ctx.drawImage(sun_img, sun.x - 75, sun.y-75, 150, 150);
       
       ctx.drawImage(layer[1], i, 50,   3500, 480);
       ctx.drawImage(layer[2], i2, 250, 3500, 480);
       ctx.drawImage(layer[3], i3, 275, 3500, 480);
       for (var j = 0; j < ob.length; j++)
       {
           if (ob[j].p == 1)               
           ctx.drawImage(ob[j].img, f + ob[j].x, ob[j].y, ob[j].w, ob[j].h);
       }
       ctx.drawImage(layer[4], i4, 350, 3500, 480);
       if (i < -2000)
       {
           ctx.drawImage(layer[1], i + 3500, 50,   3500, 480);
           ctx.drawImage(layer[2], i2 + 3500, 250, 3500, 480);
           ctx.drawImage(layer[3], i3 + 3500, 2725, 3500, 480);
           ctx.drawImage(layer[4], i4 + 3500, 350, 3500, 480);
       }
       for (var j = 0; j < ob.length; j++)
       {
           if (ob[j].p == 0)               
           ctx.drawImage(ob[j].img, f + ob[j].x, ob[j].y, ob[j].w, ob[j].h);
       }
       
       var xx = (($(window).width() - 1213) / 2) + 175;      
       var mx = MouseCoords.x - xx;
       var my = MouseCoords.y - (88 + 25);
       var a = (sun.x - mx) * (sun.x - mx);
       var b = (sun.y - my) * (sun.y - my);
       
       ctx.drawImage(finder, mx - 292, my - 163);       
       
    if (Math.sqrt(a + b) < (25 + 92) && (sun.y < 300))
       {
           timer = timer + 33;
           ctx.drawImage(finder_red, mx-92, my-92);           
       }
       else
       {
           timer = 0;
       }
       
    }, 33);

}

// возвращает cookie если есть или undefined
function getCookie(name) {
	var matches = document.cookie.match(new RegExp(
	  "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
	))
	return matches ? decodeURIComponent(matches[1]) : undefined 
}

// уcтанавливает cookie
function setCookie(name, value, props) {
	props = props || {}
	var exp = props.expires
	if (typeof exp == "number" && exp) {
		var d = new Date()
		d.setTime(d.getTime() + exp*1000)
		exp = props.expires = d
	}
	if(exp && exp.toUTCString) { props.expires = exp.toUTCString() }

	value = encodeURIComponent(value)
	var updatedCookie = name + "=" + value
	for(var propName in props){
		updatedCookie += "; " + propName
		var propValue = props[propName]
		if(propValue !== true){ updatedCookie += "=" + propValue }
	}
	document.cookie = updatedCookie

}

// удаляет cookie
function deleteCookie(name) {
	setCookie(name, null, { expires: -1 })
}


function loader()
{
    $('.loader').hide();
    $('.wrapper').show();
    $('.minzrav').show();
}

function acceleration()
{
    if(speed.i < max_speed.i)
    {
        speed.sky = speed.sky + (max_speed.sky / (6 * 40));
        speed.i = speed.i +(max_speed.i / (6 * 40));
        speed.i2 = speed.i2 + (max_speed.i2 / (6 * 40));
        speed.i3 = speed.i3 + (max_speed.i3 / (6 * 40));
        speed.i4 = speed.i4 + (max_speed.i4 / (6 * 40));
        speed.f = speed.f + (max_speed.f / (6 * 40));
        speed.f2 = speed.f2 + (max_speed.f2 / (6 * 40));
        move_sun = false;      
    }
    else
    {
        move_sun = true;
    }

    sky_i = sky_i - speed.sky;
    i  = i - speed.i;
    i2 = i2 - speed.i2;
    i3 = i3 - speed.i3;
    i4 = i4 - speed.i4;
    f  = f - speed.f;
    f2  = f2 - speed.f2;
}

function movesun()
{
    if (sun_move)
        {
            if(sun_left)
                angle = angle + 0.03;
            else
                angle = angle - 0.03;
            deg = (angle * (180/3.14));

            if (deg <= -360 || deg >= 360)
                {
                    angle = 0;
                    if (Math.random() > 0.66)
                    {
                        sun_left = false;
                    }
                    else
                    {
                        sun_left = true;
                    }
                    angle = 0;
                    
                    sun_move = false;
                    
                    frmCounter = 0;
                }
        }
        else
        {
            if (frmCounter > 100)
            {
                sun_move = true;
                frmCounter = 0;

            }
            else
            {
              frmCounter++;  
            }
            
        }
}

function set_ob()
{
    ob = [];
    var wi = true;
    var last_x = 0;
    var last_item = 0;
    while(wi)
    {
        var item = Math.floor(Math.random() * map.length);
        if(last_item == item || (last_item < 4 && item < 4) || (last_item > 4 && item > 4))
            continue;
        if (item > 15)
            ob.push({img: pole.img, x:last_x + 130, y:pole.y, w:pole.w, h:pole.h, p:pole.p});
        last_item = item;
        ob.push({img: map[item].img, x:last_x, y:map[item].y, w:map[item].w, h:map[item].h, p:map[item].p});
        last_x = last_x + map[item].w + (100 + Math.floor(Math.random() * 300) + 1);
        if (last_x > 65000)
           wi = false;          
    }
     
}
