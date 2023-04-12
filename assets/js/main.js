console.log('%c Proudly Crafted with ZiOn.', 'background: #222; color: #bada55');

(function($) {

    'use strict';




    /**
     * -------------------------------------
     * Function for windows height and width
     * -------------------------------------
     */
    function windowSize( el ) {
        var result = 0;
        if("height" == el) {
            result = window.innerHeight ? window.innerHeight : $(window).height();
        }
        if("width" == el) {
            result = window.innerWidth ? window.innerWidth : $(window).width();
        }

        return result;
    };




    /**
     * -------------------------------------
     * Function for email address validation
     * -------------------------------------
     */
    function isValidEmail(emailAddress) {
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        return pattern.test(emailAddress);
    };





    /**
     * -------------------------------------
     * Function for windows height and width
     * -------------------------------------
     */
    function deviceControll() {
        if( windowSize( 'width' ) < 768 ) {
            $('body').removeClass('desktop').removeClass('tablet').addClass('mobile');
        }
        else if( windowSize( 'width' ) < 992 ){
            $('body').removeClass('mobile').removeClass('desktop').addClass('tablet');
        }
        else {
            $('body').removeClass('mobile').removeClass('tablet').addClass('desktop');
        }
    };



    /**
     * ------------------------------------------
     * Function: Home Section Fullscreen View.
     * ------------------------------------------
     */
    var fullScreen = function( outer, inner, margin ) {

        var mainSection     = $( outer ),
            paddingSection  = mainSection.find( inner ),
            windowWidth     = windowSize('width'),
            windowHeight    = windowSize('height')

        var innerSectionHeight = paddingSection.height();

        if( windowHeight >= innerSectionHeight + (margin * 2) ) {

            mainSection.css({
                'height': windowHeight + "px",
                'position': 'relative'
            });

            paddingSection.css({
                'padding-top': (windowHeight - innerSectionHeight) / 2 + 'px',
                'padding-bottom': (windowHeight - innerSectionHeight) / 2 + 'px'
            });

            console.log( windowHeight, innerSectionHeight, (windowHeight - innerSectionHeight) / 2 );
        }
        else {
            mainSection.css({
                'height': "Initial",
                'position': 'relative'
            });

            paddingSection.css({
                'padding-top': margin + 'px',
                'padding-bottom': margin + 'px'
            });
        }
    }




    /**
     * -----------------------
     * Twitter Plugin function
     * -----------------------
     */
    function handleTweets(tweets){
        var element = document.getElementById( 'tweet-js' );
        var tweetObject = tweets[0];
        var html = '<h4 class="title"><i class="fa fa-twitter"></i></h4>' + tweets[0];
        element.innerHTML = html;
    };




    $(window).resize(function() {

        deviceControll();
        fullScreen( '.full-screen-js', '.inner-wrapper', 135 );

    });



    $(document).ready(function() {

        deviceControll();
        fullScreen( '.full-screen-js', '.inner-wrapper', 135 );



        /**
         * ------------------
         * DropDown Menu Code
         * ------------------
         */
        $( '.dropdowns' ).hover(
            function(){
                $(this).addClass('sub-menue-hover').children('.sub-menu').stop().slideDown(200);
            },
            function(){
                $(this).removeClass('sub-menue-hover').children('.sub-menu').stop().slideUp(200);
            }
        );






        /**
         * -----------------
         * Quick Search Form
         * -----------------
         */
        var quickSearchForm = '.quick-search-form';
        $( quickSearchForm ).find('.btn-quick-button').on('click', function(e) {

            var actionParent = $( this ).closest( quickSearchForm ),
                dataAction    = actionParent.find('.search-form'),
                activeClass   = 'quick-search-close';

            e.preventDefault();

            if( actionParent.hasClass( activeClass ) ) {
                actionParent.removeClass( activeClass );

                setTimeout(function() {
                    dataAction.fadeOut(100);
                }, 100);
            } else {
                dataAction.fadeIn(100);
                setTimeout(function() {
                    actionParent.addClass( activeClass );
                }, 100);
            }

        });



        /**
         * ----------------
         * Top Fixed Navbar
         * ----------------
         */
        $(document).on('scroll', function() {
            var activeClass = 'navbar-home',
                ActiveID        = '.main-navbar-top',
                scrollPos       = $(this).scrollTop();

            if( scrollPos > $('.header-section-1, .header-section-2').height() ) {
                $( ActiveID ).addClass( activeClass );
            } else {
                $( ActiveID ).removeClass( activeClass );
            }

            if( windowSize( 'width' ) >= 768 ) {
                if(scrollPos >= $('.navbar-top-outer').height() ) {
                    $('.navbar-fixed-top').css({
                        'margin-top': -$('.navbar-top-outer').height() + 'px',
                        'position': 'fixed'

                    });
                }else {
                    $('.navbar-fixed-top').css({
                        'margin-top': '0px',
                        'position': 'absolute'
                    });
                }
            }else {
                $('.navbar-fixed-top').css({
                    'margin-top': '0px',
                    'position': 'fixed'

                });
            }

        });



        /**
         * ----------------------
         * Top bar Info Switcher
         * ----------------------
         */

        $(".top_bar_info_switcher .active").on('click',function(){
            if($(".top_bar_info_switcher ul").is(':visible')){
                $(".top_bar_info_switcher ul").slideUp(100);
            }else{
                $(".top_bar_info_switcher ul").slideDown(100);
            }
            return false;
        });
        $(".top_bar_info_switcher a").on('click',function(){
            var id=$(this).attr('href');
            var title=$(this).text();
            $(".top_bar_info").hide();
            $(id).show();
            $(".top_bar_info_switcher .active span").text(title);
            $(".top_bar_info_switcher ul").slideUp(100);
            return false;
        });




        /**
         * -------------------------------------
         * Top Fixed Navbar for nav style 2
         * -------------------------------------
         */
        $(document).on('scroll', function() {
            var activeClass = 'navbar-home',
                ActiveID        = '.main-navbar-top',
                scrollPos       = $(this).scrollTop();

            if( scrollPos > $('.header-section-1, .header-section-2').height() ) {
                $( ActiveID ).addClass( activeClass );
            } else {
                $( ActiveID ).removeClass( activeClass );
            }

            if( windowSize( 'width' ) >= 768 ) {
                if(scrollPos >= $('.top_bar_info_wr').height() ) {
                    $('.nav_style_2').css({
                        'margin-top': -$('.top_bar_info_wr').height() + 'px',
                        'position': 'fixed',
                        'background-color': '#fff'

                    });
                }else {
                    $('.nav_style_2').css({
                        'margin-top': '0px',
                        'position': 'absolute',
                        'left': '0',
                        'top': '0',
                        'background-color': 'rgba(255, 255, 255, 0)'
                    });
                }
            }else {
                $('.nav_style_2').css({
                    'margin-top': '0px',
                    'position': 'fixed'

                });
            }

        });





        /**
         * -----------------
         * NAVIGATION SCROLL
         * -----------------
         */
        $('.btn-scroll a, a.btn-scroll').on('click', function (e) {
            e.preventDefault();

            var target = this.hash,
                scrollOffset = Math.abs( $( TopOffsetId ).outerHeight() ),
                $target = ( $(target).offset() || { "top": NaN }).top;

            $('html, body').stop().animate({
                'scrollTop': $target - scrollOffset
            }, 900, 'swing', function () {
                window.location.hash = target;
            });

        });



        /**
         * -----------------
         * PopUp Item Script
         * -----------------
         */
        $('.popup-video').magnificPopup({
            //disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: true,
            fixedContentPos: true
        });





        /**
         * ----------
         * Count Down
         * ----------
         */
        $('.count-down').countdown({
            end_time: "2017/12/13 14:27:28 +0600",
            wrapper: function(unit){
                var wrpr = $('<div></div>').
                addClass(unit.toLowerCase()+'_wrapper').
                addClass('each-item');

                var inner = $('<div></div>').
                addClass('inner').
                appendTo(wrpr);

                var group = $('<div></div>').
                addClass('group').
                appendTo(inner);

                $('<h1 class="counter number"></h1>').appendTo(group);
                $('<hr class="lines"></hr>').appendTo(group);
                $('<h6 class="title">'+unit+'</h6>').appendTo(group);
                return wrpr;
            }
        });






        /**
         * ----------------------------
         * Contact Us Model Set Country
         * ----------------------------
         */
        var contactModel = $('.contact-us-model'),
            imageLink = contactModel.find('.dropdown-menu li').eq(1).find('img').attr('src'),
            dataAction = contactModel.find('.dropdown-toggle').find('img');
        dataAction.attr('src', imageLink);
        contactModel.find('.dropdown-menu').find('a').on('click', function(e) {
            e.preventDefault();
            imageLink = $(this).find('img').attr('src');
            dataAction.attr('src', imageLink);
            console.log("sflkjsfkljdsflsjfljsl");
        });







        /**
         * ------------
         * CONTACT FORM
         * ------------
         */
        $("#contact-form").on('submit', function(e) {
            e.preventDefault();
            var success = $(this).find('.email-success'),
                failed = $(this).find('.email-failed'),
                loader = $(this).find('.email-loading'),
                button = $(this).find('button'),
                postUrl = $(this).attr('action');

            var data = {
                name: $(this).find('.contact-name').val(),
                plan: $(this).find('.contact-plan').val(),
                message: $(this).find('.contact-message').val()
            };

            if ( (data['plan'].length > 1) && (data['message'].length > 1) && (data['name'].length > 1) ) {
                $.ajax({
                    type: "POST",
                    url: postUrl,
                    data: data,
                    beforeSend: function() {
                        button.text('Sending...');
                        success.fadeOut();
                        failed.fadeOut();
                    },
                    success: function(data) {
                        failed.fadeOut(400);
                        success.delay(400).fadeIn(400);
                    },
                    error: function(xhr) { // if error occured
                        success.fadeOut(400);
                        failed.delay(400).fadeIn(200);
                    },
                    complete: function() {
                        button.text('Send Now');
                    }
                });
            } else {
                success.fadeOut(400);
                failed.delay(400).fadeIn(400);
            }

            return false;
        });



        $("#contact-form-2").on('submit', function(e) {
            e.preventDefault();
            var success = $(this).find('.email-success'),
                failed = $(this).find('.email-failed'),
                loader = $(this).find('.email-loading'),
                button = $(this).find('button'),
                postUrl = $(this).attr('action');

            var data = {
                name: $(this).find('.contact-name').val(),
                email: $(this).find('.contact-email').val(),
                message: $(this).find('.contact-message').val()
            };

            if ( isValidEmail(email) && (data['message'].length > 1) && (data['name'].length > 1) ) {
                $.ajax({
                    type: "POST",
                    url: postUrl,
                    data: data,
                    beforeSend: function() {
                        button.text('Sending...');
                        success.fadeOut();
                        failed.fadeOut();
                    },
                    success: function(data) {
                        failed.fadeOut(400);
                        success.delay(400).fadeIn(400);
                    },
                    error: function(xhr) { // if error occured
                        success.fadeOut(400);
                        failed.delay(400).fadeIn(200);
                    },
                    complete: function() {
                        button.text('Proceed');
                    }
                });
            } else {
                success.fadeOut(400);
                failed.delay(400).fadeIn(400);
            }

            return false;
        });



        /**
         * =============================================
         * MAILCHIMP NEWSLETTER SUBSCRIPTION
         * =============================================
         */
        $("#mailchimp-subscribe, #mailchimp-subscribe-2").find('button').on('click', function() {
            $(this).text('loading...');
        });

        $("#mailchimp-subscribe, #mailchimp-subscribe-2").ajaxChimp({
            callback: mailchimpCallback,
            url: "http://technextit.us3.list-manage.com/subscribe/post?u=9e945cce9a6497869d2d3cd79&amp;id=a3aff233b6" // Replace your mailchimp post url inside double quote "".
        });

        function mailchimpCallback(resp) {

            if(resp.result === 'success') {

                $('.subscription-success')
                    .html('<i class="icon icon-icon-check-alt2"></i>' + "&nbsp;" + resp.msg)
                    .delay(500)
                    .fadeIn(1000);

                $('.subscription-failed').fadeOut(500);

            } else if(resp.result === 'error') {
                $('.subscription-failed')
                    .html('<i class="icon icon-icon-close-alt2"></i>' + "&nbsp;" + resp.msg)
                    .delay(500)
                    .fadeIn(1000);

                $('.subscription-success').fadeOut(500);
            }

            $("#mailchimp-subscribe, #mailchimp-subscribe-2").find('button').text('Submit');

        };




        /**
         * ====================================
         * LOCAL NEWSLETTER SUBSCRIPTION
         * ====================================
         */
        $("#local-subscribe").on('submit', function(e) {
            e.preventDefault();
            var data = {
                    email: $(this).find(".subscriber-email").val()
                },
                postUrl = $(this).attr('action');

            if ( isValidEmail(data['email']) ) {
                $.ajax({
                    type: "POST",
                    url: postUrl,
                    data: data,
                    success: function() {
                        $('.subscription-success').fadeIn(1000);
                        $('.subscription-failed').fadeOut(500);
                    }
                });
            } else {
                $('.subscription-failed').fadeIn(1000);
                $('.subscription-success').fadeOut(500);
            }

            $("#mailchimp-subscribe, #mailchimp-subscribe-2").find('button').text('Submit');

            return false;
        });



        /**
         * ============================
         * MAP Init
         * ============================
         */
        $('.btn-map').on('click', function(e) {
            e.preventDefault();

            var el = $(this).closest('.contact-address-area'),
                fa = $(this).find('.fa');

            if( el.hasClass('showMap') ) {
                el.removeClass('showMap').addClass('hideMap');
            }else {
                el.removeClass('hideMap').addClass('showMap');
            }
        });



        /*---------------------------------------------------
         Funfact
         ----------------------------------------------------*/

        (function () {
            if(!$('#funfacts').html()) return;
            var inview = new Waypoint.Inview({
                element: $('#funfacts')[0],
                enter: function (direction) {
                    $('.count.number').each(function () {
                        $(this).prop('Counter', 0).animate({
                            Counter: $(this).text()
                        }, {
                            duration: 3000,
                            easing: 'swing',
                            step: function (now) {
                                $(this).text(Math.ceil(now));
                            }
                        });
                    });
                    this.destroy();
                }
            });

        })();




        /**
         * -----------------------------
         * TESTIMONIAL SYNC WITH CLIENTS
         * -----------------------------
         */
        var testimonialSlider = $(".carousel-wrapper"); // client's message
        testimonialSlider.owlCarousel({
            margin: 30,
            autoPlay : 3000,
            stopOnHover : true,
            pagination: true,
            singleItem : true
        });


        /**
         * -----------------------------
         * TESTIMONIAL SYNC WITH CLIENTS
         * -----------------------------
         */
        var testimonialHomeSlider = $(".carousel-home-slider .carousel-home-wrapper"); // client's message
        testimonialHomeSlider.owlCarousel({
            margin: 30,
            autoPlay : 5000,
            stopOnHover : true,
            singleItem : true,
            pagination:false,
            responsiveRefreshRate : 100,
            afterInit : function(el){
                el.find(".owl-item").eq(0).addClass("synced");
            },
            transitionStyle:"fade",
            afterAction : syncPosition,
            navigation : true,
            navigationText : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            dragBeforeAnimFinish : false,
            mouseDrag : false,
            touchDrag : false
        });
        function syncPosition(el){
            var current = this.currentItem;
            testimonialHomeSlider
                .find(".owl-item")
                .removeClass("synced")
                .eq(current)
                .addClass("synced")
        }




        /**
         * -----------------------------
         * TESTIMONIAL SYNC WITH CLIENTS
         * -----------------------------
         */





        /**
         * ============================
         * Twitter Plugin
         * ============================
         */
        if( $( '#tweet-js' ).length ){
            var configTweets = {
                "id": '345170787868762112',
                "maxTweets": 1,
                "enableLinks": true,
                "showUser": false,
                "showTime": false,
                "showRetweet": false,
                "showInteraction": false,
                "customCallback": handleTweets
            };
            twitterFetcher.fetch( configTweets );
        };




        /**
         * ============================
         * MAP INIT
         * ============================
         */
        var map1 = ".mapCall";
        if( $(map1).length ) {
            // Google Map
            var LocsA = [{
                lat: 45.9,
                lon: 10.85,
                title: 'Title A1',
                html: '<h3>Content A1</h3>',
                icon: 'assets/images/map-location.png',
                animation: google.maps.Animation.DROP
            }];
            var draggableValue;
            if( windowSize("width") < 768 ){
                draggableValue = false;   /*This option is used for disabling drag.*/
            }
            else{
                draggableValue = true;   /*This option is used for disabling drag.*/
            }
            new Maplace({
                locations: LocsA,
                map_div: map1,
                start: 4,
                view_all_text: '',
                mapTypeControl: true,  /*This option will hide map type.*/
                draggable: draggableValue,   /*This option is used for disabling drag.*/
                scaleControl: false,   /*This option is used for disable zoom by scale.*/
                scrollwheel: false,   /*This option is used for disable zoom on mouse.*/
                navigationControl: true,   /**/
                streetViewControl: true,   /**/
                shared: {
                    zoom: 14,
                    html: '%index'
                }
            }).Load();
        };


    });


} (jQuery) );