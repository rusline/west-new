if(sun.x < -24  && sun_sleep < 2000)
        {
            sun_move = false;
        }       
        else if(sun.x > 874  && sun_sleep < 2000)
        {
            sun_move = false;
        }       
        else
        {
           sun_move = true;
           if(sun_ran)
           {
               if(Math.floor(Math.random() * 2))
               {
                   sun_left = true;
                   sun.x = 0;
               }
               else
               {
                   sun_left = false;
                   sun.x = 800;
               }
               sun_ran = false;
           }
           
           sun_sleep = 0;
                       
        }
           
        if (sun_move)
        {
            if(sun_left)
            angle = angle + 0.04;
            else
            angle = angle - 0.04;
        }
        else
        {
           sun_ran = true;
           sun_sleep = sun_sleep + 33;
        }/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


