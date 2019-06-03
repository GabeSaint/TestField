$.ajax({
  url: 'https://raw.githubusercontent.com/GabeSaint/TestField/master/tuitionsample.json',
  dataType: 'json',

  success: function(data) {
    //iterate over the data and append a selet option
    $.each(data, function(key, val) {
      var option1 = $('<option id="' + val.YearVal + '">' + val.Year + '</option>'); // This will write html as follows ***<option id="DeptID">DeptDescr</option>***
      $('#Year').append(option1);
    }),
    $.each(data, function(key, val) {
      var option2 = $('<option id="' + val.StudentStatVal + '">' + val.StudentStat + '</option>');
      $('#StudentStat').append(option2);
    }),
    $.each(data, function(key, val) {
      var option3 = $('<option id="' + val.LocationVal + '">' + val.Location + '</option>');
      $('#Location').append(option3);
    }),
    $.each(data, function(key, val) {
      var option4 = $('<option id="' + val.ResidencyVal + '">' + val.Residency + '</option>');
      $('#ResidencyStat').append(option4);
    }),
    $.each(data, function(key, val) {
      var option5 = $('<option id="' + val.AcademicVal + '">' + val.Academic + '</option>');
      $('#Academic').append(option5);
    })
  },
  error: function() {
    //if there is an error append a 'none avaliable' option
    $('#Year').append('<option id="-1">NONE AVAILABLE</option>');
  }
})


function showInfo()
  {
    //clear previous results
    $('#result1').html('');


    //get the id of the select
    var Yearid = $('#Year').find('option:selected').attr('id');
    var StudentStatid = $('#StudentStat').find('option:selected').attr('id');
    var Locationid = $('#Location').find('option:selected').attr('id');
    var ResidencyStatid = $('#ResidencyStat').find('option:selected').attr('id');
    var Academicid = $('#Academic').find('option:selected').attr('id');

    // Create the ID

    var Totalid = Yearid + '-' + StudentStatid + '-' + Locationid + '-' + ResidencyStatid + '-' + Academicid

    document.getElementById("testValue").innerHTML = Totalid;

    //display all the relevant data for the department
    tuitionTable(Totalid);
  }

  function tuitionTable(Totalid)
  {


    //display section header
    $('#result1').append("<div></div>");

    $.getJSON('https://raw.githubusercontent.com/GabeSaint/TestField/master/tuitionsample.json', function(data)
    {
      $.each(data, function(key, val)
      {
        //dispaly the correct people based off drop down
        if(Totalid == val["TuitionIdentifier"]) // if(id == val.DeptDescr)
        {
          '<h2>Tuition Fees</h2>'
          var tableResult = '<table><tr><th>Tuition</th><th>FA Trust</th><th>Health/Rec</th><th>Activity</th><th>Info Tech</th><th>Green</th><th>ASNAU</th><th>Athletics</th><th>Fee Total</th><th>Grand Total</th></tr><tr><td>' +
          val["Tuition"] +
          '</td><td>' +
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
          '</td><td>' +
          val["Grand total"] +
          '</td></tr></table>';
          $('#result1').append(tableResult);
        }
      });

    });
  }
