let titulo = $("#titulo");
let imagem = $("#imagem");
let diVideo = $('#div-video');
let video = $('#video');
let explicacao = $("#explicacao");
let botao = $("#botao");

$.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=p1ksHdXji6yr7QuCmYFbmtoPcmE5VlByhjOs5jpD`,

    success(result){

         //condição para quando for imagem, adiciona uma classe e remove outra
         if (result.media_type == "image") {
            diVideo.css({"display": `none`});
            imagem.css({"display": `block`});
            imagem.css({"background": `url(${result.url})`, "background-repeat": `no-repeat`, "background-size": `60% 100%`, "background-position": `center`});
        }

        //quando for vídeo trocar as condições
        else {
            imagem.css({"display": `none`});
            diVideo.css({"display": `flex`});
            video.attr('src', `${result.url}`)
        }

        titulo[0].innerHTML = result.title;

        
        explicacao[0].innerHTML = result.explanation; 

        console.log(result);
    }
})


function apod(){
    $.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=p1ksHdXji6yr7QuCmYFbmtoPcmE5VlByhjOs5jpD&date=${dataBuscada.value}`, 
    
    success(result){
        
        //condição para quando for imagem, adiciona uma classe e remove outra
         if (result.media_type == "image") {
            diVideo.css({"display": `none`});
            imagem.css({"display": `block`});
            imagem.css({"background": `url(${result.url})`, "background-repeat": `no-repeat`, "background-size": `60% 100%`, "background-position": `center`});
        }

        //quando for vídeo trocar as condições
        else {
            imagem.css({"display": `none`});
            diVideo.css({"display": `flex`});
            video.attr('src', `${result.url}`)
        }

        titulo[0].innerHTML = result.title;

        explicacao[0].innerHTML = result.explanation; 

        console.log(result);
    }
    })
}


