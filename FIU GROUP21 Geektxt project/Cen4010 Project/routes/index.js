const express = require('express')
const router = express.Router()

const sortingByBooks = require('../controllers/bbs');

router.get('/bookBrowsingAndSorting_genre', sortingByBooks.bookBrowingAndSortingByGenre);
router.get('/bookBrowsingAndSorting_seller', sortingByBooks.bookBrowsingAndSortingBySeller);
router.get('/bookBrowsingAndSorting_rating', sortingByBooks.bookBrowsingAndSortingByRating);
router.get('/bookBrowsingAndSorting_position', sortingByBooks.bookBrowsingAndSortingByPosition);

module.exports = router