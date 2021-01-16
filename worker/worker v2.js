// salin kode ini ke cloudflare worker, trus deploy di sana...
const html = `<!DOCTYPE html>
<html>
<head>
<title>Demo Site</title>
<link href="style.css" rel="stylesheet"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<link rel="icon" href="https://telegra.ph/file/3b29ca150f62a642ec257.png">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/kuro-creator/website-gratis/css/back-to-top.css">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<style>
* {
  box-sizing: border-box;
}

/* Create two equal columns that floats next to each other */
.column {
  float: left;
  width: 50%;
  padding: 10px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Style the buttons */
.btn {
  border: none;
  outline: none;
  padding: 12px 16px;
  background-color: #5454;
  cursor: pointer;
}

.btn:hover {
  background-color: green;
}

.btn.active {
  background-color: #666;
  color: white;
}
</style>
</head>
<body style="background-color:#cfe3cb;" aria-hidden="false">
<button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>
      <div class="container" style="height: auto !important;">
         <div class="py-3 text-center" style="height: auto !important;">
            <a href="/">
            <img class="d-block mx-auto mb-4" src="https://telegra.ph/file/3c713ef304cb9a3a1806e.gif" alt="" height="120">
            </a><br>
         </div>
         <div style="text-align: center;" class="vc_message_box vc_message_box-standard vc_message_box-rounded vc_color-alert-success"><div class="vc_message_box-icon"><i class="fas fa-feather-alt"></i><p><b>Hey there~ Welcome to my website.</b></p></div>

<div style="text-align: center;" id="btnContainer">
  <button class="btn" onclick="listView()"><i class="fa fa-bars"></i> List</button> 
  <button class="btn active" onclick="gridView()"><i class="fa fa-th-large"></i> Grid</button>
</div>
<br>

<div class="row">
  <div class="column" style="background-color:#aaa;">
    <h2>Project 1</h2>
    <p>Description</p>
     <a href="https://example.floral.workers.dev" class="btn btn-success" target="_blank">Click Here</a>
  </div>
  <div class="column" style="background-color:#bbb;">
    <h2>Project 2</h2>
    <p>Description</p>
    <a href="https://example.floral.workers.dev" class="btn btn-success" target="_blank">Click Here</a>
  </div>
</div>
<div class="row">
  <div class="column" style="background-color:#ccc;">
    <h2>Project 3</h2>
    <p>Description</p>
    <a href="https://example.floral.workers.dev" class="btn btn-success" target="_blank">Click Here</a>
  </div>
  <div class="column" style="background-color:#ddd;">
    <h2>Project 4</h2>
    <p>Description</p>
    <a href="https://example.floral.workers.dev" class="btn btn-success" target="_blank">Click Here</a>
  </div>
</div>

<div class="row">
  <div class="column" style="background-color:#aaa;">
    <h2>Project 5</h2>
    <p>Description</p>
     <a href="https://example.floral.workers.dev" class="btn btn-success" target="_blank">Click Here</a>
  </div>
  <div class="column" style="background-color:#bbb;">
    <h2>Project 6</h2>
    <p>Description</p>
    <a href="https://example.floral.workers.dev" class="btn btn-success" target="_blank">Click Here</a>
  </div>
</div>
<div class="row">
  <div class="column" style="background-color:#ccc;">
    <h2>Project 7</h2>
    <p>Description</p>
    <a href="https://example.floral.workers.dev" class="btn btn-success" target="_blank">Click Here</a>
  </div>
  <div class="column" style="background-color:#ddd;">
    <h2>Project 8</h2>
    <p>Description</p>
    <a href="https://example.floral.workers.dev" class="btn btn-success" target="_blank">Click Here</a>
  </div>
</div>

<div class="row">
  <div class="column" style="background-color:#aaa;">
    <h2>Project 9</h2>
    <p>Description</p>
     <a href="https://example.floral.workers.dev" class="btn btn-success" target="_blank">Click Here</a>
  </div>
  <div class="column" style="background-color:#bbb;">
    <h2>Project 10</h2>
    <p>Description</p>
    <a href="https://example.floral.workers.dev" class="btn btn-success" target="_blank">Click Here</a>
  </div>
</div>
<div class="row">
  <div class="column" style="background-color:#ccc;">
    <h2>Project 11</h2>
    <p>Description</p>
    <a href="https://example.floral.workers.dev" class="btn btn-success" target="_blank">Click Here</a>
  </div>
  <div class="column" style="background-color:#ddd;">
    <h2>Project 12</h2>
    <p>Description</p>
    <a href="https://example.floral.workers.dev" class="btn btn-success" target="_blank">Click Here</a>
  </div>
</div>


<div class="row">
  <div class="column" style="background-color:#aaa;">
    <h2>How to Download?</h2>
    <p>Learn How to Download Files.</p>
     <a href="https://example.floral.workers.dev" class="btn btn-success" target="_blank">Click Here</a>
  </div>
  <div class="column" style="background-color:#bbb;">
    <h2>Contact Admin</h2>
    <p>Contact admin with google form.</p>
    <a href="https://example.floral.workers.dev" class="btn btn-success" target="_blank">Click Here</a>
  </div>
</div>

         <footer class="my-5 pt-5 text-muted text-center text-small">
            <p style="color:grey;" class="mb-1">© 2020 Demo Site</p>
            <ul class="list-inline">
               <li style="color:grey;padding: 3px;" class="list-inline-item">Powered By Cloudflare-kun & Rahman Onii-chan</li>
            </ul>
         </footer>
      </div>

<script>
// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

// Declare a loop variable
var i;

// List View
function listView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "100%";
  }
}

// Grid View
function gridView() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = "50%";
  }
}

/* Optional: Add active class to the current button (highlight it) */
var container = document.getElementById("btnContainer");
var btns = container.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
</script>
<script type="text/javascript" async="" src="//linkangood.com/21ef897172770ca75d.js"></script><ins class="adsbygoogle adsbygoogle-noablate" data-adsbygoogle-status="done" style="display: none !important;"><ins id="aswift_1_expand" style="display:inline-table;border:none;height:0px;margin:0;padding:0;position:relative;visibility:visible;width:0px;background-color:transparent;" tabindex="0" title="Advertisement" aria-label="Advertisement"><ins id="aswift_1_anchor" style="display:block;border:none;height:0px;margin:0;padding:0;position:relative;visibility:visible;width:0px;background-color:transparent;"><iframe id="aswift_1" name="aswift_1" style="left:0;position:absolute;top:0;border:0;width:undefinedpx;height:undefinedpx;" sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" frameborder="0" src="https://googleads.g.doubleclick.net/pagead/ads?guci=2.2.0.0.2.2.0.0&amp;client=ca-pub-5435553179213419&amp;output=html&amp;adk=1812271804&amp;adf=3025194257&amp;lmt=1599533224&amp;plat=1%3A32776%2C2%3A32776%2C9%3A32776%2C10%3A32%2C11%3A32%2C16%3A8388608%2C17%3A32%2C24%3A32%2C25%3A32%2C30%3A1081344%2C32%3A32%2C40%3A32&amp;format=0x0&amp;url=https%3A%2F%2Fdrive.hashhackers.com%2F&amp;ea=0&amp;flash=0&amp;pra=7&amp;wgl=1&amp;uach=WyJXaW5kb3dzIiwiMTAuMCIsIng4NiIsIiIsIjg3LjAuNDI4MC4xNDEiLFtdXQ..&amp;dt=1610538438197&amp;bpp=18&amp;bdt=2242&amp;idt=386&amp;shv=r20210107&amp;cbv=r20190131&amp;ptt=9&amp;saldr=aa&amp;abxe=1&amp;cookie=ID%3Dd8d41b93d4f46d87-22c2598a16c50051%3AT%3D1607566122%3ART%3D1607566122%3AS%3DALNI_Ma4Z31dHznKqgzXIawj-scGqCrDjg&amp;prev_fmts=1110x280&amp;nras=1&amp;correlator=199539743179&amp;frm=20&amp;pv=1&amp;ga_vid=1872360938.1607265721&amp;ga_sid=1610538439&amp;ga_hid=1200798895&amp;ga_fc=0&amp;u_tz=420&amp;u_his=2&amp;u_java=0&amp;u_h=768&amp;u_w=1366&amp;u_ah=728&amp;u_aw=1366&amp;u_cd=24&amp;u_nplug=3&amp;u_nmime=4&amp;adx=-12245933&amp;ady=-12245933&amp;biw=1349&amp;bih=625&amp;scr_x=0&amp;scr_y=0&amp;eid=21066699%2C21066792%2C42530671%2C21068769%2C21067496&amp;oid=3&amp;pvsid=2838928554102668&amp;pem=18&amp;rx=0&amp;eae=2&amp;fc=896&amp;brdim=0%2C0%2C0%2C0%2C1366%2C0%2C1366%2C728%2C1366%2C625&amp;vis=1&amp;rsz=%7C%7Cs%7C&amp;abl=NS&amp;fu=8192&amp;bc=31&amp;ifi=1&amp;uci=a!1&amp;fsb=1&amp;dtd=412" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no" allowfullscreen="true" trusttoken="{&quot;type&quot;:&quot;send-srr&quot;,&quot;issuer&quot;:&quot;https://adservice.google.com&quot;,&quot;issuers&quot;:[&quot;https://adservice.google.com&quot;,&quot;https://attestation.android.com&quot;],&quot;refreshPolicy&quot;:&quot;none&quot;,&quot;signRequestData&quot;:&quot;include&quot;,&quot;includeTimestampHeader&quot;:true,&quot;additionalSignedHeaders&quot;:[&quot;sec-time&quot;,&quot;Sec-Signed-Redemption-Record&quot;],&quot;additionalSigningData&quot;:&quot;eyJ1cmwiOiJodHRwczovL2RyaXZlLmhhc2hoYWNrZXJzLmNvbS8ifQ..&quot;}" data-google-container-id="a!1" data-load-complete="true"></iframe></ins></ins></ins><iframe id="google_osd_static_frame_4852441260572" name="google_osd_static_frame" style="display: none; width: 0px; height: 0px;"></iframe>
<script>
//Get the button
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
</html>
`

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
