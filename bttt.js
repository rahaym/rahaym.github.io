'use strict';
/*
 * 32 avalable animation effects (from jQuery UI).
 * More info: https://api.jqueryui.com/easings/
 * 
 * linear
 * swing
 * easeInQuad
 * easeOutQuad
 * easeInOutQuad
 * easeInCubic
 * easeOutCubic
 * easeInOutCubic
 * easeInQuart
 * easeOutQuart
 * easeInOutQuart
 * easeInQuint
 * easeOutQuint
 * easeInOutQuint
 * easeInExpo
 * easeOutExpo
 * easeInOutExpo
 * easeInSine
 * easeOutSine
 * easeInOutSine
 * easeInCirc
 * easeOutCirc
 * easeInOutCirc
 * easeInElastic
 * easeOutElastic
 * easeInOutElastic
 * easeInBack
 * easeOutBack
 * easeInOutBack
 * easeInBounce
 * easeOutBounce
 * easeInOutBounce
 */

var animationEasing = $('.back-to-the-top').data('animation');
var scrollSpeed = $('.back-to-the-top').data('speed'); // px per sec; how fast to scroll
var scrollOffset = $('.back-to-the-top').data('offset'); // px; when to show the button

(function ($) {
    $(document).ready(function () {

        $(window).scroll(function () {
            var currentScrollTop = $(window).scrollTop();
            if (currentScrollTop > window.scrollOffset) {
                $('.back-to-the-top').addClass('bttt-active');
            } else {
                $('.back-to-the-top').removeClass('bttt-active');
            }
        });

        $('.back-to-the-top').on("click", function (e) {
            e.preventDefault();
            var currentScrollTop = $(window).scrollTop();
            var animationTime = Math.round((currentScrollTop * 1000) / window.scrollSpeed);
            $("html, body").animate({
                scrollTop: 0
            }, animationTime, window.animationEasing);
        });

    });
}(jQuery))