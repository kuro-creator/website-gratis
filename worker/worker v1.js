// salin kode ini ke cloudflare worker, trus deploy di sana.....
const html = `<!DOCTYPE html>
<head>
<title>Demo Site</title>
<link href="style.css" rel="stylesheet"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<link rel="icon" href="https://telegra.ph/file/3b29ca150f62a642ec257.png">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/kuro-creator/website-gratis/css/back-to-top.css">
</head>
<body style="background-color:#e2eee0;" aria-hidden="false">
<button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>
      <div class="container" style="height: auto !important;">
         <div class="py-3 text-center" style="height: auto !important;">
            <a href="/">
            <img class="d-block mx-auto mb-4" src="https://telegra.ph/file/3c713ef304cb9a3a1806e.gif" alt="" height="120">
            </a><br>
         </div>
         <div style="text-align: center;" class="vc_message_box vc_message_box-standard vc_message_box-rounded vc_color-alert-success"><div class="vc_message_box-icon"><i class="fas fa-feather-alt"></i><p><b>Hey there~ Welcome to my website.</b></p></div>
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
         <div class="google-auto-placed" style="width: 0%; height: 0%; clear: both; text-align: center;"><ins data-ad-format="auto" style="display: block; margin: 0px auto; background-color: transparent; height: 0px;"></ins></div>
         <br>
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
         <div class="google-auto-placed" style="width: 0%; height: 0%; clear: both; text-align: center;"><ins data-ad-format="auto" class="adsbygoogle adsbygoogle-noablate" data-ad-client="ca-pub-5435553179213419" data-adsbygoogle-status="done" style="display: block; margin: 0px auto; background-color: transparent; height: 0px;"></ins></div>
         <br>
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
         <div class="google-auto-placed" style="width: 0%; height: 0%; clear: both; text-align: center;"><ins data-ad-format="auto" class="adsbygoogle adsbygoogle-noablate" data-ad-client="ca-pub-5435553179213419" data-adsbygoogle-status="done" style="display: block; margin: 0px auto; background-color: transparent; height: 0px;"></ins></div>        
         <br>
          <div class="row">
            <div style="display: block; margin: 20px auto;" class="col-sm-6">
               <div class="card text-center">
                  <div class="card-body">
                     <h5 class="card-title">How to Download?</h5>
                     <p class="card-text">Learn How to Download Files</p>
                     <a href="https://bit.ly/3nGca0t" class="btn btn-success" target="_blank">Learn More</a>
                  </div>
               </div>
            </div>
            <div style="display: block; margin: 20px auto;" class="col-sm-6">
               <div class="card text-center">
                  <div class="card-body">
                     <h5 class="card-title">Contact Admin</h5>
                     <p class="card-text">Contact admin</p>
                     <a href="https://example.floral.workers.dev/" class="btn btn-success" target="_blank">Click Here</a>
                  </div>
               </div>
            </div>
        </div>
         <footer class="my-5 pt-5 text-muted text-center text-small">
            <p style="color:grey;" class="mb-1">© 2020 Demo Site</p>
            <ul class="list-inline">
               <li style="color:grey;padding: 3px;" class="list-inline-item">Powered By Cloudflare-kun & Rahman Onii-chan</li>
            </ul>
         </footer>
      </div>
   

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
</body>`


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
