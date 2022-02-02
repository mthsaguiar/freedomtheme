
var elemSlide = document.querySelector('.slider-component__image-large')
var elemThumb = document.querySelector('.slider-component__image-thumbnail')


if (elemSlide != null) {
    var flckty = new Flickity(elemSlide, {
        adaptiveHeight: false,
        prevNextButtons: true,
        pageDots: true
    })
}
if (elemThumb != null) {
    var flcktyThumb = new Flickity(elemThumb, {
        asNavFor: '.slider-component__image-large',
        contain: true,
        pageDots: false,
        prevNextButtons: false,
        draggable: false
    })
}
