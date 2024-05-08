const Post =  require('./User');
const Comment = require('./Comment');
const User = require('./Post');

User.hasMany(Post, {
    onDelete: 'CASCADE' , 
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey:'user_id',
    onDelete: 'CASCADE'
});

module.exports = {User, Post, Comment};