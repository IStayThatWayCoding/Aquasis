const mongoose = require('mongoose');


module.exports = async () => {
    await mongoose.connect('mongodb+srv://istay:JusSmi68@oasis.zpqlqqi.mongodb.net/Data', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    return mongoose;
}