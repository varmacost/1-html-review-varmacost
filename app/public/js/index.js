const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;

const comparer = (idx, asc) => (a, b) => ((v1, v2) =>
    v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
    )(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));

// do the work...
document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
    const table = th.closest('table');
    Array.from(table.querySelectorAll('tr:nth-child(n+2)'))
        .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
        .forEach(tr => table.appendChild(tr) );
})));
const SomeApp = {
    data() {
      return {
        result: {},
        list: [5,6,7,8],
        message: "Waiting ..."
      }
    },
    computed: {
        prettyBirthday() {
            return dayjs(this.result.dob.date)
            .format('D MMM YYYY')
        }
    },
    methods: {
        fetchUserData() {
            //Method 1:
            fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then((json) => {
                console.log("Got json back:", json);
                this.result = json.results[0];
                console.log("C");
            })
            .catch( (error) => {
                console.error(error);
            });
        }
    },
    created() {
        this.fetchUserData();
    }

  }
  
  Vue.createApp(SomeApp).mount('#someApp');

// Source: file:///Users/a/Documents/GitHub/2-using-vue-js-varmacos/app/public/books.html#
// const Offer = {
//     data() {
//         return {
//             foo: 0
//             msg: "D&S is my favorite",
//             "offers":[
//                 {"id": 1,
//                 "name":"Vivi Armacost",
//                 "salary": 100000,
//                 "bonus": 5000,
//                 "company": "EY",
//                 "offerDate": "2021-08-01"
//                 },
//                 {"id": 2,
//                 "name":"Will Austin",
//                 "salary": 90000,
//                 "bonus": 10000,
//                 "company": "Deloitte",
//                 "offerDate": "2021-08-19"
//                 }
//             ]
//         }
//     }
// }
// Vue.createApp(Counter).mount('#classtest')