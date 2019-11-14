// Route sends user to survey page
module.exports = (function (app, path) {
  app.get('/survey', function(req,res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // Route sends user to home page
  app.use(function(req,res) {
    res.sendFile(path.join(__dirname,"/../public/home.html"));
  })
})