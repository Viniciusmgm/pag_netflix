$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function assistir() {
    return window.location.href = 'https://www.themoviedb.org/tv/1396-breaking-bad?language=pt-BR#play=XrVlzrRECY4'
}

function info() {
    return window.location.href = 'https://www.themoviedb.org/tv/1396-breaking-bad?language=pt-BR'
}