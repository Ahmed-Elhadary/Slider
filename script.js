var imgeitem=Array.from(document.querySelectorAll('.slider-container img'));
var slidecount=imgeitem.length;
var currentslide=1;
var slideelement=document.getElementById('slide-number');
var nextbutton=document.getElementById('next');
var prevbutton=document.getElementById('prev');



var ulitem=document.createElement('ul');

ulitem.setAttribute('id','ul-item');

for(var i=1; i<=slidecount;i++)
{
    var liItem=document.createElement('li');
    liItem.setAttribute('data-index',i);
    var licontent=document.createTextNode(i)
    liItem.appendChild(licontent);
     ulitem.appendChild(liItem);
}
document.getElementById('indecators').appendChild(ulitem);

var pagenationUl=document.getElementById('ul-item');
var paginationbull=Array.from(document.querySelectorAll('#ul-item li'));

for(var i=0;i<paginationbull.length;i++)
{
    paginationbull[i].onclick=function()
    {
         currentslide=parseInt(this.getAttribute('data-index'));
         checker();
    }
}

nextbutton.onclick=nextslide;
prevbutton.onclick=prevslide;

//Move To Next Image Slider
function nextslide()
{
    if(nextbutton.classList.contains('disabled'))
    {
        return false;
    }
    else
    {
        currentslide++;
        checker();  
    }
}

//Move back To Previous slider images
function prevslide()
{
    if(prevbutton.classList.contains('disabled'))
    {
        return false;
    }
    else
    {
        currentslide--;
        checker();
        
    }
}

//Check Active Button
function checker(){
  removeAllactives()
    slideelement.textContent='Slide ' + (currentslide) +' of  ' + (slidecount);
    imgeitem[currentslide -1].classList.add('active');
   pagenationUl.children[currentslide - 1].classList.add('active');    
 
if(currentslide==1){
    prevbutton.classList.add('disabled')
}
else{
    prevbutton.classList.remove('disabled')
}

if(currentslide== slidecount){
    nextbutton.classList.add('disabled')
}
else{
    nextbutton.classList.remove('disabled')
}
}

function removeAllactives()
{
    imgeitem.forEach(function(img)
    {
        img.classList.remove('active')
    });

    paginationbull.forEach(function(bullet)
    {
        bullet.classList.remove('active');
    })
}