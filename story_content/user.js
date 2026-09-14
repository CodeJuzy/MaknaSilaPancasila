function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5rh7Ejhvj7y":
        Script1();
        break;
      case "6OIdBcBTW8z":
        Script2();
        break;
      case "5fcCjR98IRx":
        Script3();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="musik.mp3";
audio.load();
audio.play();
audio.volume=0.3;
}

function Script2()
{
  var audio = document.getElementById('bgSongku');
audio.src="musik.mp3";
audio.load();
audio.play();
audio.volume=0.3;

}

function Script3()
{
  var audio = document.getElementById('bgSongku');
audio.src="musik.mp3";
audio.load();
audio.pause();
audio.volume=0;
}

