
const notes = document.querySelectorAll('.note');


function playSound(e){
	const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
	const note = document.querySelector(`.note[data-key = "${e.keyCode}"]`);

	if(!audio) { // if pressed key has no equivalent audio file stop it.
		return;
	}else{
		audio.currentTime = 0; // make the audio playable continuously
		audio.play();
	}; 

	note.classList.add('highlightNote');
}

function removeHighlight(e){
	if(e.propertyName !== 'transform') {
		return;
	}
	this.classList.remove('highlightNote');
}

notes.forEach(note => note.addEventListener('click', (e) =>{
	const note = e.target;
	const noteKey = e.target.attributes[0].value;
	const noteAudio = document.querySelector(`audio[data-key="${noteKey}"]`);
	
	noteAudio.currentTime = 0;
	noteAudio.play();
	
	note.classList.add('highlightNote');
}));



notes.forEach(note => note.addEventListener('transitionend', removeHighlight));

window.addEventListener('keydown', playSound);
