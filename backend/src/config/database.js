const mongoose = require('mongoose')
mongoose.Promise = global.Promise // só p tirar advertência

module.exports = mongoose.connect('mongodb://localhost/todo', {useNewUrlParser: true}, {useUnifiedTopology: true})
