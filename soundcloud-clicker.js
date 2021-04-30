console.log('soundcloud-clicker');
var bs = document.querySelectorAll('button.sc-button-download.sc-button.sc-button-small.sc-button-responsive');
console.log(bs.length);

for (var i = 0; i < bs.length; i++) {
    setTimeout(function(p1) {
        console.log('lambda');
        console.log(p1);
        bs[p1].click();
        console.log('click');
    }, i*3000, i);
}