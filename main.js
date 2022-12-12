let container=document.querySelector('.addcontainer');
let value1=document.querySelector('#input');
let add1=document.querySelector('#add');

class item{
    constructor(name)
    {
        this.create(name);
    }
    create(name)
    {
        let l1=document.createElement('div')
        l1.classList.add('item');
        
        let input=document.createElement('input');
        input.text="text";
        input.disabled=true;
        input.value=name;
        input.classList.add('item_input');

        let remove=document.createElement('button');
        remove.classList.add('remove');
        remove.innerHTML='<i class="fa fa-trash"></i>';
        remove.addEventListener('click',()=>this.remove(l1));

        container.appendChild(l1);

        l1.appendChild(input);

        l1.appendChild(remove);
    }
    remove(l1)
    {
        container.removeChild(l1);
    }
}
add1.addEventListener('click',check);
window.addEventListener('keydown',(e)=>{
    if(e.which==13)
    {
        check();
    }
})

function check()
{
    if(value1.value!="")
    {
        new item(value1.value);
        value1.value="";
    }
}
function removeAll()
{
    document.querySelector('.addcontainer').innerHTML="";
}


// https://www.youtube.com/watch?v=Ib4C38gqQLE