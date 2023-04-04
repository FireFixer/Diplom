var $ = require( "jquery" );
var config = require('./config');

$(function() {
  $('#compile-btn').click(function(event) {
    event.preventDefault();
    var code = $('#code-input').val();
    var program = {
      script : code,
      language: "nodejs",
      versionIndex: "0",
      clientId: config.clientId,
      clientSecret: config.clientSecret
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