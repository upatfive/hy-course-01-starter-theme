
// modal actions
function modalOpen(modal) {
	//close any open modals 
	modalClose();
	$('#' + modal).toggleClass('hidden').toggleClass('active');
}

function modalClose() {
	$('.modal.active').toggleClass('hidden').toggleClass('active');
} 



$(function(){
	
	$('[data-modal]').on('click', function(){
		modalOpen($(this).data('modal'))
	});

	$('.modal-close').on('click', function(){
		modalClose();
	});

})



