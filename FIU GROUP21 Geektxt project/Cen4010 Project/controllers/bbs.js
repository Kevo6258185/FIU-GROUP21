const Book = require('../db/models/book');
const BookComments = require('../db/models/bookComment');
const httpResponse = require('../utility/backendShell');


const bookBrowingAndSortingByGenre = async (req, res) => {
   
  const bookByGenre = await Book.find({genre: req.body.genre});
  httpResponse.successResponse(res, bookByGenre);
}


const bookBrowsingAndSortingBySeller = async (req, res) => {

  const soldTopCopies = await Book.find({}).limit(10).sort({soldcopies: -1});
  httpResponse.successResponse(res, soldTopCopies);

}


const bookBrowsingAndSortingByRating = async (req, res) => {
  const bookByRating = await BookComments.find({
    rating: {
     $gte: req.body.rating
    }
  })
  .sort({
    rating: -1
  });
  httpResponse.successResponse(res, bookByRating);
}

const bookBrowsingAndSortingByPosition = async (req, res) => {
  const { index, position } = req.body;
  const Books = await Book.countDocuments({}).exec();
  const booksInList = await Book.find({});
  const result = [];

  for(let i = index; i < index + position; i++){
    result.push(booksInList.at(i));
  }

  return httpResponse.successResponse(res, result);
}

module.exports = {bookBrowingAndSortingByGenre, bookBrowsingAndSortingBySeller, bookBrowsingAndSortingByRating, bookBrowsingAndSortingByPosition};