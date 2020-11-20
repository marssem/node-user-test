function jsonArr(){
    var a  = [];
    var res = {};
    for(var i=0;i<result.rows.length;i++){
        var row = result.rows[i];
        for(var j=0;j<result.metaData.length;j++){ 
        }
    }
}
module.exports = jsonArr;
// for(var i=0;i<result.metaData.length;i++){
//     var metaData = result.metaData[i];
//     var row = result.rows[i];
//     var re = '';
//     for(var j=0;j<row.length;j++){
//         re += '[{ '+metaData.name + ':' + row[j] + '}]';
//         if(j!=row.length-1){
//             re += ', ';
//         }
//     }
//     if(i==result.metaData.length-1){
//     }else{
//         re +=',';
//     }
//     var arr = re;
//     console.log(arr);
// }