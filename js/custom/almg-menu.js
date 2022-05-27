
//Variaveis globais
var menu, subtrair;
var id = "accordionMenuMobile";

function ancorarMenu(posicao, animado) {
    posicao -= subtrair;
    if (animado)
        menu.parentElement.scrollTo({ top: posicao, behavior: 'smooth' });
    else
        menu.parentElement.scrollTop = posicao;
}

window.addEventListener("load", function () {
    //Elementos
    var topo = document.getElementsByClassName("offcanvas-header")[0];
    var rotulo = topo.nextElementSibling;
    var ativo = document.querySelectorAll(".accordion-collapse.show")[0];

    //Povoar variaveis globais
    subtrair = topo.offsetHeight + rotulo.offsetHeight;
    menu = document.getElementById(id);

    //Garantir que o menu esteja no top (refresh do browser)
    ancorarMenu(0, false);

    //Desconsiderar submenu ativo - 1 de 2
    if (typeof (ativo) != 'undefined' && ativo != null) ativo.style.display = "none";

    //Registrar posicoes de cada item do menu
    var links = document.querySelectorAll("#" + id + " li a");
    links.forEach(function (elemento, idx) {
        elemento.setAttribute("data-pos", elemento.getBoundingClientRect().top);
    });

    //Desconsiderar submenu ativo - 2 de 2
    if (typeof (ativo) != 'undefined' && ativo != null) {
        ativo.style.display = "";
        var link = ativo.previousElementSibling;
        var posicao = link.dataset.pos;
        ancorarMenu(posicao, false);
    }

    //Ancorar item clicado
    menu.addEventListener("shown.bs.collapse", function (obj) {
        var link = obj.srcElement.previousElementSibling; //'show.bs' e 'shown.bs'
        var posicao = link.dataset.pos;
        //menu.style.height=menu.offsetHeight*5+"px"; //se 'show.bs'
        ancorarMenu(posicao, true);
    })

    var sublinks = document.querySelectorAll("#" + id + " li ul li a");
    sublinks.forEach(function (elemento, idx) {
        elemento.addEventListener('click', function (event) {
            //if(event.srcElement.childElementCount==1)
            event.currentTarget.innerHTML += ' <div class="spinner-grow spinner-grow-sm ms-1 text-primary" role="status"><span class="visually-hidden">...</span></div>';
            //event.currentTarget.style.pointerEvents = "none";
            //event.preventDefault();
            //window.location.href = event.target.href;
        });
    });

});
