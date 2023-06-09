$(document).ready(function() {
    // ---------  Script Back to top -------------------------------------------------
    // hide #back-top first
    $("#back-top").hide();
    // fade in #back-top
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#back-top').fadeIn();
        } else {
            $('#back-top').fadeOut();
        }
        //Phương add 21/11/2022
        var pos_body = $('html,body').scrollTop();
        var height_scren = $(window).height();
        var left = $('.box_fix').height();
        if (pos_body > 71) {
            if (height_scren > left)
                $('.box_fix').addClass('sticky_left');
        } else {
            $('.box_fix').removeClass('sticky_left');
        }
    });
    // scroll body to 0px on click
    $('#back-top a').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    // ---------  End Script Back to top ---------------------------------------------

    $('.banner-carousel').owlCarousel({
        loop: $(this).find('.banner-carousel .item').size() > 1 ? true : false,
        dots: $(this).find('.banner-carousel .item').size() > 1 ? true : false,
        nav: false,
        autoplay: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            }
        },
        onInitialize: function(event) {
            if ($('.banner-carousel .item').length <= 1) {
                this.settings.loop = false;
            }
        }
    });

    $('.student-carousel').owlCarousel({
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        autoplay: true,
        loop: $(this).find('.student-carousel .item').size() > 1 ? true : false,
        responsiveClass: false,
        dots: true,
        nav: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            668: {
                items: 2
            },
            992: {
                items: 2
            }
        }
    });

    $('.partner-carousel').owlCarousel({
        autoplaySpeed: 1500,
        autoplayTimeout: 6000,
        autoplay: true,
        loop: $(this).find('.partner-carousel .item').size() > 1 ? true : false,
        responsiveClass: false,
        dots: false,
        nav: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 3
            },
            668: {
                items: 4
            },
            992: {
                items: 6
            }
        }
    });

    $('.event-carousel').owlCarousel({
        autoplaySpeed: 800,
        autoplayTimeout: 10000,
        autoplay: true,
        loop: $(this).find('.event-carousel .item_event').size() > 1 ? true : false,
        responsiveClass: false,
        dots: false,
        nav: true,
        navText: [
            "<i class=\"fa fa-angle-left\"></i>",
            "<i class=\"fa fa-angle-right\"></i>"
        ],
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            668: {
                items: 2
            },
            992: {
                items: 3
            }
        }

    });
    $('.job-carousel').owlCarousel({
        autoplaySpeed: 1000,
        autoplayTimeout: 6000,
        autoplay: true,
        loop: $(this).find('.job-carousel .item-jobs').size() > 1 ? true : false,
        responsiveClass: false,
        dots: false,
        nav: true,
        navText: [
            "<i class=\"fa fa-angle-left\"></i>",
            "<i class=\"fa fa-angle-right\"></i>"
        ],
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            992: {
                items: 3
            }
        }

    });
    $('.staff-carousel').owlCarousel({
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        autoplay: true,
        loop: $(this).find('.staff-carousel .item_staff').size() > 1 ? true : false,
        responsiveClass: false,
        dots: true,
        nav: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });
    $('.staff1-carousel').owlCarousel({
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        autoplay: true,
        loop: $(this).find('.staff-carousel .item_staff').size() > 1 ? true : false,
        responsiveClass: false,
        dots: true,
        nav: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    });

    $('.employer-carousel').owlCarousel({
        autoplaySpeed: 600,
        autoplayTimeout: 3000,
        autoplay: true,
        loop: $(this).find('.employer-carousel .item').size() > 1 ? true : false,
        responsiveClass: false,
        dots: true,
        nav: false,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            }
        }
    });
    $('.university-carousel').owlCarousel({
        autoplaySpeed: 2000,
        autoplayTimeout: 5000,
        autoplay: true,
        loop: $(this).find('.university-carousel .item').size() > 1 ? true : false,
        responsiveClass: false,
        dots: true,
        nav: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });

    $('.aboutJob-carousel').owlCarousel({
        autoplaySpeed: 1000,
        autoplayTimeout: 5000,
        autoplay: true,
        loop: $(this).find('.aboutJob-carousel .item_about').size() > 1 ? true : false,
        responsiveClass: false,
        dots: true,
        nav: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            668: {
                items: 2
            },
            992: {
                items: 2
            }
        }
    });
    $('.news-carousel').owlCarousel({
        autoplaySpeed: 800,
        autoplayTimeout: 10000,
        autoplay: true,
        loop: $(this).find('.news-carousel .item').size() > 1 ? true : false,
        responsiveClass: false,
        dots: false,
        nav: true,
        navText: [
            "<i class=\"fa fa-chevron-left\"></i>",
            "<i class=\"fa fa-chevron-right\"></i>"
        ],
        autoplayHoverPause: true,
        items: 1
    });

    menu_repo();

    $('.header_message .profile').click(function() {
        if ($('.hd_user').hasClass('show')) {
            $(".hd_user").removeClass("show");
            $('.content_repo').removeClass('hiden_ove');
            $('.ovelay_menu').css('display', 'none');
            if ($('.icon_search').hasClass('open_search')) {
                $('.content_repo').addClass('hiden_ove');
                $('.ovelay_menu').css('display', 'block');
            }
        } else {
            $(".header_message div").removeClass("show");
            $(".hd_user").addClass("show");
            $('.content_repo').addClass('hiden_ove');
            $('.ovelay_menu').css('display', 'block');
            $('.ovelay_menu').css('opacity', '0.4');

        }
    });
    $('.header_message .box_mess').click(function() {
        if ($('.gr_mess').hasClass('show')) {
            $(".gr_mess").removeClass("show");
            $('.content_repo').removeClass('hiden_ove');
            $('.ovelay_menu').css('display', 'none');
            if ($('.icon_search').hasClass('open_search')) {
                $('.content_repo').addClass('hiden_ove');
                $('.ovelay_menu').css('display', 'block');
            }
        } else {
            $(".header_message div").removeClass("show");
            $(".gr_mess").addClass("show");
            $('.content_repo').addClass('hiden_ove');
            $('.ovelay_menu').css('display', 'block');
            $('.ovelay_menu').css('opacity', '0.4');

        }
    });
    search_repo();
    read_more();
    clickTab();
    $('.ovelay_menu').click(function() {
        $(".header_message div").removeClass("show");
        $('.content_repo').removeClass('hiden_ove');
        $('.ovelay_menu').css('display', 'none');
    });
    //show/hide password
    $(".toggle-password").click(function() {

        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });
    $('#tabAll').click(function() {
        if ($('.all-tab ul').hasClass('active_tab')) {
            $('.all-tab ul').removeClass('active_tab');
        } else {
            $('.all-tab ul').addClass('active_tab');
        }
        if ($(window).width() > 991) {
            $('.nav-desktop').click(function() {
                $('.all-tab ul').removeClass('active_tab');
            })
        }
    })

    // Search filter list student offer
    $('.btt_search_advanced').click(function() {
        $('.box_search_ad').addClass('active_search');
        $('.show_search').hide();
        $('.hide_search').show();
    });
    $('.btt_search_hide').click(function() {
        $('.box_search_ad').removeClass('active_search');
        $('.show_search').show();
        $('.hide_search').hide();
    })
});

function menu_repo() {
    var show_menu_icon = $('.show_menu_icon');
    var show_hide_icon = $('.show_hide_icon');
    var ovelay_menu = $('.ovelay_menu');
    var content_repo = $('.content_repo');
    var height_windows = $(window).height();
    var div_menu = $('.navigation');
    var ul_menu = $('ul.nav-dtu').height();

    show_menu_icon.click(function() {
        if (height_windows >= ul_menu) {
            div_menu.css('overflow', 'visible');
        } else {
            var hay = ul_menu - 45;
            content_repo.css('height', hay);
            div_menu.css('overflow', 'visible');
        }
        $(this).css('display', 'none');
        div_menu.css('right', '0');
        content_repo.addClass('hiden_ove');
        show_hide_icon.css('display', 'block');
        ovelay_menu.css('display', 'block');
    });
    show_hide_icon.click(function() {
        $(this).css('display', 'none');
        div_menu.css('right', '-400px');
        content_repo.removeClass('hiden_ove');
        content_repo.css('height', 'auto');
        show_menu_icon.css('display', 'block');
        ovelay_menu.css('display', 'none');
        if ($('.icon_search').hasClass('open_search')) {
            content_repo.addClass('hiden_ove');
            ovelay_menu.css('display', 'block');
        }
        if ($('.profile').hasClass('active')) {
            content_repo.addClass('hiden_ove');
            ovelay_menu.css('display', 'block');
        }
    });
    ovelay_menu.click(function() {
        $(this).css('display', 'none');
        div_menu.css('right', '-400px');
        content_repo.removeClass('hiden_ove');
        content_repo.css('height', 'auto');
        show_menu_icon.css('display', 'block');
        show_hide_icon.css('display', 'none');

    });
}

function clickTab() {
    $('input[type=radio][name=cbointerview]').change(function() {
        if (this.value == 'online') {
            $(".type_view").html("Link phỏng vấn");
        } else if (this.value == 'offline') {
            $(".type_view").html("Địa điểm phỏng vấn");
        }
    });
}

function openForm() {
    //$("#popupForm").show();
    $(".loginPopup").fadeIn("slow");
    $(".darkness").css('opacity', '0.8').fadeIn("slow");
    $("#popupForm").fadeIn("slow");
}

function closeForm() {
    //$("#popupForm").hide();
    $(".loginPopup").fadeOut("slow");
    $(".darkness").fadeOut("slow");
    $("#popupForm").fadeOut("slow");
}
$(document).ready(function() {
    $('.darkness').click(function() {
        $(".loginPopup").fadeOut("slow");
        $(".darkness").fadeOut("slow");
        $("#popupForm").fadeOut("slow");

    });
});

function search_repo() {
    var search_icon = $('.search_job');
    var ovelay_menu = $('.ovelay_menu');
    var content_repo = $('.content_repo');
    var search = $('.search');
    var icon_search = $('.icon_search');

    search_icon.click(function() {
        if (icon_search.hasClass('open_search')) {
            search.css('display', 'none');
            content_repo.removeClass('hiden_ove');
            ovelay_menu.css('display', 'none');
            icon_search.removeClass('open_search');
            if ($('.profile').hasClass('active')) {
                content_repo.addClass('hiden_ove');
                ovelay_menu.css('display', 'block');
            }
        } else {
            search.css('display', 'block');
            content_repo.addClass('hiden_ove');
            ovelay_menu.css('display', 'block');
            icon_search.addClass('open_search');
        }
    });

    var width_screen = $(window).width();
    ovelay_menu.click(function() {
        if (width_screen < 992) {
            search.css('display', 'none');
            content_repo.removeClass('hiden_ove');
            ovelay_menu.css('display', 'none');
            icon_search.removeClass('open_search');
            $(".profile").removeClass("active");
            $(".list_user").removeClass("display");
        }
    });
}

function read_more() {
    var view_more = $('.view_more');
    view_more.click(function() {
        $(this).prev().toggle();
        $(this).siblings('.dots').toggle();
        if (view_more.hasClass('view_less')) {
            view_more.removeClass('view_less');
            $(this).html('Xem thêm');
        } else {
            view_more.addClass('view_less');
            $(this).html('Thu gọn');
        }
    });
}

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('.file_upload_wrap').hide();
            $('.file_content').show();
            $('.file_title').html(input.files[0].name);
            $('.txtResumeDisplayName').val(input.files[0].name);
        };
        reader.readAsDataURL(input.files[0]);

    } else {
        removeUpload();
    }
}

function removeUpload() {
    $('.file_content').hide();
    $('.file_upload_wrap').show();
}

function clickTabEvaluate(control) {
    var count = $('.tab-evaluate .tab-evaluate-title').length;
    $(".tab-evaluate-box").hide();
    $(".tab-evaluate-title").removeClass("active_tab");
    for (var i = 1; i <= count; i++) {
        if ($("#" + control.id).attr("data") == "tabs-" + i) {
            $("#tabs-" + i).show();
            $("#tab_" + i).addClass("active_tab");
        }
    }
}

function tabNews(control) {
    var count = $('.all-tab .nav-link').length;
    $(".nav-link").removeClass("active");
    $(".tab-pane").removeClass("active");
    for (var i = 1; i <= count; i++) {
        if ($("#" + control.id).attr("data") == "nav-0" + i) {
            // $("#nav-0" + i).show();
            $("#nav-tab-0" + i).addClass("active");
            $("#nav-0" + i).addClass("active");
        }
    }
}