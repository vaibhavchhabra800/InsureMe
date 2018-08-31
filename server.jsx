var express= require('express');
var app=express();
const port= 5000;

var gotit=[];
var Request = require("request");


console.log("Gotiit");
console.log(gotit);

    app.get('/api/customers/:category/:zipcode/:age/:gender', (req, res) => {
        var customers = [
            {"id": 1, "firs tName": "joe", "lastName": "singh"},
            {"id": 2, "firstName": "Hi", "lastName": "sharma"},
            {"id": 3, "firstName": "Sir", "lastName": "Chhabra"}
        ];


        Request.post({
            "headers": {
                "content-type": "application/json",
                "Authorization": "34ca0e9b-ecdd-4736-a432-d87760ae0926"
            },
            "url": "https://www.lifeguard.insure/v1/quote",
            "body": JSON.stringify({
                "category": req.params.category,
                "zipcode": req.params.zipcode,
                "age": req.params.age,
                "gender": req.params.gender,
                "key": "a2bf34ab-8509-4aa6-aa9e-13ae7917e1b8"
            })
        }, (error, response, body) => {
            if (error) {
                return console.dir(error);
            }
            // console.log(body);
            // let a1=body;
            var a2 = (JSON.parse(body));
            //console.log("-------------");
            //console.log(a2['data']['quotes']);
            gotit=a2;
        });









        //console.log(customers);
        res.json(gotit['data']['quotes']);

        //res.json(cuemustomers);
        //console.log("["+gotit['data']['quotes'][0]+"]");


        // var zz1=JSON.stringify(gotit['data']['quotes'][0]);
        // zz2="["+zz1+"]";
        // console.log(zz1);
        // console.log(zz2);
        // console.log("hiter");
        // console.log(typeof(gotit['data']['quotes'][0]));
        // console.log("hiter");

        //res.json({"shit":"shit"});


        //res.json(a1);
        //res.json(customers);
    });



//
// curl "https://www.lifeguard.insure/v1/quote" \
//
//
//
// -d '{
//      "category": "Auto",
//     "zipcode": "90293",
//     "age": 35,
//     "gender": "Male",
//     "key": "a2bf34ab-8509-4aa6-aa9e-13ae7917e1b8"
// }'
//
// curl "https://www.lifeguard.insure/v1/quote" -H "Authorization: 34ca0e9b-ecdd-4736-a432-d87760ae0926" -X POST -H "Content-Type: application/json" -d "{\"category\": \"Auto\",\"zipcode\": \"90293\",\"age\": 35, \"gender\": \"Male\", \"key\": \"a2bf34ab-8509-4aa6-aa9e-13ae7917e1b8\"}"

console.log("What?");

// Request.post({
//     "headers": {
//         "content-type": "application/json",
//         "Authorization": "34ca0e9b-ecdd-4736-a432-d87760ae0926"
//     },
//     "url": "https://www.lifeguard.insure/v1/quote",
//     "body": JSON.stringify({
//         "category": "Auto",
//         "zipcode": "90293",
//         "age": 35,
//         "gender": "Male",
//         "key": "a2bf34ab-8509-4aa6-aa9e-13ae7917e1b8"
//     })
// }, (error, response, body) => {
//     if(error) {
//         return console.dir(error);
//     }
//     console.log(body);
//     console.dir(JSON.parse(body));
//
//
//
// });



app.listen(port, () => console.log("Server Started"));



// a
// r todocontroller= require('./controllers/todocontrollers');