
class Vector{
    constructor(x,y){
        this.x=x
        this.y= y

    }

    static distance(a,b){
        return Math.sqrt((a.x-b.x)**2 + (a.y-b.y)**2)
    }

    add(a){
        this.x += a.x
        this.y += a.y
    }

    sub(a){
        this.x -= a.x
        this.y -= a.y
    }

    mult(a){
        this.x = this.x*a
        this.y = this.y*a
    }

    div(a){
        this.x /= a
        this.y /= a

    }

    set_zero(){
        this.mult(0)
    }


    distance(a){
        //return the distance of this vector from 'a' vector.
        let dist= this.position_vector(a)
        return dist.magnitude()
    }
    
    magnitude(){
        return Math.sqrt(this.x*this.x+ this.y*this.y);
    }

    normalize(){
        return new Vector(this.x/this.magnitude(),this.y/this.magnitude());
    }

    position_vector(a){
        //returns a position vector from point 'a' to the this.
        return new Vector(this.x-a.x,this.y-a.y)

    }

}