let index = 0;
const workItem = $('.work-item');
const totalWorkItems = workItem.length;

$(document).ready(function () {
    // set lightbox img max height
    const wHeight = $(window).height();
    $('.lightbox-img').css('max-height', wHeight + 'px');

    // lightbox
    $('.work-item-inner').click(function () {
        index = $(this).parent('.work-item').index();
        $('.lightbox').addClass('open');
        lightboxSlideShow();
    });
    $('.lightbox .prev').click(function () {
        if (!index) {
            index = totalWorkItems - 1;
        } else {
            index--;
        }
        lightboxSlideShow();
    });
    $('.lightbox .next').click(function () {
        if (index === totalWorkItems - 1) {
            index = 0;
        } else {
            index++;
        }
        lightboxSlideShow();
    });

    // close lightbox
    $('.lightbox-close').click(function () {
        $('.lightbox').removeClass('open');
    });

    // close lightbox when clicked outside of img-box
    $('.lightbox').click(function (event) {
        if ($(event.target).hasClass('lightbox')) {
            $(this).removeClass('open');
        }
    });
});

function lightboxSlideShow() {
    const imgSrc = workItem.eq(index).find('img').attr('data-large');
    const category = workItem.eq(index).find('h4').html();
    $('.lightbox-img').attr('src', imgSrc);
    $('.lightbox-category').html(category);
    $('.lightbox-counter').html(index + 1 + '/' + totalWorkItems);
}
