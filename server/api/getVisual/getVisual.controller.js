exports.index = function(req, res){
  console.log("hello sir");
  res.json([{'hello':'world'}]);
}
