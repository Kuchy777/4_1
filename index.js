'use strict';

const express = require('express');
const { parse } = require('path');
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

app.get('/math/rectangle/:width/:height', (req, res) => {
  const width = parseFloat(req.params.width);
  const height = parseFloat(req.params.height);
  if (isNaN(width) || isNaN(height) || width < 0 || height < 0) {
    return res.status(400).json({ error: 'Invalid dimensions' });
  }
  const area = width * height;
  const perimeter =2*width + 2*height;
  const result = {
    area: area.toFixed(2),
    perimeter: perimeter.toFixed(2)

  };
  res.json(result);

});


//TODO3
app.get('/math/power/:base/:exponent', (req, res) => {
  const rootFlag = req.query.root === 'true';
  const base = parseFloat(req.params.base);
  const exponent = parseFloat(req.params.exponent);
  if (isNaN(base) || isNaN(exponent)) {
    return res.status(400).json({ error: 'Invalid input' });
  }
  const result = Math.pow(base, exponent);
  if (rootFlag) {
    const root = Math.pow(base, 1 / exponent);
    return res.json({ 
      root: root.toFixed(2),
      result: result.toFixed(2)});
  }
  res.json({ result: result.toFixed(2) });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});