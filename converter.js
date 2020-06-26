document.getElementById('block').style.visibility = 'hidden';

document.getElementById('input').addEventListener('input',function(e){
    document.getElementById('block').style.visibility = 'visible';
    
    //get the input
    var cm = e.target.value;

    //Meters
    document.getElementById('inMeters').innerHTML= cm/100;

    //Foots
    var foot = cm/30;
    var footnew = foot.toFixed(2);
    document.getElementById('inFoots').innerHTML= footnew;

    //Inches
    document.getElementById('inInches').innerHTML= cm/2.5;

    //Foots and Inches
    var I = cm/2.5;
    var Inew = Math.trunc(I);
    var F = cm/30;
    var Fnew = Math.trunc(F);
    document.getElementById('inFandI').innerHTML= Fnew + "'" + Inew%12;
})