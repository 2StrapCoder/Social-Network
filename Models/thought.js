const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({
    text: {
        type: String,
        required: true, 
        trim: true, 
        minlength: 1, 
        maxlength: 280
    },
    createdAt: { 
        type: Date,
        default: Date.now, 
        immutable: true 
    },
    username: {
        type: String,
        required: true,
        trim: true
    },
    reactions: [{
        body: {
            type: String,
            required: true,
            trim: true,
            minlength: 1,
            maxlength: 280
        },
        username: {
            type: String,
            required: true,
            trim: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            immutable: true
        }
    }],
 
    reactionCount: {
        type: Number,
        default: 0,
    }
}, {
    timestamps: true, 
    toJSON: { virtuals: true }, 
    toObject: { virtuals: true }
});


ThoughtSchema.virtual('reactionsLength').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
