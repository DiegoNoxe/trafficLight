const light = document.querySelectorAll('.light');
let lua = document.querySelector('.moon');
let sol = document.querySelector('.sun');
let lanterna = 0;
let i = 0;
let ativo = 0;
let interval;


function TrocaLuz()
{
for(let j = 0; j<light.length;j++)
{
    light[j].classList.remove('active');
}

light[i].classList.add('active');
i = (i + 1) % light.length;
}

function pedirPassagem()
{
    if (ativo === 1) return;
    ativo = 1;
    clearInterval(interval);
    light[0].classList.remove('active');
    light[1].classList.remove('active');
    light[2].classList.add('active'); 

    setTimeout(() => {
        i = 2;
        ativo = 0;
        interval = setInterval(TrocaLuz, 2000);
    }, 5000);
    

    pedestre()
}

 interval = setInterval(TrocaLuz, 2000);


function pedestre() {
    const img = document.querySelector('.caminhada');
    let m = 0;

    let run = setInterval(function() {
        m+=10
        img.style.display = 'block'
        img.style.marginLeft = m + "px";
    }, 30);

    setTimeout(() => {
        clearInterval(run); 
        img.style.display = 'none'
    }, 4000);
}

function pararSinal()
{
    clearInterval(interval);    
}

function voltaSinal()
{
    interval = setInterval(TrocaLuz, 2000);
}

function trocaFundo()
{
    let btd = document.querySelectorAll('.btd');
    let f = document.querySelector('.fundo');

    if(lanterna == 0)
    {
        document.body.style.backgroundColor = 'black'
        f.style.backgroundColor = 'rgb(17, 138, 118)';
        lua.style.display = 'none';
        sol.style.display = 'block';
        btd.forEach(botao => {
            botao.style.backgroundColor = 'white';
            botao.style.color = 'black';
        });
        lanterna = 1;
    }

    
    else
        {
            document.body.style.backgroundColor = 'white'
            lua.style.display = 'block';
            sol.style.display = 'none';
            btd.forEach(botao => {
                botao.style.backgroundColor = 'black';
                botao.style.color = 'white';
                f.style.backgroundColor = 'black';
            });
            lanterna = 0;
        }
    
}