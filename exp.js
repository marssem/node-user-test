const exp = require('express');
const dbInfo = require('./db-config');
const oracleDb = require('oracledb');
const bodyParser = require('body-parser');
const port = 80;
var server = exp();
server.use(bodyParser.json());
//json parser need!!!
// var con = oracleDb.getConnection(dbInfo)
//             .then(function(con){
//                 console.log(con);
//             })
//             .catch(function(err){
//                 console.log(err);
//             });

var getNodeTests = async function(params){
    console.log(params);
    var con = await oracleDb.getConnection(dbInfo);
    var sql = 'select * from node_test';
    if(params){
        sql += ' where 1=1 ';
        if(params.nt_num){
            sql += ' and nt_num=:nt_num';
            console.log(sql);
        }
        if(params.nt_name){
            sql += ' and nt_name=:nt_name';
        }
    }
    console.log(sql);
    var result = await con.execute(sql,params);
    // con.execute(sql,[],function(err,result){
    //     console.log(result);
    // })
    var jsonArr = [];
    for(var i=0;i<result.rows.length;i++){
        var row = result.rows[i];
        var nt = {};
        for(var j=0;j<result.metaData.length;j++){
            var md = result.metaData[j];
            nt[md.name] = row[i];
        }
        jsonArr.push(nt);
    }
    return jsonArr;
};
server.post('/nodetest',function(req,res){
    console.log(req.body);
    res.send('뭐하니?');
})
server.get('/nodetests',(async function(req,res,next){
    var jsonArr = await getNodeTests(req.query);
    res.json(jsonArr);
        
}))
server.get('/views/*',function(req,res){
    res.sendFile(__dirname+req.url+'.html');
})

server.listen(port,function(){
     console.log(`server start  ${port}  port`);
});
