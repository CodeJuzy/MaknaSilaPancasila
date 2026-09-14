function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6cwIEAwxbhz":
        Script1();
        break;
      case "6qLDvTTEpig":
        Script2();
        break;
      case "5zfosMfqoxP":
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

