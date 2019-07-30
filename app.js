const express = require('express');
const bodyParse = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');
const UsersList = require('./models/UsersList');
var app = express();

app.use(bodyParse.json());
app.use(express.static(path.join(__dirname, 'public')));



//getting Data from data From DateBase!..
app.get('/', (req, res) => {
    Users.find((err, docs) => {
        if (!err)
            res.send(docs)
        else
            console.log('Error in Retriving Users', +JSON.stringify(err, undefined, 2));
    });

});

//posting Data into Data Base!..i
app.post('/UserPost', async (req, res) => {
    console.log(req.body);
    const { name } = req.body;
    console.log("name" + typeof name)

    try {
        mongoose.connect("mongodb://localhost:27017/Crud", { useNewUrlParser: true }, (err) => {
            if (!err) {
                console.log('MongoDb connect ');
                const data = new UsersList
                {
                    //     _id: new mongoose.Types.ObjectId();

                    name: req.body.name
                }

                data.save((err) => {
                    console.log("data.name" + data.name)
                    if (err) console.log(err);
                    else
                        console.log("Data saved successfully")

                });



            }
            else {

                console.log('Error in Db connection :' + JSON.stringify(err, undefined, 2));
            }
        })
    }
    catch (err) {
        console.log(err)
    }

})
// use.save((err, doc) => {
//     if (!err)
//         res.send(doc);
//     else
//         console.log('Error In Users Save :' + JSON.stringify(err, undefined, 2));
// })

app.listen("3000", () => {
    console.log("Server is stared at port :3000");
});
