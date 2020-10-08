module.exports = () => {
    const authRoutes = require('./auth');
    app.use('/auth', authRoutes);
}