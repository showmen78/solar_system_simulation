
const AU = 149.6e6 * 1000 //astronomical unit
const G = 6.67428e-11 //gravitational constant.
const SCALE = 300 / AU  // 1AU = 100 pixels
const Time_step = 3600*24

const sun_mass = 1.98892e30

const earth_mass = 5.9742e24 //mass of earth
const earth_speed = 29.783*1000 *Time_step
const mars_mass =  6.39 * 10**23
const mars_speed = 24.077 * 1000*Time_step

const mercury_mass =3.30 * 10**23
const mercury_speed = -47.4 * 1000*Time_step
const venus_mass =  4.8685 * 10**24
const venus_speed = -35.02 * 1000*Time_step

// const jupiter_mass = 1.898e27
// const jupiter_speed = 13.07*1000*Time_step



var planets =[]



var screen = document.getElementById('screen')
var center = new Vector(window.innerWidth/2,window.innerHeight/2)
var earth_pos = new Vector(-AU,0)
let earth,sun,mars,mercury,venus,jupiter


window.onload= e=>{
     sun = new Planet(new Vector(0,0),70,' rgb(247, 255, 176)',sun_mass,true,'sun',screen)
     earth= new Planet(new Vector(-AU,0),30,'rgb(11, 92, 243)',earth_mass,false,'earth',screen)
     mars= new Planet(new Vector(-1.524*AU,0),25,' rgb(243, 115, 11)',mars_mass,false,'mars',screen)
     mercury= new Planet(new Vector(0.387 * AU,0),20,'rgb(146, 241, 226)',mercury_mass,false,'mercury',screen)
     venus= new Planet(new Vector(0.723 *AU,0),35,'rgb(187, 184, 18)',venus_mass,false,'venus',screen)
   //  jupiter = new Planet(new Vector(5.2*AU,0),30,'brown',jupiter_mass,false,screen)

     //setting the speed to the y direction.
    sun.speed.set_zero()
    earth.speed.y = earth_speed
    mars.speed.y = mars_speed
    mercury.speed.y = mercury_speed
    venus.speed.y = venus_speed
  //  jupiter.speed.y = jupiter_speed

    planets=[sun,earth,mercury,mars,venus]



    //  setInterval(() => {
       
    //     planets.forEach(p => {
    //        // if(!p.is_sun){
    //             p.update(planets)
    //        // }
           
    //     });
       

    //  },50);





}

