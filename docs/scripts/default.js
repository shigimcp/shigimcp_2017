'use strict';

//<!--/* ========================= INITIALIZE PAGE ========================= */-->

function pageInit(thisSect) {

    window.localStorage.clear();

    document.onkeydown = closeModalWindow;

    switch (thisSect) {
        case 'splash':

            window.location.hash = '#close';
            splash();

            break;

        case 'work':

            window.location.hash = '#close';
            requestFlashPermission();

            TweenMax.set([btn_resumeD1, btn_resumeD2], { y: -20, autoAlpha: 0 });

            buildBG_work();
            loadAlbumArray();

            break;

        case 'about':

            window.location.hash = '#close';

            TweenMax.set([btn_resumeD1, btn_resumeD2], { y: -20, autoAlpha: 0 });

            loadAboutArray();

            break;

        case 'email_gif':

            window.location.hash = '#close';

            loadEmailGif("img/ea/email_gif/email/NM_TUMBLR_EMAIL_BLAST_deploy/index.html");

            break;

        case 'hilites':

            window.location.hash = '#close';

            break;
    }
}


//<!--/* ========================= FUNCTION: sniffDevice ========================= */-->

function sniffDevice() {

    var device = {
        is_android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        is_blackberry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        is_iphone: function () {
            return navigator.userAgent.match(/iPhone/i);
        },
        is_ipad: function () {
            return navigator.userAgent.match(/iPad/i);
        },
        is_ipod: function () {
            return navigator.userAgent.match(/iPod/i);
        },
        is_ios: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        is_windows_phone: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        is_mobile: function () {
            return (device.is_android() || device.is_blackberry() || device.is_ios() || device.is_windows_phone());
        }
    };

    if (device.is_mobile()) {
        console.log('PING! The User Is Using A Mobile Device!');
    }
}



//<!--/* ========================================================== */-->
//<!--/* ========================= GLOBAL ========================= */-->
//<!--/* ========================================================== */-->

//<!--/* ========================= FUNCTION: handle z-indexes ========================= */-->

var highest = 1;

var publicMethods = {
    up: function () {
        this.css('z-index', ++highest); // increase highest by 1 and set the style
        return this;
    },

    down: function () {
        this.css('z-index', --highest); // increase highest by 1 and set the style
        return this;
    }
};

$.fn.zindex = function (method) {
    if (publicMethods[method]) {
        return publicMethods[method].apply(this);
    } else {
        $.error('Method ' + method + ' does not exist, yo.');
    }
};


//<!--/* ========================= GET COOKIES - FUNCTION: getCookie(cookieName) (see document.cookie in FUNCTIONs: loadAlbumArray & loadImageArray) ========================= */-->

function getCookie(cookieName) {

    var cookieNameEq = cookieName + "=";
    var cookieArray = document.cookie.split(';');

    for (var i = 0; i < cookieArray.length; i++) {

        var thisCookie = cookieArray[i].trim();

        if (thisCookie.indexOf(cookieNameEq) === 0) {
            return thisCookie.substring(cookieNameEq.length, thisCookie.length);
        }
    }

    return "";
}



//<!--/* ========================================================== */-->
//<!--/* ========================= SPLASH ========================= */-->
//<!--/* ========================================================== */-->

//<!--/* ========================= FUNCTION: jump(thisURL) (SPLASH/INTRO) ========================= */-->

function jump(thisURL) {
    location.href = thisURL;
}


//<!--/* ========================= FUNCTION: splash (SPLASH/INTRO) ========================= */-->

var splashTL = new TimelineMax({ paused: true });

function splash() {

    TweenMax.set([splashNav], { autoAlpha: 0 });

    TweenMax.set([logo], { y: 90, width: 700 });

    TweenMax.set([splashNav], { visible: true });

    TweenMax.set([shigeru_logo_kanji], { x: -328.75, y: -145, scale: 1.821705426356589 });
    TweenMax.set([header_mask_afro_w, shigeru_logo_glasses_w_mask], { scaleY: 0 });
    TweenMax.set([header_mask_afro_k, shigeru_logo_glasses_k_mask], { scaleY: 2.5 });

    TweenMax.set(splashHed, { y: -15 });


    splashTL

        //==================== SPLASH 01 ====================

        .fromTo(splashCTA, 0.5, { autoAlpha: 1 }, { autoAlpha: 0, ease: Power3.easeOut }, "frame01 +=0")

        .fromTo(header, 1, { scaleX: 0 }, { scaleX: 2, ease: Power3.easeOut }, "frame01 +=0")

        .to([shigeru_logo_kanji], 1, { x: -910, y: -180, scale: 0.214285714285714, ease: Power3.easeOut }, "frame01 +=0")
        .fromTo(header_mask_kanji, 1, { scaleY: 0 }, { scaleY: 1, ease: Power1.easeOut }, "frame01 +=0")

        .fromTo([shigeru_logo_afro], 1, { scale: 0.95, opacity: 0, transformOrigin: "50% 50%" }, { scale: 1, opacity: 1, transformOrigin: "50% 50%", ease: Power3.easeOut }, "frame01 +=0.5")
        .fromTo([shigeru_logo_glasses], 1, { scale: 0.9, opacity: 0, transformOrigin: "50% top" }, { scale: 1, opacity: 1, transformOrigin: "50% top", ease: Power3.easeOut }, "frame01 +=0.5")

        .to(splashHed, 1, { y: -606, ease: Power3.easeOut }, "frame01 +=0")
        .to(splashHed01, 1, { css: { fontSize: "30px", color: "#FFFFFF", margin: "0", left: "-405.625" }, ease: Power3.easeOut }, "frame01 +=0")
        .to(splashHed02, 1, { css: { fontSize: "20px", color: "#FFFFFF", margin: "0", top: "-52.5", left: "-124" }, ease: Power3.easeOut }, "frame01 +=0")
        .to(splashContact, 1, { css: { fontSize: "18px", color: "#FFFFFF", margin: "0", top: "-94.5", left: "146.25" }, ease: Power3.easeOut }, "frame01 +=0")
        .to(splashEmail, 1, { css: { color: "#FFFFFF" }, ease: Power3.easeOut }, "frame01 +=0")

        .fromTo([calligraphyCredit], 0.5, { y: -20, opacity: 0 }, { y: 0, opacity: 1, ease: Power3.easeOut }, "frame01 +=1")


        //==================== SPLASH 02 ====================

        .to([logo], 0.5, { x: -273, ease: Power3.easeOut }, "frame02 +=0.75")
        .to([shigeru_logo_kanji], 0.5, { x: -520, ease: Power3.easeOut }, "frame02 +=0.75")

        .fromTo(greeting, 0.5, { x: -60, opacity: 0 }, { x: 0, opacity: 1, ease: Power3.easeOut }, "frame02 +=0.75")
        ;
}


function playSplash() {
    splashTL.play();
}


//<!--/* ========================= FUNCTION: splash_logoIcon(thisURL) (SPLASH/INTRO) ========================= */-->

function splash_logoIcon(thisURL) {

    TweenMax.fromTo([splashNav], 1, { autoAlpha: 0 }, { autoAlpha: 1, ease: Power1.easeOut });

    TweenMax.to([header_mask_kanji], 1, { y: 370, ease: Power1.easeOut });

    TweenMax.to([shigeru_logo_afro], 1, { x: -528.75, y: -467.5, scale: 0.214285714285714, ease: Power3.easeOut });
    TweenMax.fromTo([header_mask_afro_w], 1, { scaleY: 0 }, { scaleY: 1, ease: Power1.easeOut });

    TweenMax.to([shigeru_logo_glasses], 1, { x: -528.75, y: -557.5, scale: 0.214285714285714, ease: Power3.easeOut });

    TweenMax.to([greeting], 1, { opacity: 0, ease: Power3.easeOut, onComplete: jump, onCompleteParams: [thisURL] });
}


//<!--/* ========================= FUNCTION: splash_about(thisURL) (SPLASH/INTRO) ========================= */-->

function splash_about(thisURL) {

    TweenMax.fromTo([splashNav], 1, { autoAlpha: 0 }, { autoAlpha: 1, ease: Power1.easeOut });

    TweenMax.to([shigeru_logo_afro], 1, { x: 391, y: 260, scale: 1.428571428571429, ease: Power3.easeOut });
    TweenMax.to([shigeru_logo_glasses], 1, { x: 391.5, y: 308, scale: 1.428571428571429, ease: Power3.easeOut });

    TweenMax.to([header_mask_afro_k], 1, { scaleY: 1.7109375, ease: Power1.easeOut });
    TweenMax.to([header_mask_glasses_k], 1, { scaleY: 0.685546875, ease: Power1.easeOut });

    TweenMax.to([greeting], 1, { opacity: 0, ease: Power3.easeOut, onComplete: jump, onCompleteParams: [thisURL] });
}


//<!--/* ========================= FUNCTION: setHeader(thisSect) ========================= */-->

function setHeader(thisSect) {

    switch (thisSect) {
        case 'work':

            TweenMax.set([header_mask_kanji], { y: 370 });
            TweenMax.set([header_mask_afro_k, header_mask_glasses_k], { scaleY: 6.125 });

            break;

        case 'about':
            TweenMax.set(header_mask_kanji, { y: -370, scaleY: 1 });

            TweenMax.set([shigeru_logo_afro, shigeru_logo_glasses], { autoAlpha: 1, scale: 6.666666666666667 });
            TweenMax.set([shigeru_logo_afro], { x: 1455, y: 900 });
            TweenMax.set([shigeru_logo_glasses], { x: 3100, y: 4040 });

            TweenMax.set([header_mask_afro_k, header_mask_glasses_k], { scaleY: 1.7109375 });

            break;
    }
}



//<!--/* ======================================================== */-->
//<!--/* ========================= HOME ========================= */-->
//<!--/* ======================================================== */-->

//<!--/* ========================= FUNCTION: home (SPLASH/INTRO endframe) ========================= */-->

function home() {

    TweenMax.set([logo], { x: -274.75, y: 90, width: 700 });
    TweenMax.set([nav, btn_resumeD1, btn_resumeD2, btn_resumeV], { autoAlpha: 0, visible: false });

    TweenMax.set([shigeru_logo_kanji], { x: -328.75, y: -145, scale: 1.821705426356589 });
    TweenMax.set([header_mask_afro_w], { scaleY: 0 });
    TweenMax.set([header_mask_afro_k, shigeru_logo_glasses_k_mask], { scaleY: 2.5 });

    TweenMax.set([shigeru_logo_kanji], { x: -520, y: -180, scale: 0.214285714285714 })
}


//<!--/* ========================= FUNCTION: home_logoIcon(thisURL) (SPLASH/INTRO) ========================= */-->

function home_logoIcon(thisURL) {

    TweenMax.set([nav, btn_resumeD1, btn_resumeD2, btn_resumeV], { visible: true });
    TweenMax.to([nav, btn_resumeD1, btn_resumeD2, btn_resumeV], 1, { autoAlpha: 1 });

    TweenMax.to([calligraphyCredit], 1, { autoAlpha: 0, visible: false });


    TweenMax.to([header_mask_kanji], 1, { y: 370, ease: Power1.easeOut });

    TweenMax.to([shigeru_logo_afro], 1, { x: -133, y: -122, scale: 0.214285714285714, ease: Power3.easeOut });
    TweenMax.fromTo([header_mask_afro_w], 1, { scaleY: 0 }, { scaleY: 1, ease: Power1.easeOut });

    TweenMax.to([shigeru_logo_glasses], 1, { x: -360.5, y: -557.5, scale: 0.214285714285714, ease: Power3.easeOut });

    TweenMax.to([greeting], 1, { opacity: 0, ease: Power3.easeOut, onComplete: jump, onCompleteParams: [thisURL] });
}


//<!--/* ========================= FUNCTION: home_about(thisURL) (SPLASH/INTRO) ========================= */-->

function home_about(thisURL) {

    TweenMax.set([nav, btn_resumeD1, btn_resumeD2, btn_resumeV], { visible: true });
    TweenMax.to([nav, btn_resumeD1, btn_resumeD2, btn_resumeV], 1, { autoAlpha: 1 });

    TweenMax.to([calligraphyCredit], 1, { autoAlpha: 0, visible: false });


    TweenMax.to([shigeru_logo_afro], 1, { x: 179, y: 71.25, scale: 1.428571428571429, ease: Power3.easeOut });
    TweenMax.to([shigeru_logo_glasses], 1, { x: 302.75, y: 308.75, scale: 1.428571428571429, ease: Power3.easeOut });

    TweenMax.to([header_mask_afro_k], 1, { scaleY: 1.7109375, ease: Power1.easeOut });
    TweenMax.to([header_mask_glasses_k], 1, { scaleY: 0.685546875, ease: Power1.easeOut });

    TweenMax.to([greeting], 1, { opacity: 0, ease: Power3.easeOut, onComplete: jump, onCompleteParams: [thisURL] });
}



//<!--/* ========================================================= */-->
//<!--/* ========================== NAV ========================== */-->
//<!--/* ========================================================= */-->


var navTimer;

function expandAccordion(thisAccordionID) {

    navTimer = setTimeout('collapseAccordion(' + thisAccordionID + ')', 5000);

    TweenMax.staggerTo([btn_resumeD1, btn_resumeD2], 0.25, { y: 0, autoAlpha: 1, ease: Power1.easeOut }, 0.125);
}

function collapseAccordion(thisAccordionID) {

    clearTimeout(navTimer);

    TweenMax.staggerTo([btn_resumeD1, btn_resumeD2], 0.25, { y: -20, autoAlpha: 0, ease: Power1.easeOut }, 0.125);
}




//<!--/* ========================================================== */-->
//<!--/* ========================== WORK ========================== */-->
//<!--/* ========================================================== */-->


//<!--/* ========================= FUNCTION: work_out(thisSect) (SPLASH/INTRO) ========================= */-->

function work_out(thisSect) {

    resetBG_work();
    about_in();

    TweenMax.to([workBG, workGrid, showcaseContainer], 1.5, { delay: 0.5, autoAlpha: 0, ease: Power3.easeOut, onComplete: jump, onCompleteParams: [thisSect] });
}



//<!--/* ========================= FLASH prompt (ref: https://stackoverflow.com/questions/45679318/google-chrome-is-not-prompting-the-users-to-enable-flash-on-my-site ) ========================= */-->

/**
 * Tries to show browser's promt for enabling flash
 *
 * Chrome starting from 56 version and Edge from 15 are disabling flash by default. To promt user to enable flash, they suggest to send user to flash player download page. Then this browser will catch such request and show a promt to user: https://www.chromium.org/flash-roadmap#TOC-Developer-Recommendations
 * In this method we are forcing such promt by navigating user to adobe site in iframe, instead of top window
 */

var isNewEdge = (navigator.userAgent.match(/Edge\/(\d+)/) || [])[1] > 14;
var isNewSafari = (navigator.userAgent.match(/OS X (\d+)/) || [])[1] > 9;
var isNewChrome = (navigator.userAgent.match(/Chrom(e|ium)\/(\d+)/) || [])[2] > 56 && !/Mobile/i.test(navigator.userAgent);
var canRequestPermission = isNewEdge || isNewSafari || isNewChrome;

function requestFlashPermission() {
    var iframe = document.createElement('iframe');
    iframe.src = 'https://get.adobe.com/flashplayer';
    iframe.sandbox = '';
    document.body.appendChild(iframe);
    document.body.removeChild(iframe);
}



//<!--/* ========================= FUNCTION: buildBG_work ========================= */-->

var gridDisplaceY = -40;

function buildBG_work() {

    var thisW = $('#workBG').width();
    var thisH = 768;

    var thisX = 0;
    var thisY = 0;

    for (var row = 0; row < thisH / 360; row++) {

        var thisRowID = "row" + row;

        thisX = (row * 40) - 100;
        thisY = gridDisplaceY;

        $('#workBG').append('<div class="gridRow" id="' + thisRowID + '"></div>');

        TweenMax.set($('#' + thisRowID), { x: thisX, y: thisY });

        for (var col = 0; col < thisW / 320; col++) {

            var thisImgID = "r" + row + "c" + col;

            switch (col % 2 === 0) {
                case true:

                    thisX = (col * 20) + 20;
                    thisY = (col * 20);

                    $('#' + thisRowID).append('<img class="gridImg" id="' + thisImgID + '" src="img/0elements/grid.svg" width="320px" height="360px">');

                    break;

                case false:

                    thisX = (col * 20) + 0;
                    thisY = (col * 20) - 180;

                    $('#' + thisRowID).append('<img class="gridImg" id="' + thisImgID + '" src="img/0elements/grid.svg" width="320px" height="360px">');

                    break;
            }

            TweenMax.set($('#' + thisImgID), { x: thisX, y: thisY });
        }
    }

    workGrid_logos();
}


//<!--/* ========================= FUNCTION: workGrid_logos ========================= */-->

function workGrid_logos() {

    //<!--/* ------------------------- HEDs ------------------------- */-->

    TweenMax.set([r0c1, r1c1, r1c3], { webkitClipPath: 'polygon(0 0, 100% 0, 100% 300px, 0 300px)' });

    TweenMax.set([hedWeb], { x: 220, y: 10 });
    TweenMax.set([hedPrint], { x: 260, y: -62.5 });
    TweenMax.set([hedOther], { x: 860, y: 82.5 });

    //<!--/* ------------------------- LOGOs ------------------------- */-->

    TweenMax.set([logo_mimi], { x: 300, y: 60 });
    TweenMax.set([logo_ea], { x: 410, y: 67.5 });
    TweenMax.set([logo_ax], { x: 483.75, y: 110 });
    TweenMax.set([logo_hearst], { x: 585, y: 95 });

    TweenMax.set([logo_ddb], { x: 255, y: 8.75 });
    TweenMax.set([logo_mrm], { x: 285, y: 48.75 });
    TweenMax.set([logo_smcp], { x: 930, y: -55 });

    TweenMax.set([logo_heeb], { x: 290, y: -40 });
    TweenMax.set([logo_hb], { x: 370, y: -10 });

    TweenMax.set([showcaseContainer], { css: { height: "0px" }, alpha: 0, transformOrigin: "50% 0" });

    workGrid_fadeIn();
}


//<!--/* ========================= FUNCTION: workGrid_fadeIn ========================= */-->

function workGrid_fadeIn() {

    var setY = 20;

    TweenMax.staggerFromTo(('.gridRow'), 1, { y: -setY * 3, opacity: 0, ease: Power2.easeOut }, { y: -setY, opacity: 1, ease: Power2.easeOut }, 0.375);
    TweenMax.staggerFromTo(('.logoRow'), 1, { y: -setY * 3, opacity: 0, ease: Power2.easeOut }, { y: setY * 1.059375, opacity: 1, ease: Power2.easeOut }, 0.375);
}


//<!--/* ========================= FUNCTION: expandBG_work ========================= */-->

var expandY = 360 * 1.8875;
var showcaseHeight = 721;

function expandBG_work() {

    var expandBG_work_TL = new TimelineLite({ delay: 0.5 });

    expandBG_work_TL

        //==================== EXPAND 01 ====================

        .to([workBG, workGrid], 1.5, { x: -gridDisplaceY * 1.5, transformOrigin: "50% 0", ease: Power3.easeOut }, "frame01 +=0")

        .staggerTo(('.gridRow'), 1, { y: expandY, ease: Power2.easeOut }, 0.125, "frame01 +=0")
        .staggerTo(('.logoRow'), 1, { y: expandY * 1.059375, ease: Power2.easeOut }, 0.125, "frame01 +=0")

        .to([showcaseContainer], 1, { css: { height: showcaseHeight }, alpha: 1, transformOrigin: "50% 0", ease: Power2.easeOut }, "frame01 +=0")
        ;
}


//<!--/* ========================= FUNCTION: resetBG_work ========================= */-->

function resetBG_work() {

    var resetBG_work_TL = new TimelineLite({ delay: 0.5 });

    resetBG_work_TL

        //==================== RESET 01 ====================

        .to([workBG, workGrid], 1.5, { x: 0, transformOrigin: "50% 0", ease: Power3.easeOut }, "frame01 +=0")

        .staggerTo(('.gridRow'), 1, { y: gridDisplaceY + 20, ease: Power3.easeOut }, 0.125, "frame01 +=0")
        .staggerTo(('.logoRow'), 1, { y: 20, ease: Power3.easeOut }, 0.125, "frame01 +=0")

        .to([showcaseContainer], 1, { css: { height: "0px" }, alpha: 0, transformOrigin: "50% 0", ease: Power3.easeOut }, "frame01 +=0")

        ;
}


//<!--/* ========================= FUNCTION: storeMe ========================= */-->

function storeMe(index, value, thisArray) {

    if (typeof (localStorage) === 'undefined') {

        alert('Your browser does not support HTML5 localStorage. Try upgrading.');

    } else {

        try {
            localStorage.setItem(index, JSON.stringify(value));		//saves to the database, "key", "value"
            sessionStorage.setItem(index, JSON.stringify(value));	//saves to the database, "key", "value"

        } catch (e) {
            if (e === QUOTA_EXCEEDED_ERR) {
                alert('Quota exceeded!');							//data wasn't successfully saved due to quota exceed so throw an error
            }
        }
    }
}


//<!--/* ========================= FUNCTIONs: loadAlbumArray, loadImageArray ========================= */-->

var albumArray = [];
var albumArrayLength = 0;

var imageArray = [];
var imageArrayLength = 0;


//<!--/* ------------------------- ARRAY OF ALL ALBUMS - FUNCTION: loadAlbumArray ------------------------- */-->

function loadAlbumArray() {

    if (localStorage.length === 0) {

        $.ajax({
            url: 'scripts/album.php',
            type: 'GET',
            async: true,

            success: function (data) {

                albumArray = JSON.parse(data);

                //<!--/* ------------------------- for localStorage ------------------------- */-->

                var albumArrayTemp = JSON.parse(data);

                $.each(albumArrayTemp, function (index, value) {
                    storeMe(index, value, albumArray);
                });
            },

            error: function (xhr, textStatus, error) {
                console.log('DANGER! DANGER! WILL ROBINSON! albumArray ERROR! albumArray ERROR!');

                console.log('xhr.responseText = ' + xhr.responseText);
                console.log('xhr.statusText = ' + xhr.statusText);
                console.log('textStatus = ' + textStatus);
                console.log('error = ' + error);
            }
        });

        for (var index = 0; index < localStorage.length; index++) {
            var thisArrayObject = JSON.parse(localStorage.getItem(index));

            albumArrayLength = index + 1;
            albumArray.push(thisArrayObject);
        }

        document.cookie = 'albumArrayLength = ' + albumArrayLength + ';expires = Wed, 01 Jan 2020 00:00:00 GMT';

    } else {

        albumArrayLength = getCookie('albumArrayLength');

        for (var index2 = 0; index2 < albumArrayLength; index2++) {
            var thisArrayObject2 = JSON.parse(localStorage.getItem(index2));
            albumArray.push(thisArrayObject2);
        }
    }

    loadImageArray();
}


//<!--/* ------------------------- ARRAY OF ALL IMAGES - FUNCTION: loadImageArray ------------------------- */-->

function loadImageArray() {

    var thisIndex;

    if (localStorage.length === albumArrayLength) {

        $.ajax({
            url: 'scripts/image.php',
            type: 'GET',
            async: true,

            success: function (data) {

                imageArray = JSON.parse(data);
                createAlbumArrays(imageArray);

                //<!--/* ------------------------- for localStorage ------------------------- */-->

                var imageArrayTemp = JSON.parse(data);

                $.each(imageArrayTemp, function (index, value) {
                    thisIndex = index + albumArrayLength;
                    storeMe(index, value, imageArray);
                });
            },

            error: function (xhr, textStatus, error) {
                console.log('DANGER! DANGER! WILL ROBINSON! imageArray ERROR! imageArray ERROR!');

                console.log('xhr.responseText = ' + xhr.responseText);
                console.log('xhr.statusText = ' + xhr.statusText);
                console.log('textStatus = ' + textStatus);
                console.log('error = ' + error);
            }
        });

        for (var index = albumArray.length; index < localStorage.length; index++) {
            var thisArrayObject = JSON.parse(localStorage.getItem(index));

            imageArrayLength = index - albumArray.length + 1;
            imageArray.push(thisArrayObject);
        }

        document.cookie = 'imageArrayLength = ' + imageArrayLength + ';expires = Wed, 01 Jan 2020 00:00:00 GMT';

    } else {

        imageArrayLength = getCookie('imageArrayLength');

        for (var index = albumArrayLength; index < localStorage.length; index++) {

            var thisArrayObject = JSON.parse(localStorage.getItem(index));

            imageArray.push(thisArrayObject);
        }
    }
}


//<!-- ========================= FUNCTION - createAlbumArrays ========================= -->

function createAlbumArrays(imageArray) {

    $.each(albumArray, function (indexA) {

        window['albumArray_' + (albumArray[indexA].album_id)] = [];

        $.each(imageArray, function (indexI) {

            if (albumArray[indexA].album_index === imageArray[indexI].album_index) {

                window['albumArray_' + (albumArray[indexA].album_id)].push(imageArray[indexI]);
            }

        });

    });
}


//<!--/* ========================= FUNCTION: loadWORK(thisAlbum) ========================= */-->

function loadWORK(thisAlbum) {

    switch (thisAlbum) {

        case 'mimi':

            $("#showDescr").load("scripts/work/mimi.php");
            loadSlides(0, thisAlbum, albumArray_mimi);

            break;

        case 'ea':

            $("#showDescr").load("scripts/work/ea.php");
            loadSlides(1, thisAlbum, albumArray_ea);

            break;

        case 'ax':

            $("#showDescr").load("scripts/work/ax.php");
            loadSlides(2, thisAlbum, albumArray_ax);

            break;

        case 'hearst':

            $("#showDescr").load("scripts/work/hearst.php");
            loadSlides(3, thisAlbum, albumArray_hearst);

            break;

        case 'ddb':

            $("#showDescr").load("scripts/work/ddb.php");
            loadSlides(4, thisAlbum, albumArray_ddb);

            break;

        case 'mrm':

            $("#showDescr").load("scripts/work/mrm.php");
            loadSlides(5, thisAlbum, albumArray_mrm);

            break;

        case 'heeb':

            $("#showDescr").load("scripts/work/heeb.php");
            loadSlides(6, thisAlbum, albumArray_heeb);

            break;

        case 'hb':

            $("#showDescr").load("scripts/work/hb.php");
            loadSlides(7, thisAlbum, albumArray_hb);

            break;

        case 'other':

            $("#showDescr").load("scripts/work/other.php");
            loadSlides(8, thisAlbum, albumArray_other);

            break;
    }

    expandBG_work();

    document.getElementById('header').scrollIntoView({ behavior: 'smooth' });
}



//<!--/* ========================= SLIDESHOW - REF: https://www.w3schools.com/howto/howto_js_slideshow.asp ========================= */-->

var slideIndex;

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {

    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function emptySlides() {
    $('.slide').remove();
    $('.dot').remove();
}

function loadSlides(thisAlbumIndex, thisAlbum, thisAlbumArray) {

    emptySlides();

    for (var i = 0; i < thisAlbumArray.length; i++) {

        var thisImage = 'https://www.shigimcp.com/img/' + thisAlbum + '/sl/' + thisAlbumArray[i].src;
        var thisLink;
        var thisFormat = thisAlbumArray[i].format;
        var thisCTA = thisAlbumArray[i].cta;
        var thisAlert = thisAlbumArray[i].alert;
        var mWidth = thisAlbumArray[i].mWidth;
        var mHeight = thisAlbumArray[i].mHeight;


        switch (thisFormat) {
            case 'image':

                thisLink = albumArray[thisAlbumIndex].flpath + thisAlbumArray[i].link;

                break;

            case 'video':

                thisLink = thisAlbumArray[i].link;

                break;

            case 'html5':

                thisLink = albumArray[thisAlbumIndex].flpath + thisAlbumArray[i].link;

                break;

            case 'flash':

                thisLink = albumArray[thisAlbumIndex].flpath + thisAlbumArray[i].link;

                break;
        }


        if (thisAlbumArray[i].link === '#') {
            $("#slideContainer").append("<div class=\"slide fade\")><div class=\"numbertext\">" + (i + 1) + " / " + (thisAlbumArray.length) + "</div><img src=\"" + thisImage + "\" id=\"slideImage" + i + "\"><div class=\"captionText\">" + thisAlbumArray[i].caption + "</div></div>");
        } else {
            $("#slideContainer").append("<div class=\"slide fade\" onClick=\"loadMODAL('" + thisLink + "', " + mWidth + ", " + mHeight + ", '" + thisFormat + "')\"><div class=\"cta\" id=\"cta\">" + thisCTA + "<br><font class=\"ctaAlert\" id=\"ctaAlert\">" + thisAlert + "</font></div><div class=\"numbertext\">" + (i + 1) + " / " + (thisAlbumArray.length) + "</div><img src=\"" + thisImage + "\" id=\"slideImage" + i + "\"><div class=\"captionText\">" + thisAlbumArray[i].caption + "</div></div>");
        }

        $("#dotNav").append("<span class=\"dot\" onClick=\"currentSlide(" + (i + 1) + ")\"></span>");
    }

    slideIndex = 1;
    showSlides(slideIndex);
}



//<!--/* ========================= FUNCTION: includeHTML - REF: https://www.w3schools.com/howto/howto_html_include.asp ========================= */-->

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /*loop through a collection of all HTML elements:*/
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /*make an HTTP request using the attribute value as the file name:*/
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /*remove the attribute, and call this function once more:*/
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /*exit the function:*/
            return;
        }
    }
}



//<!--/* ========================= FUNCTION: loadMODAL ========================= */-->

function closeModalWindow(e) {
    if (e.keyCode == 27) {
        window.location.hash = '#close';
        setTimeout(removeModalContent, 400);
    }
}

function loadMODAL(thisLink, mWdith, mHeight, thisFormat) {

    switch (thisFormat) {
        case 'image':

            $("#modalContent").append("<img id=\"modalObject\" + src=" + thisLink + " width=\"100%\" height=\"100%\">");

            break;

        case 'video':

            $("#modalContent").append("<iframe id=\"modalObject\" width=\"" + mWdith + "\" height=\"" + mHeight + "\" src=\"https://player.vimeo.com/video/" + thisLink + "\"?autoplay=true frameborder=\"0\" allowFullScreen mozallowfullscreen webkitAllowFullScreen></iframe>");

            break;

        case 'video_local':

            // $("#modalContent").append("<iframe id=\"modalObject\" width=\"" + mWdith + "\" height=\"" + mHeight + "\" src=\"" + thisLink + "\"?autoplay=true frameborder=\"0\" allowFullScreen mozallowfullscreen webkitAllowFullScreen></iframe>");

            break;

        case 'html5':

            $("#modalContent").append("<object id=\"modalObject\" type=\"text/html\" data=\"" + thisLink + "\" width=\"100%\" height=\"100%\"></object>");

            break;

        case 'html5_v2':

            $("#modalContent").append("<iframe id=\"modalObject\" width=\"" + mWdith + "\" height=\"" + mHeight + "\" src=" + thisLink + " frameborder=\"0\" allowFullScreen mozallowfullscreen webkitAllowFullScreen></iframe>");

            break;

        case 'flash':

            $("#modalContent").append("<object id=\"modalObject\" type=\"text/html\" data=\"" + thisLink + "\" width=\"100%\" height=\"100%\"></object>");

            break;
    }


    $("#modalContent").width(mWdith);
    $("#modalContent").height(mHeight);


    setTimeout(function () {
        window.location.hash = '#openModal';
    }, 500);
}


//<!--/* ========================= FUNCTION: removeModalContent ========================= */-->

function removeModalContent() {
    $("#modalObject").remove();
}



//<!--/* ========================================================= */-->
//<!--/* ========================= ABOUT ========================= */-->
//<!--/* ========================================================= */-->


//<!--/* ========================= FUNCTION: about02_in() (SPLASH/INTRO) ========================= */-->

function about_in() {

    //<!--/* ------------------------- TIMELINE: aboutTL ------------------------- */-->

    var aboutTL = new TimelineLite({ delay: 0.5 });

    aboutTL

        //==================== SPLASH 01 ====================

        .to([shigeru_logo_afro, shigeru_logo_glasses], 1, { scale: 6.666666666666667, ease: Power3.easeOut }, "frame01 +=0")

        .to([shigeru_logo_afro], 1, { x: 1455, y: 900, ease: Power3.easeOut }, "frame01 +=0")
        .to([header_mask_afro_k], 1, { y: -628.75, scaleY: 1.7109375, ease: Power3.easeOut }, "frame01 +=0")
        .to([header_mask_afro_w], 0.25, { scaleY: 0, ease: Power3.easeOut }, "frame01 +=0")

        .to([shigeru_logo_glasses], 1, { x: 3100, y: 4040, ease: Power3.easeOut }, "frame01 +=0")
        .to([header_mask_glasses_k], 0.6875, { y: -628.75, scaleY: 1.7109375, ease: Power1.easeOut }, "frame01 +=0")
        .to([header_mask_glasses_w], 0.6875, { scaleY: 0, ease: Power1.easeOut }, "frame01 +=0")

        .to([header_mask_kanji], 0.5, { y: -370, ease: Power3.easeOut, onComplete: loadAboutArray }, "frame01 +=0")
        ;

    aboutTL.duration(1.5);
}


//<!--/* ========================= FUNCTION: about02_in() (SPLASH/INTRO) ========================= */-->

function about02_in() {

    TweenMax.set([logo], { x: -643, y: 5, width: 150 });


    //<!--/* ------------------------- TIMELINE: about02TL ------------------------- */-->

    var about02TL = new TimelineLite({ delay: 0.5 });

    about02TL

        //==================== SPLASH 01 ====================

        .fromTo([shigeru_logo_afro, shigeru_logo_glasses], 1, { scale: 1 }, { scale: 6.666666666666667, ease: Power3.easeOut }, "frame01 +=0")

        .fromTo([shigeru_logo_afro], 1, { x: 0, y: 0 }, { x: 1455, y: 900, ease: Power3.easeOut }, "frame01 +=0")
        .fromTo([header_mask_afro_k], 1, { scaleY: 3 }, { scaleY: 1.7109375, ease: Power3.easeOut }, "frame01 +=0")
        .fromTo([header_mask_afro_w], 0.25, { scaleY: 1 }, { scaleY: 0, ease: Power3.easeOut }, "frame01 +=0")

        .fromTo([shigeru_logo_glasses], 1, { x: 0, y: 0 }, { x: 3100, y: 4040, ease: Power3.easeOut }, "frame01 +=0")
        .fromTo([header_mask_glasses_k], 0.875, { scaleY: 2 }, { scaleY: 1.7109375, ease: Power1.easeOut }, "frame01 +=0")
        .fromTo([header_mask_glasses_w], 0.875, { scaleY: 1 }, { scaleY: 0, ease: Power1.easeOut }, "frame01 +=0")

        .fromTo([header_mask_kanji], 0.5, { y: 0 }, { y: -370, ease: Power3.easeOut, onComplete: loadAboutArray }, "frame01 +=0")

        ;

    about02TL.duration(1.5);
}


//<!--/* ========================= FUNCTION: about02_in() (SPLASH/INTRO) ========================= */-->

function about_out(thisSect) {

    //<!--/* ------------------------- TIMELINE: aboutTL ------------------------- */-->

    var aboutTL = new TimelineMax({ delay: 0 });

    aboutTL

        //==================== SPLASH 01 ====================

        .set([thoughtBubble, name_syllables], { autoAlpha: 0 }, "frame01 +=0")

        .to([thoughtFro, thoughtBubble, resetThoughtsID, name_pronunciation, btn_name], 0.25, { autoAlpha: 0, ease: Power3.easeOut }, "frame01 +=0")

        .to([shigeru_logo_afro, shigeru_logo_glasses], 1, { scale: 1, ease: Power3.easeOut }, "frame01 +=0")

        .to([shigeru_logo_afro], 1, { x: 0, y: 0, ease: Power3.easeOut }, "frame01 +=0")
        .to([header_mask_afro_k], 1, { y: 367.5, scaleY: 1, ease: Power3.easeOut }, "frame01 +=0")
        .to([header_mask_afro_w], 1, { y: 367.5, scaleY: 1, ease: Power3.easeOut }, "frame01 +=0")

        .to([shigeru_logo_glasses], 1, { x: 0, y: 0, ease: Power3.easeOut }, "frame01 +=0")
        .to([header_mask_glasses_k], 1, { y: 367.5, scaleY: 1, ease: Power1.easeOut }, "frame01 +=0")
        .to([header_mask_glasses_w], 1, { scaleY: 1, ease: Power1.easeOut }, "frame01 +=0")

        .to([header_mask_kanji], 1, { y: 367.5, ease: Power3.easeOut, onComplete: jump, onCompleteParams: [thisSect] }, "frame01 +=0")
        ;

    aboutTL.duration(1);
}



//<!--/* ========================= NAME / PRONUNCIATION ========================= */-->

function showThis(thisID) {

    switch (thisID) {
        case ('btn_name'):

            TweenMax.to([name_pronunciation], 0.375, { autoAlpha: 1, ease: Power3.easeOut });

            break;

        case ('name_syllable01'):

            TweenMax.to([name_pronunciation], 0.375, { autoAlpha: 1, ease: Power3.easeOut });
            TweenMax.to([name_def01], 0.375, { autoAlpha: 1, ease: Power3.easeOut });

            break;

        case ('name_syllable02'):

            TweenMax.to([name_pronunciation], 0.375, { autoAlpha: 1, ease: Power3.easeOut });
            TweenMax.to([name_def02], 0.375, { autoAlpha: 1, ease: Power3.easeOut });

            break;

        case ('name_syllable03'):

            TweenMax.to([name_pronunciation], 0.375, { autoAlpha: 1, ease: Power3.easeOut });
            TweenMax.to([name_def03], 0.375, { autoAlpha: 1, ease: Power3.easeOut });

            break;
    }
}

function hideThis(thisID) {

    switch (thisID) {
        case ('btn_name'):

            TweenMax.to([name_pronunciation], 0.375, { autoAlpha: 0, ease: Power3.easeOut });

            break;

        case ('name_syllable01'):

            TweenMax.to([name_def01], 0.375, { autoAlpha: 0, ease: Power3.easeOut });
            TweenMax.to([name_pronunciation], 0.375, { autoAlpha: 0, ease: Power3.easeOut });

            break;

        case ('name_syllable02'):

            TweenMax.to([name_def02], 0.375, { autoAlpha: 0, ease: Power3.easeOut });
            TweenMax.to([name_pronunciation], 0.375, { autoAlpha: 0, ease: Power3.easeOut });

            break;

        case ('name_syllable03'):

            TweenMax.to([name_def03], 0.375, { autoAlpha: 0, ease: Power3.easeOut });
            TweenMax.to([name_pronunciation], 0.375, { autoAlpha: 0, ease: Power3.easeOut });

            break;
    }
}



//<!--/* ========================= ARRAY OF ALL THOUGHTS - FUNCTIONs: loadAboutArray ========================= */-->

var aboutArray = [];
var aboutArrayLength = 0;


function loadAboutArray() {

    if (localStorage.length === 0) {

        $.ajax({
            url: 'scripts/about.php',
            type: 'GET',
            async: true,

            success: function (data) {

                aboutArray = JSON.parse(data);

                //<!--/* ------------------------- for localStorage ------------------------- */-->

                var aboutArrayTemp = JSON.parse(data);

                $.each(aboutArrayTemp, function (index, value) {
                    storeMe(index, value, aboutArray);
                });
            },

            error: function (xhr, textStatus, error) {
                console.log('DANGER! DANGER! WILL ROBINSON! aboutArray ERROR! aboutArray ERROR!');

                console.log('xhr.responseText = ' + xhr.responseText);
                console.log('xhr.statusText = ' + xhr.statusText);
                console.log('textStatus = ' + textStatus);
                console.log('error = ' + error);
            }
        });

        for (var index = 0; index < localStorage.length; index++) {
            var thisArrayObject = JSON.parse(localStorage.getItem(index));

            aboutArrayLength = index + 1;
            aboutArray.push(thisArrayObject);
        }

        document.cookie = 'aboutArrayLength = ' + aboutArrayLength + ';expires = Wed, 01 Jan 2020 00:00:00 GMT';

    } else {

        aboutArrayLength = getCookie('aboutArrayLength');

        for (var index2 = 0; index2 < aboutArrayLength; index2++) {
            var thisArrayObject2 = JSON.parse(localStorage.getItem(index2));
            aboutArray.push(thisArrayObject2);
        }
    }

    setTimeout(function () {
        addCurls();
    }, 500);
}



//<!--/* ========================= ADD THOUGHTS ========================= */-->

//<!--/* ------------------------- RANDOM POINTS WITHIN SVG - CIRCLE ------------------------- */-->
//<!--/* ------------------------- REF: https://stackoverflow.com/questions/20539196/creating-svg-elements-dynamically-with-javascript-inside-html ------------------------- */-->

var minAngleDegrees = -170;
var maxAngleDegrees = -10;

var maxRadius = 1000;
var outerRadius = 900;
var innerRadius = 450;

var numPoints;
var cRad = 30;


//<!--/* ------------------------- FUNCTION: getRandomCoords_Circle(minAngleDegrees, maxAngleDegrees, outerRadius, innerRadius) ------------------------- */-->

function getRandomCoords_Circle(minAngleDegrees, maxAngleDegrees, outerRadius, innerRadius) {

    var thisAngle = (Math.random() * (maxAngleDegrees - minAngleDegrees) + minAngleDegrees) / 180 * Math.PI;
    var thisRadius = (Math.random() * (outerRadius - innerRadius) + innerRadius);

    var thisX = Math.cos(thisAngle) * (thisRadius / 2);
    var thisY = Math.sin(thisAngle) * (thisRadius / 2);

    return [thisX, thisY, thisAngle];
}


//<!--/* ------------------------- FUNCTION: testOverlap(thisRollover, rolloverX, rolloverY, thisBrain) ------------------------- */-->
//<!--/* ------------------------- REF: http://www.inkfood.com/collision-detection-with-svg/ ------------------------- */-->

function testOverlap(thisRollover, rolloverX, rolloverY, thisBrain) {

    var newRollover = thisRollover.getBoundingClientRect();


    $('.rollover').each(function (i, obj) {

        var preRollover = obj.getBoundingClientRect();

        var overlap = !(preRollover.left > newRollover.right || preRollover.right < newRollover.left || preRollover.top > newRollover.bottom || preRollover.bottom < newRollover.top);

        if (overlap && thisRollover.id !== obj.id) {

            var newRolloverX;
            var newRolloverY;
            var newRolloverT = newRollover.top;

            if (thisBrain === "left") {

                var newRolloverL = newRollover.left;

                newRolloverX = newRolloverL - (cRad * 2);
                newRolloverY = newRolloverT + (cRad * 2);

                TweenMax.set(newRollover, { x: newRolloverX, y: newRolloverY });

            } else if (thisBrain === "right") {

                var newRolloverR = newRollover.right;

                newRolloverX = newRolloverR + (cRad * 2);
                newRolloverY = newRolloverT + (cRad * 2);

                TweenMax.set(newRollover, { x: newRolloverX, y: newRolloverY });

            } else {
                console.log('No brain activity detected... my sincerest condolences.');
            }
        }

    });
}


//<!--/* ------------------------- FUNCTION: addCurls ------------------------- */-->

var thisBoingPath_LB = document.createElementNS("http://www.w3.org/2000/svg", "path");

thisBoingPath_LB.setAttributeNS(null, "class", "boingPath");
thisBoingPath_LB.setAttributeNS(null, "id", "thisBoingPath_LB");
thisBoingPath_LB.setAttributeNS(null, "d", "M0,245c10.099-47.992,24.712-91.212,42.769-127.508s39.559-65.669,63.435-85.968S156.33,0,183.884,0s53.805,11.225,77.681,31.524S306.943,81.196,325,117.492");
thisBoingPath_LB.setAttributeNS(null, "fill", "none");
thisBoingPath_LB.setAttributeNS(null, "stroke", "#00FF00");


var thisBoingPath_RB = document.createElementNS("http://www.w3.org/2000/svg", "path");

thisBoingPath_RB.setAttributeNS(null, "class", "boingPath");
thisBoingPath_RB.setAttributeNS(null, "id", "thisBoingPath_RB");
thisBoingPath_RB.setAttributeNS(null, "d", "M325,245c-10.099-47.992-24.712-91.212-42.769-127.508c-18.057-36.296-39.559-65.669-63.435-85.968S168.67,0,141.116,0c-27.555,0-53.805,11.225-77.681,31.524S18.057,81.196,0,117.492");
thisBoingPath_RB.setAttributeNS(null, "fill", "none");
thisBoingPath_RB.setAttributeNS(null, "stroke", "#00FF00");


TweenMax.set($('#thoughtBubble'), { autoAlpha: 0 });


function addCurls() {

    thoughts.appendChild(thisBoingPath_LB);
    thoughts.appendChild(thisBoingPath_RB);

    TweenMax.set([thisBoingPath_LB, thisBoingPath_RB], { autoAlpha: 0 });


    numPoints = aboutArray.length;

    for (var i = 0; i < numPoints; i++) {

        switch (aboutArray[i].brain) {
            case ('left'):

                minAngleDegrees = -80;
                maxAngleDegrees = -10;

                break;

            case ('right'):

                minAngleDegrees = -170;
                maxAngleDegrees = -100;

                break;
        }


        var thoughtCoords = getRandomCoords_Circle(minAngleDegrees, maxAngleDegrees, outerRadius, innerRadius);


        var rolloverID = "rollover" + i;
        var rolloverX = thoughtCoords[0] + (outerRadius / 2);
        var rolloverY = thoughtCoords[1] + (outerRadius / 2);


        var curlID = "curl" + i;
        var curlX = thoughtCoords[0] + (outerRadius / 2) - 25;
        var curlY = thoughtCoords[1] + (outerRadius / 2) - 60;
        var curlAngle = thoughtCoords[2] * (180 / Math.PI) + 90;


        var thisCurl = document.createElementNS("http://www.w3.org/2000/svg", "path");

        thisCurl.setAttributeNS(null, "class", "curl");
        thisCurl.setAttributeNS(null, "id", curlID);
        thisCurl.setAttributeNS(null, "d", "M10.164,93.706c7.735,9.34,24.605,8.114,30.362-2.544c2.813-5.207,3.003-11.594,0.186-16.841c-2.904-5.409-9.065-8.554-15.283-9.187c-6.42-0.654-13.07,1.684-16.954,6.63c-3.9,4.967-4.607,12.137,0.127,16.854c4.535,4.519,11.862,4.529,17.812,3.054c6.502-1.612,12.996-5.167,17.529-9.865c4.63-4.799,7.285-11.432,4.873-17.805c-2.334-6.168-8.464-10.812-15.243-12.04c-7.614-1.379-15.903,0.719-22.151,4.969C5.731,60.803,0.579,67.627,3.316,74.503c2.442,6.138,9.839,8.83,16.369,8.566c6.804-0.275,13.364-3.138,18.18-7.649c4.742-4.442,7.872-10.615,7.761-16.987c-0.11-6.344-3.209-12.58-8.088-16.92c-5.093-4.531-11.966-6.989-18.977-6.173c-7.488,0.872-14.26,5.337-16.428,12.352c-2.057,6.655,1.092,13.196,7.015,16.996c5.61,3.599,13.084,4.383,19.476,2.346c12.553-4.002,21.796-17.54,16.672-29.843c-4.598-11.04-18.768-18.509-31.069-14.478C7.754,24.835,1.948,29.951,0.401,36.402c-1.619,6.75,1.803,13.231,7.732,17.037c13.012,8.352,31.07-0.389,36.818-12.776c2.866-6.175,3.009-13.057-0.232-19.131c-2.938-5.505-8.711-10.039-15.202-11.202C15.903,7.89,1.992,21.103,8.207,33.824c2.564,5.248,8.339,8.883,14.24,10.029c6.566,1.275,13.086-0.263,18.328-4.176c10.726-8.007,12.619-23.191,2.918-32.612C34.201-2.154,18.144-2.59,8.912,7.171C4.61,11.719,1.877,17.889,2.466,24.053c0.608,6.364,4.229,11.872,9.602,15.683c5.374,3.812,11.683,4.921,18.234,4.069c1.675-0.218,2.557-2.219,2.17-3.602c-0.474-1.693-2.168-2.261-3.823-2.045c-8.777,1.142-18.597-6.131-19.341-14.408C8.565,15.478,15.746,6.901,24.715,6.412c8.967-0.489,18.345,6.243,18.482,15.054c0.128,8.205-7.129,16.42-16.131,16.4c-8.49-0.019-17.218-7.439-11.98-15.537c2.38-3.68,6.918-6.178,11.536-5.851c4.436,0.314,8.528,3.002,10.931,6.45c5.757,8.263,1.266,18.961-7.086,23.972c-4.61,2.766-10.651,4.208-15.927,2.308c-4.212-1.516-7.828-5.308-7.577-9.743c0.25-4.418,3.944-8.158,8.021-9.971c4.014-1.785,8.712-1.542,12.784-0.067C36,32.41,41.685,40.547,39.007,48.822c-2.678,8.275-12.488,14.607-21.66,12.234c-4.222-1.092-8.558-4.08-8.875-8.519c-0.35-4.903,3.659-8.896,8.411-10.204c9.776-2.69,19.335,4.311,21.422,13.225c2.078,8.875-5.134,17.536-13.882,20.112c-4.005,1.179-9.161,1.445-12.698-1.087c-4.502-3.223-1.064-8.445,2.161-11.161c7.48-6.298,22.26-8.296,27.789,1.365c5.072,8.86-6.388,16.947-13.93,19.792c-3.786,1.428-8.921,2.651-12.772,0.776c-4.126-2.008-3.626-6.896-1.337-10.037c5.212-7.15,17.959-5.482,22.176,1.703c4.825,8.223-1.311,18.582-11.122,19.275c-4.643,0.328-9.373-1.22-12.639-4.367C10.815,90.737,9.138,92.468,10.164,93.706L10.164,93.706z");
        thisCurl.setAttributeNS(null, "cx", curlX);
        thisCurl.setAttributeNS(null, "cy", curlY);
        thisCurl.setAttributeNS(null, "ca", curlAngle);
        thisCurl.setAttributeNS(null, "fill", "#333333");

        thoughts.appendChild(thisCurl);
        TweenMax.set(thisCurl, { x: curlX, y: curlY, rotation: curlAngle, transformOrigin: '50% 50%' });


        var thisRollover = document.createElementNS("http://www.w3.org/2000/svg", "circle");

        thisRollover.setAttributeNS(null, "class", "rollover");
        thisRollover.setAttributeNS(null, "id", rolloverID);
        thisRollover.setAttributeNS(null, "brain", aboutArray[i].brain);
        thisRollover.setAttributeNS(null, "cx", rolloverX);
        thisRollover.setAttributeNS(null, "cy", rolloverY);
        thisRollover.setAttributeNS(null, "r", cRad);
        thisRollover.setAttributeNS(null, "fill", "#ff0000");
        thisRollover.setAttributeNS(null, "fill-opacity", "0");

        thoughts.appendChild(thisRollover);

        thisRollover.addEventListener('mouseover', boing);
        thisRollover.boingParam = thisRollover;
    }

    TweenMax.set(thoughts, { x: 50, y: 60 });
}


//<!--/* ------------------------- FUNCTION: boing(thisRollover, boingPathX, boingPathY) ------------------------- */-->
//<!--/* ------------------------- REF: https://greensock.com/forums/topic/16352-animating-along-a-path/     REF: https://codepen.io/PointC/pen/vKaBxQ ------------------------- */-->

function boing(Event) {

    var thisRollover = Event.target;
    var thisCurl = $('#' + (thisRollover.id.replace('rollover', 'curl')));

    var bezierData;

    switch (true) {
 
        case (thisCurl.attr("ca") > 0):
 
           bezierData = MorphSVGPlugin.pathDataToBezier(thisBoingPath_LB, { align: "relative" });

            break;

        case (thisCurl.attr("ca") < 0):

            bezierData = MorphSVGPlugin.pathDataToBezier(thisBoingPath_RB, { align: "relative" });

            break;
    }

    var tl = new TimelineMax({ paused: true });

    tl
        .to(thisCurl, 0.5, { bezier: { values: bezierData, type: "cubic", autoRotate: 90 }, ease: Power1.easeOut, onComplete: showThought, onCompleteParams: [thisCurl] })
        ;

    TweenMax.set(thisRollover, { autoAlpha: 0 });

    tl.play();
}



//<!--/* ------------------------- FUNCTION: showThought ------------------------- */-->
//<!--/* ------------------------- REF: https://stackoverflow.com/questions/8851023/how-to-get-the-actual-x-y-position-of-an-element-in-svg-with-transformations-and ------------------------- */-->

var thoughtWidth = 400;
var thoughtHeight = 280;


//<!--/* ------------------------- a   b   e  -  a = scaleX, b = , e = transX ------------------------- */-->
//<!--/* ------------------------- c   d   f  -  c = , d = scaleY, f = transY ------------------------- */-->
//<!--/* ------------------------- 0   0   1  -  0 = , 0 = , 1 = scaleZ ------------------------- */-->


function showThought(thisCurl) {

    var thisThoughtIndex = thisCurl.attr("id").replace('curl', '');

    $('#thoughtCopy').html(aboutArray[thisThoughtIndex].thought);

    var thisCurlCTM = document.getElementById(thisCurl.attr("id")).getCTM();

    var thoughtBubbleX;
    var thoughtBubbleY = thisCurlCTM.f - (thoughtHeight * 0.125);


    switch (aboutArray[thisThoughtIndex].brain) {
        case ('left'):
            thoughtBubbleX = thisCurlCTM.e - (thoughtWidth * 0.5);
            break;

        case ('right'):
            thoughtBubbleX = thisCurlCTM.e + (thoughtWidth * 0.125);
            break;
    }

    TweenMax.to([thisCurl], 0.5, { autoAlpha: 0, ease: Power1.easeOut });

    TweenMax.set([thoughtBubble], { x: thoughtBubbleX, y: thoughtBubbleY, transformOrigin: '50% 50%' });
    TweenMax.fromTo([thoughtBubble], 0.5, { scale: 0.95, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, ease: Power3.easeOut });
}


//<!--/* ------------------------- FUNCTION: closeThought ------------------------- */-->

function closeThought() {
    TweenMax.to([thoughtBubble], 0.5, { autoAlpha: 0, ease: Power1.easeOut });
}


//<!--/* ------------------------- FUNCTION: resetThoughts ------------------------- */-->

function resetThoughts() {
    TweenMax.set($('#thoughtBubble'), { autoAlpha: 0 });
    $("#thoughts").empty();
    addCurls();
}



//<!--/* ========================= EMAIL_GIF ========================= */-->

function loadEmailGif(thisURL) {
    $(".email_gifContent").load(thisURL);
}



//<!--/* =========================================================== */-->
//<!--/* ========================= HILITES ========================= */-->
//<!--/* =========================================================== */-->

function loadBanner(thisElem, thisLink, mWdith, mHeight) {
    thisElem.innerHTML = "<object id=\"bannerID\" type=\"text/html\" data=\"" + thisLink + "\" width=\"" + mWdith + "\" height=\"" + mHeight + "\"></object>";
}



//<!--/* ========================= HILITES - FUNCTION: scrollToHilite(thisHilite) ========================= */-->

function scrollToHilite(thisHilite) {
    $('html, body').stop().animate({ scrollTop: $('#' + thisHilite).position().top - 150 }, 1000);
}


//<!--/* ========================= HILITES - FUNCTION: hilites_about(thisURL) (SPLASH/INTRO) ========================= */-->

function hilites_about(thisURL) {

    //<!--/* ------------------------- TIMELINE: hiiltes_aboutTL ------------------------- */-->

    var hiiltes_aboutTL = new TimelineLite({ delay: 0.125, onComplete: jump, onCompleteParams: [thisURL] });

    hiiltes_aboutTL

        //==================== SPLASH 01 ====================

        .to([bodyHilitesID], 0.75, { autoAlpha:0, ease: Power3.easeOut }, "frame01 +=0")

        .to([shigeru_logo_afro, shigeru_logo_glasses], 1, { scale: 6.666666666666667, ease: Power3.easeOut }, "frame01 +=0")

        .to([shigeru_logo_afro], 1, { x: 1455, y: 900, ease: Power3.easeOut }, "frame01 +=0")
        .to([header_mask_afro_k], 1, { y: -628.75, scaleY: 1.7109375, ease: Power3.easeOut }, "frame01 +=0")
        .to([header_mask_afro_w], 0.25, { scaleY: 0, ease: Power3.easeOut }, "frame01 +=0")

        .to([shigeru_logo_glasses], 1, { x: 3100, y: 4040, ease: Power3.easeOut }, "frame01 +=0")
        .to([header_mask_glasses_k], 0.6875, { y: -628.75, scaleY: 1.7109375, ease: Power1.easeOut }, "frame01 +=0")
        .to([header_mask_glasses_w], 0.6875, { scaleY: 0, ease: Power1.easeOut }, "frame01 +=0")

        .to([header_mask_kanji], 0.5, { y: -370, ease: Power3.easeOut}, "frame01 +=0")
        ;

    hiiltes_aboutTL.duration(1.5);
}



//<!--/* ============================================================= */-->
//<!--/* ========================= MEZ VIDEO ========================= */-->
//<!--/* ============================================================= */-->

//==================== FUNCTION: getSiblings(thisChild) ====================
//-------------------- REF: https://gomakethings.com/how-to-get-all-of-an-elements-siblings-with-vanilla-js/ --------------------

function getSiblings(thisChild) {

    // Setup siblings array and get the first sibling
    var siblings = [];
    var sibling = thisChild.parentNode.firstChild;

    // Loop through each sibling and push to the array
    while (sibling) {
        if (sibling.nodeType === 1 && sibling !== thisChild) {
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling
    }

    return siblings;
}


//==================== FUNCTION: rollOver(propsArray) RE: mezCTA - SOOOOOOPER MESSY! Please clean this up for more universal use. ====================

function rollOver(propsArray) {

    for (var thisObjIndex = 0; thisObjIndex < propsArray.length; thisObjIndex++) {

        var propObject = {};
        var key = propsArray[1];

        propObject[key] = propsArray[2];
        propObject['transformOrigin'] = "50% 50%";

        TweenMax.to([propsArray[0]], 0.25, propObject);
        TweenMax.to([getSiblings(propsArray[0])], 0.25, { autoAlpha: propsArray[3] });
    }
}


//<!--/* ========================= FUNCTION: vid_out(thisSect) (MESMERIZE) ========================= */-->

function vid_out(thisSect) {

    var vidSpaceH = window.innerHeight;

    var logoCenterOffset = 10 * vidSpaceH / 1080;

    var logoHeight = vidSpaceH * 880 / 1080;
    var logoWidth = logoHeight * 1000 / 880;
    var logoScale = logoWidth / 150;
    var logoX = window.innerWidth / 2 - logoWidth / 2;
    var logoY = vidSpaceH / 2 - logoHeight / 2 - logoCenterOffset;

    $(window).on('resize', function () {
        vidResize();
    });


    //<!--/* ------------------------- TIMELINE: videoTL ------------------------- */-->

    document.getElementById("mezLogo").style.visibility = "visible";

    var videoTL = new TimelineMax({ delay: 0 });

    videoTL

        .fromTo([mezHeader], 1, { autoAlpha: 0 }, { autoAlpha: 1, ease: Power3.easeOut }, "frame01 +=0")
        .to([mezContent], 1, { backgroundColor: "#FFFFFF", ease: Power3.easeOut }, "frame01 +=0")
        .to([mezVidContainer], 1, { autoAlpha: 0, ease: Power3.easeOut }, "frame01 +=0")

        .fromTo([mezLogo], 1, { x: logoX, y: logoY, width: logoWidth }, { x: -35, y: 5, width: 150, transformOrigin: "50% 50%", ease: Power3.easeOut }, "frame01 +=0")

        .fromTo([header_mask_afro_k], 1, { y: -360, scaleY: 2.5 }, { y: 0, scaleY: 1, transformOrigin: "50% 0%" }, "frame01 +=0")
        .fromTo([header_mask_afro_w], 1, { scaleY: 0 }, { scaleY: 1, transformOrigin: "50% 0%" }, "frame01 +=0")
        .fromTo([header_mask_kanji_w], 1, { y: -360, scaleY: 1.5 }, { y: 0, scaleY: 1, transformOrigin: "50% 0%", onComplete: jump, onCompleteParams: [thisSect] }, "frame01 +=0")
        ;

    videoTL.duration(1);
}



//==================== FUNCTION: vidResize() ====================

function vidResize() {

    var vidSpaceH = $(window).height() - 60;

    if ($(window).width() / vidSpaceH >= 16 / 9) {
        TweenMax.set([mezVid], { height: vidSpaceH, transformOrigin: "50% 50%" });
    }


    var mezVidX = getDims("mezVid")[0];
    var mezVidY = getDims("mezVid")[1];
    var mezVidW = getDims("mezVid")[2];
    var mezVidH = getDims("mezVid")[3];

    var logoCenterOffset = 10 * vidSpaceH / 1080;

    var logoHeight = mezVidH * 880 / 1080;
    var logoWidth = logoHeight * 1000 / 880;
    var logoX = $(window).width() / 2 - logoWidth / 2;
    var logoY = vidSpaceH / 2 - logoHeight / 2 - logoCenterOffset;

    TweenMax.set([mezLogo], { x: logoX, y: logoY, height: logoHeight, transformOrigin: "50% 50%" });
}
