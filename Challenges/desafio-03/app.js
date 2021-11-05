new Vue({
    el: '#desafio',
    data: {
        valor: 0
    },
    computed: {
        result() {
            return this.valor != 37 ?
                'Different value' : 'Equal value'
        }
    },
    watch: {
        result() {
            setTimeout(() => {
                this.valor = 0
            }, 5000)
        }
    }
});