const express = require('express');


const app = express();

const PORT = process.env.PORT || 3001;


// Host public folder
app.use(express.static('public'));

// Parse URL encoded & JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



require('./Routes/apiRoutes')(app);
require('./Routes/htmlRoutes')(app);


app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
