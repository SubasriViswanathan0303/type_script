class gallery {

    Url: string;
    caption: string;
    constructor(paramurl, paramcaption) {
        this.Url = paramurl;
        this.caption = paramcaption;
    }
}
let galleryarray: Array<gallery> = new Array<gallery>();
galleryarray.push(new gallery("images/alice.jpg", "Alice in wonderland"));
galleryarray.push(new gallery("images/frozen.jpg", "Frozen"));
galleryarray.push(new gallery("images/expandable.jpg", "Expandable"));
galleryarray.push(new gallery("images/ff9.jpg", "Fast and Furious"));
galleryarray.push(new gallery("images/falcon.jpg", "The Falcon and Winter solider"));
galleryarray.push(new gallery("images/spiderman.jpg", "The Spider Man"));
galleryarray.push(new gallery("images/Cinderella.jpg","Cindralla"));
galleryarray.push(new gallery("images/stuart.jpg","Stuart Little"));
galleryarray.push(new gallery("images/iland.jpg","Mysterious Island"));
galleryarray.push(new gallery("images/tom.jpg","Tom and Jerry"));

let temp = 0;
let _img;
let _caption;

function show() {
    _img = (document.getElementById("maincontent") as HTMLDivElement); //maincontent
    _caption = (document.getElementById("captionid") as HTMLParagraphElement);

    _img.style.backgroundImage = `url(${galleryarray[temp].Url})`;
    _caption.innerText = `${galleryarray[temp].caption}`;
}
function next() {
    if (temp != galleryarray.length - 1) {//0 != 6

        temp++;
        _img.style.backgroundImage = `url(${galleryarray[temp].Url})`;
        _caption.innerHTML = `${galleryarray[temp].caption}`;
    }
    else
    {
        temp=0;
        _img.style.backgroundImage = `url(${galleryarray[temp].Url})`;
        _caption.innerHTML = `${galleryarray[temp].caption}`;
    }
}
function back() {
    if (temp != 0) { //0 != 0
 
        temp--;
        _img.style.backgroundImage = `url(${galleryarray[temp].Url})`;
        _caption.innerHTML = `${galleryarray[temp].caption}`;
    }
    else
    {
        temp=9;
        _img.style.backgroundImage = `url(${galleryarray[temp].Url})`;
        _caption.innerHTML = `${galleryarray[temp].caption}`;
    }
}


window.addEventListener("load", show, false);