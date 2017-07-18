const mongoose = require('mongoose');
import {dev} from '../config/env'

mongoose.Promise = global.Promise;
mongoose.connect(dev.DB.url,{  useMongoClient: true})

module.exports = {mongoose}