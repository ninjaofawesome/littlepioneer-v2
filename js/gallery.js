var buttons=$('.artistimage');
var modal = $('.gallery-modal');
var closeModal = $('.modal-close');
var url = 'localhost:8000/galleryUncompressed.html;'
console.log(url);

function modalPopup(){
  var eachImg = $(this).attr('id').split('-')[1];
  $.ajax({
    async: false,
    url : url,
    contentType: "text/html",
    type : "GET",
    dataType : "text/html",
    success: function(data){
      console.log('data', data);
    },
    error: function(data, xhr) {
      console.log('data', data);
      console.log('xhr', xhr);
    }
 });

  $(modal).css('display', 'block');
}

function hideModal(){
  $(modal).css('display', 'none');
}

$(buttons).click(modalPopup);

$(closeModal).click(hideModal);
