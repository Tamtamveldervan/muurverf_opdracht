//console.log("goedemorgen")//

/*const verfMuur = function(){
    
    console.log("de muur is rood geverfd")}; 

verfMuur();
verfMuur();
verfMuur();
*/

/*const verfMuur=function(color){
    console.log("de muur is "+color);
};

verfMuur("blauw")

verfMuur("oranje")

verfMuur()*/

//uitkomst zonder argument: de muur is undefined

const verfMuur=function(location, color){
    
   console.log("de muur is "+color, "en bevindt zich "+location);}

   const color="blauw";
   const location="aan de zuidkant";

   verfMuur(location, color);

   //de volgorde maakt uit in de output, hij geeft het dan ook in die volgorde weer - je krijgt een kromme zit

   //als je de volgorde in de definitie veranderd, maar niet bij de call, dan krijg je ook een kromme zin

   //als je de volgorde allebei veranderd klopt de zin weer. 



