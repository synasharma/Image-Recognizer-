Webcam.set
({
width:400,
height:350,
image_format:'png',
dest_width:380,            //Height and Width of the final webcam view-To adjust ratio between camera dimensions and border dimensions(canvas)//
dest_height:285,
png_quality:100
});

cam=document.getElementById("camera");
Webcam.attach(cam);

//Attaching webcam for identification//

function takepic()
{
    Webcam.snap(function(imgurl){
        document.getElementById("result").innerHTML='<img id="new_img" src="'+imgurl+'">';
    });
}
//Capturing the img in the div called 'result' created in HTML//

console.log("ml5.version",ml5.version);
//To check whether the ml5 library (JS library that hepls us with neural network functions), 
//has loaded the first on in double quotes is just for the console purpose and the second without the quotes is the actual loaded library

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/sMmu0aziH/model.json",modelLoaded);
function modelLoaded()
{
    console.log("modelLoaded!");

}

function chkstats()
{
  captured_img=document.getElementById("new_img");
  classifier.classify(captured_img,getresult);
}

function getresult(error,result)
{
if (error)
{
    console.log(error);
}
else
{
    console.log(result);
    document.getElementById("object_name").innerHTML=result[0].label;
    document.getElementById("accuracy_no").innerHTML=(result[0].confidence.toFixed(3))*100+"%";
}
}