  window.onload=function(){
    document.getElementById("buttonFee").style.display='none';
}



$.ajax({
  url: 'https://raw.githubusercontent.com/GabeSaint/TestField/master/tuitionsample.json',
  dataType: 'json',

  success: function(data) {
    $.each(data, function(key, val) {
      var option1 = $('<option id="' + val.YearVal + '">' + val.Year + '</option>');
      $('#Year').append(option1);
      var option2 = $('<option id="' + val.StudentStatVal + '">' + val.StudentStat + '</option>');
      if (val.StudentStat == ""){
        // Do nothing
      } else {
      $('#StudentStat').append(option2);
    }
      var option3 = $('<option id="' + val.LocationVal + '">' + val.Location + '</option>');
      $('#Location').append(option3);
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

function showButton()
{
  document.getElementById("buttonFee").style.display='block';

  }


function showInfo()
  {
    //clear previous results
    $('#result1').html('');
    $('#result2').html('');


    //get the id of the select
    var Yearid = $('#Year').find('option:selected').attr('id');
    var StudentStatid = $('#StudentStat').find('option:selected').attr('id');
    var Locationid = $('#Location').find('option:selected').attr('id');
    var ResidencyStatid = $('#ResidencyStat').find('option:selected').attr('id');
    /*var Academicid = $('#Academic').find('option:selected').attr('id');*/
    var Honorsid= $('input[type=checkbox]').prop('checked');

    // Create the ID
    var Totalid = Yearid + '-' + StudentStatid + '-' + Locationid + '-' + ResidencyStatid// + '-' + Academicid
    //document.getElementById("testValue").innerHTML = Totalid + '-' + Honorsid; // Test line above

    // Call Function - Display Table
    tuitionTable(Totalid, Honorsid);
  }

  function tuitionTable(Totalid, Honorsid)
  {
    // Data placement
    $('#result1').append("<div></div>");
    $('#result2').append("<div></div>");

    $.getJSON('https://raw.githubusercontent.com/GabeSaint/TestField/master/tuitionsample.json', function(data)
    {
      $.each(data, function(key, val)
      {
        // Check the Degree Code
        if(Totalid == val["TuitionIdentifier"] && Honorsid === false)
        {

          var tableResult = '<h2>Tuition Fees</h2>'+
          '<table><tr><th class="FTH">Tuition</th><th class="FTH">Fees</th><th class="FTH"">Total</th><tr><td>' +
          val["Tuition"] +
          '</td><td>' +
          val["Fee Total"] +
          '</td><td>' +
          val["Grand total"] +
          '</td></tr></table>&nbsp;<br>&nbsp;';

          var tableResultFees = '<table><tr><th class="FTH">FA<br>Trust</th><th class="FTH">Health<br>&amp; Rec</th><th class="FTH">Activity</th><th class="FTH">Info<br>Tech</th><th class="FTH">Green</th><th class="FTH">ASNAU</th><th class="FTH">Athletics</th><th class="FTH">Fee<br>Total</th></tr><tr><td>' +
          val["FA Trust"] +
          '</td><td>' +
          val["Health/Rec"] +
          '</td><td>' +
          val["Activity"] +
          '</td><td>' +
          val["Info Tech"] +
          '</td><td>' +
          val["Green"] +
          '</td><td>' +
          val["ASNAU"] +
          '</td><td>' +
          val["Athletics"] +
          '</td><td>' +
          val["Fee Total"] +
          '</td></tr></table>';
          $('#result1').append(tableResult);
          $('#result2').append(tableResultFees);
          $(".FTH").css({"background-color":"#FFD200", "font-size":"16px", "border-spacing":"0px" , "border":"0px solid #cccccc", "text-align":"center", "font-weight":"bold" });
          $("table").css({"border-spacing":"0px" , "border":"0px solid #cccccc", "text-align":"center" });
          $("td").css({"border-spacing":"0px" , "border":"1px solid #cccccc", "text-align":"center"});

        }

        else if (Totalid == val["TuitionIdentifier"] && Honorsid === true) {

          var tableResult = '<h2>Tuition Fees</h2>'+
          '<table><tr><th class="FTH">Tuition</th><th class="FTH">TuitionZ</th><th class="FTH">Fees</th><th class="FTH"">Total</th><tr><td>' +
          val["Tuition"] +
          '</td><td>' +
          val["Tuition"] +
          '</td><td>' +
          val["Fee Total"] +
          '</td><td>' +
          val["Grand total"] +
          '</td></tr></table>&nbsp;<br>&nbsp;';

          var tableResultFees = '<table><tr><th class="FTH">FA<br>Trust</th><th class="FTH">Health<br>&amp; Rec</th><th class="FTH">Activity</th><th class="FTH">Info<br>Tech</th><th class="FTH">Green</th><th class="FTH">ASNAU</th><th class="FTH">Athletics</th><th class="FTH">Fee<br>Total</th></tr><tr><td>' +
          val["FA Trust"] +
          '</td><td>' +
          val["Health/Rec"] +
          '</td><td>' +
          val["Activity"] +
          '</td><td>' +
          val["Info Tech"] +
          '</td><td>' +
          val["Green"] +
          '</td><td>' +
          val["ASNAU"] +
          '</td><td>' +
          val["Athletics"] +
          '</td><td>' +
          val["Fee Total"] +
          '</td></tr></table>';
          $('#result1').append(tableResult);
          $('#result2').append(tableResultFees);
          $(".FTH").css({"background-color":"#FFD200", "font-size":"16px", "border-spacing":"0px" , "border":"0px solid #cccccc", "text-align":"center", "font-weight":"bold" });
          $("table").css({"border-spacing":"0px" , "border":"0px solid #cccccc", "text-align":"center" });
          $("td").css({"border-spacing":"0px" , "border":"1px solid #cccccc", "text-align":"center"});

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
