var sql = require("mssql");

// config for your database
var config = {
    user: 'sa',
    password: 'mypassword',
    server: 'localhost', 
    database: 'SchoolDB' 
};

// connect to your database
sql.connect(config, function (err) {

    if (err) console.log(err);

    // create Request object
    var request = new sql.Request();
       
    // query to the database and get the records
    request.query('select * from Student', function (err, recordset) {
        
        if (err) console.log(err)

        // send records as a response
        res.send(recordset);
        
    });

    function login() 
{
   var data="hello";
   $.get("http://localhost/ws/service.asmx/HelloWord", function(response) {
        data = response;
   }).error(function(){
  alert("Sorry could not proceed");
});

   return data;
}



});