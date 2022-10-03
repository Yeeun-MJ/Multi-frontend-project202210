$('.btn span').click(function () {
  $(this).addClass('active')
  $(this).siblings('span').removeClass('active')
})