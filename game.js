function main() {
    //How to genarate random card
    let confirm = document.getElementById("mainRe").innerHTML;
    if (confirm == "You are lost") {
        alert("game over please restart thr game");
    }
    let x;
    do {
        x = Math.floor(Math.random() * 100 / 7.6);
    } while (x == 0);

    let currentTT = parseInt(document.getElementById("result").innerHTML);
    let total = currentTT + x;
    document.getElementById("result").innerHTML = total;
    if (total < 21) {
        document.getElementById("mainRe").innerHTML = "Genarate another card"
    } else if (total == 21) {
        document.getElementById("mainRe").innerHTML = "You are won"
        alert("congratulations!!");
    } else if (total > 21) {
        document.getElementById("mainRe").innerHTML = "You are lost"
        alert("LOST:( click restart to play again");
    }
    var img = document.createElement("img");
    img.src = "images/" + x + ".png";
    img.height = 300;
    document.body.appendChild(img);
}
function restart() {
    location.reload();
}