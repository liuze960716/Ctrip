var stickyEl = document.querySelector('.nav');
function fixed(num) {
  var u = navigator.userAgent;
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  if(isAndroid) {
    document.body.onscroll = function(e) {
      var scrollT = document.body.scrollTop;
      if (scrollT > num) {
        $(stickyEl).addClass('fixed-top');
      }else {
        $(stickyEl).removeClass('fixed-top');
      }
    };
  }else if(isiOS) {
    $(stickyEl).addClass('sticky');
    console.log(11);
  }
}
fixed(200);
