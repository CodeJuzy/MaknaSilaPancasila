function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6d4IlJYA39O":
        Script1();
        break;
      case "61i62FkRc1V":
        Script2();
        break;
      case "6YUDthyL2wn":
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

