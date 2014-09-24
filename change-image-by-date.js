var changeImageByDate = function(){
  var d = new Date();
  var year = d.getUTCFullYear();
  var month = d.getUTCMonth();
  var day = d.getUTCDate();
  var hour = d.getUTCHours();

  //Define Regions
  var fr = 'region-FR';
  var de = 'region-DE';
  var eu = 'region-EU';
  var us = 'region-US';
  var au = 'region-AU';

  var body = $('body');

  // EU, FR or DE. Sets time to UTC+1
  if(body.hasClass(fr) === true || body.hasClass(de) === true || body.hasClass(eu) === true){
    hour += 1;
    if (hour >= 24){
      hour -= 24;
      day += 1;
    }
  }
  //AU. Sets time to UTC+10
  else if(body.hasClass(au) === true ){
    hour += 10;
    if (hour >= 24){
      hour = hour - 24;
      day += 1;
    }
  }
  //US. Sets time to UTC-5
  else if(body.hasClass(us) === true){
    hour -=5;
    if (hour < 0){
      hour += 24;
      day -= 1;
    }
  }

  var imageArray = [
  '1', //1st
  '2', //2nd
  '3', //3rd
  '4', //4th
  '5', //5th
  '6', //6th
  '7', //7th
  '8', //8th
  '9', //9th
  '10', //10th
  '11', //11th
  '12', //12th
  '13', //13th
  '14', //14th
  '15', //15th
  '16', //16th
  '17', //17th
  '18', //18th
  '19', //19th
  '20', //20th
  '21', //21st
  '22', //22nd
  '23', //23rd
  '24', //24th
  '25' //25th
  ];

  //Replace desired img tag in defined div
  $('.image-to-change img').attr('src', imageArray[day-1]);
}

$(document).ready(changeImageByDate);