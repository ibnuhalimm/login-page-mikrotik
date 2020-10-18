$('.tab a').click(function(e) {
   e.preventDefault();
   let tab_id = $(this).attr('href');

   $(this).addClass('bg-red-600')
       .parent().siblings().children()
       .removeClass('bg-red-600').addClass('bg-gray-900');

   $('.tab-panel '+tab_id).show().siblings().hide();
});

$('#__voucherUsername').on('keyup', function() {
    $('#__voucherPassword').val($(this).val());
});