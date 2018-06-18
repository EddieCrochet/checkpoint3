'use strict';

$(document).ready(function () {
    

var data = {
    totalRevs:360, 
    totalCurrent:0, 
    totalNPS: 0
  };
  
  setInterval(goGo,1000);
  //sets off the goGo function every 1 second (1000 milliseconds)
  
  function goGo() {
    data.totalRevs += data.totalNPS;
    data.totalCurrent += data.totalNPS;
    $("#record").css({ 'transform': 'rotate(' + data.totalRevs + 'deg)'});
    updateReport();
  }
  
  function updateReport() {
    $("#currentTotal").text(Math.floor(data.totalCurrent));
    $("#nps").text((data.totalNPS/70.4).toFixed(3));
  }
  
  
  $("#record").click(function (){
    data.totalRevs ++;
    data.totalCurrent ++;
    updateReport();
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
  
  //BUG --> restarts and doesnt work past original 4....???
  //the fourth item doesnt reappear when originally bought