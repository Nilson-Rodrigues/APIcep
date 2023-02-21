const btnBuscar = document.querySelector('#btnBuscar');
const inputCep = document.querySelector('#searchCep');


function getAdress() {
    const cep = inputCep.value.replace("-", "");
    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url).then(response =>
        response.json())
        .then(data => {
            if (!data.erro) {
                const dados = data;
                const
                    cidade = document.querySelector('#cidade'),
                    rua = document.querySelector('#rua'),
                    complemento = document.querySelector('#complemento'),
                    bairro = document.querySelector('#bairro'),
                    estado = document.querySelector('#estado'),
                    ibge = document.querySelector('#ibge');


                cidade.value = dados.localidade;
                rua.value = dados.logradouro;
                complemento.value = dados.complemento;
                bairro.value = dados.bairro;
                estado.value = dados.uf;
                ibge.value = dados.ibge;
            } else {

                inputCep.value = '';
                alert("Cep não encontrado");

            }
        }).catch(error => {
            console.log(error);
            inputCep.value = '';
            alert("Cep não encontrado");
        })
}
btnBuscar.addEventListener("click", () => {
    getAdress();
})
inputCep.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.keyCode === 13) {
        e.preventDefault();
        getAdress();
    }
})