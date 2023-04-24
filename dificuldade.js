function iniciarjogo () {
    var dificuldade = document.getElementById('dificuldade').value
    
    if (dificuldade === '') {
        alert('Escolha uma dificuldade')
        return false
    }

    window.location.href = 'jogo.html'

    localStorage.setItem(`dificuldade`, dificuldade)
}