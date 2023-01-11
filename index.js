import express from 'express';
const app = express();
import ejs from 'ejs';
import multer from 'multer';
import path from 'path';


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'downloads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + Date.now() + path.extname(file.originalname));
  }
})

const upload = multer({ storage: storage })


// Config ejs
app.set('view engine', 'ejs');

app.get('/', (req,res)=> {
	res.render('index');
});

app.post('/upload',upload.single('file'), (req,res)=> {
	res.send('Upload feito com sucesso');
})




app.listen(3000, ()=> console.log('Running at 3000'));