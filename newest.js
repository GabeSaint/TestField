window.onload=function(){
  document.getElementById("buttonFee").style.display='none';
}

$.ajax({
url: 'https://raw.githubusercontent.com/GabeSaint/TestField/master/tuitionsample.json',
dataType: 'json',

success: function(data) {
  $.each(data, function(key, val) {
    var option1 = $('<option id="' + val.YearVal + '">' + val.Year + '</option>');
    if (val.Year == ""){
      // Do nothing
    } else {
    $('#Year').append(option1);
  }

    var option2 = $('<option id="' + val.StudentStatVal + '">' + val.StudentStat + '</option>');
    if (val.StudentStat == ""){
      // Do nothing
    } else {
    $('#StudentStat').append(option2);
  }
    var option3 = $('<option id="' + val.LocationVal + '">' + val.Location + '</option>');
    if (val.Location == ""){
      // Do nothing
    } else {
      $('#Location').append(option3);
  }

    var option4 = $('<option id="' + val.ResidencyVal + '">' + val.Residency + '</option>');
    if (val.Residency == ""){
      // Do nothing
    } else {
    $('#ResidencyStat').append(option4);
  }
    /*var option5 = $('<option id="' + val.AcademicVal + '">' + val.Academic + '</option>');
    $('#Academic').append(option5);*/
  })
},
error: function() {
  //if there is an error append a 'none avaliable' option
  $('#Year').append('<option id="-1">NONE AVAILABLE</option>');
  $('#StudentStat').append('<option id="-1">NONE AVAILABLE</option>');
  $('#Location').append('<option id="-1">NONE AVAILABLE</option>');
  $('#ResidencyStat').append('<option id="-1">NONE AVAILABLE</option>');
  $('#Academic').append('<option id="-1">NONE AVAILABLE</option>');
}
})

function showButton(verifyVal)
{
  document.getElementById("buttonFee").style.display='block';
}


function showInfo()
{
  //clear previous results
  $('#result1').html('');
  $('#result2').html('');
  $('#errorMessage').html('');
  document.getElementById("buttonFee").style.display='none';



  //get the id of the select
  var Yearid = $('#Year').find('option:selected').attr('id');
  var StudentStatid = $('#StudentStat').find('option:selected').attr('id');
  var Locationid = $('#Location').find('option:selected').attr('id');
  var ResidencyStatid = $('#ResidencyStat').find('option:selected').attr('id');
  /*var Academicid = $('#Academic').find('option:selected').attr('id');*/
  var Honorsid= $('input[type=checkbox]').prop('checked');

  // Create the ID

  if (Locationid == "ONLINE" ){
  var Totalid = Yearid + '-' + StudentStatid + '-' + Locationid + '-ONLINE';
  document.getElementById("ResidencyStat").style.display='none';
  document.getElementById("ResidencyStat2").style.display='none';
  document.getElementById("Honors").style.display='none';
  document.getElementById("Honors2").style.display='none';
  document.getElementById('buffer').innerHTML = "<br> <br> <br>";
  } else{ var Totalid = Yearid + '-' + StudentStatid + '-' + Locationid + '-' + ResidencyStatid;
  document.getElementById("ResidencyStat").style.display='inline';
  document.getElementById("ResidencyStat2").style.display='inline';
  document.getElementById('buffer').style.display='none'; }

  if ( Locationid == "ONLINE" || Locationid == "SWC" || Locationid == "YUMA" ){
  document.getElementById("Honors").style.display='none';
  document.getElementById("Honors2").style.display='none';
  Totalid = Yearid + '-' + StudentStatid + '-' + Locationid + '-' + ResidencyStatid;

} else {
  document.getElementById("Honors").style.display='inline';
  document.getElementById("Honors2").style.display='inline';
  Totalid = Yearid + '-' + StudentStatid + '-' + Locationid + '-' + ResidencyStatid;
}

if (Locationid == "SWC"){

  document.getElementById('WUE').style.display='none';
  Totalid = Yearid + '-' + StudentStatid + '-' + Locationid + '-' + ResidencyStatid;
}else {
  document.getElementById('WUE').style.display='inline';
  Totalid = Yearid + '-' + StudentStatid + '-' + Locationid + '-' + ResidencyStatid;
}

//here I was
if (Yearid == "S19" || Yearid == "W19"){
document.getElementById("Honors").style.display='none';
document.getElementById("Honors2").style.display='none';
document.getElementById("ResidencyStat").style.display='none';
document.getElementById("ResidencyStat2").style.display='none';
document.getElementById('buffer').innerHTML = "<br> <br> <br>";
Totalid = Yearid + '-' + StudentStatid + '-' + Locationid;
} else {
document.getElementById("Honors").style.display='inline';
document.getElementById("Honors2").style.display='inline';
//document.getElementById("ResidencyStat").style.display='inline';
//document.getElementById("ResidencyStat2").style.display='inline';
document.getElementById('buffer').style.display='none';

  if (Locationid == "ONLINE" ){
    document.getElementById("Honors").style.display='none';
    document.getElementById("Honors2").style.display='none';
  var Totalid = Yearid + '-' + StudentStatid + '-' + Locationid + '-ONLINE';
}
  else{
    Totalid = Yearid + '-' + StudentStatid + '-' + Locationid + '-' + ResidencyStatid;
  }

  if (Locationid == "CB") {
    document.getElementById("Honors").style.display='none';
    document.getElementById("Honors2").style.display='none';
    document.getElementById("ResidencyStat").style.display='none';
    document.getElementById("ResidencyStat2").style.display='none';
    document.getElementById("StudentStat").style.display='none';
    document.getElementById("StudentStat2").style.display='none';
    Totalid = Yearid + '-' + Locationid;
  }else {
    document.getElementById("Honors").style.display='inline';
    document.getElementById("Honors2").style.display='inline';
    document.getElementById("ResidencyStat").style.display='inline';
    document.getElementById("ResidencyStat2").style.display='inline';
    document.getElementById("StudentStat").style.display='inline';
    document.getElementById("StudentStat2").style.display='inline';
    Totalid = Yearid + '-' + StudentStatid + '-' + Locationid + '-' + ResidencyStatid;
    if (Locationid == "ONLINE" ){
    var Totalid = Yearid + '-' + StudentStatid + '-' + Locationid + '-ONLINE';
    document.getElementById("Honors").style.display='none';
    document.getElementById("Honors2").style.display='none';
    document.getElementById("ResidencyStat").style.display='none';
    document.getElementById("ResidencyStat2").style.display='none';
    document.getElementById('buffer').innerHTML = "<br> <br> <br>";
    } else{ var Totalid = Yearid + '-' + StudentStatid + '-' + Locationid + '-' + ResidencyStatid;
    document.getElementById("ResidencyStat").style.display='inline';
    document.getElementById("ResidencyStat2").style.display='inline';
    document.getElementById('buffer').style.display='none'; }
  }
}

// Call Function - Display Table
tuitionTable(Totalid, Honorsid, Yearid, StudentStatid, Locationid, ResidencyStatid);

}

function tuitionTable(Totalid, Honorsid, Yearid, StudentStatid, Locationid, ResidencyStatid)
{
  // Data placement
  $('#result1').append("<div></div>");
  $('#result2').append("<div></div>");
  $('#errorMessage').append("<div></div>");

  $.getJSON('https://raw.githubusercontent.com/GabeSaint/TestField/master/tuitionsample.json', function(data)
  {
    $.each(data, function(key, val)
    {


      if (Totalid == "1920-CB"){

        var tableResult = "<p>We triggered the table</p>"
        $('#result1').append(tableResult);

      }

      if (Yearid == "S19") {
        if (Totalid == val["TuitionIdentifier"]) {
           if (val["Grand total"] == "EMPTY") {
            var tableResult = "<p>An invalid option has been chosen, please make a different selection.</p>"
            $('#result1').append(tableResult);
            $("button#buttonFee").css({"background-color":"#ffd200" , "color":"black"});
            scrollWin();
            whatWUE(ResidencyStatid);
      var ECH1 = val["ECH1"];
      var ECH2 = val["ECH2"];
      var ECH3 = val["ECH3"];
      var ECH4 = val["ECH4"];
      var ECH5 = val["ECH5"];
      var ECH6 = val["ECH6"];
      var ECH7 = val["ECH7"];
      var ECH8 = val["ECH8"];
      var ECH9 = val["ECH9"];
      var ECH10 = val["ECH10"];
      var ECH11 = val["ECH11"];
      var ECH12 = val["ECH12"];
      var ECH13 = val["ECH13"];
      var ECH14 = val["ECH14"];
      var ECH15 = val["ECH15"];
      var ECH16 = val["ECH16"];
      var ECH17 = val["ECH17"];
      var ECH18 = val["ECH18"];
      var ECH19 = val["ECH19"];
      var ECH20 = val["ECH20"];
      var TuitionFval = val["Tuition-F"];
      var FeeFVal = val["Fee Total-F"];
      var TuitionSval = val["Tuition-S"];
      var FeeSVal =val["Fee Total-S"];
            OnlineCreditHours(Locationid, Yearid, TuitionFval,FeeFVal, TuitionSval,FeeSVal, ECH1,ECH2,ECH3,ECH4,ECH5,ECH6,ECH7,ECH8,ECH9,ECH10,ECH11,ECH12,ECH13,ECH14,ECH15,ECH16,ECH17,ECH18,ECH19,ECH20);
          } else {



         var tableResult = '<h2>Tuition &amp; Fees</h2><table><tr><th class="FTH">Fees</th><th class="FTH">Tuition</th> <th class="FTH">Total</th></tr><tr><td>' +
           val["Fee Total-F"] +
         '</td><td>' +
           val["Tuition-F"] +
         '</td><td>' +
      val["Grand total"] +
    '</td></tr></table>';

         var tableResultFees = '<table><tr><th class="FTH">FA<br>Trust</th><th class="FTH">Health<br>&amp; Rec</th><th class="FTH">Info<br>Tech</th><th class="FTH">Green</th><th class="FTH">Fee<br>Total</th></tr><tr><td>' +
           val["FA Trust-F"] +
         '</td><td>' +
      val["Health/Rec-F"] +
    '</td><td>' +
      val["Info Tech-F"] +
    '</td><td>' +
      val["Green-F"] +
    '</td><td>'+
      val["Fee Total-F"]+
    '</td></tr></table>'+
    "<p><a title='Program Fees' href='https://stage.wp.nau.edu/pubops-testing-sandbox/program-fees/'>View the Program Fees</a></p>";

         $('#result1').append(tableResult);
         $('#result2').append(tableResultFees);
         $(".FTH").css({"background-color":"#FFD200", "font-size":"16px", "border-spacing":"0px" , "border":"0px solid #cccccc", "text-align":"center", "font-weight":"bold" });
         $("table").css({"border-spacing":"0px" , "border":"0px solid #cccccc", "text-align":"center" });
         $("td").css({"border-spacing":"0px" , "border":"1px solid #cccccc", "text-align":"center"});
         $("button#buttonFee").css({"background-color":"#ffd200" , "color":"black"});
         showButton(Totalid);
         scrollWin();
         whatWUE(ResidencyStatid);
                  var ECH1 = val["ECH1"];
      var ECH2 = val["ECH2"];
      var ECH3 = val["ECH3"];
      var ECH4 = val["ECH4"];
      var ECH5 = val["ECH5"];
      var ECH6 = val["ECH6"];
      var ECH7 = val["ECH7"];
      var ECH8 = val["ECH8"];
      var ECH9 = val["ECH9"];
      var ECH10 = val["ECH10"];
      var ECH11 = val["ECH11"];
      var ECH12 = val["ECH12"];
      var ECH13 = val["ECH13"];
      var ECH14 = val["ECH14"];
      var ECH15 = val["ECH15"];
      var ECH16 = val["ECH16"];
      var ECH17 = val["ECH17"];
      var ECH18 = val["ECH18"];
      var ECH19 = val["ECH19"];
      var ECH20 = val["ECH20"];
      var TuitionFval = val["Tuition-F"];
      var FeeFVal = val["Fee Total-F"];
      var TuitionSval = val["Tuition-S"];
      var FeeSVal =val["Fee Total-S"];
         OnlineCreditHours(Locationid, Yearid, TuitionFval,FeeFVal, TuitionSval,FeeSVal, ECH1,ECH2,ECH3,ECH4,ECH5,ECH6,ECH7,ECH8,ECH9,ECH10,ECH11,ECH12,ECH13,ECH14,ECH15,ECH16,ECH17,ECH18,ECH19,ECH20);

       }

       }


      }

      else if ( Yearid == "W19") {
        if (Totalid == val["TuitionIdentifier"]) {

          if (val["Grand total"] == "EMPTY") {
           var tableResult = "<p>An invalid option has been chosen, please make a different selection.</p>"
           $('#result1').append(tableResult);
           $("button#buttonFee").css({"background-color":"#ffd200" , "color":"black"});
           scrollWin();
           whatWUE(ResidencyStatid);
                  var ECH1 = val["ECH1"];
      var ECH2 = val["ECH2"];
      var ECH3 = val["ECH3"];
      var ECH4 = val["ECH4"];
      var ECH5 = val["ECH5"];
      var ECH6 = val["ECH6"];
      var ECH7 = val["ECH7"];
      var ECH8 = val["ECH8"];
      var ECH9 = val["ECH9"];
      var ECH10 = val["ECH10"];
      var ECH11 = val["ECH11"];
      var ECH12 = val["ECH12"];
      var ECH13 = val["ECH13"];
      var ECH14 = val["ECH14"];
      var ECH15 = val["ECH15"];
      var ECH16 = val["ECH16"];
      var ECH17 = val["ECH17"];
      var ECH18 = val["ECH18"];
      var ECH19 = val["ECH19"];
      var ECH20 = val["ECH20"];
      var TuitionFval = val["Tuition-F"];
      var FeeFVal = val["Fee Total-F"];
      var TuitionSval = val["Tuition-S"];
      var FeeSVal =val["Fee Total-S"];
           OnlineCreditHours(Locationid, Yearid, TuitionFval,FeeFVal, TuitionSval,FeeSVal, ECH1,ECH2,ECH3,ECH4,ECH5,ECH6,ECH7,ECH8,ECH9,ECH10,ECH11,ECH12,ECH13,ECH14,ECH15,ECH16,ECH17,ECH18,ECH19,ECH20);

         } else {



         var tableResult = '<h2>Tuition &amp; Fees</h2><table><tr><th class="FTH">Fees</th><th class="FTH">Tuition</th> <th class="FTH">Total</th></tr><tr><td>' +
           val["Fee Total-F"] +
         '</td><td>' +
           val["Tuition-F"] +
         '</td><td>' +
      val["Grand total"] +
    '</td></tr></table>';

         var tableResultFees = '<table><tr><th class="FTH">FA<br>Trust</th><th class="FTH">Info<br>Tech</th><th class="FTH">Fee<br>Total</th></tr><tr><td>' +
           val["FA Trust-F"] +
         '</td><td>' +
      val["Info Tech-F"] +
    '</td><td>'+
      val["Fee Total-F"]+
    '</td></tr></table>'+
    "<p><a title='Program Fees' href='https://stage.wp.nau.edu/pubops-testing-sandbox/program-fees/'>View the Program Fees</a></p>";

         $('#result1').append(tableResult);
         $('#result2').append(tableResultFees);
         $(".FTH").css({"background-color":"#FFD200", "font-size":"16px", "border-spacing":"0px" , "border":"0px solid #cccccc", "text-align":"center", "font-weight":"bold" });
         $("table").css({"border-spacing":"0px" , "border":"0px solid #cccccc", "text-align":"center" });
         $("td").css({"border-spacing":"0px" , "border":"1px solid #cccccc", "text-align":"center"});
         $("button#buttonFee").css({"background-color":"#ffd200" , "color":"black"});
         showButton(Totalid);
         scrollWin();
         whatWUE(ResidencyStatid);
                 var ECH1 = val["ECH1"];
      var ECH2 = val["ECH2"];
      var ECH3 = val["ECH3"];
      var ECH4 = val["ECH4"];
      var ECH5 = val["ECH5"];
      var ECH6 = val["ECH6"];
      var ECH7 = val["ECH7"];
      var ECH8 = val["ECH8"];
      var ECH9 = val["ECH9"];
      var ECH10 = val["ECH10"];
      var ECH11 = val["ECH11"];
      var ECH12 = val["ECH12"];
      var ECH13 = val["ECH13"];
      var ECH14 = val["ECH14"];
      var ECH15 = val["ECH15"];
      var ECH16 = val["ECH16"];
      var ECH17 = val["ECH17"];
      var ECH18 = val["ECH18"];
      var ECH19 = val["ECH19"];
      var ECH20 = val["ECH20"];
      var TuitionFval = val["Tuition-F"];
      var FeeFVal = val["Fee Total-F"];
      var TuitionSval = val["Tuition-S"];
      var FeeSVal =val["Fee Total-S"];
         OnlineCreditHours(Locationid, Yearid, TuitionFval,FeeFVal, TuitionSval,FeeSVal, ECH1,ECH2,ECH3,ECH4,ECH5,ECH6,ECH7,ECH8,ECH9,ECH10,ECH11,ECH12,ECH13,ECH14,ECH15,ECH16,ECH17,ECH18,ECH19,ECH20);


       }
     }

      }



      else {


      // Check the Degree Code
      if(Totalid == val["TuitionIdentifier"] && Honorsid === false)
      {


        var tableResult = '<h2>Tuition &amp; Fees <span id="headingTextHours">(for 12+ hours)</span></h2>'+
        '<table><tbody><tr><th colspan="2" class="FTH">Fall 2019&nbsp;</td><th colspan="2" class="FTH">Spring 2020</td><th class="FTH">Annual Total</td></tr><tr><th class="FTH">Fees</td><th class="FTH">Tuition</td><th class="FTH">Fees</td><th class="FTH">Tuition</td><th class="FTH">&nbsp;</td></tr><tr><td>' +
        val["Fee Total-F"] +
        '</td><td>' +
        val["Tuition-F"] +
        '</td><td>' +
        val["Fee Total-S"] +
        '</td><td>' +
        val["Tuition-S"] +
        '</td><td>' +
        val["Grand total"] +
        '</td></tr></tbody></table>';

        // Leave the tableResultFees alone they are good.

        var tableResultFees = '<table><tr><th class="FTH">FA<br>Trust</th><th class="FTH">Health<br>&amp; Rec</th><th class="FTH">Activity</th><th class="FTH">Info<br>Tech</th><th class="FTH">Green</th><th class="FTH">ASNAU</th><th class="FTH">Athletics</th><th class="FTH">Fee<br>Total</th></tr><tr><td>' +
        val["FA Trust-F"] +
        '</td><td>' +
        val["Health/Rec-F"] +
        '</td><td>' +
        val["Activity-F"] +
        '</td><td>' +
        val["Info Tech-F"] +
        '</td><td>' +
        val["Green-F"] +
        '</td><td>' +
        val["ASNAU-F"] +
        '</td><td>' +
        val["Athletics-F"] +
        '</td><td>' +
        val["Fee Total-F"] +
        '</td></tr></table>'+
        '<br>' +
        "<p><a title='Program Fees' href='https://stage.wp.nau.edu/pubops-testing-sandbox/program-fees/'>View the Program Fees</a></p>";


        $('#result1').append(tableResult);
        $('#result2').append(tableResultFees);
        $(".FTH").css({"background-color":"#FFD200", "font-size":"16px", "border-spacing":"0px" , "border":"0px solid #cccccc", "text-align":"center", "font-weight":"bold" });
        $("table").css({"border-spacing":"0px" , "border":"0px solid #cccccc", "text-align":"center" });
        $("td").css({"border-spacing":"0px" , "border":"1px solid #cccccc", "text-align":"center"});
        $("button#buttonFee").css({"background-color":"#ffd200" , "color":"black"});
        showButton(Totalid);
        scrollWin();
        whatWUE(ResidencyStatid);
              var ECH1 = val["ECH1"];
      var ECH2 = val["ECH2"];
      var ECH3 = val["ECH3"];
      var ECH4 = val["ECH4"];
      var ECH5 = val["ECH5"];
      var ECH6 = val["ECH6"];
      var ECH7 = val["ECH7"];
      var ECH8 = val["ECH8"];
      var ECH9 = val["ECH9"];
      var ECH10 = val["ECH10"];
      var ECH11 = val["ECH11"];
      var ECH12 = val["ECH12"];
      var ECH13 = val["ECH13"];
      var ECH14 = val["ECH14"];
      var ECH15 = val["ECH15"];
      var ECH16 = val["ECH16"];
      var ECH17 = val["ECH17"];
      var ECH18 = val["ECH18"];
      var ECH19 = val["ECH19"];
      var ECH20 = val["ECH20"];
      var TuitionFval = val["Tuition-F"];
      var FeeFVal = val["Fee Total-F"];
      var TuitionSval = val["Tuition-S"];
      var FeeSVal =val["Fee Total-S"];
        OnlineCreditHours(Locationid, Yearid, TuitionFval,FeeFVal, TuitionSval,FeeSVal, ECH1,ECH2,ECH3,ECH4,ECH5,ECH6,ECH7,ECH8,ECH9,ECH10,ECH11,ECH12,ECH13,ECH14,ECH15,ECH16,ECH17,ECH18,ECH19,ECH20);

         if (Locationid == "ONLINE") {
          document.getElementById("headingTextHours").style.display='none';
        }


      }

      else if (Totalid == val["TuitionIdentifier"] && Honorsid == true) {
        if (Honorsid === true && Yearid == "1920"){
        var stringINT = val["Grand total"];
        var HTY = Number(stringINT.replace(/[^0-9\.]+/g,""));
        var totalHonorsYear = parseInt(HTY) + 700;
        totalHonorsYear = (totalHonorsYear).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
        }
        var tableResult = '<h2>Tuition &amp; Fees <span id="headingTextHours">(for 12+ hours)</span></h2>'+
        '<table><tbody><tr><th colspan="3" class="FTH">Fall 2019&nbsp;</td><th colspan="3" class="FTH">Spring 2020</td><th class="FTH">Annual Total</td></tr><tr><th class="FTH">Fee</td><th class="FTH">Honors Fees</td><th class="FTH">Tuition</td><th class="FTH">Fees</td><th class="FTH">Honors Fees</td><th class="FTH">Tuition</td><th class="FTH">&nbsp;</td></tr><tr><td>' +
        val["Fee Total-F"] +
        '</td><td>$350</td><td>' +
        val["Tuition-F"] +
        '</td><td>' +
        val["Fee Total-S"] +
        '</td><td>$350</td><td>' +
        val["Tuition-S"] +
        '</td><td>' +
        '$'+ totalHonorsYear +
        '</td></tr></tbody></table>';


        // Leave the tableResultFees alone they are good.

        var tableResultFees = '<table><tr><th class="FTH">FA<br>Trust</th><th class="FTH">Health<br>&amp; Rec</th><th class="FTH">Activity</th><th class="FTH">Info<br>Tech</th><th class="FTH">Green</th><th class="FTH">ASNAU</th><th class="FTH">Athletics</th><th class="FTH">Fee<br>Total</th></tr><tr><td>' +
        val["FA Trust-F"] +
        '</td><td>' +
        val["Health/Rec-F"] +
        '</td><td>' +
        val["Activity-F"] +
        '</td><td>' +
        val["Info Tech-F"] +
        '</td><td>' +
        val["Green-F"] +
        '</td><td>' +
        val["ASNAU-F"] +
        '</td><td>' +
        val["Athletics-F"] +
        '</td><td>' +
        val["Fee Total-F"] +
        '</td></tr></table>' +
        '<br>' +
        "<p><a title='Program Fees' href='https://stage.wp.nau.edu/pubops-testing-sandbox/program-fees/'>View the Program Fees</a></p>";

        $('#result1').append(tableResult);
        $('#result2').append(tableResultFees);
        $(".FTH").css({"background-color":"#FFD200", "font-size":"16px", "border-spacing":"0px" , "border":"0px solid #cccccc", "text-align":"center", "font-weight":"bold" });
        $("table").css({"border-spacing":"0px" , "border":"0px solid #cccccc", "text-align":"center" });
        $("td").css({"border-spacing":"0px" , "border":"1px solid #cccccc", "text-align":"center"});
        $("button#buttonFee").css({"background-color":"#ffd200" , "color":"black"});
        showButton(Totalid);
        scrollWin();
        whatWUE(ResidencyStatid);

      }
    }
    });

  });
}

function toggleFees() {
var x = document.getElementById("tuitionFeesDisplay");
document.getElementById("result2").style.display='block';
if (x.style.display === "block") {
  x.style.display = "none";
} else {
  x.style.display = "block";
}

}

function scrollWin() {
window.scrollTo(0, 300);
}

function whatWUE(checkWUE){
  if (checkWUE == "WUE") {
    var WUENote = '<p><a href="https://nau.edu/admission/western-undergraduate-exchange/" target="_blank">What is the Western Undergraduate Exchange (WUE)?</a></p>';
    $('#errorMessage').append(WUENote);
  }
}

function OnlineCreditHours(Locationid, Yearid, TuitionFval,FeeFVal, TuitionSval,FeeSVal, ECH1,ECH2,ECH3,ECH4,ECH5,ECH6,ECH7,ECH8,ECH9,ECH10,ECH11,ECH12,ECH13,ECH14,ECH15,ECH16,ECH17,ECH18,ECH19,ECH20){
  if (Locationid == "ONLINE" && Yearid == "1920") {
    var CreditHours = '<br>'+
'<table><tr><th class="FTH"> </th><th colspan="2" class="FTH">Fall</th> <th colspan="2" class="FTH">Spring</th></tr><tr><th class="FTH">Hour(s)</th><th class="FTH">Tuition</th><th class="FTH">Fees</th><th class="FTH">Tuition</th><th class="FTH">Fees</th></tr><tr><td>1</td><td>' +
ECH1 +
'</td><td>'+
ECH6 +
'</td><td>' +
ECH11 +
'</td><td>' +
ECH16 +
'</td></tr><tr><td>3</td><td>' +
ECH2 +
'</td><td>' +
ECH7 +
'</td><td>' +
ECH12 +
'</td><td>' +
ECH17 +
'</td></tr><tr><td>6</td><td>'+
ECH3 +
'</td><td>' +
ECH8 +
'</td><td>' +
ECH13 +
'</td><td>' +
ECH18 +
'</td></tr><tr><td>9</td><td>' +
ECH4 +
'</td><td>' +
ECH9 +
'</td><td>' +
ECH14 +
'</td><td>' +
ECH19 +
'</td></tr><tr bgcolor="yellow"><td>12</td><td>'+
TuitionFval  +
'</td><td>' +
FeeFVal +
'</td><td>' +
TuitionSval +
'</td><td>' +
FeeSVal +
'</td></tr><tr><td>15</td><td>' +
ECH5 +
'</td><td>' +
ECH10 +
'</td><td>' +
ECH15 +
'</td><td>' +
ECH20 +
'</td></tr></table>' +
'<br>';
    $('#result1').append(CreditHours);
    $(".FTH").css({"background-color":"#FFD200", "font-size":"16px", "border-spacing":"0px" , "border":"0px solid #cccccc", "text-align":"center", "font-weight":"bold" });
    $("table").css({"border-spacing":"0px" , "border":"0px solid #cccccc", "text-align":"center" });
    $("td").css({"border-spacing":"0px" , "border":"1px solid #cccccc", "text-align":"center"});
  }

  else if (Locationid == "ONLINE" && Yearid == "S19") {
    var CreditHours = '<br>'+
'<table><tr><th class="FTH">Hour(s)</th><th class="FTH">Tuition</th><th class="FTH">Fees</th></tr><tr><td>1</td><td>' +
ECH1 +
'</td><td>'+
ECH6 +
'</td></tr><tr><td>3</td><td>' +
ECH2 +
'</td><td>' +
ECH7 +
'</td></tr><tr><td>6</td><td>'+
ECH3 +
'</td><td>' +
ECH8 +
'</td></tr><tr><td>9</td><td>' +
ECH4 +
'</td><td>' +
ECH9 +
'</td></tr><tr bgcolor="yellow"><td>12</td><td>'+
TuitionFval  +
'</td><td>' +
FeeFVal +
'</td></tr><tr><td>15</td><td>' +
ECH5 +
'</td><td>' +
ECH10 +
'</td></tr></table>' +
'<br>';
        $('#result1').append(CreditHours);
    $(".FTH").css({"background-color":"#FFD200", "font-size":"16px", "border-spacing":"0px" , "border":"0px solid #cccccc", "text-align":"center", "font-weight":"bold" });
    $("table").css({"border-spacing":"0px" , "border":"0px solid #cccccc", "text-align":"center" });
    $("td").css({"border-spacing":"0px" , "border":"1px solid #cccccc", "text-align":"center"});
  }

    else if (Locationid == "ONLINE" && Yearid == "W19") {
    var CreditHours = '<br>'+
'<table><tr><th class="FTH">Hour(s)</th><th class="FTH">Tuition</th><th class="FTH">Fees</th></tr><tr><td>1</td><td>' +
ECH1 +
'</td><td>'+
ECH5 +
'</td></tr><tr><td>2</td><td>' +
ECH2 +
'</td><td>' +
ECH6 +
'</td></tr><tr><td>3</td><td>'+
ECH3 +
'</td><td>' +
ECH7 +
'</td></tr><tr bgcolor="yellow"><td>4</td><td>' +
ECH4 +
'</td><td>' +
ECH8 +
'</td></tr></table>' +
'<br>';
    $('#result1').append(CreditHours);
    $(".FTH").css({"background-color":"#FFD200", "font-size":"16px", "border-spacing":"0px" , "border":"0px solid #cccccc", "text-align":"center", "font-weight":"bold" });
    $("table").css({"border-spacing":"0px" , "border":"0px solid #cccccc", "text-align":"center" });
    $("td").css({"border-spacing":"0px" , "border":"1px solid #cccccc", "text-align":"center"});
  }
}
