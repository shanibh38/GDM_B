var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var DBManger = require("../DBManager");
const fs = require('fs');

  try {
    if (fs.existsSync("./logB.txt")) {
      console.log("file logB.txt exists");
    }
    else {
        fs.writeFile("./logB.txt", "Start logB!\n", function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The file logB.txt was saved!");
        }); 
    }
  } catch(err) {
    console.error(err)
  }

DBManger.createB();

//get users B
router.get('/getAllUsersB', function (req, res) {
    DBManger.getUsersB((err, rows) => {
        res.send(rows);
    });
});
//registerB
router.post('/addDemogB', function (req, res) {
    var userName = req.body.userName;
    var age = req.body.age;
    var gender = req.body.gender;
    var education = req.body.education;

    DBManger.insertUsersB(userName, age, gender, education);
    res.sendStatus(200);
});

//add to Quiz1B
router.post('/addQuiz1B', function (req, res) {
    var userName = req.body.userName;
    var minMoves = req.body.minMoves;
    var firstBox = req.body.firstBox;
    var secBox = req.body.secBox;
    var firstMovesRate = req.body.firstMovesRate;
    var secondMovesRate = req.body.secondMovesRate;
    var thirdMovesRate = req.body.thirdMovesRate;
    var forthMovesRate = req.body.forthMovesRate;
    var fifthMovesRate = req.body.fifthMovesRate;
    var firstBox1Rate = req.body.firstBox1Rate;
    var firstBox2Rate = req.body.firstBox2Rate;
    var firstBox3Rate = req.body.firstBox3Rate;
    var firstBox4Rate = req.body.firstBox4Rate;
    var secondBox1Rate = req.body.secondBox1Rate;
    var secondBox2Rate = req.body.secondBox2Rate;
    var secondBox3Rate = req.body.secondBox3Rate;
    var secondBox4Rate = req.body.secondBox4Rate;
    var resetNum = req.body.resetNum;
    var firstBoxToMove = req.body.firstBoxToMove;
    var endTime = req.body.endTime;
    var totalMoves = req.body.totalMoves;
    var histMoves = req.body.histMoves;

    DBManger.insertQuiz1B(userName, minMoves, firstBox, secBox, firstMovesRate, secondMovesRate, thirdMovesRate,
        forthMovesRate, fifthMovesRate, firstBox1Rate, firstBox2Rate, firstBox3Rate, firstBox4Rate,
        secondBox1Rate, secondBox2Rate, secondBox3Rate, secondBox4Rate,
        resetNum, firstBoxToMove, endTime, totalMoves, histMoves);
    res.sendStatus(200);

});

//add to Quiz2B
router.post('/addQuiz2B', function (req, res) {
    var userName = req.body.userName;
    var minMoves = req.body.minMoves;
    var firstBox = req.body.firstBox;
    var secBox = req.body.secBox;
    var firstMovesRate = req.body.firstMovesRate;
    var secondMovesRate = req.body.secondMovesRate;
    var thirdMovesRate = req.body.thirdMovesRate;
    var forthMovesRate = req.body.forthMovesRate;
    var fifthMovesRate = req.body.fifthMovesRate;
    var firstBox1Rate = req.body.firstBox1Rate;
    var firstBox2Rate = req.body.firstBox2Rate;
    var firstBox3Rate = req.body.firstBox3Rate;
    var firstBox4Rate = req.body.firstBox4Rate;
    var secondBox1Rate = req.body.secondBox1Rate;
    var secondBox2Rate = req.body.secondBox2Rate;
    var secondBox3Rate = req.body.secondBox3Rate;
    var secondBox4Rate = req.body.secondBox4Rate;
    var resetNum = req.body.resetNum;
    var firstBoxToMove = req.body.firstBoxToMove;
    var endTime = req.body.endTime;
    var totalMoves = req.body.totalMoves;
    var histMoves = req.body.histMoves;

    DBManger.insertQuiz2B(userName, minMoves, firstBox, secBox, firstMovesRate, secondMovesRate, thirdMovesRate,
        forthMovesRate, fifthMovesRate, firstBox1Rate, firstBox2Rate, firstBox3Rate, firstBox4Rate,
        secondBox1Rate, secondBox2Rate, secondBox3Rate, secondBox4Rate,
        resetNum, firstBoxToMove, endTime, totalMoves, histMoves);
    res.sendStatus(200);
});

//add to Quiz3B
router.post('/addQuiz3B', function (req, res) {
    var userName = req.body.userName;
    var minMoves = req.body.minMoves;
    var firstBox = req.body.firstBox;
    var secBox = req.body.secBox;
    var firstMovesRate = req.body.firstMovesRate;
    var secondMovesRate = req.body.secondMovesRate;
    var thirdMovesRate = req.body.thirdMovesRate;
    var forthMovesRate = req.body.forthMovesRate;
    var fifthMovesRate = req.body.fifthMovesRate;
    var firstBox1Rate = req.body.firstBox1Rate;
    var firstBox2Rate = req.body.firstBox2Rate;
    var firstBox3Rate = req.body.firstBox3Rate;
    var firstBox4Rate = req.body.firstBox4Rate;
    var secondBox1Rate = req.body.secondBox1Rate;
    var secondBox2Rate = req.body.secondBox2Rate;
    var secondBox3Rate = req.body.secondBox3Rate;
    var secondBox4Rate = req.body.secondBox4Rate;
    var resetNum = req.body.resetNum;
    var firstBoxToMove = req.body.firstBoxToMove;
    var endTime = req.body.endTime;
    var totalMoves = req.body.totalMoves;
    var histMoves = req.body.histMoves;

    DBManger.insertQuiz3B(userName, minMoves, firstBox, secBox, firstMovesRate, secondMovesRate, thirdMovesRate,
        forthMovesRate, fifthMovesRate, firstBox1Rate, firstBox2Rate, firstBox3Rate, firstBox4Rate,
         secondBox1Rate, secondBox2Rate,secondBox3Rate, secondBox4Rate, 
        resetNum, firstBoxToMove, endTime, totalMoves, histMoves);
    res.sendStatus(200);
});

//add to BQ12B
router.post('/addBQ12B', function (req, res) {
    var userName = req.body.userName;
    var minMoves = req.body.minMoves;
    var firstBox = req.body.firstBox;
    var secBox = req.body.secBox;
    var resetNum = req.body.resetNum;
    var firstBoxToMove = req.body.firstBoxToMove;
    var endTime = req.body.endTime;
    var totalMoves = req.body.totalMoves;
    var histMoves = req.body.histMoves;

    DBManger.insertBQ12B(userName, minMoves, firstBox, secBox, resetNum, firstBoxToMove, endTime, totalMoves, histMoves);
    res.sendStatus(200);
});

//add to BQ23B
router.post('/addBQ23B', function (req, res) {
    var userName = req.body.userName;
    var minMoves = req.body.minMoves;
    var firstBox = req.body.firstBox;
    var secBox = req.body.secBox;
    var resetNum = req.body.resetNum;
    var firstBoxToMove = req.body.firstBoxToMove;
    var endTime = req.body.endTime;
    var totalMoves = req.body.totalMoves;
    var histMoves = req.body.histMoves;

    DBManger.insertBQ23B(userName, minMoves, firstBox, secBox, resetNum, firstBoxToMove, endTime, totalMoves, histMoves);
    res.sendStatus(200);

});

//updateBonus A
router.post('/updateBonusB', function (req, res) {
    var bonus = req.body.bonus;
    var userName = req.body.userName;
    DBManger.updateBonusB(bonus, userName);
    res.sendStatus(200);
});




module.exports = router;