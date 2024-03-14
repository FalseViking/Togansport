class General{
constructor(){






}



start(){
// hvis det er pakke:



//input bar adresse
inputAdress = createInput();
    inputAdress.position(t1x, 85);




adressTxt = "pakkens adresse"
adressTxt2 = ""
destinationText = "pakkens destination"

//input bar destination

loadDestination = createInput();
loadDestination.position(t1x,125)

//input bar load
inputLoad = createInput();
inputLoad.position(t1x,185)

Loadtxt = "antal paller(120*80)"
    

//pakke knapper
indsendKnap = createButton('Indsend pakke')
indsendKnap.position(t1x,210)
indsendKnap.mousePressed(routeCalc.addLoad);

TruckFindButton = createButton("Find ruter")
TruckFindButton.position(t1x+110,210)
TruckFindButton.mousePressed(routeCalc.ideka)

// hvis det er lastbil:

truckAdress = "Lastbilens afgangs adresse"
truckDest = "Lastbilens destination"


inputTadress = createInput();
inputTadress.position(t2x,85)

inputTdest = createInput()
inputTdest.position(t2x,125)

inputCLeft = createInput();
inputCLeft.position(t2x,185)


TButton = createButton("Find pakker")
TButton.position(t2x,210)
TButton.mousePressed(routeCalc.Trucker)



ruteKnap = createButton("Indsend rute")
ruteKnap.position(t2x+100,210)
ruteKnap.mousePressed(routeCalc.Router)









}










}