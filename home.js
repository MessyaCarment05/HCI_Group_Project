const date=new Date();
const jam=date.getHours();
console.log(jam);
const openClose=document.getElementById("open-close");
if (jam>=10 && jam<22)
{
    openClose.src="assets/open.png"
}
else
{
    openClose.src="assets/close.png"
}