exports.intro = function(req, res) {
    res.render('intro',  {
        title: "Hendrick Leadz",
        style: "styles.css"
    });
};

exports.home = function(req, res) {
    res.render('home', {
        title: "Hendrick Leadz",
        style: "styles.css"
    });
}

exports.news = function(req, res) {
    res.render('news', {
        title: "Hendrick Leadz | News",
        style: "news_styles.css"
    });
}

exports.gallery = function(req, res) {
    res.render('gallery', {
        title: "Hendrick Leadz | Gallery",
        style: "gallery_styles.css"
    });
}

exports.contact = function(req, res) {
    res.render('contact', {
        title: "Hendrick Leadz | Contact",
        style: "contact_styles.css"
    });
}

exports.notfound = function(req, res) {
    res.render('notfound', {
        title: "Hendrick Leadz | Not Found",
        style: "styles.css"
    });
};

