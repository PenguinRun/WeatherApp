/* GET task6 page. */
module.exports = class ContrTask6 {
  getData(req, res, next){
  //該圖片有16MB
    var imgPath =  "https://"+ req.hostname + "/sunrisePhoto.jpg"
    res.json({
      imgURL: imgPath,
      err: ""
    })
  }
}
