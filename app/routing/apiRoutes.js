// Dependencies
// =============================================================
var path = require("path");


// Routes
// =============================================================
app.get("/api/friends", function (req, res) {
    return res.json(friends);
});

app.post("/api/friends", function (req, res) {
    
});