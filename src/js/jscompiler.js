var $ = require( "jquery" );

$(function() {
    $('#compile-btn').click(function(event) {
      event.preventDefault();
      var code = $('#code-input').val();
      var program = {
        script : code,
        language: "nodejs",
        versionIndex: "0",
        clientId: "742b01ca46184019124a1ea2864d045e",
        clientSecret:"f484e2233808aa0144c4b258f9d661d737369b1566b7ede697e836ebd7217f32"
      };
      $.ajax({
        url: 'https://api.jdoodle.com/v1/execute',
        type: 'POST',
        data: JSON.stringify(program),
        contentType: 'application/json',
        success: function(result) {
          $('#output').text(result.output);
        },
        error: function(error) {
          $('#output').text('Error: ' + error.responseText);
        }
      });
    });
  });