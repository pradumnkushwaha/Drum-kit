
var noOfTimes = document.querySelectorAll(".drum").length;

function buttonAnimation(ee)
{
    var change = document.querySelector("." + ee);
    change.classList.add("pressed");

    setTimeout(function(){
        change.classList.remove("pressed");
    }, 100);

}

for(var i=0; i<noOfTimes;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",function()
    {
        var buttonInnerHtml = this.innerHTML;
        
            switch(buttonInnerHtml)
            {
                case "w":
                    var tom1 = new Audio("sounds/tom-1.mp3");
                    tom1.play();
                    buttonAnimation(buttonInnerHtml);
                    break;

                 case "a":
                    var tom2 = new Audio("sounds/tom-2.mp3");
                    tom2.play();
                    buttonAnimation(buttonInnerHtml);
                    break;
                case "s":
                    var tom3 = new Audio("sounds/tom-3.mp3");
                    tom3.play();
                    buttonAnimation(buttonInnerHtml);
                    break;

                 case "d":
                    var crash = new Audio("sounds/crash.mp3");
                    crash.play();
                    buttonAnimation(buttonInnerHtml);
                    break;
                case "j":
                        var kick = new Audio("sounds/kick-bass.mp3");
                        kick.play();
                        buttonAnimation(buttonInnerHtml);
                        break;
    
                case "k":
                        var snare = new Audio("sounds/snare.mp3");
                        snare.play();
                        buttonAnimation(buttonInnerHtml);
                        break;
                case "l":
                            var tom4 = new Audio("sounds/tom-4.mp3");
                            tom4.play();
                            buttonAnimation(buttonInnerHtml);
                            break;        
                    


            }

            

        


    });
    document.addEventListener("keydown",function(event)
            {
                var buttonInnerHtml = event.key;
                
        
            switch(buttonInnerHtml)
            {
                case "w":
                    var tom1 = new Audio("sounds/tom-1.mp3");
                    tom1.play();
                    buttonAnimation(buttonInnerHtml);
                    break;

                 case "a":
                    var tom2 = new Audio("sounds/tom-2.mp3");
                    tom2.play();
                    buttonAnimation(buttonInnerHtml);
                    break;
                case "s":
                    var tom3 = new Audio("sounds/tom-3.mp3");
                    tom3.play();
                    buttonAnimation(buttonInnerHtml);
                    break;

                 case "d":
                    var crash = new Audio("sounds/crash.mp3");
                    crash.play();
                    buttonAnimation(buttonInnerHtml);
                    break;
                case "j":
                        var kick = new Audio("sounds/kick-bass.mp3");
                        kick.play();
                        buttonAnimation(buttonInnerHtml);
                        break;
    
                case "k":
                        var snare = new Audio("sounds/snare.mp3");
                        snare.play();
                        buttonAnimation(buttonInnerHtml);
                        break;
                case "l":
                            var tom4 = new Audio("sounds/tom-4.mp3");
                            tom4.play();
                            buttonAnimation(buttonInnerHtml);
                            break;        
                    


            }
            });
}



