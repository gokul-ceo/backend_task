const Taskexecuter = require("../controller/taskexecuter");

 const requestmanager = (req,res,next)=>{
    const params = req.params[0].split('/');
    console.log(`Params received: ${params}`);
    console.log(`length of the params: ${params.length}`);
    switch (params.length) {
        case 1:
            if (params[0] === 'history'){
                console.log("History is requested"); // to send history of request
            }else{
                console.log("Empty prams received")  // to send the types of request available
            }
            break;
        default:
            console.log("More than one params received")
            Taskexecuter(params)
            break;
    }
    next ();
}
module.exports = requestmanager;