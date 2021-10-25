const div_container = document.querySelector('.container')
const div_container_css = getComputedStyle(div_container)
let h = parseInt(div_container_css.height);
let w = parseInt(div_container_css.width);
let input =16,color = 'white';

let r = false;



//console.log(h + " " + w);
function gridMaking()
{
    div_container.innerHTML = '';
    for(i = 0 ; i < input; i++)
    {
        //console.log(i);
        for(j=0 ; j < input; j++)
        {
            const div_in = document.createElement('div')
            //console.log("j =" +j);
            div_in.style.cssText = `height: ${h/input}px; width: ${h/input}px`;
            //div_in.textContent = `${j}`;
            div_in.classList.add('content');
            div_in.classList.add('disable-select');
            div_container.appendChild(div_in);

        }
    }
}
gridMaking();

const divs = document.querySelectorAll('.content')

function reset()
{
    input = prompt("Enter the number of rows & columns. Ex: 32  (Min: 10 Maximum: 100)");
    if (isNaN(input)) {
        window.alert("Enter a valid number.");
        return;
    }
    else if (input <= 0) {
        window.alert("You must enter a positive integer. (Maximum: 100)");
        return;
    }
    else if (input > 100) {
        window.alert("You must enter a positive integer. (Maximum: 100)");
        return;
    }
    divs.forEach(div => div.style.backgroundColor = 'white');
    r = false;
    color = 'white';
    gridMaking();
}



const resetbtn = document.querySelector('#grid');
resetbtn.addEventListener('click', reset);



function paintGrid(elem, color)
{    
    if(elem.buttons == 1)
    {
        if(elem.target.classList[0] == 'content')
        {
            console.log('Here')
            let square = elem.target;    
            square.style.backgroundColor = color;
        }  
    }
    else
    {    
        return;
    }
}
    
    
    div_container.addEventListener('mousedown', e => { 
        if(e.buttons == 1)
        {       
            window.addEventListener('mouseover', e => {
                if(r == true)
                {
                    let n = (Math.random() * 0xfffff * 1000000).toString(16);
                    color = '#' + n.slice(0, 6);
                    paintGrid(e, color);
                }
                else
                {
                    paintGrid(e, color);
                }            
            });
        }
    });
    
    div_container.addEventListener('click', e => {
        if(e.target.classList[0] == 'content')
        {
            e.target.style.backgroundColor = color;
        }
    })



    function colorSel(e)
    {   
        if(e.target.id == 'draw')
        {
            color = 'black';
            r = false;
        }
        else if(e.target.id == 'erase')
        {
            color = 'white';
            r = false;
        }
        else if(e.target.id == 'rainbow')
        {
            r = true;
        }
    }
    function clear()
    {
        divs.forEach(div => div.style.backgroundColor = 'white');
        color = 'white';
        r = false;
    }
    
    

    const drwbtn = document.querySelector('#draw');
    const erasebtn = document.querySelector('#erase');

    drwbtn.addEventListener('click',colorSel);
    erasebtn.addEventListener('click',colorSel);

    const clearbtn = document.querySelector('#clear');
    clearbtn.addEventListener('click',clear);

    const rainbow = document.querySelector('#rainbow');
    rainbow.addEventListener('click',colorSel);

    const colorPicker = document.querySelector('input');
    colorPicker.onchange = e => { 
        color = e.target.value;
    };
    


