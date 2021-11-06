function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector("div#res");

        if (fano.value.length == 0 || Number(fano.value) > ano) {
            window.alert('Verifique o ano e tente novamente');
        } else {
            var fsex = document.getElementsByName('radsex');
            var idade = ano - Number(fano.value);
            var genero = "";
            var img = document.createElement('img');
            img.setAttribute('id', 'foto');

            if (fsex[0].checked) {
                genero = 'homem';
                if (idade >= 0 && idade < 10) {
                    //criança
                    genero = genero.replace('homem', 'menino');
                    img.setAttribute('src', 'hcrianca.png');
                } else if (idade < 21) {
                    //jovem
                    genero = genero.replace('homem', 'jovem');
                    img.setAttribute('src', 'hjovem.png');
                } else if (idade < 50) {
                    //adulto
                    img.setAttribute('src', 'hadulto.png');
                } else {
                    //idoso
                    genero = genero.replace('homem', 'senhor');
                    img.setAttribute('src', 'hidoso.png');
                }
            } else if (fsex[1].checked) {
                genero = 'mulher';
                if (idade >= 0 && idade < 10) {
                    //criança
                    genero = genero.replace('mulher', 'menina');
                    img.setAttribute('src', 'mcrianca.png');
                } else if (idade < 21) {
                    //jovem
                    genero = genero.replace('mulher', 'jovem');
                    img.setAttribute('src', 'mjovem.png');
                } else if (idade < 50) {
                    //adulto
                    img.setAttribute('src', 'madulta.png');
                } else {
                    //idoso
                    genero = genero.replace('mulher', 'senhora');
                    img.setAttribute('src', 'midosa.png');
                }
            }
            
            res.style.textAlign = 'center';
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
            res.appendChild(img);

        }
}