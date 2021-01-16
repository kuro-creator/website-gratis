const html = `<!DOCTYPE html>
<html>
<title>Project Theme</title>
<link href="style.css" rel="stylesheet"/>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="icon" href="https://telegra.ph/file/3b29ca150f62a642ec257.png">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/kuro-creator/website-gratis/css/back-to-top-grey.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/kuro-creator/website-gratis/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/kuro-creator/website-gratis/css/Prj-Theme.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/kuro-creator/website-gratis/css/Font-Inconsolata.css">
<style>
body, html {
height: 100%;
font-family: "Inconsolata", sans-serif;
}

.bgimg {
background-position: center;
background-size: cover;
background-image: url("https://wallpaperaccess.com/full/3440.jpg");
min-height: 100%;
}

.menu {
display: none;
}
</style>
<body>

<!-- Links (sit on top) -->
<div class="w3-top">
<div class="w3-row w3-padding w3-black">
<div class="w3-col s3">
<a href="#" class="w3-button w3-block w3-red">HOME</a>
</div>
<div class="w3-col s3">
<a href="#project" class="w3-button w3-block w3-yellow">PROJECT</a>
</div>
<div class="w3-col s3">
<a href="#about" class="w3-button w3-block w3-green">ABOUT</a>
</div>
<div class="w3-col s3">
<a href="#contact" class="w3-button w3-block w3-blue">CONTACT</a>
</div>
</div>
</div>

<!-- Back to Top -->
<button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>

<!-- Header with image -->
<header class="bgimg w3-display-container w3-grayscale-min" id="home">
<div class="w3-display-bottomleft w3-center w3-padding-large w3-hide-small">
<span class="w3-tag"></span>
</div>
<div class="w3-display-middle w3-center">
<span style="font-size:50px;color:Tomato;"></span>
</div>
<div class="w3-display-bottomright w3-center w3-padding-large">
<span class="w3-text-white"><b>© Project Theme</b></span>
</div>
</header>

<!-- Add a background color and large text to the whole page -->
<div class="w3-sand w3-grayscale w3-large">


<!-- Project Container -->
<div class="w3-container" id="project">
<div class="w3-content" style="max-width:700px">
<h5 class="w3-center w3-padding-64"><span class="w3-tag w3-wide"><b>PROJECT LIST</b></span></h5>

<div class="w3-row w3-center w3-card w3-padding">
<a href="javascript:void(0)" onclick="openMenu(event, 'Website');" id="myLink">
<div class="w3-col s6 tablink">Website</div>
</a>
<a href="javascript:void(0)" onclick="openMenu(event, 'Bot');">
<div class="w3-col s6 tablink">Bot</div>
</a>
</div>

<div id="Website" class="w3-container menu w3-padding-48 w3-card">
         <p><b>Hey bossq~ Selamat datang di daftar project saya...</b></p>
         <div class="row">
            <div style="display: block; margin: 20px auto;" class="col-sm-4">
               <div class="card text-center">
                  <div class="card-body">
                     <img src="https://i.pinimg.com/originals/53/4a/c6/534ac638cfef35665e793f4c9c2068c4.jpg" width="150" height="150">
                     <h5 class="card-title">Project 1</h5>
                     <p class="card-text">Description</p>
                     <a href="https://example.floral.workers.dev" class="btn btn-success" target="_blank">Click Here</a>
                  </div>
               </div>
            </div>
            <div style="display: block; margin: 20px auto;" class="col-sm-4">
               <div class="card text-center">
                  <div class="card-body">
                     <img src="https://i.pinimg.com/originals/53/4a/c6/534ac638cfef35665e793f4c9c2068c4.jpg" width="150" height="150">
                     <h5 class="card-title">Project 2</h5>
                     <p class="card-text">Description</p>
                     <a href="https://example.floral.workers.dev/" class="btn btn-success" target="_blank">Click Here</a>
                  </div>
               </div>
            </div>
            <div style="display: block; margin: 20px auto;" class="col-sm-4">
               <div class="card text-center">
                  <div class="card-body">
                     <img src="https://i.pinimg.com/originals/53/4a/c6/534ac638cfef35665e793f4c9c2068c4.jpg" width="150" height="150">
                     <h5 class="card-title">Project 3</h5>
                     <p class="card-text">Description</p>
                     <a href="https://example.floral.workers.dev/" class="btn btn-success" target="_blank">Click Here</a>
                  </div>
               </div>
            </div>
         </div>
         <div class="row">
            <div style="display: block; margin: 20px auto;" class="col-sm-4">
               <div class="card text-center">
                  <div class="card-body">
                     <img src="https://cdn.shopify.com/s/files/1/0276/0323/9045/products/ZeroTwo-08-Cap-Uniform-Chibi-Ninecolor_1024x1024.jpg?v=1581707275" width="150" height="150">
                     <h5 class="card-title">Project 4</h5>
                     <p class="card-text">Description</p>
                     <a href="https://example.floral.workers.dev/" class="btn btn-success" target="_blank">Click Here</a>
                  </div>
               </div>
            </div>
            <div style="display: block; margin: 20px auto;" class="col-sm-4">
               <div class="card text-center">
                  <div class="card-body">
                    <img src="https://cdn.shopify.com/s/files/1/0276/0323/9045/products/ZeroTwo-08-Cap-Uniform-Chibi-Ninecolor_1024x1024.jpg?v=1581707275" width="150" height="150">
                     <h5 class="card-title">Project 5</h5>
                     <p class="card-text">Description.</p>
                     <a href="https://example.floral.workers.dev/" class="btn btn-success" target="_blank">Click Here</a>
                  </div>
               </div>
            </div>
            <div style="display: block; margin: 20px auto;" class="col-sm-4">
               <div class="card text-center">
                  <div class="card-body">
                     <img src="https://cdn.shopify.com/s/files/1/0276/0323/9045/products/ZeroTwo-08-Cap-Uniform-Chibi-Ninecolor_1024x1024.jpg?v=1581707275" width="150" height="150">
                     <h5 class="card-title">Project 6</h5>
                     <p class="card-text">Description</p>
                     <a href="https://example.floral.workers.dev/" class="btn btn-success" target="_blank">Click Here</a>
                  </div>
               </div>
            </div>
         </div>
</div>

<div id="Bot" class="w3-container menu w3-padding-48 w3-card">
         <p><b>Hey bossq~ Selamat datang di daftar project saya...</b></p>
         <div class="row">
            <div style="display: block; margin: 20px auto;" class="col-sm-4">
               <div class="card text-center">
                  <div class="card-body">
                     <img src="https://cdn.shopify.com/s/files/1/0078/6563/0831/products/zeroTwo_2_1200x1200.jpg?v=1552807119" width="150" height="150">
                     <h5 class="card-title">Project 7</h5>
                     <p class="card-text">Description</p>
                     <a href="https://example.floral.workers.dev" class="btn btn-success" target="_blank">Click Here</a>
                  </div>
               </div>
            </div>
            <div style="display: block; margin: 20px auto;" class="col-sm-4">
               <div class="card text-center">
                  <div class="card-body">
                     <img src="https://cdn.shopify.com/s/files/1/0078/6563/0831/products/zeroTwo_2_1200x1200.jpg?v=1552807119" width="150" height="150">
                     <h5 class="card-title">Project 8</h5>
                     <p class="card-text">Description</p>
                     <a href="https://example.floral.workers.dev/" class="btn btn-success" target="_blank">Click Here</a>
                  </div>
               </div>
            </div>            
            <div style="display: block; margin: 20px auto;" class="col-sm-4">
               <div class="card text-center">
                  <div class="card-body">
                     <img src="https://cdn.shopify.com/s/files/1/0078/6563/0831/products/zeroTwo_2_1200x1200.jpg?v=1552807119" width="150" height="150">
                     <h5 class="card-title">Project 9</h5>
                     <p class="card-text">Description</p>
                     <a href="https://example.floral.workers.dev/" class="btn btn-success" target="_blank">Click Here</a>
                  </div>
               </div>
            </div>
        </div>
</div>

<!-- About Container -->
<div class="w3-container" id="about">
<div class="w3-content" style="max-width:700px">
<h5 class="w3-center w3-padding-64"><b><span class="w3-tag w3-wide">ABOUT ME</span></b></h5>
<p>Zero Two Zero Two Zero Two  ❤️ ❤️ ❤️ WANGI WANGI WANGI WANGI HU HA HU HA HU HA, aaaah baunya rambut Zero Two wangi aku mau nyiumin aroma wanginya Zero Two AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~~~ AAAAAH Zero Two keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH Zero Two AAAAA LUCCUUUUUUUUUUUUUUU ............ Zero Two AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? Zero Two itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ Zero Two gw ...Zero Two di laptop ngeliatin gw, Zero Two .. kamu percaya sama aku ? aaaaaaaaaaah syukur Zero Two aku gak mau merelakan Zero Two aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA Zero Two SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH GW BENAR-BENAR PENGEN JILATI KAKI Zero Two. GW PENGEN BANGET MENJILAT SETIAP BAGIAN KAKINYA SAMPAI AIR LIUR GW BERCUCURAN KAYAK AIR KERINGAT LALU NGENOD DENGANNYA SETIAP HARI SAMPAI TUBUH KITA MATI RASA YA TÜHAN. GW INGIN MEMBUAT ANAK-ANAK DENGAN Zero Two SEBANYAK SATU TÌM SEPAK BOLA DAN MEMBUAT SATU TIM SEPAK BOLA LAINNYA UNTUK MELAWAN ANAK-ANAK TIM SEPAK BOLA PERTAMA GW YANG GW BUAT SAMA Zero Two. GW PENGEN MASUK KE SETIAP LUBANG TUBUHNYA, MAU ITU LUBANG HIDUNG, LUBANG TELINGA, RONGGA MATA MAUPUN PUSAR, KECUALI PORI-PORI KULIT. KEMUDIAN GW AKAN MENJADIKANNYA MANUSIA YANG TIDAK BISA HIDUP KALO TIDAK GW KENTOG SETIAP HARI. DAN KALAU GUA DISEPONG GUA RELA KONTL GUA PUTUS.</p>
<div class="w3-panel w3-leftbar w3-light-grey">
<p><i>"watashi mencintai Zero Two dengan tulus dan penuh kasih sayang" By Hontou no Zero Two Owner .......</i></p>
<p>Zero Two Owner: Rahman Onii-chan</p>
</div>

<!-- Contact/Area Container -->
<div class="w3-container" id="contact">
<div class="w3-content" style="max-width:700px">
<h5 class="w3-center w3-padding-64"><span class="w3-tag w3-wide"><b>CONTACT ME</b></span></h5>

<p><b>Just send me a message below:</b></p>

<section>
  <div class="container">
    <form action="https://formspree.io/f/xaylarpo" method="POST" id="my-form">

      <p><div class="form-group">
        <label for="firstName"> First Name</label>
        <input type="text" id="firstName" name="firstName" class="w3-input w3-padding-16 w3-border" type="text" placeholder="Your First Name" required>
      </div></p>

      <p><div class="form-group">
        <label for="latsName">Last Name</label>
        <input type="text" id="lastName" name="lastName" class="w3-input w3-padding-16 w3-border" type="text" placeholder="Your Last Name" required>
      </div></p>

      <p><div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" class="w3-input w3-padding-16 w3-border" type="text" placeholder="Your Email" required>
      </div></p>

      <p><div class="form-group">
        <label for="massage">Massage</label>
        <textarea name="massage" id="massage" cols="30" rows="10" class="w3-input w3-padding-16 w3-border" type="text" placeholder="Your Message" required></textarea>
      </div></p>

      <p><button class="w3-button w3-black" type="submit">SEND MESSAGE</button></p>
    </form>
  </div>
  <div id="status"></div>
</section>

<!-- End page content -->
</div>

<!-- Footer -->
<footer class="w3-center w3-padding-48 w3-large">
<p>© 2021 Project Theme, all rights aren't reserved.</p>
</footer>

<script>
// Tabbed Menu
function openMenu(evt, menuName) {
var i, x, tablinks;
x = document.getElementsByClassName("menu");
for (i = 0; i < x.length; i++) {
x[i].style.display = "none";
}
tablinks = document.getElementsByClassName("tablink");
for (i = 0; i < x.length; i++) {
tablinks[i].className = tablinks[i].className.replace(" w3-dark-grey", "");
}
document.getElementById(menuName).style.display = "block";
evt.currentTarget.firstElementChild.className += " w3-dark-grey";
}
document.getElementById("myLink").click();

//Get the button back to top
var mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
</script>

</body>
</html>`

async function handleRequest(request) {
  return new Response(html, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
  })
}

addEventListener("fetch", event => {
  return event.respondWith(handleRequest(event.request))
})
