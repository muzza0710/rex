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
    let text = images.options[images.selectedIndex].textContent;
    let label3 = document.getElementById("label3");
    image.src = images.value;
    label3.innerHTML = text;
}


