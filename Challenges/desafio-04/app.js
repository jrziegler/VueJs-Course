new Vue({
	el: '#desafio',
	data: {
		cssClass: 'destaque',
		danger: true,
		userClass: '',
		userClass4: '',
		color5: '',
		style5: {
			with: '100px',
			height: '100px'
		},
		width: '0'
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.cssClass = this.cssClass == 'destaque' 
					? 'encolher' 
					: 'destaque'
			}, 1000)

		},
		iniciarProgresso() {
			let progressValue = 0
			const timer = setInterval(() => {
				progressValue += 5
				this.width = `${progressValue}%`
				if (progressValue == 100) 
					clearInterval(timer)
			}, 500)
		},
		applyCssClass(event) {
			if(event.target.value == "true") {
				this.danger = true
			} else if(event.target.value == "false") {
				this.danger = false
			}
			console.log(this.danger)
		}
	}
})
