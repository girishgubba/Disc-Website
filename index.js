for(i=0;i<8;i++){
document.querySelectorAll(".drum")[i].addEventListener("click" , function (){
    var buttonInnerHTML = this.innerHTML;

    if(buttonInnerHTML="w"){
    
        var audio = new Audio("C:\Users\17858\OneDrive\Documents\FULL STACK\Drum+Kit+Starting+Files\Drum Kit Starting Files\sounds\crash.mp3");
        audio.play();
        break;
    }
    else if(buttonInnerHTML="a"){
        var kick = new Audio("C:\Users\17858\OneDrive\Documents\FULL STACK\Drum+Kit+Starting+Files\Drum Kit Starting Files\sounds\kick-bass.mp3");
        kick.play();
        break;
    }
    else if(buttonInnerHTML="s"){
        var snare = new Audio("C:\Users\17858\OneDrive\Documents\FULL STACK\Drum+Kit+Starting+Files\Drum Kit Starting Files\sounds\snare.mp3");
        snare.play();
        break;
    }
    else if(buttonInnerHTML="d"){
        var tom1 = new Audio("C:\Users\17858\OneDrive\Documents\FULL STACK\Drum+Kit+Starting+Files\Drum Kit Starting Files\sounds\tom-1.mp3");
        tom1.play();
        break;
    }
    else if(buttonInnerHTML="j"){
        var tom2 = new Audio("C:\Users\17858\OneDrive\Documents\FULL STACK\Drum+Kit+Starting+Files\Drum Kit Starting Files\sounds\tom-2.mp3");
        tom2.play();
        break;
    }
    else if(buttonInnerHTML="k"){
        var tom3 = new Audio("C:\Users\17858\OneDrive\Documents\FULL STACK\Drum+Kit+Starting+Files\Drum Kit Starting Files\sounds\tom-3.mp3");
        tom3.play();
        break;
    }
    else{
        var tom4 = new Audio("C:\Users\17858\OneDrive\Documents\FULL STACK\Drum+Kit+Starting+Files\Drum Kit Starting Files\sounds\tom-4.mp3");
        tom4.play();
        break;
    }
});
}

document.addEventListener("keypress" , function(){
    alert("Key Pressed");
});