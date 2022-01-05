// Task
// Delete all the movies with rating 8.6
// Update the rating of Jai Bhim to 9
// save as js file - upload github



// Delete all the movies with rating 8.6
db.movies.deleteMany({rating:8.6})


//Update the rating of Jai Bhim to 9
db.movies.update({
    name: "Jai Bhim"
  },
  {
    $set: {
      rating: 9
    }
  })