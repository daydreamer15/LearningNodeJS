const dbConnect = require('./mongodb');

const insert = async ()=>{
    const db = await dbConnect();
    const result = await db.insertMany(
        [
        {name:"note 5", brand :"vivo", price:"530", category:"mobile"},
        {name:"max 1", brand:"micromax", price:"420", category:"mobile"}
        ] 
        )
    console.log(result)
}

insert();

module.exports = dbConnect;