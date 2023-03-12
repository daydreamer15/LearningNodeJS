//LESSON--1: CREATING A BASIC SERVER AND CONNECTING IT
// const http = require("http");

// http
//   .createServer((request, response) => {
//     response.write("Nidhi is here");
//     response.end();
//   })
//   .listen(8080);



//LESSON--2: INSTALLED A PACKAGE NAMED COLORS, AND USED IT
// const colors = require('colors');
// console.log("Nidhi".blue);

//LESSON--3: IMPORTED THE DATA FILE AND STRINGIFIED ALL OTHER THINGS AS IN SUCH TO STORE THEM AS STRINGS ON THE LOCAL SERVER AND ALSO TESTED APIS USING postman
// const http = require("http");
// const data = require("./data");
// http
//   .createServer((req, resp) => {
//     resp.writeHead(404, { "Constant-Type": "applicationjson" });
//     resp.write(JSON.stringify(data));
//     resp.end();
//   })
//   .listen(8080);



//LESSON--4: HOW TO TAKE INPUT FROM COMMAND LINE, CREATE A FILE, REMOVE A FILE AND OTHER SIMILAR THINGS
// const fs = require('fs');
// const input = process.argv;

// if(input[2]=='add')
// {
// fs.writeFileSync(input[3], input[4])
// }
// else if(input[2]=='remove')
// {
//     fs.unlinkSync(input[3])
// }
// else{
//     console.log("invalid input")
// }



//LESSON--5: TO CREATE A FILE WITHIN A FOLDER, USING PATH AND ETC.
// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname, 'files');

// // for(i=0; i<5; i++){
// //     fs.writeFileSync(dirPath+"/hello"+i+".txt", "a simple text file");
// // } 
 
// fs.readdir(dirPath,(err,files)=>{
//     files.forEach((item)=>{
//         console.log("file name is", item)
//     })
// })



//LESSON 6: CRUD WITH FILE SYSTEM (which stands for create, read, update and delete)
// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname, 'crud');
// const filePath = `${dirPath}/apple.txt`;

// fs.writeFileSync(filePath, 'This is a simple text file');
// fs.readFile(filePath, 'utf8', (err, item)=>{
//     console.log(item)
// })

// fs.appendFile(filePath, 'and file name is apple.txt', (err)=>{
//     if(!err) console.log("file is updated")
// })

// fs.rename(filePath, `$(dirPath)/fruit.txt`, (err)=>{
//     if(!err) console.log("file name is updated")
// })

// fs.unlinkSync(`$(dirPath)/fruit.txt`) 

//What is a buffer really?------> A temporary memory location during file creation



//LESSON 7: HANDLING ASYNCHRONOUS DATA
// let a = 10;
// let b = 0;

// let waitingData = new Promise((resolve, reject)=>{
// setTimeout(()=>{
//     resolve(30)
// }, 2000)
// })

// waitingData.then((data)=>{
//     b = data;
// console.log(a+b)
// })



//LESSON-8: Call Stack, Node APIs, CallBack Queue
// console.log('starting up')

// setTimeout(()=>{
//     console.log('2 seconds delay')
// },2000)

// setTimeout(()=>{
//     console.log('0 seconds delay')
// },0)

// console.log('finishing up')

//setTimeout is called from c++ library, it is stored in node apis, then in callback queue
//after every thing is executed i.e: main function from call stack
//they go into the call stack and then get executed. Hence
//the result is as follows



//LESSON-9: Express Js
// const express = require('express')
// const app = express();
// app.get('', (req, resp)=>{
//     console.log("data sent by browser", req.query.name)
//     resp.send("<h1>Welcome, "+ req.query.name);
// });

// app.get('/about',(req, resp)=>{
//     resp.send('Hello, this is About Page');
// });

// app.get('/help', (req, resp)=>{
//     resp.send([
//         {
//             name:'Nidhi',
//             email:'nidhi@test.com'
//         },
//         {
//             name:'sam',
//             email:'sam@test.com'
//         }
//     ]);
// })

// app.listen(8080);

//LESSON-10: Make html pages in nodeJs
//  const express = require('express');
//  const path = require('path');

//  const app = express();
//  const publicPath = path.join(__dirname, 'public');

//     //  app.use(express.static(publicPath));

// app.get('', (_, resp)=>{
//     resp.sendFile(`${publicPath}/index.html`)
// })
// app.get('/about', (_, resp)=>{
//     resp.sendFile(`${publicPath}/about.html`)
// })
// app.get('/help', (_, resp)=>{
//     resp.sendFile(`${publicPath}/help.html`)
// })
// app.get('*', (_, resp)=>{
//     resp.sendFile(`${publicPath}/nopage.html`)
// })
//  app.listen(5000);



//LESSON-11: Template engine ejs and dynamic pages in nodeJs
// const express = require('express');
// const path = require('path');

//  const app = express();
//  const publicPath = path.join(__dirname, 'public');

//  app.set('view engine', 'ejs');

// app.get('', (_, resp)=>{
//     resp.sendFile(`${publicPath}/index.html`)
// })
// app.get('/profile', (_, resp)=>{
//     const user = {
//         name:'Nidhi',
//         email:'nidhi@test.com',
//         city: 'Prayagraj',
//         skills:['php', 'js', 'c++']
//     }
//     resp.render('profile', {user});
// })
// app.get('/login', (_, resp)=>{
//     resp.render('login');
// })    
// app.get('/about', (_, resp)=>{
//     resp.sendFile(`${publicPath}/about.html`)
// })
// app.get('/help', (_, resp)=>{
//     resp.sendFile(`${publicPath}/help.html`)
// })
// app.get('*', (_, resp)=>{
//     resp.sendFile(`${publicPath}/nopage.html`)
// })
//  app.listen(5000);



//LESSON-12: Middleware node Js
// const express= require('express');
// const reqFilter = require('./middleware')
// const app = express(); 



//             //app.use(reqFilter);

// app.get('/',(req, resp)=>{
//     resp.send('Welcome to Home Page')
// })
//  app.get('/users',reqFilter, (req, resp)=>{
//     resp.send('Welcome to Users Page')
//  })

//  app.listen(5000)



//---------------------------------------------------


//LESSON-13: Connecting MongoDB with NodeJs
// const{MongoClient} = require('mongodb');
// const url = 'mongodb://127.0.0.1';
// const database = 'e-comm'
// const client = new MongoClient(url);

// async function getData()
// {
//     let result = await client.connect();
//     let db = result.db(database);
//     let collection = db.collection('products');
//     let response = await collection.find({}).toArray();
//     console.log(response);
// }

// getData();



//Lesson 14: Read Data from MongoDB to nodeJs

// const dbConnect = require('./mongodb');

// //1 WAY OF READING DATA, 2nd WAY IS MORE USED THESE DAYS, READABLE MORE

// // dbConnect().then((resp)=>{
// //     resp.find({}).toArray().then((data)=>{
// //     console.warn(data)
// //     })
// // });

// const main = async() =>{
//     let data = await dbConnect();
//     data = await data.find({name:'nord'}).toArray();
//     console.warn(data)
// }

// main()



//LESSON 15: GET API WITH MONGODB AND NODEJS
//done in api.js file, learnt about GET, POST, PUT and DELETE
//operations in postman.

 

//LESSON 16: NodeJs Mongoose and stuff like that

// const mongoose = require('mongoose');
// const main = async()=>{
//     await mongoose.connect("mongodb://127.0.0.1/e-comm")
//     const ProductSchema = new mongoose.Schema({
//         name: String,
//         price: Number 
//     });
//     const ProductsModel = mongoose.model('products', ProductSchema);
//     let data = new ProductsModel({name:"m8", price:1000});
//     let result = await data.save();
//     console.log(result)
// }

// main()



//LESSON 17: Post API with NodeJS and Mongoose

// const express = require('express');
// require('./config');
// const Products = require('./product');

// const app = express();
// app.use(express.json());

// app.post("/create", async(req, resp)=>{
//     let data = new Products(req.body);
//     let result = await data.save();
//     console.log(req.body)
//     resp.send(result);
// });

// app.listen(8080);

//Similarly, we would be creating more functions ofget, put and delete



//LESSON 18: Search APIs with NodeJs and Mongoose

// const express = require('express');
// require('./config');
// const Product = require('./product');

// const app = express();
// app.use(express.json());

// app.get ("/search/:key", async(req, resp)=>{
//     console.log(req.params.key)
//     let data = await Product.find({
//         "$or":[
//             {"name":{$regex: req.params.key}}
//         ]
//     })
//     resp.send(data)
// })

// app.listen(8080);



//LESSON-20: Uploading file in nodeJS using Multer

const express = require('express');
const multer = require('multer');
const app = express();

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null,'uploads');
        },
        filename : function(req,file,cb){
            cb(null, file.fieldname+".jpeg")
        }
    }),
}).single("user_file");

app.post('/upload',upload,(req,resp)=> {
    resp.send('file uploaded')
})

app.listen(8080);






