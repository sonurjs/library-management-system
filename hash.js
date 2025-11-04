const bcrypt = require('bcrypt');
bcrypt.hash('admin123', 10, function(err, hash) {
  if (!err) {
    console.log(hash); // Copy this hash into your MongoDB password field
  }
});
