'use strict';

$(document).ready(function () {
    

var data = {  //setting up some data to get the record to spin
    totalRevs:360, 
    totalCurrent:0, 
    totalNPS: 0 //"numbers per second"
  };
  
  setInterval(spinRecord,1000);
  //sets off the spinRecord function every 1 second (1000 milliseconds)
  
  function spinRecord() { //This is the function that causes the record to spin
    data.totalRevs += data.totalNPS;  
    data.totalCurrent += data.totalNPS;
    $("#record").css({ 'transform': 'rotate(' + data.totalRevs + 'deg)'}); //CSS to spin the record pic
    updateReport();
  }
  
  function updateReport() { //tells you in live time how many 'points' youve got
    $("#currentTotal").text(Math.floor(data.totalCurrent)); //target the feld for points and add the new points
    $("#nps").text((data.totalNPS/70.4).toFixed(3));
  }
  
  
  $("#record").click(function (){ //clicks the record
    data.totalRevs ++; //counter goes up one every click
    data.totalCurrent ++; //counter goes up one every click
    updateReport(); //feed into your current points
  })
  
  $(".button").click(function (){ 
    var addVal = $(this).data( "cost" );
    if ($(this).data( "cost" ) < data.totalCurrent ) {
      data.totalCurrent -=  parseFloat($(this).data( "cost" ).toPrecision(2));
      data.totalNPS += parseFloat($(this).data( "val" ));
      $( this ).children("span").html( parseInt($( this ).children("span").html()*1.15)); 
      $( this ).data( "cost", parseInt($(this).data( "cost" ) * 1.15) ); 
    }
    updateReport();
  })
});
  