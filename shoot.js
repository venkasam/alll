AFRAME.registerComponent("bullets",{
init:function(){
 this.shootbullet()


},
shootbullet:function(){
window.addEventListener("keydown",(e)=>{
if(e.key==="z"){
var bullet=document.createElement("a-entity")
bullet.setAttribute("geometry",{primitive:"sphere",radius:0.1})
bullet.setAttribute("material",{color:"black"})
var cam=document.querySelector("#camera")
var camera=document.querySelector("#camera").object3D
var direct=new THREE.Vector3()
camera.getWorldDirection(direct)
console.log(direct)
var pos=cam.getAttribute("position")
bullet.setAttribute("position",{x:pos.x,y:pos.y,z:pos.z})
bullet.setAttribute("velocity",direct.multiplyScalar(-10))
var scene=document.querySelector("#scene")
scene.appendChild(bullet)



}

})

}


})