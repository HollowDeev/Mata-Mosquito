    altura = window.screen.availHeight
    largura = window.screen.availWidth

    var coracao1 = document.getElementById('v1')
    var coracao2 = document.getElementById('v2')
    var coracao3 = document.getElementById('v3')

    var vida = 3
    var tempoCronometro = 20
    var tempoMosquito = 2000

    var dificuldade = localStorage.getItem(`dificuldade`)
    switch(dificuldade) {
        case 'facil':
            var tempoCronometro = 15
            var tempoMosquito = 2000
            break
        
        case 'medio': 
            var tempoCronometro = 25
            var tempoMosquito = 1000
            break
        
        case `dificil`:
            var tempoCronometro = 35
            var tempoMosquito = 750
    }

    var campoCronometro = document.getElementById('cronometro')
    campoCronometro.innerHTML = tempoCronometro

    // Cronometro
    var cronometro = setInterval(() => {
        
        tempoCronometro --

        if(tempoCronometro <= 0) {
            clearInterval(cronometro)
            setTimeout( window.location.href = "vitoria.html", 1000)
        } else {
            campoCronometro.innerHTML = tempoCronometro
        }
        
    }, 1000) 

    // verifica tamanho da tela
    function ajustaTamanhoJogo () {
        altura = window.screen.availHeight
        largura = window.screen.availWidth
    }

    // criando o mosquito
    function criarMosquito () {
        
        verificarMosquito()
        
        var mosquito = document.createElement('img')
        mosquito.src = 'imagens/mosca.png'

        mosquito.className = definirTamanho() + definirDirecao()
        mosquito.id = 'mosquito'

        document.body.appendChild(mosquito)

        var posicaoX = Math.floor((Math.random() * largura) - 150)
        var posicaoY = Math.floor((Math.random() * altura) - 150)

        posicaoX = posicaoX < 0 ? 10 : posicaoX
        posicaoY = posicaoY < 0 ? 10 : posicaoY

        mosquito.style.left = `${posicaoX}px`
        mosquito.style.top = `${posicaoY}px`

        mosquito.onclick = function () {
            this.remove()
        } 
    }

    // Verifica se ja existe um mosquito para criar outro
    function verificarMosquito () {
        let mosquitoId = document.getElementById('mosquito')

        if(mosquitoId) {
            mosquitoId.remove()
            removerVida()
        }
    }

    // Remove uma vida 
    function removerVida () {
        vida --

        switch (vida) {
            case 2: 
                
                coracao3.src = 'imagens/coracao_vazio.png'
                break
            
            case 1: 
                coracao2.src = 'imagens/coracao_vazio.png'
                break

            case 0:
                coracao1.src = 'imagens/coracao_vazio.png'
                setTimeout(window.location.href = 'fimdejogo.html', 1000)
        }
    }

    // Definir o tamanho do mosquito 
    function definirTamanho () {
        var tamanho = Math.floor(Math.random() *3)

        switch (tamanho) {
            case 0:
                return 'tamanho1 '
            case 1:
                return 'tamanho2 '
            case 2: 
                return 'tamanho3 '
        }
    }


    // Definir a direção do mosquito
    function definirDirecao () {
        var direcao = Math.floor(Math.random() *2)

        switch (direcao) {
            case 0:
                return 'esquerda'
            case 1:
                return 'direita'
        }
    }




