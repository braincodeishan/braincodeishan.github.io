var select = document.querySelectorAll('.dropdown__multiSelect');
// console.log(select);
// console.log(select);
// // select[0].remove();
// console.log(select);






for (var i = 0; i < select.length; i++) {
    var selectOptions = select[i].querySelectorAll('option');
    var newSelect = document.createElement('div');
    
    select[i].parentNode.insertBefore(newSelect, select[i]);
    // newSelect.appendChild(cloneSelect);

    //correct till above
    newSelect.classList.add('selectMultiple');
    var active = document.createElement('div');
    // newSelect.appendChild(active);
    active.classList.add('active');
    var optionList = document.createElement('ul');
    // newSelect.appendChild(optionList);
    var placeholder = select[i].getAttribute("data-placeholder")
    console.log(placeholder);
    var span = document.createElement('span');
    span.innerText = placeholder;
    active.appendChild(span);
    
    for(var j=0;j<select[i].length;j++)
    {
        let text = selectOptions[j].innerText;
    if (selectOptions[j].getAttribute("selected")=="selected") {
        let tag = document.createElement('a');
        tag.dataset.value = selectOptions[j].value;
        tag.innerHTML = "<em>" + text + "</em><i class='cross'></i>";
        active.appendChild(tag);
        span.classList.add('hide');
    } else {
        let item = document.createElement('li');
        item.dataset.value = selectOptions[j].value;
        item.innerHTML = text;
        item.classList.add('unselectedItems');
        optionList.appendChild(item);
    }
    }

//correct till here


var arrow = document.createElement('div');
arrow.classList.add('arrow');
active.appendChild(arrow);

newSelect.appendChild(active);
newSelect.appendChild(optionList);
var cloneSelect = select[i].cloneNode(true);
span.appendChild(cloneSelect);
select[i].remove();

}
//correct till here

// var arrow=document.querySelectorAll('.arrow');
// arrow.forEach(arrow => {
//     arrow.addEventListener('click', (e)=> {
//          arrow.parentNode.parentNode.classList.toggle('open');
//     })
//     });





// var unselectedItems=document.querySelectorAll('.unselectedItems');
// unselectedItems.forEach(unselectedItems => {
//     unselectedItems.addEventListener('click', (e)=> {
//         let tag = document.createElement('a');
//         let text = unselectedItems.innerText;
//         // tag.dataset.value = unselectedItems.dataset.value;
//         tag.innerHTML = "<em>" + text + "</em><i class='cross'></i>";
//         // var cloneUnselect=unselectedItems.cloneNode(true);
//         tag.addEventListener("click", EVENT_FN);
//         unselectedItems.parentNode.parentNode.firstChild.appendChild(tag);
//         unselectedItems.remove();
        
//     })
//     });

//     var cross=document.querySelectorAll('.cross');
//     cross.forEach(cross => {
//     cross.addEventListener('click', (e)=> {
//         let text = cross.parentNode.innerText;
//         let item = document.createElement('li');
//         // item.dataset.value = cross.parentNode.dataset.value;
//         item.innerHTML = text;
//         item.classList.add('unselectedItems');
//         // optionList.appendChild(item);
//         // var cloneUnselect=unselectedItems.cloneNode(true);
        
//         cross.parentNode.parentNode.parentNode.lastChild.appendChild(item);
//         cross.parentNode.remove();
        
//     })
    
//     });
//1
document.querySelectorAll('.selectMultiple ul ').forEach((ul) => {
    // document.querySelector('.selectMultiple ul')
    ul.addEventListener('click', (e) => {
        let li = e.target.closest('li');
        if (!li) { return; }
        let select = li.closest('.selectMultiple');
        if (!select.classList.contains('clicked')) {
            select.classList.add('clicked');
            if (li.previousElementSibling) {
                li.previousElementSibling.classList.add('beforeRemove');
            }
            if (li.nextElementSibling) {
                li.nextElementSibling.classList.add('afterRemove');
            }
            li.classList.add('remove');
            let a = document.createElement('a');
            a.dataset.value = li.dataset.value;
            a.innerHTML = "<em>" + li.innerText + "</em><i></i>";
            a.classList.add('notShown');
            // a.style.display = "none";
            select.querySelector('div').appendChild(a); //might have to check later
            let selectEl = select.querySelector('select');
            let opt = selectEl.querySelector('option[value="' + li.dataset.value + '"]');
            opt.setAttribute('selected', 'selected');
            setTimeout(() => {
                a.classList.add('shown');
                select.querySelector('span').classList.add('hide');
                // if(select.querySelector('option').innerText == li.innerText){
                // 	select.querySelector('option').selected
                // }
    
            }, 300);
            //1st
            setTimeout(() => {
                let styles = window.getComputedStyle(li);
                let liHeight = styles.height;
                let liPadding = styles.padding;
                let removing = li.animate([
                    {
                        height: liHeight,
                        padding: liPadding
                    },
                    {
                        height: '0px',
                        padding: '0px'
                    }
                ], {
                    duration: 300, easing: 'ease-in-out'
                });
                removing.onfinish = () => {
                    if (li.previousElementSibling) {
                        li.previousElementSibling.classList.remove('beforeRemove');
                    }
                    if (li.nextElementSibling) {
                        li.nextElementSibling.classList.remove('afterRemove');
                    }
                    li.remove();
                    select.classList.remove('clicked');
                }
                //             setTimeout(() => {
                //                 if(li.previousElementSibling){
                //                     li.previousElementSibling.classList.remove('beforeRemove');
                //                 }
                //                 if(li.nextElementSibling){
                //                     li.nextElementSibling.classList.remove('afterRemove');
                //                 }
    
                //             }, 200);
            }, 300); //600
            //2nd
        }
    });
})
    



    //2
//document.querySelectorAll('.selectMultiple > div a').forEach((a) => {
var x=document.querySelectorAll('.selectMultiple > div')

    x.forEach(cross =>{
        cross.addEventListener('click', (e) => {
    let a = e.target.closest('a');
    let select = e.target.closest('.selectMultiple');
    if (!a) { return; }
    a.className = '';
    a.classList.add('remove');
    select.classList.add('open');
    let selectEl = select.querySelector('select');
    let opt = selectEl.querySelector('option[value="' + a.dataset.value + '"]');
    opt.removeAttribute('selected');
    //setTimeout(() => {
    a.classList.add('disappear');
    setTimeout(() => {
        // start animation
        let styles = window.getComputedStyle(a);
        let padding = styles.padding;
        let deltaWidth = styles.width;
        let deltaHeight = styles.height;

        let removeOption = a.animate([
            {
                width: deltaWidth,
                height: deltaHeight,
                padding: padding
            },
            {
                width: '0px',
                height: '0px',
                padding: '0px'
            }
        ], {
            duration: 0,
            easing: 'ease-in-out'
        });

        let li = document.createElement('li');
        li.dataset.value = a.dataset.value;
        li.innerText = a.querySelector('em').innerText;
        li.classList.add('show');
        select.querySelector('ul').appendChild(li);
        setTimeout(() => {
            if (!selectEl.selectedOptions.length) {
                select.querySelector('span').classList.remove('hide');
            }
            li.className = '';
        }, 350);

        removeOption.onfinish = () => {
            a.remove();
        }
        //end animation

    }, 300);
    //}, 400);
});

});
//3
document.querySelectorAll('.selectMultiple > div .arrow, .selectMultiple span').forEach((el) => {
    el.addEventListener('click', (e) => {
        el.closest('.selectMultiple').classList.toggle('open');
    });
});