const mongoose = require('mongoose');

exports.connection = mongoose.connect(process.env.localUri).then(result => console.log(`MongoDB Database connected with HOST: ${result.connection.host}`));