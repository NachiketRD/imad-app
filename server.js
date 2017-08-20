var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one': {
        title: 'Article One | Nachiket Deshpande',
        heading: 'Article One',
        date: '20th Aug 2017',
        content: `
    <p> This are my first articles contents. This is my first paragraph.
    </p>`
    },
    'article-two': {
        title: 'Article Two | Nachiket Deshpande',
        heading: 'Article Two',
        date: '21st Aug 2017',
        content: `
    <p> This are my first articles contents. This is my first paragraph.
    </p>
    <p> This are my first articles contents. This is my second paragraph.
    </p>`
    },
    'article-three': {
        title: 'Article Three | Nachiket Deshpande',
        heading: 'Article Three',
        date: '22nd Aug 2017',
        content: `
    <p> This are my first articles contents. This is my first paragraph.
    </p>
    <p> This are my first articles contents. This is my second paragraph.
    </p>
    <p> This are my first articles contents. This is my third paragraph.
    </p>`
    }
};

function  createTemplate(data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate =
        `<html>
<head>
    <title>
        ${title}
    </title>
    <meta name="viewport" content="width=device-with, initial-scale=1">
    <link href="/ui/style.css" rel="stylesheet" />
</head>
<body>
<div class="container">
    <div>
        <a href="/">Home</a>
    </div>
    <hr/>
    <h3>
        ${heading}
    </h3>
    <hr/>
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

app.get('/:articleName', function (req, res) {
    var articleName= req.params.articleName;
    res.send(createTemplate(articles[articleName]));
})

app.get('/ui/style.css', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 8081;
app.listen(port, function () {
    //noinspection JSAnnotator
    console.log(`IMAD course app listening on port ${port}!`);
});
