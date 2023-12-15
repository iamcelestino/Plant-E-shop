

exports.getPageNotFound = (req, res) => {
    res.status(404).render('404');
}