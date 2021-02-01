const express = require('express');
const app = express();
// serve up production assets
app.use(express.static('../build'));
// let the react app to handle any unknown routes 
// serve up the index.html if express does'nt recognize the route
const path = require('path');
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});


// if not in production use the port 3000
const PORT = process.env.PORT || 3000;
console.log(`Test Tool app is running in the background. To use the app, open a browser and go to: http://localhost:${PORT}`);
app.listen(PORT);