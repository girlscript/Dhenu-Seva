const requireLogin=require('../middlewares/is-auth');
module.exports = (app) => {
    const authRoutes = require('./auth');
    app.use('/auth', authRoutes);

    
    const feedRoutes = require('./feed');
    app.use('/feed', requireLogin,feedRoutes);
}