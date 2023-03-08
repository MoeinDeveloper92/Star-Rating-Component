const main = document.querySelector('.stars')
const starUL = elMaker(main, 'ul', 'main');
const output = elMaker(main, 'div', 'output');

for (let x = 0; x < 5; x++) {
    const star = elMaker(starUL, 'li', 'star');
    star.innerHTML = "&#10029";
    star.starVal = (x + 1);

    ["mouseover", "mouseout", "click"].forEach((el) => {
        star.addEventListener(el, starRate)
    })
}



function starRate(e) {
    console.log(e.type)
    const eventType = e.type;
    if (eventType === 'click') {
        output.innerHTML = `You have rated ${e.target.starVal}`
    }
}




function elMaker(elParent, elType, elClass) {
    const ele = document.createElement(elType);
    ele.classList.add(elClass);
    elParent.append(ele);
    return ele;
}