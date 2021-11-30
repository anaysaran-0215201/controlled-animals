function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/aK0nKPUFw/', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('dog') 
    img1 = document.getElementById('cat')
    img2 = document.getElementById('cow')

    if (results[0].label == "Bark") {
      img1.src = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.medicalnewstoday.com%2Farticles%2F322868&psig=AOvVaw3IVlV8McSlzDyn_Oa1gR4l&ust=1638322983260000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKi5we36vvQCFQAAAAAdAAAAABAD';
    } else if (results[0].label == "Meow") {
      img2.src = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nytimes.com%2F2021%2F09%2F07%2Fscience%2Fcat-stripes-genetics.html&psig=AOvVaw24Q8yVzaFUpG7HnC71p-68&ust=1638322953369000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNji2N_6vvQCFQAAAAAdAAAAABAD';
    } else if (results[0].label == "Moo") {
      img3.src = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FDairy_cattle&psig=AOvVaw0kizwm6qtGttEEuWBJcbeS&ust=1638322585748000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKDDxLL5vvQCFQAAAAAdAAAAABAD';
  }
 }
}