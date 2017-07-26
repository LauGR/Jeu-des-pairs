let tabimg = new Array();
tabimg[0] = "img/0.jpg";
tabimg[1] = "img/1.jpg";
tabimg[2] = "img/2.jpg";
tabimg[3] = "img/3.jpg";
tabimg[4] = "img/4.jpg";
tabimg[5] = "img/5.jpg";
tabimg[6] = "img/6.jpg";
tabimg[7] = "img/0.jpg";
tabimg[8] = "img/1.jpg";
tabimg[9] = "img/2.jpg";
tabimg[10] = "img/3.jpg";
tabimg[11] = "img/4.jpg";
tabimg[12] = "img/5.jpg";
tabimg[13] = "img/6.jpg";

 function Random() {
        for (i = 0; i <= 14; i++) {
            document.write('<img src="img/' + Math.round((Math.random() * 7)) + '.jpg" />');
        }
 }

function show() {
    cards = document.querySelectorAll('img');
    for (i = 0; i < tabimg.length; i++) {
        cards[i] = tabimg[i];
    }
Random();
}
 