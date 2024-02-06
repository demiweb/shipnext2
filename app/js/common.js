var allLazyLoad = [...document.querySelectorAll('.lazyload')];

function allLozadImg() {
    allLazyLoad.forEach((el) => {
        var observer = lozad(el);
        observer.observe();
        el.addEventListener('load', () => {
            el.classList.add('is-loaded')
        })

    })
}


allLozadImg();


//add counting number to show delay speed
var counterContainer = [...document.querySelectorAll('.counting-delay')];

function addCoutingDelay() {
    if (counterContainer.length) {
        counterContainer.forEach((cont) => {
            var anims = [...cont.querySelectorAll('.anim')];
            anims.forEach((btn, k) => {
                btn.dataset.animDelay = k * 100;
            })
        })
    }
}

addCoutingDelay();



var animStage = [...document.querySelectorAll('.anim-stage')];

function scrollAnimationsStage() {
    if (animStage.length) {
        var animItems = [...document.querySelectorAll(':scope > *')];

        var observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                // console.log(entry.target);
                var eles = [...entry.target.querySelectorAll(":scope > *")];
                var len = eles.length;

                // console.log(eles);
                if (entry.isIntersecting) {
                    for (var i = 0; i < len; i++) {
                        // console.log(eles[1]);
                        eles[i].style.animationDelay = (entry.target.dataset.animDelay * i) + 'ms';
                        eles[i].style.animationDuration = entry.target.dataset.animDuration + 'ms';
                        eles[i].style.animationName = entry.target.dataset.anim;
                    }
                    observer.unobserve(entry.target);
                }

            })
        }, {threshold: .5});

        animStage.forEach((animate, k) => {
            observer.observe(animate);
        })

    }
}

scrollAnimationsStage();

// scroll animations
var anim = document.querySelectorAll('.anim');

function scrollAnimations() {
    if (anim.length) {
        var observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                var el = entry.target;
                if (entry.isIntersecting) {
                    if (el.classList.contains('anim-js')) {

                    } else {
                        el.style.animationDelay = el.dataset.animDelay + 'ms';
                        el.style.animationDuration = el.dataset.animDuration + 'ms';
                        el.style.animationName = el.dataset.anim;
                    }
                    el.classList.add('done');


                } else {
                    el.classList.remove('done');
                }

            })
        }, {threshold: .5});
        if (window.innerWidth > 991) {
            anim.forEach(animate => {
                observer.observe(animate)
            })
        } else {

            anim.forEach(animate => {

                observer.observe(animate)


            })
        }
    }
}

scrollAnimations();


const horizontalParallax = document.querySelectorAll('.rellax-v');

$('.rellax-v').paroller();
//

//tabs

let tabBtn = [...document.querySelectorAll('.tab-btn')];

function changeTab() {
    if (!tabBtn.length) {

    } else {
        let activeTab = 0;


        tabBtn.forEach((btn, k) => {

            btn.addEventListener('click', () => {
                if (btn.classList.contains('active')) {

                } else {
                    tabBtn.forEach((btn2) => {
                        btn2.classList.remove('active');
                    });
                    btn.classList.add('active');
                    [...btn.closest('.tabs-owner').querySelectorAll('.item-tab')].forEach((tab, m) => {
                        if (m === k) {
                            tab.classList.add('active');
                        } else {
                            tab.classList.remove('active');

                        }
                    });
                }
            });

        });



    }
}

changeTab();

//tabs

var burger = [...document.querySelectorAll('.burger')];
var header = document.querySelector('.header');


function burgerControl() {
    if (burger.length) {
        burger.forEach((btn) => {

            btn.addEventListener('click', () => {
                btn.classList.toggle('active');
                header.classList.toggle('active');
                document.body.classList.toggle('no-scroll')

            })
        })
    }
}

burgerControl();

$(window).scroll(function (e) {
    $el = $('.header');
    $el.toggleClass('header-fixed', $(this).scrollTop() > 32);

});
$(document).ready(function() {
    $el = $('.header');
    $el.toggleClass('header-fixed', $(this).scrollTop() > 32);
});

//telephones
let zero = '0';
let tls = [...document.querySelectorAll(".input-number input")];
let countryNumber = tls[0].closest('.input-wrap').dataset.country;
// console.log(countryNumber);
var maskOptions = {
    mask: `{${countryNumber}}(000)000-00-00`,
};


tls.forEach((tl) => {
    var mask = IMask(tl, maskOptions);
});


//chars hovering

function ifHaveShips() {
    if (document.querySelector('.page-section')) {
        const sections = document.querySelectorAll(".page-section");
        const menuItems = document.querySelectorAll(".menu li a");


        sections.forEach((sec, index) => {
            let top = window.scrollY;
            let offset = sec.offsetTop;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset - 100 && top < offset + height - 100) {
                const target = document.querySelector(`[href='#${id}']`);
                activeLink(target);
            } else {
            }
        });
        function onScroll2() {
            var scrollPos = $(document).scrollTop();

            window.onscroll = () => {
                sections.forEach((sec, index) => {
                    let top = window.scrollY;
                    let offset = sec.offsetTop;
                    let height = sec.offsetHeight;
                    let id = sec.getAttribute('id');

                    if (top >= offset - 200 && top < offset + height - 100) {
                        const target = document.querySelector(`[href='#${id}']`);
                        activeLink(target);
                    } else {
                    }
                })
            };
        }
        function activeLink(li) {
            menuItems.forEach((item) => item.classList.remove('active'));

            li.classList.add('active');
        }


        onScroll2();
        $(document).on("scroll", onScroll2);
// Get all sections that have an ID defined


// Add an event listener listening for scroll
        menuItems.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                let link = btn.getAttribute("href");

                header.classList.remove('active');
                document.body.classList.remove('no-scroll');
                burger.forEach((burg) => {
                    burg.classList.remove('active');
                });
                $([document.documentElement, document.body]).animate({
                    scrollTop: $(link).offset().top - $('.header').outerHeight(true)
                }, 600);
            })
        });
    }
}

ifHaveShips();

let btnsScroll = [...document.querySelectorAll('.to-form')];

function scrollToForm() {
    if (btnsScroll.length) {
        btnsScroll.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                e.preventDefault();

                header.classList.remove('active');
                document.body.classList.remove('no-scroll');
                burger.forEach((burg) => {
                    burg.classList.remove('active');
                });
                $([document.documentElement, document.body]).animate({
                    scrollTop: $('.demoform').offset().top - $('.header').outerHeight(true)
                }, 600);
            })
        })
    }
}
scrollToForm();