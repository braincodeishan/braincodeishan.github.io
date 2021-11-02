function changetheme(){
    var color1=window.localStorage.getItem('smartcolor1');
    var color2=window.localStorage.getItem('smartcolor2');
    var r = document.querySelector(':root');
    r.style.setProperty('--card-header-color', color1);
    r.style.setProperty('--heading3-color', color2);
    

}
