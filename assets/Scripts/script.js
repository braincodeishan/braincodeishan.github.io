// const footer=document.getElementById('footerview');
// const footerMain=document.getElementById('footerdark');

    var footerview=document.querySelector('#footerview');
    var foot_view=document.querySelector('#foot_view');
    var advanceview=document.querySelector('#advanceview');
    var advancesearch=document.querySelector('#advancesearch');
    var nav_logo=document.querySelector('#nav_logo');
    var fa_bars=document.querySelector('#fa_bars');
    var nav_layer_3=document.querySelector('#nav_layer_3');
    var nav_layer_2=document.querySelector('#nav_layer_2');
    var nav_layer_1=document.querySelector('#nav_layer_1');
    var nav_top_content=document.querySelector('#nav_top_content');
    var foot_view=document.querySelector('#foot_view');
    var fa_times=document.querySelector('#fa_times');
    
    if(footerview!=null){
    footerview.addEventListener('click',function(){
        
        foot_view.classList.toggle('active');
        footerview.classList.toggle('active');
        footerview.classList.toggle('animate__delay-3s');
        footerview.classList.toggle('animate__animated');
        footerview.classList.toggle('animate__flip');
        
    })
}
if(advanceview!=null){
    advanceview.addEventListener('click',function(){
        advancesearch.classList.toggle('active');
        advanceview.classList.toggle('active');
        nav_logo.classList.toggle('active');
        
    })
}
    
    if(fa_bars!=null){
    fa_bars.addEventListener('click',function(){
        nav_layer_3.classList.add('active');
        nav_layer_2.classList.add('active');
        nav_layer_1.classList.add('active');
        nav_top_content.classList.add('active');
        foot_view.classList.toggle('active');
    })
}

    if(fa_times!=null){
    fa_times.addEventListener('click',function(){
        nav_layer_3.classList.remove('active');
        nav_layer_2.classList.remove('active');
        nav_layer_1.classList.remove('active');
        nav_top_content.classList.remove('active');
        foot_view.classList.toggle('active');
    })
    }

    document.querySelector('#colorpick').addEventListener('click', (e)=>{
        document.querySelector('.color-picker').classList.toggle('active');

    })
    function colorChange(priCol,secCol)
    {
        var r = document.querySelector(':root');
        r.style.setProperty('--primary-color', priCol);
        r.style.setProperty('--secondary-color', secCol);
    }

    var pos1=document.querySelectorAll(".pos1")
    
    pos1.forEach(pos1 =>{
        pos1.addEventListener('click', (e)=>{
            console.log(pos1.nextElementSibling);
            pos1.nextElementSibling.classList.toggle('active');
        })
        document.body.addEventListener('click', (e)=>{
            if(e.target!=pos1)
            {
                pos1.nextElementSibling.classList.remove('active');
            }
        })
    })


    
    var pos2=document.querySelectorAll(".easypick ul");
    var minval=document.querySelector(".minval");
    var maxval=document.querySelector(".maxval");
    var minslider=document.querySelector(".minslider");
    var maxslider=document.querySelector(".maxslider");
    pos2.forEach(ul =>{
        ul.addEventListener('click', (e)=>{
            let li=e.target.closest('li');
            if (!li) { return; }
            let val=li.textContent;
            let len=val.length;
            let final=parseInt(val.substring(4, len));
            if(e.target.closest('div').id=='minval'){
                if(final<maxval.value){
                minval.value=final;
                minslider.value=final;
                }else{
                    minval.value=maxval.value;
                    minslider.value=maxval.value;
                    maxval.value=final;
                    maxslider.value=final;
                }
            }else{
                if(final>minval.value){
                maxval.value=final;
                maxslider.value=final;
                }else{
                    maxval.value=minval.value;
                    maxslider.value=minval.value;
                    minval.value=final;
                    minslider.value=final;
                }
            }
        })
        })


        var userrating=document.querySelectorAll('.userrating');
        userrating.forEach(userrating =>{
            userrating.addEventListener('click', (e)=>{
                userrating.parentNode.parentNode.querySelector('.specs-class').classList.toggle('remove');
                userrating.parentNode.parentNode.querySelector('.user-review-class').classList.toggle('active');

            })
        })

        var commentnext=document.querySelectorAll('.commentnext1');
        var commentprev=document.querySelectorAll('.commentprev1');
        commentnext.forEach(commentnext1 =>{
            commentnext1.addEventListener('click',(e)=>{
                var comment=commentnext1.parentNode.querySelectorAll('p');
                var j=0;
                for(var i=0;i<comment.length;i++){
                    if(comment[i].classList.contains('active')){
                        comment[i].classList.remove('active');
                        i++;
                        break;
                    }
                }
                console.log(i);
                if(i<comment.length){
                    comment[i].classList.add('active');
                }else{
                    i=0;
                    comment[i].classList.add('active');
                }
                })
            })
        
        commentprev.forEach(commentprev1 =>{
            commentprev1.addEventListener('click',(e)=>{
                var comment=commentprev1.parentNode.querySelectorAll('p');
                var j=0;
                for(var i=0;i<comment.length;i++){
                    if(comment[i].classList.contains('active')){
                        comment[i].classList.remove('active');
                        i--;
                        break;
                    }
                }
                if(i>-1){
                comment[i].classList.add('active');
            }else{
                i=comment.length-1;
                comment[i].classList.add('active');
            }
            })
        })

        var samplepictures=document.querySelectorAll('.samplepictures');
        var pictureclose=document.querySelectorAll('.pictureclose');
        samplepictures.forEach(samplepictures =>{
            samplepictures.addEventListener('click',(e)=>{
                samplepictures.parentNode.parentNode.querySelector('.camera-picture-class').classList.add('active');
            })
        })
        pictureclose.forEach(pictureclose =>{
            pictureclose.addEventListener('click',(e)=>{
                pictureclose.parentNode.classList.remove('active');
            })
        })





        var picturenext=document.querySelectorAll('.picturenext');
        var pictureprev=document.querySelectorAll('.pictureprev');
        picturenext.forEach(picturenext =>{
            picturenext.addEventListener('click',(e)=>{
                var picture=picturenext.parentNode.querySelectorAll('img');
                var j=0;
                for(var i=0;i<picture.length;i++){
                    if(picture[i].classList.contains('active')){
                        picture[i].classList.remove('active');
                        i++;
                        break;
                    }
                }
                
                if(i<picture.length){
                    picture[i].classList.add('active');
                }else{
                    i=0;
                    picture[i].classList.add('active');
                }
                })
            })



            
        pictureprev.forEach(pictureprev =>{
            pictureprev.addEventListener('click',(e)=>{
                var picture=pictureprev.parentNode.querySelectorAll('img');
                var j=0;
                for(var i=0;i<picture.length;i++){
                    if(picture[i].classList.contains('active')){
                        picture[i].classList.remove('active');
                        i++;
                        break;
                    }
                }
                
                if(i>-1){
                    picture[i].classList.add('active');
                }else{
                    i=picture.length-1;
                    picture[i].classList.add('active');
                }
                })
            })
        
     