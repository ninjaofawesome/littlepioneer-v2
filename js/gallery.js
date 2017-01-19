var buttons=$('.artistimage');
<<<<<<< HEAD
var modal = $('.gallery-modal');
var closeModal = $('.modal-close');
var url = 'localhost:8000/galleryUncompressed.html;'
=======
>>>>>>> starting on gallery page with modal

function modalPopup(){
  var eachImg = $(this).attr('id').split('-')[1];

<<<<<<< HEAD
 $.ajax({
      url: url,
      type: "POST",
      crossDomain: true,
      data: JSON.stringify(somejson),
      dataType: "json",
      success: function (response) {
          var resp = JSON.parse(response)
          alert(resp.status);
      },
      error: function (xhr, status) {
          alert("error");
      }
  });



  $(modal).css('display', 'block');
}

function hideModal(){
  $(modal).css('display', 'none');
}

$(buttons).click(modalPopup);

$(closeModal).click(hideModal);
=======
}

$(buttons).click(modalPopup);
>>>>>>> starting on gallery page with modal
