Webcam.set({
    width:360,
    height:250,
    image_format : "png",
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera")

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captureimage" src="'+data_uri+'"/>';
    });
}
console.log("ml5 version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/WOLbWLBDC/",modelLoaded);

function modelLoaded(){
  console.log("Model Loaded!");
}
function check(){
  img=document.getElementById("captureimage");
  classifier.classify(img,gotResult);
}
function gotResult(error,results){
  if(error){
    console.error(error);
  }
  else{
    console.log(results);
    document.getElementById("resultobject").innerHTML=results[0].label;
    document.getElementById("resultaccuracy").innerHTML=(results[0].confidence*100).toFixed(3)+" %";
  }
}
