var random_images_array = ['skinvestor1.jpg', 'skinvestor2.jpg', 'skinvestor3.jpg', 'skinvestor4.jpg', 'skinvestor5.jpg'];

function getRandomImage(imgAr, path) {
    path = path || 'img/random/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<img src="' + path + img + '" alt = "skinvestor.com" class="responsive-image">';
    document.write(imgStr); document.close();
}
