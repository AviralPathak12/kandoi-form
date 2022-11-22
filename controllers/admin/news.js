const News = require("../../models/admin/news");

const multer = require("multer");
const multerS3 = require("multer-s3");
 const aws = require("aws-sdk");
const news = require("../../models/admin/news");
require('dotenv').config();

aws.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: "ap-south-1",
});

const s3 = new aws.S3();

// const s3 = new aws.S3({
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//     region: "ap-south-1",
//   });
  
  
  const uploadImage = multer({
    limits:{
      files: 1, // allow only 1 file per request
      fileSize: 1024 * 1024 * 10 // 10 MB (max file size)
      },
    storage: multerS3({
      s3,
      contentType: multerS3.AUTO_CONTENT_TYPE,
      acl: "public-read",
      bucket: "kspall",
    //   bucket: process.env.AWS_S3_BUCKET,
      cacheControl: 'max-age=31536000',
      key: function (req, file, cb) {
        cb(null, new Date().toISOString() + '-' + file.originalname)
    }
    }),
  });
  
  
  
  exports.multerUploadImage = uploadImage.single("image");


  exports.create = (req, res) => {
    const {title,description,type} = req.body;
    const image = req.file.key;

    const newNewsData = {
      title,
      description,
      type,
      image
    }

    const newNews = new News(newNewsData);

    newNews.save()
           .then(() => res.json('News Added'))
           .catch(err => res.status(400).json('Error: ' + err));
  };



  exports.list = (req, res) => {
    let order = req.query.order ? req.query.order : "desc";
    News.find().sort([[order]]).exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err),
        });
      }
      res.json(data);
    });
  };

  exports.newsListType = async (req, res) => {
    console.log('news')
    const type = req.query.type

    let value = "";
    switch (type) {
      case "news":
        value = "News";
        break;
      case "shok":
        value = "Shok Sandesh";
        break;
      case "shubh":
         value = "Shubh Karya";
        break;
    }

    const newsList =  await News.find({type : value}).sort({"createdAt": -1})
    res.status(200).json(newsList);
     
  };

  exports.deleteNews = async (req, res) => {
    const { id } = req.params;
    await News.findByIdAndRemove(id);
  
    const newsList = await News.find();
  
    res.status(200).json(newsList);
  };

  exports.read = async (req, res) => {
    const { newsId } = req.params;
     const news = await News.findById(newsId)
     res.status(200).json(news);
  };


  exports.newsById = (req, res, next, id) => {
    News.findById(id)
      .sort('-created')
      .exec((err, news) => {
        if (err || !news) {
          return res.status(400).json({
            error: "News not found",
          });
        }
        req.news = news;
        next();
      });
  };


    