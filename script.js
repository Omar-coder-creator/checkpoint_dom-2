document.addEventListener('DOMContentLoaded',function () {
    box = document.getElementById('color-box');
    btn = document.getElementById('change-color-btn');
    
    
    function getRandomColor(){
        var hex_color = "#";
        for( let i=1;i<=6;i++){
            do{
                var char = Math.floor(Math.random()*91)
            }while(!(char >= 48 && char <= 57 || char >=65 && char <= 70))
            char = String.fromCharCode(char);
            hex_color+=char;
        }
        return hex_color
    }

    function change(){
        box.style.backgroundColor = getRandomColor() ;
    }
    
    btn.addEventListener('click',change)
})