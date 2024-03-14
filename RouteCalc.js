class RouteCalc {

constructor(){
this.currentAdress;
data
adressTxt
    

}

init(){

   




}

async addLoad(){

    loadCalc.søren()

    // loader api'en som så giver svar tilbage
    this.currentAdress=inputAdress.value()
    this.currentDestination=loadDestination.value()
    

    url = ("https://maps.googleapis.com/maps/api/distancematrix/json?origins="+this.currentAdress+"&destinations="+this.currentDestination+",DK&key=AIzaSyCkRyVL7IoA-crlHPm36jBB62q9DDiKpTs")
    

    const respons = await fetch(url);
    data = await respons.json(); 
    
   




//først skal der tjekkes om det er den rigtige adresse, før adressen bliver brugt.


adressTxt = "er dette den rigtige adressse, destination og pallemængde?"
adressTxt2 = data.origin_addresses
destinationText = data.destination_addresses

inputAdress.remove()
indsendKnap.remove()
loadDestination.remove()

confirmKnap = createButton("ja")
confirmKnap.position(20,200)
confirmKnap.mousePressed(routeCalc.ja);

unconfirmKnap = createButton("nej")
unconfirmKnap.position(60,200)
unconfirmKnap.mousePressed(routeCalc.nej);
}


ja(){   // hvis det er den rigtige adresse

console.log("ja")


Loads.push(loadData)
if (Loads[Loads.length-1] === loadData){


Loads[Loads.length-1] = [data.origin_addresses,data.destination_addresses,inputLoad.value()]
}
else {
    console.log("mission failed, well get em next time")
}

 console.log(Loads[0],Loads[Loads.length-1])

console.log("look at this",data.rows[0].elements[0].distance.value)
general.start()
confirmKnap.remove()
unconfirmKnap.remove()

}


nej(){   // hvis det ikke er den rigtige adresse

console.log("nej")


confirmKnap.remove()
unconfirmKnap.remove()
general.start()
}



async Trucker(){


this.currentAdress=inputTadress.value()
this.currentDestination=inputTdest.value()


url = ("https://maps.googleapis.com/maps/api/distancematrix/json?origins="+this.currentAdress+"&destinations="+this.currentDestination+",DK&key=AIzaSyCkRyVL7IoA-crlHPm36jBB62q9DDiKpTs")


const respons = await fetch(url);
data = await respons.json(); 
console.log(data.origin_addresses,data.destination_addresses)
this.truck = data



loadMathA = [];
for (let j = 0; j <Loads.length;j++){
    loadMath = 0;
console.log(Loads)
console.log(Loads[j][0][0])
    url = ("https://maps.googleapis.com/maps/api/distancematrix/json?origins="+Loads[j][0][0]+"&destinations="+Loads[j][1][0]+",DK&key=AIzaSyCkRyVL7IoA-crlHPm36jBB62q9DDiKpTs")
  
     const respons = await fetch(url);
     data2 = await respons.json(); 
  
  loadMath = data2.rows[0].elements[0].distance.value/1000;
  loadTime = data2.rows[0].elements[0].duration.value/60;

  
  url = ("https://maps.googleapis.com/maps/api/distancematrix/json?origins="+this.currentAdress+"&destinations="+Loads[j][0]+",DK&key=AIzaSyCkRyVL7IoA-crlHPm36jBB62q9DDiKpTs")
  
     const Sophie = await fetch(url);
     data3 = await Sophie.json(); 
  
  loadMath = loadMath + data3.rows[0].elements[0].distance.value/1000;
  loadTime = loadTime + data3.rows[0].elements[0].duration.value/60;
 

     url = ("https://maps.googleapis.com/maps/api/distancematrix/json?origins="+Loads[j][1]+"&destinations="+this.currentDestination+",DK&key=AIzaSyCkRyVL7IoA-crlHPm36jBB62q9DDiKpTs")
  
     const Søren = await fetch(url);
     data4 = await Søren.json(); 
  
     loadMath = loadMath + data4.rows[0].elements[0].distance.value/1000;
     loadTime = loadTime + data4.rows[0].elements[0].duration.value/60;
  
  
 


loadMath = [int(loadMath),int(loadTime),(data2.rows[0].elements[0].distance.text)]

  loadMathA.push(loadMath)
  
  
  }
  console.log(loadMathA)

  truckDstart = 1;

}

Remover(){

//    if(remover[0] === "Loads"){
//    Loads.splice(remover[1]-1,1)
//    } else if (remover[0] === "Routes"){
//    Routes.splice(remover[1]-1,1)
//    }











}

async Router(){
    url = ("https://maps.googleapis.com/maps/api/distancematrix/json?origins="+inputTadress.value()+"&destinations="+inputTdest.value()+",DK&key=AIzaSyCkRyVL7IoA-crlHPm36jBB62q9DDiKpTs")


    const Fynbo = await fetch(url);
    data5 = await Fynbo.json(); 
    

Routes.push(new Truck)
// array inputs: start adressen, slut adresse, palle plads, originale rutes længde
Routes[Routes.length-1].address = inputTadress.value()
Routes[Routes.length-1].destination = inputTdest.value()
Routes[Routes.length-1].currentload = inputCLeft.value()
Routes[Routes.length-1].routelength = data5.rows[0].elements[0].distance.value/1000;
Routes[Routes.length-1].routetime = data5.rows[0].elements[0].duration.text
console.log(Routes)
console.log(Truck)
}



ideka(){

console.log("ye this works too, and yeah i don't even know anymore")


truckRoutes = 1





}



}