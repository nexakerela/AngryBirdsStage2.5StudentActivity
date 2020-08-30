class Slingshot{
    constructor(bodyA,bodyB) {

 var opt={
     bodyA:bodyA,bodyB:bodyB
 }

        this.Constraint=Matter.Constraint.create(opt)
World.add(world,this.Constraint)

    }

display(){
var pointA=this.Constraint.bodyA.position
var pointB=this.Constraint.bodyB.position

line (pointA.x,pointA.y,pointB.x,pointB.y)

}

}