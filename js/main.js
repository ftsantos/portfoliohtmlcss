let numeroPaginaAtual = 1
const numeroPaginaMin = 1 // 
const numeroPaginaMax = 2 // quantidade máxima de páginas a serem exibidas



function showPage(pageNumber) {
    var pages = document.getElementsByClassName('page');
    for (var i = 0; i < pages.length; i++) {
      pages[i].classList.remove('active');
    }
    if( pageNumber === 1 & numeroPaginaAtual > numeroPaginaMin){ //ir pra esquerda
        numeroPaginaAtual = numeroPaginaAtual - 1;
    }
    if( pageNumber === 2 & numeroPaginaAtual < numeroPaginaMax){ //ir pra esquerda
        numeroPaginaAtual = numeroPaginaAtual + 1;
    }
    document.getElementById('page' + numeroPaginaAtual).classList.add('active');
  }
