import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';



const app = express()

app.use(morgan('tiny'))

app.use(bodyParser.json())

import {dev} from '../config/env';

import {indexRoute} from '../routes/index';
import {userRoute} from '../routes/user';
import {response} from '../responses/responses';

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.use(response);
app.use(dev.VERSION+'/',indexRoute)
app.use(dev.VERSION+'/user',userRoute)


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})