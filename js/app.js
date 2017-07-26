let tabimg = ['img/0.jpg', 'img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg', 'img/0.jpg', 'img/1.jpg', 'img/2.jpg', 'img/3.jpg', 'img/4.jpg', 'img/5.jpg', 'img/6.jpg', ]
/*
function Random() {
    for (i = 0; i <= 14; i++) {
        document.write('<img src="img/' + Math.round((Math.random() * 7)) + '.jpg" />');
    }
}*/

cards = document.querySelectorAll('img');
for (let i = 0; i < tabimg.length; i++) {
    cards[i].addEventListener("click", function (e) {
        e.currentTarget.setAttribute("src", tabimg[i]);
    })

}