module.exports = (req, res, next) => {
    // requires express-sessions
    if(req.session.loggedIn) {
        next();
    } else {
        res.status(401).json({message: 'I do not recognize you, traveller'})
    }
}