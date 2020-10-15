$('.correo').on('submit', function(e) {

    var messageBody = '';
    $.each($('.correo').serializeArray(), function(i, field) {
      messageBody += field.name + ": " + field.value + '%0D%0A';
    });
  
    var hreflink = "mailto:carl@cuttingedgelighting.com?Subject=Libera%20Tu%20Voz&body=" + messageBody;
    $('.mail').attr("href", hreflink);
    e.preventDefault();
    $('.mail')[0].click()
  
  });