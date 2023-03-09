const main = document.querySelectorAll('.stars')
main.forEach((el) => {
    const starUL = elMaker(el, 'ul', 'main');
    const output = elMaker(el, 'div', 'output');

    for (let x = 0; x < 5; x++) {
        const star = elMaker(starUL, 'li', 'star');
        star.innerHTML = "&#10029";
        star.starVal = (x + 1);

        ["mouseover", "mouseout", "click"].forEach((els) => {
            star.addEventListener(els, starRate)
        })
    }

})


function starRate(e) {
    // console.log(e.type)
    const eventType = e.type;
    let starVal = e.target.starVal;


    if (eventType === 'click') {
        // output.innerHTML = `You have rated ${e.target.starVal}`
        const mainContainer = e.target.closest('.stars')
        const outputArea = mainContainer.querySelector('.output');
        console.log(mainContainer)
        const parent = e.target.closest('ul');
        const stars = parent.querySelectorAll('.star');
        // console.log(stars)
        // console.log(parent);
        addOrange(stars, starVal)
        outputArea.innerHTML = `You have Rater ${starVal} stars.`
    } else if (eventType === "mouseover" || eventType === "mouseout") {
        const parent = e.target.closest('ul');
        
    }
}


function addOrange(stars, starVal) {
    stars.forEach((star, index) => {
        if (index < starVal) {
            star.classList.add('orange');
        } else {
            star.classList.remove('orange')
        }
    })
}


function addYellow() {

}




function elMaker(elParent, elType, elClass) {
    const ele = document.createElement(elType);
    ele.classList.add(elClass);
    elParent.append(ele);
    return ele;
}