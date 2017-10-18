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

exports.contact = function(req, res) {
    res.render('contact', {
        title: "Hendrick Leadz | Contact",
        style: "contact_styles.css"
    });
}

exports.notFound = function(req, res) {
    res.send("This is not the page you are looking for!");
};

