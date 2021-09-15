const Offer = {
    data() {
        return {
            foo: 0
            msg: "D&S is my favorite",
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
}
Vue.createApp(Counter).mount('#classtest')