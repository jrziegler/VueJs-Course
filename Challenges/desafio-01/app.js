new Vue({
    el: '#desafio',
    data: {
        user: {
            name: 'Joao',
            yearsOld: 38
        },
        logo: {
            path: './ziegler.png'
        }
    },
    methods: {
        multiplyYearsPerThree(yearsOld){
            return yearsOld * 3
        },
        callARandonNumber(){
            return Math.random()
        }
    }
})