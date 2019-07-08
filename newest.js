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
  var Totalid = Yearid + '-' + StudentStatid + '-' + Locationid + '-ONLINE';}
  else{
    Totalid = Yearid + '-' + StudentStatid + '-' + Locationid + '-' + ResidencyStatid;
  }
}

// Call Function - Display Table
tuitionTable(Totalid, Honorsid, Yearid);

}

function tuitionTable(Totalid, Honorsid, Yearid, StudentStatid, Locationid, ResidencyStatid)
{
  // Data placement
  $('#result1').append("<div></div>");
  $('#result2').append("<div></div>");

  $.getJSON('https://raw.githubusercontent.com/GabeSaint/TestField/master/tuitionsample.json', function(data)
  {
    $.each(data, function(key, val)
    {
      if (Yearid == "S19" || Yearid == "W19") {
        if (Totalid == val["TuitionIdentifier"]) {

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
    "<p><a title='Program Fees' href='https://stage.wp.nau.edu/pubops-testing-sandbox/program-fees/'>View our Program Fees</a></p>";

         $('#result1').append(tableResult);
         $('#result2').append(tableResultFees);
         $(".FTH").css({"background-color":"#FFD200", "font-size":"16px", "border-spacing":"0px" , "border":"0px solid #cccccc", "text-align":"center", "font-weight":"bold" });
         $("table").css({"border-spacing":"0px" , "border":"0px solid #cccccc", "text-align":"center" });
         $("td").css({"border-spacing":"0px" , "border":"1px solid #cccccc", "text-align":"center"});
         $("button#buttonFee").css({"background-color":"#ffd200" , "color":"black"});
         showButton(Totalid);
         scrollWin();

       }


      }else {


      // Check the Degree Code
      if(Totalid == val["TuitionIdentifier"] && Honorsid === false)
      {

        var tableResult = '<h2>Tuition &amp; Fees</h2>'+
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
        "<p><a title='Program Fees' href='https://stage.wp.nau.edu/pubops-testing-sandbox/program-fees/'>View our Program Fees</a></p>";


        $('#result1').append(tableResult);
        $('#result2').append(tableResultFees);
        $(".FTH").css({"background-color":"#FFD200", "font-size":"16px", "border-spacing":"0px" , "border":"0px solid #cccccc", "text-align":"center", "font-weight":"bold" });
        $("table").css({"border-spacing":"0px" , "border":"0px solid #cccccc", "text-align":"center" });
        $("td").css({"border-spacing":"0px" , "border":"1px solid #cccccc", "text-align":"center"});
        $("button#buttonFee").css({"background-color":"#ffd200" , "color":"black"});
        showButton(Totalid);
        scrollWin();

      }

      else if (Totalid == val["TuitionIdentifier"] && Honorsid === true) {

        var tableResult = '<h2>Tuition &amp; Fees</h2>'+
        '<table><tr><th class="FTH">Tuition</th><th class="FTH">TuitionZ</th><th class="FTH">Fees</th><th class="FTH"">Total</th><tr><td>' +
        val["Tuition-F"] +
        '</td><td>' +
        val["Tuition-S"] +
        '</td><td>' +
        val["Fee Total-F"] +
        '</td><td>' +
        val["Grand total"] +
        '</td></tr></table>&nbsp;<br>&nbsp;';


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
        "<p><a title='Program Fees' href='https://stage.wp.nau.edu/pubops-testing-sandbox/program-fees/'>View our Program Fees</a></p>";

        $('#result1').append(tableResult);
        $('#result2').append(tableResultFees);
        $(".FTH").css({"background-color":"#FFD200", "font-size":"16px", "border-spacing":"0px" , "border":"0px solid #cccccc", "text-align":"center", "font-weight":"bold" });
        $("table").css({"border-spacing":"0px" , "border":"0px solid #cccccc", "text-align":"center" });
        $("td").css({"border-spacing":"0px" , "border":"1px solid #cccccc", "text-align":"center"});
        $("button#buttonFee").css({"background-color":"#ffd200" , "color":"black"});
        showButton(Totalid);
        scrollWin();
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
