let carts = document.querySelectorAll('.add-cart');
let products = [
    {
        name: 'Baileys Irish Cream',
        tag: 'Cupcake_BaileysIrishCream',
        price: 50000,
        inCart: 0

    },
    {
        name: 'Brazilian Carrot',
        tag: 'Cupcake_BrazilianCarrot',
        price: 50000,
        inCart: 0

    },
    {
        name: 'Penuche Frosting',
        tag: 'Cupcake_PenucheFrosting',
        price: 50000,
        inCart: 0

    },
    {
        name: 'Vegan Chocolate',
        tag: 'Cupcake_VeganChocolate',
        price: 50000,
        inCart: 0

    },
    {
        name: 'Butternut Squash',
        tag: 'Cupcake_ButternutSquash',
        price: 50000,
        inCart: 0

    },
    {
        name: 'Brazilian Carrot',
        tag: 'Cupcake_BrazilianCarrot',
        price: 50000,
        inCart: 0

    },
    {
        name: 'Israeli Cheesecake',
        tag: 'Tea_Israeli Cheesecake',
        price: 50000,
        inCart: 0

    },
    {
        name: 'Raspberry Swirl Cheesecake',
        tag: 'Tea_RaspberrySwirlCheesecake',
        price: 50000,
        inCart: 0

    },
    {
        name: 'Nutella Cheesecake',
        tag: 'Tea_Nutella Cheesecake',
        price: 50000,
        inCart: 0

    },
    {
        name: 'Chocolate Chip Muffins',
        tag: 'Muffins_ChocolateChipMuffins',
        price: 50000,
        inCart: 0

    },
    {
        name: 'Grape Nuts Muffins',
        tag: 'Muffins_GrapeNutsMuffins',
        price: 50000,
        inCart: 0

    },
    {
        name: 'Zucchini Muffins Carrot',
        tag: 'Muffins_Zucchini Muffins Carrot',
        price: 50000,
        inCart: 0

    },
    {
        name: 'Bánh Quy Mặn',
        tag: 'CookiesBanhQuyMan',
        price: 50000,
        inCart: 0

    },
    {
        name: 'Bánh Quy Nhân Mứt Trái Cây',
        tag: 'Cookiesbanhquynhanmuttraicay',
        price: 50000,
        inCart: 0

    },
    {
        name: 'Bánh Quy Dừa Sấy',
        tag: 'Cookiesduasay',
        price: 50000,
        inCart: 0

    },
    {
        name: 'Bánh Kem Dâu Tây',
        tag: 'BanhKem_DauTay',
        price: 50000,
        inCart: 0

    },
    {
        name: 'Bánh Kem Phong Cách Hàn Quốc',
        tag: 'BanhKem_styekorea2',
        price: 50000,
        inCart: 0

    },
    {
        name: 'Bánh Kem Cầu Vòng',
        tag: 'BanhKem_StyleKorea',
        price: 50000,
        inCart: 0

    },
    {
        name: 'Savory Bacon',
        tag: 'Pancake_SavoryBacon',
        price: 50000,
        inCart: 0

    },
    {
        name: 'Sourdough',
        tag: 'Pancake_Sourdough',
        price: 50000,
        inCart: 0

    },
    {
        name: 'Spanish',
        tag: 'Pancake_Spanish',
        price: 50000,
        inCart: 0

    },
    {
        name: 'Italian Fried Chickpeas Snack',
        tag: 'Candy_ItalianFriedChickpeasSnack',
        price: 50000,
        inCart: 0

    },
    {
        name: 'GlutenFree ChexStyle',
        tag: 'Candy_GlutenFree ChexStyle',
        price: 50000,
        inCart: 0

    },
    {
        name: 'Cinnamon Popcorn',
        tag: 'Candy_CinnamonPopcorn',
        price: 50000,
        inCart: 0

    },
]

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}
function onLoadCartNumbers() { // Để khi load lại trang thì sp trong giỏ hàng không bị mất
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers(product) { // Tăng số trong giỏ hàng

    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);
    if (productNumbers) { // Nếu 
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    }
    else {
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}
function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) { // Nếu sp đã có thì tăng số lượng sp
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product

            }
        }

        cartItems[product.tag].inCart += 1;
    }
    else { //  nếu giỏ hàng trống thì hiển thị sản phẩm trong giỏ hàng
        product.inCart = 1;
        cartItems = {
            [product.tag]: product
        }

    }
    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}
function totalCost(product) {
    //console.log("The product price is", product.price);
    let cartCost = localStorage.getItem('totalCost');

    console.log("My cartcosst is", cartCost);
    console.log(typeof cartCost);
    if (cartCost != null) { // Nếu giỏ hàng đã có sp thì tổng bằng sp*giá + tổng trước
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    }
    else {
        localStorage.setItem("totalCost", product.price);
    }


}
function displayCart() { // hiển thị giỏ hàng
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    let cartCost = localStorage.getItem('totalCost');
    console.log(cartItems);
    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
              
                <div class = "product">
                   <button class="icon" > x </button>
                    <img src="./images/product/${item.tag}.jpg"/>
                    <span> ${item.name}</span>
                
                    <div class = "price"> ${item.price} </div>
                    <div class = "quantity">
                    <button class="icon-ion-minus" onclick="decrementValue()" > - </button>

                    <span> <input class="input-qty" type="text" id="number" value="${item.inCart}" style="width: 20px; border: hidden; "/> </span>
                    <button type class = "icon-ion-plus" onclick="incrementValue()" > + </button>
                    </div>
                     <div class = "total">
                    ${item.inCart * item.price}
                    </div>
                  </div>
                
                
            


            `

        });
        productContainer.innerHTML += `
             <div class = "basketTotalContainer">
            <h4 class = "basketTotalTitle"> Basket Total </h4>
            <h4 class = "basketTotal"> ${cartCost} </h4>
            </div>
            `;
    }
}

function incrementValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}
function decrementValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value = value > 0 ? value - 1 : 0;
    document.getElementById('number').value = value;
}


onLoadCartNumbers();
displayCart();




/*-------------------------------
[  Table of contents  ]
---------------------------------
  01. jQuery MeanMenu
  02. wow js active
  03. Portfolio  Masonry (width)
  04. Sticky Header
  05. ScrollUp
  06. Tooltip
  07. ScrollReveal Js Init
  08. Fixed Footer bottom script ( Newsletter )
  09. Search Bar
  10. Toogle Menu
  11. Shopping Cart Area
  12. Filter Area
  13. User Menu
  14. Overlay Close
  15. Home Slider 
  16. Popular Product Wrap
  17. Testimonial Wrap
  18. Magnific Popup  
  19. Price Slider Active
  20.  Plus Minus Button
  21. jQuery scroll Nav

  

/*--------------------------------
[ End table content ]
-----------------------------------*/


(function ($) {
    'use strict';


    /*-------------------------------------------
      01. jQuery MeanMenu
    --------------------------------------------- */

    $('.mobile-menu nav').meanmenu({
        meanMenuContainer: '.mobile-menu-area',
        meanScreenWidth: "991",
        meanRevealPosition: "right",
    });

    /*-------------------------------------------
      02. wow js active
    --------------------------------------------- */
    new WOW().init();


    /*-------------------------------------------
      03. Product  Masonry (width)
    --------------------------------------------- */
    $('.htc__product__container').imagesLoaded(function () {

        // filter items on button click
        $('.product__menu').on('click', 'button', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
        // init Isotope
        var $grid = $('.product__list').isotope({
            itemSelector: '.single__pro',
            percentPosition: true,
            transitionDuration: '0.7s',
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.single__pro',
            }
        });

    });

    $('.product__menu button').on('click', function (event) {
        $(this).siblings('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
        event.preventDefault();
    });



    /*-------------------------------------------
      04. Sticky Header
    --------------------------------------------- */
    var win = $(window);
    var sticky_id = $("#sticky-header-with-topbar");
    win.on('scroll', function () {
        var scroll = win.scrollTop();
        if (scroll < 245) {
            sticky_id.removeClass("scroll-header");
        } else {
            sticky_id.addClass("scroll-header");
        }
    });


    /*--------------------------
      05. ScrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="zmdi zmdi-chevron-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });


    /*---------------------------
      06. Tooltip
    ------------------------------*/
    $('[data-toggle="tooltip"]').tooltip({
        animated: 'fade',
        placement: 'top',
        container: 'body'
    });


    /*-----------------------------------
      07. ScrollReveal Js Init
    -------------------------------------- */
    window.sr = ScrollReveal({ duration: 800, reset: true });
    sr.reveal('.foo');
    sr.reveal('.bar');


    /*-------------------------------------------------------
      08. Fixed Footer bottom script ( Newsletter )
    --------------------------------------------------------*/

    var $newsletter_height = $(".htc__foooter__area");
    $('.fixed__footer').css({ 'margin-bottom': $newsletter_height.height() + 'px' });


    /*------------------------------------    
      09. Search Bar
    --------------------------------------*/

    $('.search__open').on('click', function () {
        $('body').toggleClass('search__box__show__hide');
        return false;
    });

    $('.search__close__btn .search__close__btn_icon').on('click', function () {
        $('body').toggleClass('search__box__show__hide');
        return false;
    });


    /*------------------------------------    
      10. Toogle Menu
    --------------------------------------*/
    $('.toggle__menu').on('click', function () {
        $('.offsetmenu').addClass('offsetmenu__on');
        $('.body__overlay').addClass('is-visible');

    });

    $('.offsetmenu__close__btn').on('click', function () {
        $('.offsetmenu').removeClass('offsetmenu__on');
        $('.body__overlay').removeClass('is-visible');
    });

    /*------------------------------------    
      11. Shopping Cart Area
    --------------------------------------*/

    $('.cart__menu').on('click', function () {
        $('.shopping__cart').addClass('shopping__cart__on');
        $('.body__overlay').addClass('is-visible');

    });

    $('.offsetmenu__close__btn').on('click', function () {
        $('.shopping__cart').removeClass('shopping__cart__on');
        $('.body__overlay').removeClass('is-visible');
    });


    /*------------------------------------    
      12. Filter Area
    --------------------------------------*/

    $('.filter__menu').on('click', function () {
        $('.filter__wrap').addClass('filter__menu__on');
        $('.body__overlay').addClass('is-visible');

    });

    $('.filter__menu__close__btn').on('click', function () {
        $('.filter__wrap').removeClass('filter__menu__on');
        $('.body__overlay').removeClass('is-visible');
    });


    /*------------------------------------    
      13. User Menu
    --------------------------------------*/

    $('.user__menu').on('click', function () {
        $('.user__meta').addClass('user__meta__on');
        $('.body__overlay').addClass('is-visible');

    });

    $('.offsetmenu__close__btn').on('click', function () {
        $('.user__meta').removeClass('user__meta__on');
        $('.body__overlay').removeClass('is-visible');
    });



    /*------------------------------------    
      14. Overlay Close
    --------------------------------------*/
    $('.body__overlay').on('click', function () {
        $(this).removeClass('is-visible');
        $('.offsetmenu').removeClass('offsetmenu__on');
        $('.shopping__cart').removeClass('shopping__cart__on');
        $('.filter__wrap').removeClass('filter__menu__on');
        $('.user__meta').removeClass('user__meta__on');
    });


    /*-----------------------------------------------
      15. Home Slider
    -------------------------------------------------*/
    if ($('.slider__activation__wrap').length) {
        $('.slider__activation__wrap').owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            autoplay: false,
            navText: ['<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>'],
            autoplayTimeout: 10000,
            items: 1,
            dots: false,
            lazyLoad: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                800: {
                    items: 1
                },
                1024: {
                    items: 1
                },
                1200: {
                    items: 1
                },
                1400: {
                    items: 1
                },
                1920: {
                    items: 1
                }
            }
        });
    }

    /*-----------------------------------------------
      16. Popular Product Wrap
    -------------------------------------------------*/
    $('.popular__product__wrap').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        autoplay: false,
        navText: ['<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>'],
        autoplayTimeout: 10000,
        items: 3,
        dots: false,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            800: {
                items: 2
            },
            1024: {
                items: 3
            },
            1200: {
                items: 3
            },
            1400: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    });


    /*-----------------------------------------------
      17.  product-slider-active
    -------------------------------------------------*/
    $('.single-portfolio-slider').owlCarousel({
        loop: true,
        nav: true,
        navText: ['<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>'],
        items: 1,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            800: {
                items: 1
            },
            1024: {
                items: 1
            },
            1200: {
                items: 1
            },
            1400: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    });


    /*-----------------------------------------------
      17.  product-slider-active
    -------------------------------------------------*/


    $('.product-slider-active').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ['<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>'],
        items: 3,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            800: {
                items: 2
            },
            1024: {
                items: 3
            },
            1200: {
                items: 3
            },
            1400: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    });


    /*-----------------------------------------------
      17.  product-details-slider
    -------------------------------------------------*/


    $('.product-details-slider').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        navText: ['<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>'],
        items: 3,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            800: {
                items: 2
            },
            1024: {
                items: 3
            },
            1200: {
                items: 3
            },
            1400: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    });
    /*-----------------------------------------------
      17.  product-details-slider
    -------------------------------------------------*/


    $('.testimonial-2-active').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        navText: ['<i class="zmdi zmdi-chevron-left"></i>', '<i class="zmdi zmdi-chevron-right"></i>'],
        items: 2,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            800: {
                items: 1
            },
            1024: {
                items: 2
            },
            1200: {
                items: 2
            },
            1400: {
                items: 2
            },
            1920: {
                items: 2
            }
        }
    });


    /*-----------------------------------------------
      18.  portfolio-slider-active
    -------------------------------------------------*/


    $('.portfolio-slider-active').owlCarousel({
        loop: true,
        dotsEach: 1,
        nav: false,
        items: 3,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            800: {
                items: 2
            },
            1024: {
                items: 3
            },
            1200: {
                items: 3
            },
            1400: {
                items: 3
            },
            1920: {
                items: 3
            }
        }
    });



    /*-----------------------------------------------
      17. Testimonial Wrap
    -------------------------------------------------*/


    $('.testimonial__wrap').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        autoplay: false,
        navText: false,
        autoplayTimeout: 10000,
        items: 1,
        dots: false,
        lazyLoad: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            800: {
                items: 1
            },
            1024: {
                items: 1
            },
            1200: {
                items: 1
            },
            1400: {
                items: 1
            },
            1920: {
                items: 1
            }
        }
    });




    /*--------------------------------
      18. Magnific Popup
    ----------------------------------*/

    $('.video-popup').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        zoom: {
            enabled: true,
        }
    });

    $('.image-popup').magnificPopup({
        type: 'image',
        mainClass: 'mfp-fade',
        removalDelay: 100,
        gallery: {
            enabled: true,
        }
    });


    /*-------------------------------
      19. Price Slider Active
    --------------------------------*/
    $("#slider-range").slider({
        range: true,
        min: 10,
        max: 500,
        values: [110, 400],
        slide: function (event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        " - $" + $("#slider-range").slider("values", 1));


    /*-------------------------------
      20.  Plus Minus Button 
    --------------------------------*/

    $(".cart-plus-minus").append('<div class="dec qtybutton">-</i></div><div class="inc qtybutton">+</div>');

    $(".qtybutton").on("click", function () {
        var $button = $(this);
        var oldValue = $button.parent().find("input").val();
        if ($button.text() == "+") {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 1) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 1;
            }
        }
        $button.parent().find("input").val(newVal);
    });


    /*--------------------------
      21. jQuery scroll Nav
    ---------------------------- */
    $('.onepage--menu').onePageNav({
        scrollOffset: 0
    });



    /*---------------------
        countdown
      --------------------- */
    $('[data-countdown]').each(function () {
        var $this = $(this), finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function (event) {
            $this.html(event.strftime('<span class="cdown day">%-D <p>Days</p></span> <span class="cdown hour">%-H <p>Hour</p></span> <span class="cdown minutes">%M <p>Min</p></span class="cdown second"> <span>%S <p>Sec</p></span>'));
        });
    });


    /* isotop active */
    var $grid = $('.grid');
    var $gridJustified = $('.grid-justified');
    var $gridItems = '.grid-item';
    // filter items on button click
    $grid.imagesLoaded(function () {

        $('.portfolio-menu-active').on('click', 'button', function () {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
        });

        // init Isotope
        $grid.isotope({
            itemSelector: $gridItems,
            percentPosition: true,
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: $gridItems,
            }
        });

        // init Isotope
        $gridJustified.isotope({
            itemSelector: $gridItems,
            percentPosition: true,
            layoutMode: 'fitRows',
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: 1,
            }
        });
    });


    /*--
    Magnific Popup
    ------------------------*/
    $('.img-poppu').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });


    $('.sidebar-active').stickySidebar({
        topSpacing: 80,
        bottomSpacing: 30,
        minWidth: 767,
    });




})(jQuery);




