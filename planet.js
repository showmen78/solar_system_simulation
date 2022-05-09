class Planet{
    constructor(pos,radius,color,mass,is_sun=false,name,screen){
        this.pos = pos
        this.radius = radius
        this.mass = mass
        this.speed = new Vector(0,0)
        this.net_force = new Vector(0,0)
        this.screen = screen
        this.is_sun = is_sun

        this.body = new Shape(color)
        this.body.rect.innerHTML= `<p style="margin:20px">${name}</p>`

        //this.body.rect.style.marginBottom = String(10)+'px'
        this.line = new Shape('red')
       // this.a_line = new Shape('green')

        this.name = name
        this.new_pos = this.speed.normalize()
        this.acc_line =new Vector(0,0)
       
        this.draw()

        this.interval = 10
        this.lines=[]



    }

    draw(){
        let new_pos_x = this.pos.x*SCALE+window.innerWidth/2
        let new_pos_y= this.pos.y*SCALE+window.innerHeight/2
      //  this.line.drawLine(new_pos_x,new_pos_y,this.new_pos.x+new_pos_x,this.new_pos.y+new_pos_y,this.screen)
      //  this.a_line.drawLine(new_pos_x,new_pos_y,this.acc_line.x+new_pos_x,this.acc_line.y+new_pos_y,this.screen)
        this.body.drawCircle(this.radius,new_pos_x,new_pos_y,this.screen)
       
      
    }

    attract(planet){
        let distance = this.pos.distance(planet.pos)
        if(planet.is_sun){
            this.body.rect.innerHTML= `<p style="margin:20px">${this.name}-${distance}</p>`
        }
       
        let accelaration = G*planet.mass/(distance**2)
        //we are calculating speed and accelaration on per day unit.
        // as unit of accelaration of m/s^2 , so we multiply accelaration by (3600*24)**2
        accelaration *= (Time_step**2)
        let direction  = planet.pos.position_vector(this.pos)
        direction = direction.normalize()
        direction.mult(accelaration)

       

        //return the accelaration vector(direction).
        return direction
        
    }

    update(planets){
        this.net_force.set_zero()
        planets.forEach(p => {
            if(p !== this){
            this.net_force.add(this.attract(p))
            }
        });

       
      // this.acc_line= this.net_force.normalize()
      // this.acc_line.mult(100*this.net_force.magnitude())
        this.speed.add(this.net_force)

     //   this.new_pos= this.speed.normalize()
    
       // this.new_pos.mult(this.speed.magnitude()*10)

     
        this.pos.add(this.speed)
     

        this.draw()

        

    }


   

  

}