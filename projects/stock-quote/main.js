$(function(){

  function init() {
    console.log('Button clicked');

    $('#submit').on('click', function(){
      getData();
    })
  }

  init();

  function getData() {
      var query = $('#input').val();
      var url = 'https://www.quandl.com/api/v3/datasets/WIKI/' + query + '.json?auth_token=6znG6q5S2VrTnsPkDz3U';
      $.get(url, function(data) {
          console.log(data);
          alert('success')
      })
  }

}())
