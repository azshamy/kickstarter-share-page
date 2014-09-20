$( document ).ready(function() {
	var currentProgress = 1;
	var numClicks = 0;

	setProgress(currentProgress);

  $('.js-bargraph').click(function(){
  	if (numClicks < 3){
  		numClicks++;
  		currentProgress = currentProgress + 33;
  		setProgress(currentProgress);
  	}
  	else{
  	}
  });

});

function setProgress(currentProgress){
  $( "#progressbar" ).progressbar({
    value: currentProgress
  });
}