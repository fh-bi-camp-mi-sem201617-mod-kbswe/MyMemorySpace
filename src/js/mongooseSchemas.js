/**
 * Created by xenia on 10.11.16.
 */
import mongoose from 'mongoose';

var userSchema = new mongoose.Schema({
    username: {type: String, trim: true},
    password: {type: String, trim: true}
});

var positionSchema=new mongoose.Schema({
    x: Number,
    y: Number,
    z: Number
});
var lightSchema=new mongoose.Schema({
    position: positionSchema,
    angle: Number,
    color: String,
    intensity: Number,
    type: String
});
var mediafileSchema=new mongoose.Schema({
    src: String,
    type: String,
    position: positionSchema,
    width: Number,
    height: Number,
    depth: Number,
    rotation: positionSchema,
    scale: positionSchema,
    color: String,
    visible: Boolean
});
var wallSchema=new mongoose.Schema({
    position: 	positionSchema,
    width: Number,
    height: Number,
    depth: Number,
    rotation: positionSchema,
    color: String,
    textur: 	mediafileSchema,
    visible: Boolean

});
var roomSchema=new mongoose.Schema({
    user_id: mongoose.Schema.Types.ObjectId,
    roomname: String,
    walls: [wallSchema],
    sky: mediafileSchema,
    light: lightSchema,
    media: [mediafileSchema]
});

mongoose.connect('mongodb://localhost/test');
var User = mongoose.model('User', mongoseSchemas.userSchema);
// Create a user in memory
var user = new User({name: "user1", password: "1235"});
// Save it to database
user.save(function(err){
    if(err){
        console.log("write to db wars not successefull");
        console.log(err);
    }
    else{
        console.log(user);}
});

module.exports = mongoose;