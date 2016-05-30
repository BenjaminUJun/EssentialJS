$(function() {

    function init() {
        $('#input').keypress(function(e) {
            if (e.which == 13) {
              var tmp = $('#input').val();
              var re = new RegExp('/^[^a-zA-Z]+$/');

              if (tmp != '' && tmp === re) {
                getData();
                alert('success');
              } else {
                alert('Please enter a quote. Only letters are accepted.');
              }
            }
        });
    }


    init();

    function getData() {
        var query = $('#input').val();
        console.log('success');
        var url = 'https://www.quandl.com/api/v3/datasets/WIKI/' + query + '.json?auth_token=6znG6q5S2VrTnsPkDz3U';
        $.get(url, function(data) {
            console.log(data);
            writeData(data);
        })
    }

    function writeData(data) {
        $('#data').append('<h1>it works</h1>');
    }

}())
