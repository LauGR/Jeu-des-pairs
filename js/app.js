function Random() {
    for (i = 1; i <= 14; i++) {
        document.write('<img src="img/' + Math.round((Math.random() * 7)) + '.jpg" />');
    }
}