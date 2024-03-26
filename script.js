function rex(){
    let x = document.getElementById("img1");
    let y = document.getElementById("img2");
    y.src = "https://onedrive.live.com/embed?resid=F9A5EF287CE8C24A%21646&authkey=%21AD2YKLdO1CXGN3U&width=1500&height=2000"
    x.src = "https://onedrive.live.com/embed?resid=F9A5EF287CE8C24A%21649&authkey=%21ABaxSQS40IA4EVo&width=1500&height=2000";
    let label1 = document.getElementById("label1");
    let label2 = document.getElementById("label2");
    label2.innerHTML = "Suitcase Rex"
    label1.innerHTML = "Wall Rex";
}

function buzz() {
    let x = document.getElementById("img1");
    x.src = "https://onedrive.live.com/embed?resid=F9A5EF287CE8C24A%21648&authkey=%21AN-zXplREOKTDYk&width=2000&height=1500"
    let y = document.getElementById("img2");
    y.src = "https://onedrive.live.com/embed?resid=F9A5EF287CE8C24A%21647&authkey=%21AK8S1Qd_IcMFfNM&width=2000&height=1500";
    let label1 = document.getElementById("label1");
    let label2 = document.getElementById("label2");
    label2.innerHTML = "Dinner date"
    label1.innerHTML = "Buzz and Rex";
}

function showImg() {
    let images = document.getElementById("images");
    let image = document.getElementById("img3");

    if (images.value === "rex1") {
        image.src = "https://onedrive.live.com/embed?resid=F9A5EF287CE8C24A%21653&authkey=%21ANZaLCyPliNwCkA&width=8000&height=6000"
        label3.innerHTML = "Side Eye"
    }
    else if (images.value === "rex2"){
        image.src = "https://onedrive.live.com/embed?resid=F9A5EF287CE8C24A%21654&authkey=%21AHV1nAn9CwrKvL0&width=1200&height=1600"
        label3.innerHTML = "unimpressed"
    }
    else if (images.value === "rex3"){
        image.src = "https://onedrive.live.com/embed?resid=F9A5EF287CE8C24A%21655&authkey=%21ADMsxvTuYxXiM9s&width=8000&height=6000"
        label3.innerHTML = "bedtime"
    }
    else if (images.value === "rex4"){
        image.src = "https://onedrive.live.com/embed?resid=F9A5EF287CE8C24A%21645&authkey=%21AE1_SoDkasvXa3I&width=1500&height=2000"
        label3.innerHTML = "Tom and Rex"
    }
    else if (images.value === "rex5"){
        image.src = "https://onedrive.live.com/embed?resid=F9A5EF287CE8C24A%21660&authkey=%21ALnR2GxunS4Mt0k&width=1080&height=1920"
        label3.innerHTML = "Kelly and Rex"
    }
    else if (images.value === "rex6"){
        image.src = "https://onedrive.live.com/embed?resid=F9A5EF287CE8C24A%21661&authkey=%21AOLxzAzCUHPdqPE&width=1536&height=2048"
        label3.innerHTML = "Baby Rex"
    }
    
}


