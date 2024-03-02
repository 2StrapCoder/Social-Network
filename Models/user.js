const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        trim: true, 
        unique: true, 
        minlength: 3, 
        maxlength: 30 
    },
    email: {
        type: String,
        required: [true, 'Email is required'], 
        trim: true, 
        unique: true, 
        match: [/.+@.+..+/, 'Please fill a valid email address'], 
        lowercase: true
    },
    thoughts: [{ 
        type: Schema.Types.ObjectId, 
        ref: 'Thought'
    }],
    friends: [{ 
        type: Schema.Types.ObjectId,
        ref: 'User' 
    }]
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
});


UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

const User = model('User', UserSchema);

module.exports = User;
