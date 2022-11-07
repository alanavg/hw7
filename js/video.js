var video = document.querySelector('#player1');

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	video.volume = 1.0;
	document.querySelector("#volume").innerHTML= video.volume * 100 + "%"
	console.log("Volume is " + video.volume*100)
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});


document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.90;
	console.log("Speed down")
	console.log("Video speed is " + video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate / 0.90;
	console.log("Speed up")
	console.log("Video speed is " + video.playbackRate)
});

document.querySelector("#skip").addEventListener("click", function() {
	video.currentTime = video.currentTime + 10;

	console.log("Skip ahead")
	if (video.currentTime == 67.403333) {
		video.currentTime = video.currentTime * 0;
		console.log("Video is at " + video.currentTime)
	}
	else {
		console.log("Video is at " + video.currentTime)
	}
	
});

document.querySelector("#mute").addEventListener("click", function() {
	if (document.querySelector("#mute").innerHTML == "Mute") {
		console.log("Mute")
		video.muted = true;
		video.volume = 0;
		document.querySelector("#mute").innerHTML= "Unmute"
		document.querySelector("#volume").innerHTML= video.volume * 100 + "%"
	}
	else {
		console.log("Unmute")
		document.querySelector("#mute").innerHTML == "Unmute"
		video.muted = false;
		video.volume = 1.0;
		document.querySelector("#mute").innerHTML= "Mute"
		document.querySelector("#volume").innerHTML= video.volume * 100 + "%"
	}
});

document.querySelector("slider").addEventListener("click", function() {
	document.querySelector("#volume").innerHTML= "%"
	console.log("Volume is " + video.volume*100)
});
