let titulo = $("#titulo");
let imagem = $("#imagem");
let explicacao = $("#explicacao");
let botao = $("#botao");

$.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=p1ksHdXji6yr7QuCmYFbmtoPcmE5VlByhjOs5jpD`,

    success(result){
    
        titulo[0].innerHTML = result.title;
        imagem.css({"background": `url(${result.url})`, "background-repeat": `no-repeat`, "background-size": `50% 100%`, "background-position": `center`});
        explicacao[0].innerHTML = result.explanation; 

        console.log(result);
    }
})


function apod(){
    $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=p1ksHdXji6yr7QuCmYFbmtoPcmE5VlByhjOs5jpD&date=${dataBuscada.value}`, 
    
    success(result){
        
        titulo[0].innerHTML = result.title;

        imagem.css({"background": `url(${result.url})`, "background-repeat": `no-repeat`, "background-size": `50% 100%`, "background-position": `center`});  
        explicacao[0].innerHTML = result.explanation; 

        console.log(result);
    }
    })
}


