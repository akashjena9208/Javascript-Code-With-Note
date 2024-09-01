// Immediately Invoked Function Expressions (IIFE)
// function write imdetely exicuted the function, 
// many time global scop to poluted by the 
//so  Gobal scop polution may time that is the solution means many time global scop are exicutted that is braka .

//(Function Defination)( Function Exicution)

//Named IIFE
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();
//UnNamed IFFee
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Akash');

