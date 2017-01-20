var buttons=$('.artistimage');
var modal = $('.modal');
var closeModal = $('.modal-close');

function modalPopup(){
  var eachImg = $(this).attr('id').split('-')[1];
  $(modal).css('display', 'block');
}

function hideModal(){
  $(modal).css('display', 'none');
}

$(buttons).click(modalPopup);

$(closeModal).click(hideModal);


// Get the modal
// Get the button that opens the modal


// Get the <span> element that closes the modal

// When the user clicks on the button, open the modal

// When the user clicks on <span> (x), close the modal


// When the user clicks anywhere outside of the modal, close it


