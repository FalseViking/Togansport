//global variables:
let adressTxt;
let adressTxt2;
let button;
let url;
let data; 
let Loadnumber;
let inputAdress;
let indsendKnap;
let confirmKnap;
let unconfirmKnap;
let inputLoad;
let Loadtxt;
let Loads =[];
let loadDestination;
let destinationText;
let loadData;
let truckAdress;
let inputTadress;
let inputTdest;
let truckDest;
let TButton;
let truckDstart = 0;
let LoadText;
let loadMath;
let data2;
let data3;
let data4;
let data5;
let loadMathA;
let loadTime;
let textBut;
let textButA = [];
let t1x = 20
let t2x = 720
let t3x = 920
let t4x = 220
let t5x = 1200
let inputCLeft;
let ruteKnap;
let Routes =[];
let Route;
let TruckFindButton;
let truckRoutes =0;
let removing =[];
let Mp =0;
let A =[];
let g =[];
let b;
//classes
let general;
let loadCalc;
let trucks=[]
let routeCalc;
let LoadSize=[];
let loadCoord=[];
let load;



//Load exapmle: Load = [number, lattitude,longtitude, ]




function setup() {
  createCanvas(1535, 1000);
  
// loading classes:
trucks = new Truck();
routeCalc = new RouteCalc();
general = new General();
loadCalc = new LoadCalc();
load = new Load();

// resetting data
loadnumber = 0;
LL=0;
RR=0;





//initiating funktions
general.start();



  



}





async function draw() {
  background(220);

  //text
  fill(0)
 textSize(15)


 //text adresse og destination
textSize(20)
 text("indsend pakke eller find rute til pakke",t1x,25)
textSize(15)

 text(adressTxt,t1x,50)
 text(adressTxt2,t1x,70)

 text(destinationText,t1x,120)


//text load 
text(Loadtxt,t1x,180)


// text lastbil adresse og destination
textSize(20)
text("find pakker på rute eller indsend rute",t2x, 25)
textSize(15)

text(truckAdress,t2x,50)

text(truckDest,t2x,120)

//text lastbil plads tilbage
text("antal paller læsset",t2x,180)


//text pakke/lastbil stats (data)
if (truckDstart === 1){

  text("originale rute:",t3x,50)
  
  text(data.rows[0].elements[0].distance.text,t3x,70)
text(data.rows[0].elements[0].duration.text,t3x,90)


text("vælg pakke herunder:",t3x,120)

textButA=[];
for (let i = 1; i-1 < Loads.length;i++){
if(int(loadMathA[i-1][1]/60) === 0){
  hours = "";
  minutes = loadMathA[i-1][1]+"min";

}
else {
hours = int(loadMathA[i-1][1]/60)+"time(r)"
minutes = int((loadMathA[i-1][1]/60-int(loadMathA[i-1][1]/60))*60)+"min"
}



textBut = createButton("Palle "+i+":")  
textBut.mousePressed()
  textButA.push(textBut)
  textButA[i-1].position(t3x,120+i*100)

text("fra:               "+Loads[i-1][0][0],t3x,155+i*100)
text("til:               "+Loads[i-1][1][0],t3x,170+i*100)
text("pakkens rute:      "+loadMathA[i-1][2],t3x,185+i*100)
text("rute med pakke:    "+loadMathA[i-1][0]+"km",t3x,200+i*100)
text("tid med pakke:     "+hours+" og "+minutes,t3x,215+i*100)



}

}


if (truckRoutes === 1){
 textButA=[];
 for (let i = 1; i-1 < Routes.length;i++){

textBut = createButton("Lastbil "+i+":")  
textBut.mousePressed(routeCalc.Remover(i))



  textButA.push(textBut)

  textButA[i-1].position(t4x,120+i*100)
  

  text("antal paller læsset:    "+Routes[i-1].currentload,t4x,155+i*100)
  text("køre fra:       "+Routes[i-1].address,t4x,170+i*100)
  text("køre til:         "+Routes[i-1].destination,t4x,185+i*100)
  text("køre i alt:      "+Routes[i-1].routelength+"km",t4x,200+i*100)
  text("tager i alt:    "+Routes[i-1].routetime,t4x,215+i*100)
 


  }







}















//Analyse af læsningsmullighed  
if(Routes.length>RR&&Loads.length>0){
  A=[]
  for(let i=0; i < Routes.length; i++){
    print(i)
if(34-Routes[i].currentload>=Loads[RR][2]){
print("Route virker")
A.push(i)}

}

RR++
}
if(Loads.length>LL&&Loads.length>0){
  A=[]
  for(let k=0; k < Routes.length; k++){
    print(k)
if(34-Routes[k].currentload>=Loads[LL][2]){
print("Load virker")
A.push(k)}

}
console.log(A.length)
LL++
}






if (b != A){
b = A
g = concat(g,A)
console.log(g)

}



// ruter og pakker der passer sammen:







textSize(20)
text("pakke og ruter som passer",t5x,25)
textSize(15)

for (let i = 1; i-1 < g.length;i++){

for (let j = 1; j-1 < g.length; j++){


  text("pakke: ",t5x,100+i*75)
  text(Loads[i-1],t5x,115+i*75)
text("passer med rute:",t5x,130+i*75)
text(Routes[g[j-1]].address+" "+Routes[g[j-1]].destination+" "+Routes[g[j-1]].currentload,t5x,145+i*75)
} //j
} //i














}