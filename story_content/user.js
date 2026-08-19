function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6K1RtxS8kTU":
        Script1();
        break;
      case "5kVAkIM2nbH":
        Script2();
        break;
      case "5VLUSua3Dxm":
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

