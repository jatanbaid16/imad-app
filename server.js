var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne={
    title:'Article One | Jatan Baid',
    heading:'Article One',
    date:'30 march,2018',
    content:`
    <p>
                This is the content for my first article.
                This is the content for my first article. This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
                This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article. 
            </p>
        </div>
        <div>
            
            <p>
                This is the content for my first article.
                This is the content for my first article. This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
                This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article. 
            </p>
            `
    

};
function createTempleate(data){
var titile=data.title;
var heading=data.heading;
var date=data.date;
var content=data.content;
    var htmlTemplate=`
    
    <!DOCTYPE html>
    <head>
        <title>
            ${title}
            
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
        <meta name="viewport" content="width-device-width.intial-scale=1" >
    </head>
    <body>
        <div class="container">
            <div>
                <a href="/">HOME</a>
            </div>
            <hr>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
            <div>
                
                ${content}
            </div>
        </div>
    </body>
    
    
    </html>
    
    
    `;
    return htmlTemplate;
}








app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res){
   res.send(craeteTemplate(articleOne)); 
});

app.get('/article-two', function (req, res){
   res.send('Article two requested and will be served here'); 
});

app.get('/article-three', function (req, res){
   res.send('Article three requested and will be served here'); 
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
