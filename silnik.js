// import kaboom lib
import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

// initialize kaboom context
kaboom();



loadSprite("mikolaj","mikolaj.png")
loadSprite("tlo","tłokartki.png")
loadSound("muzyka", "Cicha noc.mp3")

// add a piece of text at position (120, 80)
add([
    text("hello"),
    pos(120, 80),
]);

add([
    sprite("tlo"),
    pos(0,0)])

const mikolaj = add([
    sprite("mikolaj"),
    pos(50,200)])

onUpdate(()=>{
   if (mikolaj.pos.x<510 && mikolaj.pos.y<350)
   {
    mikolaj.pos.x=mikolaj.pos.x+1
   }
    else destroy (mikolaj)
})

onKeyPress("space", ()=> {
    play("muzyka")
})

