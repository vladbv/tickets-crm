const userAuthorization = (req, res, next) => {
    const {authorization} = req.headers;
    res.json(authorization)
}

module.exports = {
    userAuthorization,
};