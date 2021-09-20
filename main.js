let mainElements = document.querySelectorAll('section');
console.log(mainElements);

let navButtons = document.addEventListener('click', e => {
    let obj = e.target;
    console.log(obj.textContent);
    for(i=0;i<mainElements.length;i++){
       mainElements[i].classList.add('hide');
    }
    if(obj.textContent == "Content 1"){
        let content1 = document.querySelector('.content-1');
        content1.classList.remove('hide');

    }else if(obj.textContent == "Content 2"){
        let content1 = document.querySelector('.content-2');
        content1.classList.remove('hide');

    }else if(obj.textContent == "Content 3"){
        let content1 = document.querySelector('.content-3');
        content1.classList.remove('hide');

    }
});