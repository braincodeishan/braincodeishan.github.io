// const footer=document.getElementById('footerview');
// const footerMain=document.getElementById('footerdark');

var footerview = document.querySelector('#footerview');
var foot_view = document.querySelector('#foot_view');
var advanceview = document.querySelector('#advanceview');
var advancesearch = document.querySelector('#advancesearch');
var nav_logo = document.querySelector('#nav_logo');
var fa_bars = document.querySelector('#fa_bars');
var nav_layer_3 = document.querySelector('#nav_layer_3');
var nav_layer_2 = document.querySelector('#nav_layer_2');
var nav_layer_1 = document.querySelector('#nav_layer_1');
var nav_top_content = document.querySelector('#nav_top_content');
var foot_view = document.querySelector('#foot_view');
var fa_times = document.querySelector('#fa_times');

if (footerview != null) {
    footerview.addEventListener('click', function () {

        foot_view.classList.toggle('active');
        footerview.classList.toggle('active');
        footerview.classList.toggle('animate__delay-3s');
        footerview.classList.toggle('animate__animated');
        footerview.classList.toggle('animate__flip');

    })
}
if (advanceview != null) {
    advanceview.addEventListener('click', function () {
        advancesearch.classList.toggle('active');
        advanceview.classList.toggle('active');
        nav_logo.classList.toggle('active');

    })
}

if (fa_bars != null) {
    fa_bars.addEventListener('click', function () {
        nav_layer_3.classList.add('active');
        nav_layer_2.classList.add('active');
        nav_layer_1.classList.add('active');
        nav_top_content.classList.add('active');
        foot_view.classList.toggle('active');
    })
}

if (fa_times != null) {
    fa_times.addEventListener('click', function () {
        nav_layer_3.classList.remove('active');
        nav_layer_2.classList.remove('active');
        nav_layer_1.classList.remove('active');
        nav_top_content.classList.remove('active');
        foot_view.classList.toggle('active');
    })
}

document.querySelector('#colorpick').addEventListener('click', (e) => {
    document.querySelector('.color-picker').classList.toggle('active');

})
function colorChange(priCol, secCol) {
    var r = document.querySelector(':root');
    r.style.setProperty('--primary-color', priCol);
    r.style.setProperty('--secondary-color', secCol);
}

var pos1 = document.querySelectorAll(".pos1")

pos1.forEach(pos1 => {
    pos1.addEventListener('click', (e) => {
        console.log(pos1.nextElementSibling);
        pos1.nextElementSibling.classList.toggle('active');
    })
    document.body.addEventListener('click', (e) => {
        if (e.target != pos1) {
            pos1.nextElementSibling.classList.remove('active');
        }
    })
})



var pos2 = document.querySelectorAll(".easypick ul");
var minval = document.querySelector(".minval");
var maxval = document.querySelector(".maxval");
var minslider = document.querySelector(".minslider");
var maxslider = document.querySelector(".maxslider");
pos2.forEach(ul => {
    ul.addEventListener('click', (e) => {
        let li = e.target.closest('li');
        if (!li) { return; }
        let val = li.textContent;
        let len = val.length;
        let final = parseInt(val.substring(4, len));
        if (e.target.closest('div').id == 'minval') {
            if (final < maxval.value) {
                minval.value = final;
                minslider.value = final;
            } else {
                minval.value = maxval.value;
                minslider.value = maxval.value;
                maxval.value = final;
                maxslider.value = final;
            }
        } else {
            if (final > minval.value) {
                maxval.value = final;
                maxslider.value = final;
            } else {
                maxval.value = minval.value;
                maxslider.value = minval.value;
                minval.value = final;
                minslider.value = final;
            }
        }
    })
})








// var buynow=document.querySelectorAll('.buynow');
// buynow.forEach(buynow =>{
//     buynow.addEventListener('click', (e)=>{
//         buynow.parentNode.parentNode.querySelector('.specs-class').classList.add('remove');
//         buynow.parentNode.parentNode.querySelector('.user-review-class').classList.remove('active');
//         buynow.parentNode.parentNode.querySelector('.buy-now-class').classList.add('active');

//     })
// })












// Rendering of the data main funtions

// const form = document.getElementById('searchmyphone')
// form.addEventListener('submit', searcher)

async function searcher() {
    // e.preventDefault();
    var minvalue = document.getElementById('minvalue').value;
    var maxvalue = document.getElementById('maxvalue').value;
    console.log(minvalue, maxvalue);
    const result = await fetch('http://localhost:3000/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            minvalue,
            maxvalue
        })
    }).then((res) => res.json())
    console.log(result);
    document.querySelector(".top-nav-container-logo").classList.add("active");
    document.body.style.overflowY = 'scroll';
    var page1 = document.getElementById('homepagemainclass');
    page1.classList.add('disabled');
    var page2 = document.getElementById('listpagemainclass');
    page2.classList.add('enabled');
    var footerscroll = document.getElementById('foot_view');
    footerscroll.classList.add('scroll');
    
    renderlistResults(result);

}

function renderlistResults(result) {

    var joinedHtml = ""

    result.map((item) => {
        joinedHtml += listresults({
            ...item
        })
    })

    const content = document.getElementById("listofitems");
    content.innerHTML = "";
    content.insertAdjacentHTML("beforeend", joinedHtml);

}




function listresults(data) {
    var listpagetemplate = `<div class="item item-1" id="${data._id}">
                <div class="compare-me">
                    <p>${data.name}</p>
                    <input type="checkbox" name="compare"> Compare
                </div>
                <div class="mob-specs">
                    <div class="col-wid-12">
                        <div class="col-wid-2">
                            <img src="assets/img/phone_images/34347448.jpg" alt="" srcset="">
                        </div>


                        <!-- first list of items first card -->

                        <div class="specs-class">
                            <div class="specs-col active">
                                <div class="specs-row  col-wid-12">
                                    <i class="fa fa-mobile fa-2x col-wid-2" aria-hidden="true"></i>
                                    <div class="specs-col-list col-wid-7">
                                        <ul>
                                            <li>Announce: ${data.announce}</li>
                                            <li>Available: ${data.available}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="list-seperator"></div>
                                <div class="specs-row col-wid-12">
                                    <i class="fa fa-camera fa-1x col-wid-2" aria-hidden="true"></i>
                                    <div class="specs-details-col-list">
                                        <ul>
                                            <li>OS :${data.os}</li>
                                            <li>Chipset: ${data.chipset}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="list-seperator"></div>
                                <div class="specs-row col-wid-12">
                                    <i class="fa fa-bolt fa-2x col-wid-2" aria-hidden="true"></i>
                                    <div class="specs-details-col-list">
                                        <ul>
                                            <li>CPU : ${data.cpu}</li>
                                            <li>RAM : ${data.ram}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="list-seperator"></div>
                                <div class="specs-row col-wid-12">
                                    <i class="fa fa-battery-full fa-1x col-wid-2" aria-hidden="true"></i>
                                    <div class="specs-details-col-list">
                                        <ul>
                                            <li>GPU: ${data.gpu}</li>
                                            <li>Internal: ${data.internal} <br> Card: ${data.card}</li>
                                            <li>
                                        </ul>
                                    </div>
                                </div>
                            </div>



                            <!-- second list of items second card -->


                            <div class="specs-col">
                                <div class="specs-row  col-wid-12">
                                    <i class="fa fa-mobile fa-2x col-wid-3" aria-hidden="true"></i>
                                    <div class="specs-col-list col-wid-7">
                                        <ul>
                                            <li>Camera: ${data.camera}</li>
                                            <li>12 MP, f/1.5-2.4,(wide)<br> 12 MP, f/2.1,(telephoto) <br> 16 MP,
                                                f/2.2,(ultrawide)</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="list-seperator"></div>
                                <div class="specs-row col-wid-12">
                                    <i class="fa fa-camera fa-1x col-wid-3" aria-hidden="true"></i>
                                    <div class="specs-details-col-list">
                                        <ul>
                                            <li>Video : ${data.videoRear}</li>
                                            <li>1080p@30/60/240fps<br> 720p@960fps</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="list-seperator"></div>
                                <div class="specs-row col-wid-12">
                                    <i class="fa fa-bolt fa-2x col-wid-3" aria-hidden="true"></i>
                                    <div class="specs-details-col-list">
                                        <ul>
                                            <li>Front Camera: ${data.frontCamera}</li>
                                            <li>10 MP, f/2.2, 26mm (wide)</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="list-seperator"></div>
                                <div class="specs-row col-wid-12">
                                    <i class="fa fa-battery-full fa-1x col-wid-3" aria-hidden="true"></i>
                                    <div class="specs-details-col-list">
                                        <ul>
                                            <li>Video : ${data.videoFront}</li>
                                            <li>4K@30/60fps, 1080p@30fps</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>


                            <!-- third list of items third card -->


                            <div class="specs-col">
                                <div class="specs-row  col-wid-12">
                                    <i class="fa fa-mobile fa-2x col-wid-3" aria-hidden="true"></i>
                                    <div class="specs-col-list col-wid-7">
                                        <ul>
                                            <li>Display: ${data.display}</li>
                                            <li>Dynamic AMOLED, HDR10+</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="list-seperator"></div>
                                <div class="specs-row col-wid-12">
                                    <i class="fa fa-camera fa-1x col-wid-3" aria-hidden="true"></i>
                                    <div class="specs-details-col-list">
                                        <ul>
                                            <li>Resolution: ${data.resolution}</li>
                                            <li>Corning Gorilla Glass 6</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="list-seperator"></div>
                                <div class="specs-row col-wid-12">
                                    <i class="fa fa-bolt fa-2x col-wid-3" aria-hidden="true"></i>
                                    <div class="specs-details-col-list">
                                        <ul>
                                            <li>RAM: ${data.ram1}</li>
                                            <li>Dimensity ${data.dimensity}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="list-seperator"></div>
                                <div class="specs-row col-wid-12">
                                    <i class="fa fa-battery-full fa-1x col-wid-3" aria-hidden="true"></i>
                                    <div class="specs-details-col-list">
                                        <ul>
                                            <li>Battery: ${data.battery1}</li>
                                            <li>${data.battery1Type}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>


                            <!-- fourth list of items fourth card -->


                            <div class="specs-col">
                                <div class="specs-row  col-wid-12">
                                    <i class="fa fa-mobile fa-2x col-wid-3" aria-hidden="true"></i>
                                    <div class="specs-col-list col-wid-7">
                                        <ul>
                                            <li>Battery: ${data.battery}</li>
                                            <li>${data.batteryType}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="list-seperator"></div>
                                <div class="specs-row col-wid-12">
                                    <i class="fa fa-camera fa-1x col-wid-3" aria-hidden="true"></i>
                                    <div class="specs-details-col-list">
                                        <ul>
                                            <li>Charging : ${data.charging}</li>
                                            <li>${data.chargingDetails}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="list-seperator"></div>
                                <div class="specs-row col-wid-12">
                                    <i class="fa fa-bolt fa-2x col-wid-3" aria-hidden="true"></i>
                                    <div class="specs-details-col-list">
                                        <ul>
                                            <li>Technology: ${data.technology}</li>
                                            <li>Dimensions ${data.dimension}</li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="list-seperator"></div>
                                <div class="specs-row col-wid-12">
                                    <i class="fa fa-battery-full fa-1x col-wid-3" aria-hidden="true"></i>
                                    <div class="specs-details-col-list">
                                        <ul>
                                            <li>Weight: ${data.weight}</li>
                                            <li>${data.sim}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- user-review-class -->

                        <div class="user-review-class">
                            <i class="fa fa-chevron-left commentprev1" aria-hidden="true"></i>
                            <div class="user-comments">
                                <i class="fa fa-quote-left" aria-hidden="true"></i>
                                <p class="active">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                                    quia quisquam voluptas necessitatibus, voluptatibus maxime excepturi ipsa
                                    minima suscipit atque in magnam velit sunt, dicta maiores sed, expedita qui
                                    aliquam aut ad tempore! Aliquid omnis quisquam dolorem fugit, in, nulla hic,
                                    distinctio possimus placeat officia vero soluta quos corporis autem
                                    accusamus? Temporibus reiciendis, exercitationem totam enim optio vitae
                                    harum? Ipsam aut ex necessitatibus dolore, fugiat quis velit, repellat sunt
                                    doloremque quia quos adipisci, veritatis perspiciatis corrupti earum saepe
                                    cumque perferendis nemo facilis error autem? Explicabo laboriosam, quaerat
                                    veniam reiciendis earum dolor illum nemo. Laboriosam, maxime odit odio autem
                                    cupiditate sit!11111111</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat maxime
                                    sapiente officiis animi obcaecati odio deserunt, quasi aliquid reiciendis
                                    consequuntur!2222222</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                                    exercitationem aspernatur nostrum iste quaerat eius magnam reprehenderit
                                    deleniti possimus dignissimos?3333333</p>
                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id ut deleniti
                                    maxime repellendus quaerat quisquam nihil explicabo in incidunt nostrum.444444</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius accusamus
                                    facilis omnis aperiam. Eligendi repudiandae vero quo? Mollitia, quo
                                    voluptatibus!555555</p>
                                <span>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star" aria-hidden="true"></i>
                                    <i class="fa fa-star-half" aria-hidden="true"></i>
                                </span>

                            </div>
                            <i class="fa fa-chevron-right commentnext1" aria-hidden="true"></i>
                        </div>
                        <div class="spec-rating-class">
                            <p>Antutu Benchmark</p>
                            <p>xyz Benchmark</p>
                            <p>abc Benchmark</p>
                            <p>vsz Benchmark</p>

                        </div>
                        <div class="camera-picture-class">
                            <i class="fa fa-times-circle-o pictureclose" aria-hidden="true"></i>
                            <i class="fa fa-chevron-left pictureprev" onclick="picturenext('${data._id}',-1)" aria-hidden="true"></i>
                            <div class="camera-picture-row">

                                <img src="assets/img/phone_pictures/34347448.jpg" class="active" alt=""
                                    srcset="">
                                <img src="assets/img/phone_pictures/34347448_2.jpg" alt="" srcset="">
                                <img src="assets/img/phone_pictures/34347448_3.jpg" alt="" srcset="">
                                <img src="assets/img/phone_pictures/34347448_4.jpg" alt="" srcset="">
                                <img src="assets/img/phone_pictures/34347448_5.jpg" alt="" srcset="">
                                <img src="assets/img/phone_pictures/34347448_6.jpg" alt="" srcset="">


                            </div>
                            <i class="fa fa-chevron-right picturenext" onclick="picturenext('${data._id}',1)" aria-hidden="true"></i>
                        </div>
                        <div class="buy-now-class">
                            <div class="dropdown-row">
                                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                <p>Buy on Amazon @ Rs. 19000 </p>
                                <button class="amazon">Amazon</button>
                                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                <p>Buy on Flipkart @ Rs. 20000 </p>
                                <button class="flipkart">Flipkart</button>
                            </div>
                            <div class="dropdown-row">
                                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                <p>Buy on tata Cliq @ Rs. 19500 </p>
                                <button class="tatacliq">Tata Cliq</button>
                                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                <p>Buy on Paytm @ Rs. 19436 </p>
                                <button class="paytm">Paytm</button>
                            </div>
                            <div class="dropdown-row">
                                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                <p>Buy on Snapdeal @ Rs. 19754 </p>
                                <button class="snapdeal">Snapdeal</button>
                                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                <p>Buy on Mi.com @ Rs. 21554 </p>
                                <button class="companysite">MI.com</button>
                            </div>
                        </div>



                    </div>
                </div>
                <div class="lower-tabs">
                    <p class="specs" onClick="specs('${data._id}')">Specs</p>
                    <p class="userrating" onClick="userrating('${data._id}')">User Rating</p>
                    <p class="specsrating" onClick="specsrating('${data._id}')">Specs Rating</p>
                    <p class="samplepictures" onClick="samplepictures('${data._id}')">Sample Pictures</p>
                    <p class="buynow" onClick="buynow('${data._id}')">Buy Now</p>

                </div>

            </div>`
    return listpagetemplate;
}


function userrating(i) {
    var id = document.getElementById(i);
    id.querySelector('.specs-class').classList.add('remove');
    id.querySelector('.buy-now-class').classList.remove('active');
    id.querySelector('.user-review-class').classList.add('active');

    var commentnext = id.querySelector('.commentnext1');
    var commentprev = id.querySelector('.commentprev1');

    commentnext.addEventListener('click', (e) => {
        var comment = commentnext.parentNode.querySelectorAll('p');
        var j = 0;
        for (var i = 0; i < comment.length; i++) {
            if (comment[i].classList.contains('active')) {
                comment[i].classList.remove('active');
                i++;
                break;
            }
        }
        console.log(i);
        if (i < comment.length) {
            comment[i].classList.add('active');
        } else {
            i = 0;
            comment[i].classList.add('active');
        }
    })



    commentprev.addEventListener('click', (e) => {
        var comment = commentprev.parentNode.querySelectorAll('p');
        var j = 0;
        for (var i = 0; i < comment.length; i++) {
            if (comment[i].classList.contains('active')) {
                comment[i].classList.remove('active');
                i--;
                break;
            }
        }
        if (i > -1) {
            comment[i].classList.add('active');
        } else {
            i = comment.length - 1;
            comment[i].classList.add('active');
        }
    })

}




function specsrating(i) {





}
function samplepictures(i) {
    var id=document.getElementById(i);
    
    var pictureclose=id.querySelector('.pictureclose');
    id.querySelector('.camera-picture-class').classList.toggle('active');
        
    var i=0;        
        

    var picturenext=id.querySelector('.picturenext');
    var pictureprev=id.querySelector('.pictureprev');
    
    pictureclose.addEventListener('click',(e)=>{
        picturenext.removeEventListener('click',()=>{})
        pictureprev.removeEventListener('click',()=>{})
        pictureclose.parentNode.classList.remove('active');
        console.log("closed")
        
    })
}

function picturenext(i,j){
        // picturenext.addEventListener('click',(e)=>{
            // console.log("event listner added")
            var id=document.getElementById(i)
            var pictureclass=id.querySelector('.camera-picture-class');
            var picture=pictureclass.querySelectorAll('img');
            i=0;
            for(i=0;i<picture.length;i++){
                if(picture[i].classList.contains('active')){
                    picture[i].classList.remove('active');
                    
                    break;
                }
            }
            i=i+j;
            
            if(i>=picture.length){
                i=0;
            }else if(i<=-1){
                i=picture.length-1;
            }
            picture[i].classList.add('active');
}

function buynow(i) {
    var id=document.getElementById(i);
    
            id.querySelector('.specs-class').classList.add('remove');
            id.querySelector('.user-review-class').classList.remove('active');
            id.querySelector('.buy-now-class').classList.add('active');
    
        
}

function specs(i) {
    var id=document.getElementById(i);
    id.querySelector('.specs-class').classList.remove('remove');
    id.querySelector('.user-review-class').classList.remove('active');
    id.querySelector('.buy-now-class').classList.remove('active');
}
