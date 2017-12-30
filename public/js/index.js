(function() {
  'use Strict';
  var $counter = $('#counter');
  var $days = $('.days');
  var $hours = $('.hours');
  var $minutes = $('.minutes');
  var $seconds = $('.seconds');
  var $hbd = $('.hbd');
  var stopUpdater = Number.MIN_VALUE;
  var toggleEven = false;
  var toggleOdd = true;
  const btmMul = 5;
  const leftMul = 30;

  //const perfectTime = new Date("December 6,2017 00:00:00");
  var perfectTime = new Date();
  var perfectTime = new Date();
  perfectTime = new Date(perfectTime.getTime() + (7 * 1000));
  const lovelyMessageSpeed = 250;
  const lovelyMessage = "Happy Birthday YUVI!!! God Bless You !!! Enjoy AND Party :)";
  var lovelyMessageIt = 0;

  function handleCounter() {
    const parsedDate = Date.parse(perfectTime) - Date.now();
    const seconds = Math.floor(parsedDate / 1000) % 60;
    const minutes = Math.floor(parsedDate / 1000 / 60) % 60;
    const hours = Math.floor(parsedDate / 1000 / 60 / 60) % 24;
    const days = Math.floor(parsedDate / 1000 / 60 / 60 / 24) % 31;

    if (stopUpdater != Number.MIN_VALUE) {
      // after counter over
      if (parseInt(seconds, 10) <= 0) {
        $counter.fadeOut("slow", wishBirthday);
        clearInterval(stopUpdater);
        $('#wrapper').css({
          "display":"block"
        })
      } else {
        $days.html(days);
        $hours.html(hours);
        $minutes.html(minutes);
        $seconds.html(seconds);
        //  $counter.html(" hours "+ hours + " minutes "+ minutes +" seconds "+ seconds);
      }
    }

  }

  function rotator(b) {
    const str = '#b' + b;
    if (b % 2 == 0) {
      if (toggleEven) {
        $(str).css({
          //for firefox
          "-moz-animation-name": "rotatebox",
          "-moz-animation-duration": "2s",
          "-moz-animation-iteration-count": "1",
          "-moz-animation-fill-mode": "alternate",
          "-moz-animation-timing-function": "ease-out",
          //for safari & chrome
          "-webkit-animation-name": "rotatebox",
          "-webkit-animation-duration": "2s",
          "-webkit-animation-iteration-count": "1",
          "-webkit-animation-fill-mode": "alternate",
          "-webkit-animation-timing-function": "ease-out",
        });
        toggleEven = false;
      } else {
        $(str).css({
          //for firefox
          "-moz-animation-name": "rotateInversebox",
          "-moz-animation-duration": "2s",
          "-moz-animation-iteration-count": "1",
          "-moz-animation-fill-mode": "alternate",
          "-moz-animation-timing-function": "ease-out",
          //for safari & chrome
          "-webkit-animation-name": "rotateInversebox",
          "-webkit-animation-duration": "2s",
          "-webkit-animation-iteration-count": "1",
          "-webkit-animation-fill-mode": "alternate",
          "-webkit-animation-timing-function": "ease-out",
        });
        toggleEven = true;
      }
    } else {
      if (toggleOdd) {
        $(str).css({
          //for firefox
          "-moz-animation-name": "rotatebox",
          "-moz-animation-duration": "2s",
          "-moz-animation-iteration-count": "1",
          "-moz-animation-fill-mode": "alternate",
          "-moz-animation-timing-function": "ease-out",
          //for safari & chrome
          "-webkit-animation-name": "rotatebox",
          "-webkit-animation-duration": "2s",
          "-webkit-animation-iteration-count": "1",
          "-webkit-animation-fill-mode": "alternate",
          "-webkit-animation-timing-function": "ease-out",
        });
        toggleOdd = false;
      } else {
        $(str).css({
          //for firefox
          "-moz-animation-name": "rotateInversebox",
          "-moz-animation-duration": "2s",
          "-moz-animation-iteration-count": "1",
          "-moz-animation-fill-mode": "alternate",
          "-moz-animation-timing-function": "ease-out",
          //for safari & chrome
          "-webkit-animation-name": "rotateInversebox",
          "-webkit-animation-duration": "2s",
          "-webkit-animation-iteration-count": "1",
          "-webkit-animation-fill-mode": "alternate",
          "-webkit-animation-timing-function": "ease-out",
        });
        toggleOdd = true;
      }
    }
  }

  function mover1() {
    var randleft = leftMul * Math.random();
    var randtop = btmMul * Math.random();
    $('#b1').animate({
      marginLeft: randleft,
      marginBottom: randtop
    }, 4000, function() {
      mover1();
    });
  }

  function loopOne() {
    mover1();
    $('#b1').css({
      //for firefox
      "-moz-animation-name": "rotateOddbox",
      "-moz-animation-duration": "2s",
      "-moz-animation-iteration-count": "1",
      "-moz-animation-fill-mode": "alternate",
      "-moz-animation-timing-function": "ease-out",
      //for safari & chrome
      "-webkit-animation-name": "rotateOddbox",
      "-webkit-animation-duration": "2s",
      "-webkit-animation-iteration-count": "1",
      "-webkit-animation-fill-mode": "alternate",
      "-webkit-animation-timing-function": "ease-out",
    });
    setInterval(function() {
      rotator(1);
    }, 2000);
  }

  function mover2() {
    var randleft = leftMul * Math.random();
    var randtop = btmMul * Math.random();
    $('#b2').animate({
      marginLeft: randleft,
      marginBottom: randtop
    }, 6000, function() {
      mover2();
    });
  }

  function loopTwo() {
    mover2();
    $('#b2').css({
      //for firefox
      "-moz-animation-name": "rotateEvenbox",
      "-moz-animation-duration": "2s",
      "-moz-animation-iteration-count": "1",
      "-moz-animation-fill-mode": "alternate",
      "-moz-animation-timing-function": "ease-out",
      //for safari & chrome
      "-webkit-animation-name": "rotateEvenbox",
      "-webkit-animation-duration": "2s",
      "-webkit-animation-iteration-count": "1",
      "-webkit-animation-fill-mode": "alternate",
      "-webkit-animation-timing-function": "ease-out",
    });
    setInterval(function() {
      rotator(2);
    }, 2000);
  }

  function mover3() {
    var randleft = leftMul * Math.random();
    var randtop = btmMul * Math.random();
    $('#b3').animate({
      marginLeft: randleft,
      marginBottom: randtop
    }, 6000, function() {
      mover3();
    });
  }

  function loopThree() {
    mover3();
    $('#b3').css({
      //for firefox
      "-moz-animation-name": "rotateOddbox",
      "-moz-animation-duration": "2s",
      "-moz-animation-iteration-count": "1",
      "-moz-animation-fill-mode": "alternate",
      "-moz-animation-timing-function": "ease-out",
      //for safari & chrome
      "-webkit-animation-name": "rotateOddbox",
      "-webkit-animation-duration": "2s",
      "-webkit-animation-iteration-count": "1",
      "-webkit-animation-fill-mode": "alternate",
      "-webkit-animation-timing-function": "ease-out",
    });
    setInterval(function() {
      rotator(3);
    }, 2000);
  }

  function mover4() {
    var randleft = leftMul * Math.random();
    var randtop = btmMul * Math.random();
    $('#b4').animate({
      marginLeft: randleft,
      marginBottom: randtop
    }, 6000, function() {
      mover4();
    });
  }

  function loopFour() {
    mover4();
    $('#b4').css({
      //for firefox
      "-moz-animation-name": "rotateEvenbox",
      "-moz-animation-duration": "2s",
      "-moz-animation-iteration-count": "1",
      "-moz-animation-fill-mode": "alternate",
      "-moz-animation-timing-function": "ease-out",
      //for safari & chrome
      "-webkit-animation-name": "rotateEvenbox",
      "-webkit-animation-duration": "2s",
      "-webkit-animation-iteration-count": "1",
      "-webkit-animation-fill-mode": "alternate",
      "-webkit-animation-timing-function": "ease-out",
    });
    setInterval(function() {
      rotator(4);
    }, 2000);
  }

  function mover5() {
    var randleft = leftMul * Math.random();
    var randtop = btmMul * Math.random();
    $('#b5').animate({
      marginLeft: randleft,
      marginBottom: randtop
    }, 6000, function() {
      mover5();
    });
  }

  function loopFive() {
    mover5();
    $('#b5').css({
      //for firefox
      "-moz-animation-name": "rotateOddbox",
      "-moz-animation-duration": "2s",
      "-moz-animation-iteration-count": "1",
      "-moz-animation-fill-mode": "alternate",
      "-moz-animation-timing-function": "ease-out",
      //for safari & chrome
      "-webkit-animation-name": "rotateOddbox",
      "-webkit-animation-duration": "2s",
      "-webkit-animation-iteration-count": "1",
      "-webkit-animation-fill-mode": "alternate",
      "-webkit-animation-timing-function": "ease-out",
    });
    setInterval(function() {
      rotator(5);
    }, 2000);
  }

  function mover6() {
    var randleft = leftMul * Math.random();
    var randtop = btmMul * Math.random();
    $('#b6').animate({
      marginLeft: randleft,
      marginBottom: randtop
    }, 6000, function() {
      mover6();
    });
  }

  function loopSix() {
    mover6();
    $('#b6').css({
      //for firefox
      "-moz-animation-name": "rotateEvenbox",
      "-moz-animation-duration": "2s",
      "-moz-animation-iteration-count": "1",
      "-moz-animation-fill-mode": "alternate",
      "-moz-animation-timing-function": "ease-out",
      //for safari & chrome
      "-webkit-animation-name": "rotateEvenbox",
      "-webkit-animation-duration": "2s",
      "-webkit-animation-iteration-count": "1",
      "-webkit-animation-fill-mode": "alternate",
      "-webkit-animation-timing-function": "ease-out",
    });
    setInterval(function() {
      rotator(6);
    }, 2000);
  }

  function wishBirthday() {

    $('.container').css({
      display: "block"
    })


    loopOne();
    loopTwo();
    loopThree();
    loopFour();
    loopFive();
    loopSix();

    $('#bulb_yellow').addClass('bulb-glow-yellow');
    $('#bulb_red').addClass('bulb-glow-red');
    $('#bulb_blue').addClass('bulb-glow-blue');
    $('#bulb_green').addClass('bulb-glow-green');
    $('#bulb_pink').addClass('bulb-glow-pink');
    $('#bulb_orange').addClass('bulb-glow-orange');
    $('#bulb_yellow').addClass('bulb-glow-yellow-after');
    $('#bulb_red').addClass('bulb-glow-red-after');
    $('#bulb_blue').addClass('bulb-glow-blue-after');
    $('#bulb_green').addClass('bulb-glow-green-after');
    $('#bulb_pink').addClass('bulb-glow-pink-after');
    $('#bulb_orange').addClass('bulb-glow-orange-after');

  }

  function updater() {
    stopUpdater = setInterval(handleCounter, 1000);
  }

  function writer() {
    if (lovelyMessageIt == lovelyMessage.length) {
      clearInterval(clearMessage);
    }
    $('.message').html($('.message').html() + lovelyMessage.charAt(lovelyMessageIt));
    lovelyMessageIt++;
  }

  function writeMessage() {
    $('.text').fadeOut("slow", function() {
      var clearMessage = setInterval(writer, lovelyMessageSpeed);
    });
  }

  function init() {
    updater();
    $('.text').click(writeMessage);
  }
  init();
})();
