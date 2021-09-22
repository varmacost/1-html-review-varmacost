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
async mounted() {

    fetch('https://randomuser.me/api/', {
    })
    .then(response => response.json())
    .then((responseJson) => {
        console.log(responseJson);
        this.result = responseJson.results[0];
        this.message = this.result.name;
    }
    .catch( (error) => {
        this.message = error;
        console.error(error);
    });
    {
        data() { /*...*/ },
        computed: {}, // <-- NEW
        methods: {}, // <-- NEW
        created() { /*...*/ }
      }

    // Source: https://github.com/tag/msis-lesson-plan-2020/blob/master/06%20HTTP%20and%20VueJS%20II.md

}