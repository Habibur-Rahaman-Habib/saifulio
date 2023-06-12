
//language switcher
function changeLanguage() {
    var language = document.getElementById('language-select').value;
    var flagElement = document.getElementById('flag');
    switch (language) {
        case 'english':
            flagElement.src = 'assets/img/1.png';
            break;
        case 'french':
            flagElement.src = 'assets/img/2.png';
            break;
        case 'spanish':
            flagElement.src = 'assets/img/3.png';
            break;
    }
}


// video popup
function openVideoPopup() {
    var popup = document.getElementById('videoPopup');
    popup.classList.add('show');
}

function closeVideoPopup() {
    var popup = document.getElementById('videoPopup');
    popup.classList.remove('show');
}

// counterup
$('.counter').counterUp({
    delay: 10,
    time: 1000
});

// slick slider
$('.client_feedback').slick({
    slidesToShow: 3,
    arrows: false,
    centerMode: true,
    responsive: [
        {
            breakpoint: 1476,
            settings: {
                centerMode: false,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 1100,
            settings: {
                centerMode: false,
                slidesToShow: 1
            }
        },
    ]

});