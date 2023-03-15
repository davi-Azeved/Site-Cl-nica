let contador = 1;

setInterval( function(){
    document.getElementById('slide' + contador).checked = true;
    contador ++;

    if( contador > 3) {
        contador = 1;
    }

}, 3000)

window.sr = ScrollReveal ({ reset:true });

 sr.reveal(".caixa1", {duration: 2000 });

 sr.reveal(".caixa2", {duration: 2000}); 

 sr.reveal(".caixa3", {duration: 2000});

 sr.reveal(".caixa4-two", {duration: 2000});

 sr.reveal(".caixa5-two", {duration: 2000});

 sr.reveal(".caixa6-two", {duration: 2000});

 sr.reveal(".bau", {duration: 2000});

 sr.reveal(".info-img", {duration: 2000});