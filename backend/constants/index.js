let URL = ""
if(process.env.npm_lifecycle_event === "dev")
{
    URL = "http://localhost:5000"

}
else{
    
    URL = ""
}
module.exports = URL