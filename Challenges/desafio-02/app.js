new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        showAlert() {
            alert('Button was pressed!')
        },
        getValueFromInput1(e) {
            console.log(e.target.value)
            this.valor = e.target.value
        }
    }
})