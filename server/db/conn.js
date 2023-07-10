const  { connect } = require ('mongoose');// added commonJS syntax for error resolving.

const DB = process.env.DATABASE

connect(DB,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=> console.log("DataBase Connected")).catch((errr)=>{
    console.log(errr);
})
