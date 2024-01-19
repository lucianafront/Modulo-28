class GestaoEscolar {
    static calcularMedia(notas) {
        const soma = notas.reduce((acc, nota) => acc + nota, 0);
        return soma / notas.length;
    }

    static aprovacao(notas) {
        const media = this.calcularMedia(notas);
        const condicao = media >= 8 ? "aprovado" : "reprovado";
        return `Média: ${media} - Resultado: ${condicao}`;
    }

    static contagemRegressiva(numero) {
        console.log(numero);
        const proximoNumero = numero - 1;
        if (proximoNumero > 0) this.contagemRegressiva(proximoNumero);
    }

    static validaCampo(elemento) {
        elemento.addEventListener('focusout', (event) => {
            event.preventDefault();
            if (elemento.value === "") {
                this.mostrarMensagemErro("verifique o preenchimento dos campos em vermelho");
                this.adicionarErro(elemento);
                return false;
            } else {
                this.limparMensagemErro();
                this.removerErro(elemento);
            }
        });
    }

    static validaCampoNumerico(elemento) {
        elemento.addEventListener('focusout', (event) => {
            event.preventDefault();
            const numero = elemento.value.match(/^\d*-\d*/) ? elemento.value.replace(/-/, "") : elemento.value;
            if (numero !== "" && numero.match(/[0-9]*/) && numero >= 0 && numero <= 10) {
                this.limparMensagemErro();
                this.removerErro(elemento);
            } else {
                this.mostrarMensagemErro("verifique o preenchimento dos campos em destaque");
                this.adicionarErro(elemento);
                return false;
            }
        });
    }

    static validaEmail(elemento) {
        elemento.addEventListener('focusout', (event) => {
            event.preventDefault();
            const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
            if (elemento.value.match(emailValido)) {
                this.limparMensagemErro();
                this.removerErro(elemento);
            } else {
                this.mostrarMensagemErro("verifique o preenchimento dos campos em destaque");
                this.adicionarErro(elemento);
                return false;
            }
        });
    }

    static mostrarMensagemErro(mensagem) {
        document.querySelector('.mensagem').innerHTML = mensagem;
    }
    

    static limparMensagemErro() {
        this.mostrarMensagemErro("");
    }

    static adicionarErro(elemento) {
        elemento.classList.add('erro');
        elemento.parentNode.classList.add('erro');
    }

    static removerErro(elemento) {
        elemento.classList.remove('erro');
        elemento.parentNode.classList.remove('erro');
    }
}

const formulario1 = document.getElementById('formulario-01');

if (formulario1) {
    formulario1.addEventListener('submit', function (evento) {
        evento.preventDefault();
        evento.stopPropagation();

        if (this.getAttribute('class').match(/erro/)) {
            return false;
        }

        const dados = new FormData(this);
        const notas = Array.from(dados.values()).map(value => Number(value)).filter(value => !isNaN(value));

        console.log(notas);

        const texto = GestaoEscolar.aprovacao(notas);
        document.getElementById('resultado').innerHTML = texto;
    });
}

const camposObrigatorios = document.querySelectorAll('input.obrigatorio');
const camposNumericos = document.querySelectorAll('input.numero');
const camposEmail = document.querySelectorAll('input.email');

for (const emFoco of camposObrigatorios) {
    GestaoEscolar.validaCampo(emFoco);
}

for (const emFoco of camposNumericos) {
    GestaoEscolar.validaCampoNumerico(emFoco);
}

for (const emFoco of camposEmail) {
    GestaoEscolar.validaEmail(emFoco);
}