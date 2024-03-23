var classifier;
function but1()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/u02fOYRBx/model.json",modelready);
}
function modelready()
{
    console.log(classifier);
    classifier.classify(gr);
}
var dog=0;
var cat=0;
function gr(error, result)
{
    if (error){
        console.log(error);
    }
    else{
        console.log(result);
        var rr=Math.floor(Math.random()*255) + 1;
        var rb=Math.floor(Math.random()*255) + 1;
        var rg=Math.floor(Math.random()*255) + 1;
        document.getElementById("h31").innerHTML="I can hear : "+result[0].label;
        document.getElementById("h32").innerHTML="Dog count : "+dog+" Cat count : "+cat;
        document.getElementById("h31").style.color="rgb("+rr+","+rg+","+rb+")";
        document.getElementById("h32").style.color="rgb("+rr+","+rg+","+rb+")";
        var img1=document.getElementById("am1");
        if (result[0].label == "Barking") {
            img1.src = 'barking.jpg';
            dog = dog+1;
          } else if (result[0].label == "Meowing") {
            img1.src = 'meow.jpg';
            cat = cat + 1;
          } else{
            img1.src = 'listen.gif';
          }
    }
}