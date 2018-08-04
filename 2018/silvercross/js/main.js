$(document).ready(function() {


    function productsInit() {
        $('.product-card .product-picture:first-child').addClass('active');
        $('.product-card .product-color-item:first-child').addClass('active');
    }
    productsInit();

    $( ".product-colors .product-color-item" ).on( "click", function() {

        var currentParent = $(this).closest('.product-card');
        var currentIndex = $(this).attr('data-index');
        var currentPrice = $(this).attr('data-price');

        // change active color
        $(currentParent).find('.product-color-item ').removeClass('active');
        $(this).addClass('active');

        // change active picture
        $(currentParent).find('.product-picture ').removeClass('active');
        $(currentParent).find(".product-picture[data-index='" + currentIndex + "'] ").addClass('active');

        // change active price
        $(currentParent).find(".product-price ins").text(currentPrice + ' ₽');
    });
});