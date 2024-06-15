const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://yguiche:<password>@logitundatabase.auigv6d.mongodb.net/",{useNewUrlParser :true});
mongoose.set('useCreateIndex', true);
module.exports={mongoose};