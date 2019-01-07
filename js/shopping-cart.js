// Hide/Remove Product Items
$('#removeItem').click(function(){
     $('.cart-item.select').fadeOut(600, function(){
        $('.cart-item.restore').fadeIn();
     });
});

// Hide/Remove Product Items
$('#restoreItem').click(function(){
      $('.cart-item.restore').fadeOut( function(){
            $('.cart-item.select').fadeIn(600)
      });
});


// Cart dropdown Show/Hide
$('#cart-btn').click(function(){
      $('.mini-cart').toggle('display');
});