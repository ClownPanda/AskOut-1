const container=document.getElementById("container")
const erm=document.querySelector(".erm");
const yes=document.querySelector(".yes");
const no=document.querySelector(".no");
const btnYes=document.querySelector(".btn-yes");
const btnNo=document.querySelector(".btn-no");
const h1=document.querySelector("h1");

function getRandomNumber(min, max)
{
    const randomNumber=Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
}





btnNo.addEventListener("mouseover", (e)=> {
    const containerHeight = container.getBoundingClientRect().height;
    const containerWidth = container.getBoundingClientRect().width;
    const btnHeight = btnNo.getBoundingClientRect().height;
    const btnWidth = btnNo.getBoundingClientRect().width;
    const btnTop = btnNo.getBoundingClientRect().top;
    const btnLeft = btnNo.getBoundingClientRect().left;

    let newTop=btnTop;
    let newLeft=btnLeft;

    while(Math.abs(newTop - btnTop) < containerHeight / 3){
        newTop = getRandomNumber(0, containerHeight - btnHeight);
    }
   
    while(Math.abs(newLeft - btnLeft) < containerWidth / 3){
        newLeft = getRandomNumber(0, containerWidth - btnWidth);
    }
     
    btnNo.style.top =  Math.floor(newTop) + "px";
    btnNo.style.left =  Math.floor(newLeft) + "px";
    no.classList.remove("hide");
    erm.classList.add("hide");
    h1.innerText="Please select yes";

})


btnYes.addEventListener("click", (e) =>{
    btnNo.classList.add("hide");
    erm.classList.add("hide");
    no.classList.add("hide");
    yes.classList.remove("hide");
    h1.innerText="Thank you for making my heart skip a beat. Let the adventures begin!"
})

