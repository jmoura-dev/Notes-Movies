module.exports = {
    jwt: {
        secret: AUTH_SECRET || "default",
        expiresIn: "1d"
    }
}