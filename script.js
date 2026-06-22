const container = document.querySelector('.container');
const size = document.querySelector('.size');
const rainbow = document.querySelector('.rainbow');


function createGrid(num){
    
    container.replaceChildren();
    for( i=1 ; i <= num*num ; i++){
        let block = document.createElement('div');
        block.classList.add('block');
        block.style['flexBasis'] = `${100/num}%`
        block.addEventListener('mouseover',function(event) {  
            if (rainbow.checked){
                event.target.style['background-color'] = `rgb(${Math.floor(Math.random() * 255)},
                                                            ${Math.floor(Math.random() * 255)},
                                                            ${Math.floor(Math.random() * 255)})`;
            }else{
                event.target.style['background-color'] = 'grey';
            }
                
        })
        container.appendChild(block);
    }
}

size.addEventListener('click',()=> {
    let num = prompt('choose the size of the grid');
    createGrid(num);
})

createGrid(16);