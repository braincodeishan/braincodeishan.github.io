// const footer=document.getElementById('footerview');
// const footerMain=document.getElementById('footerdark');

    footerview.addEventListener('click',function(){
        
        footerdark.classList.toggle('active');
        footerview.classList.toggle('active');
        footerview.classList.toggle('animate__delay-3s');
        footerview.classList.toggle('animate__animated');
        footerview.classList.toggle('animate__flip');
        
    })
    advanceview.addEventListener('click',function(){
        advancesearch.classList.toggle('active');
        advanceview.classList.toggle('active');
        
    })

    fa_bars.addEventListener('click',function(){
        nav_layer_3.classList.add('active');
        nav_layer_2.classList.add('active');
        nav_layer_1.classList.add('active');
        nav_top_content.classList.add('active');
    })
    fa_times.addEventListener('click',function(){
        nav_layer_3.classList.remove('active');
        nav_layer_2.classList.remove('active');
        nav_layer_1.classList.remove('active');
        nav_top_content.classList.remove('active');
    })

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
    