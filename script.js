AOS.init();
//script for scroll to top
$("#top-button").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1000);
});
//script for light box
$(document).on('click', '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});
