// algus > algus
$('#navLogo').on('click', function () {
    const logo = $('#lehe_algus').position().top;
    $('html, body').animate({
        scrollTop: logo
    }, 900);
});

// lõpp > algus
$('#tagasi-ules').on('click', function () {
    const algus = $('#lehe_algus').position().top;
    $('html, body').animate({
        scrollTop: algus
    }, 900);
});

// mobiil nool > fotod
$('.mob_nool').on('click', function () {
    const fotod = $('#fotod').position().top;
    $('html, body').animate({
        scrollTop: fotod
    }, 900);
});

// menu > fotod
$('#navFotod').on('click', function () {
    const fotod = $('#fotod').position().top;
    $('html, body').animate({
        scrollTop: fotod
    }, 900);
});

// menu > minust
$('#navMinust').on('click', function () {
    const minust = $('#minust').position().top;
    $('html, body').animate({
        scrollTop: minust
    }, 900);
});

// menu > oskused
$('#navOskused').on('click', function () {
    const oskused = $('#oskused').position().top;
    $('html, body').animate({
        scrollTop: oskused
    }, 900);
});

// menu > kontakt
$('#navKontakt').on('click', function () {
    const kontakt = $('#kontakt').position().top;
    $('html, body').animate({
        scrollTop: kontakt
    }, 900);
});

// peida nav
$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

// fluid pildid
$(function () {
    $('#fotod a').fluidbox({
        viewportFill: 0.8,
        loader: true
    });
});