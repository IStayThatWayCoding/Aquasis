const mongoose = require('mongoose');


module.exports = async () => {
    await mongoose.connect('redacted', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    return mongoose;
}
