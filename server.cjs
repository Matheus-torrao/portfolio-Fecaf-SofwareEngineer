const app = require('./app.cjs');

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server Running: http://localhost:${PORT}`);
});
