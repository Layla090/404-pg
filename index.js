let currentScreen = 0; // 0 = Happy, 1 = Smack

const a = document.getElementById('arm');
const b = document.getElementById('body');

function isColliding(el1, el2) {
    const a = el1.getBoundingClientRect();
    const b = el2.getBoundingClientRect();

    return !(
        a.top > b.bottom ||
        a.bottom < b.top ||
        a.right < b.left ||
        a.left > b.right
    );
}
    if (currentScreen === 0) {
        document.getElementById("before").style.display = "none";
        document.getElementById("after").style.display = "block";
        currentScreen = 1;
    }