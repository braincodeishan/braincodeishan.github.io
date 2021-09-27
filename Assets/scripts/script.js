const dashboardboxs = document.querySelectorAll('.dashboardbox');
dashboardboxs.forEach(dashboardbox => {
    dashboardbox.addEventListener('click', () => {
        removeActive();
        dashboardbox.classList.add('selected');
    })
})

function removeActive() {
    dashboardboxs.forEach(dashboardbox => {
        dashboardbox.classList.remove('selected');
    })
}


const posb_overall = document.getElementById('posb_overall');
const posb_scheme = document.getElementById('posb_scheme');

function removePosbCategoryActive() {
    posb_overall.classList.remove('active');
    posb_scheme.classList.remove('active');
    const buttonposb = document.getElementsByClassName('buttonposb');
    var id = "";
    for (i = 0; i < buttonposb.length; i++) {
        if (buttonposb[i].classList.contains('active')) {
            id = buttonposb[i].id;
            break;
        }
    }

    return id;
}
posb_overall.addEventListener('click', () => {
    var id = removePosbCategoryActive();
    posb_overall.classList.add('active');
    activeData(id);
})
posb_scheme.addEventListener('click', () => {

    var id = removePosbCategoryActive();
    posb_scheme.classList.add('active');
    activeData(id);
})

function activeData(id) {
    const findid = document.getElementsByClassName(id);
    const buttonid = document.getElementById(id);
    const posb = document.getElementsByClassName('posb');
    const buttonposb = document.getElementsByClassName('buttonposb');
    for (i = 0; i < posb.length; i++) {
        posb[i].classList.remove('active');
    }
    for (i = 0; i < buttonposb.length; i++) {
        buttonposb[i].classList.remove('active');
    }
   
    if (posb_overall.classList.contains('active')) {
        findid[0].classList.add('active');

    } else {
        findid[1].classList.add('active');
    }
    buttonid.classList.add('active')
    
}
function activeRpliData(id) {
    const findid = document.getElementsByClassName(id);
    const buttonid = document.getElementById(id);
    const posb = document.getElementsByClassName('posb');
    const buttonposb = document.getElementsByClassName('buttonposb');
    for (i = 0; i < posb.length; i++) {
        posb[i].classList.remove('active');
    }
    for (i = 0; i < buttonposb.length; i++) {
        buttonposb[i].classList.remove('active');
    }
//    console.log(findid);
    findid[0].classList.add('active');
    
    buttonid.classList.add('active');
    
}


function activePMData(id) {
    const findid = document.getElementsByClassName(id);
    const buttonid = document.getElementById(id);
    const posb = document.getElementsByClassName('posb');
    const buttonposb = document.getElementsByClassName('buttonposb');
    for (i = 0; i < posb.length; i++) {
        posb[i].classList.remove('active');
    }
    for (i = 0; i < buttonposb.length; i++) {
        buttonposb[i].classList.remove('active');
    }
//    console.log(findid);
    findid[0].classList.add('active');
    
    buttonid.classList.add('active');
    
}
