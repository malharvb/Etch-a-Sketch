
const div_container = document.querySelector('.container')
for(i = 0 ; i < 16; i++)
{
    console.log(i);
    for(j=0 ; j <16; j++)
    {
        const div_in = document.createElement('div')
        console.log("j =" +j);
        div_in.style.cssText = `height: ${640/16}px; width: ${640/16}px;  background-color: cyan;`;
        //div_in.textContent = `${j}`;
        div_container.appendChild(div_in);

    }
}