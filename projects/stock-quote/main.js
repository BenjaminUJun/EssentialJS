$(function() {

    function init() {
        $('#input').keypress(function(e) {
            if (e.which == 13) {
              var inputValue = $('#input').val();
              var re = new RegExp('/^[^a-zA-Z]/g');

              // Find a way to validate only letters. No numbers or special
              // characters.
              if (inputValue != '') {
                getData(inputValue);


              } else {
                alert('Please enter a quote');
              }
            }
        });
    }


    init();

    function getData(inputValue) {
        var url = 'https://www.quandl.com/api/v3/datasets/WIKI/' + inputValue + '.json?auth_token=6znG6q5S2VrTnsPkDz3U';
        $.get(url, function(data) {
            console.log(data);
            writeData(data);
        })
    }

    function writeData(data) {
        $('#data').append('<h1>it works</h1>');
    }

}())
