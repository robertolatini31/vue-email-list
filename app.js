const app = new Vue({
    el: '#app',
    data: {
        emailGenerated: []
    },
    mounted() {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((email) => {
            console.log(email);
            console.log(email.data.response);
        })
    }

})

