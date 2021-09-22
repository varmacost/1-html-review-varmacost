const Offer = {
    data() {
        return {
            foo: 0
            msg: "D&S is my favorite",
            "results"
            "offers":[
                {"id": 1,
                "name":"Vivi Armacost",
                "salary": 100000,
                "bonus": 5000, 
                "company": "EY",
                "offerDate": "2021-08-01"
                },
                {"id": 2,
                "name":"Will Austin",
                "salary": 90000,
                "bonus": 10000, 
                "company": "Deloitte",
                "offerDate": "2021-08-19"
                }
            ]
        }
    }
    computed: {
        prettyBirthday() {
            return 
        }
    }
}
Vue.createApp(Counter).mount('#classtest')
created() {
    fetch('https://randomuser.me/')
    .then(function(response) {
        return response.json{}
    }
    )
    .then(json) {
        console.log(json);
        this.result = json.results[0];
    }
    .catch((error) ==>{
        console.error(error)
    })
}
method:
created() {

}