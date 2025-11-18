'use strict';

const express = require('express');
const app = express();


app.get('/math/circle/:r', (req, res) => {

const radius = parseFloat(req.params.r);
if (isNaN(radius) || radius < 0) {
    return res.status(400).json({ error: 'Invalid radius' });
  }
  const pole = Math.PI * Math.pow(radius, 2);
  const obwod = 2 * Math.PI * radius;
  const result = {
    pole: pole.toFixed(2),
    obwod: obwod.toFixed(2)
  };

  res.json(result); 
});

//
//TODO2


//TODO3


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});