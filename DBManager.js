const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

function createB() {

    let db = new sqlite3.Database('./GDMB.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
        if (err) {
            fs.appendFileSync('./logB.txt', "Error Connecting to GDMB DB - " + err.message + "\n");
            //  console.error(err.message);
        }
        else {
            fs.appendFileSync('./logB.txt', "Connecting to GDMB DB\n");
        }
    });
    db.serialize(function () {
        db.run("CREATE TABLE IF NOT EXISTS UsersB " +
        "( userName varchar(10) PRIMARY KEY, age integer, gender varchar(7),education varchar(50), bonus varchar(5))");
        db.run(`CREATE TABLE IF NOT EXISTS Quiz1B ` +
            `(userName varchar(10) PRIMARY KEY,minMoves integer, firstBox varchar(10), secBox varchar(10),
        firstMovesRate integer, secondMovesRate integer, thirdMovesRate integer,forthMovesRate integer,fifthMovesRate integer,
        firstBox1Rate integer, firstBox2Rate integer, firstBox3Rate integer, firstBox4Rate integer,
        secondBox1Rate integer, secondBox2Rate integer, secondBox3Rate integer, secondBox4Rate integer,
        resetNum integer,firstBoxToMove varchar(10),endTime varchar(10),totalMoves integer,histMoves varchar)`);
        db.run(`CREATE TABLE IF NOT EXISTS BQ12B ` +
            `(userName varchar(50) PRIMARY KEY,minMoves integer, firstBox varchar(10), secBox varchar(10),
    resetNum integer,firstBoxToMove varchar(10),endTime varchar(10),totalMoves integer,histMoves varchar)`);
        db.run(`CREATE TABLE IF NOT EXISTS Quiz2B ` +
            `(userName varchar(50) PRIMARY KEY,minMoves integer, firstBox varchar(10), secBox varchar(10),
    firstMovesRate integer, secondMovesRate integer, thirdMovesRate integer,forthMovesRate integer,fifthMovesRate integer,
    firstBox1Rate integer, firstBox2Rate integer, firstBox3Rate integer, firstBox4Rate integer,
    secondBox1Rate integer, secondBox2Rate integer, secondBox3Rate integer, secondBox4Rate integer,
    resetNum integer,firstBoxToMove varchar(10),endTime varchar(10),totalMoves integer,histMoves varchar)`);
        db.run(`CREATE TABLE IF NOT EXISTS BQ23B ` +
            `(userName varchar(50) PRIMARY KEY,minMoves integer, firstBox varchar(10), secBox varchar(10),
    resetNum integer,firstBoxToMove varchar(10),endTime varchar(10),totalMoves integer,histMoves varchar)`);
        db.run(`CREATE TABLE IF NOT EXISTS Quiz3B ` +
            `(userName varchar(50) PRIMARY KEY,minMoves integer, firstBox varchar(10), secBox varchar(10),
    firstMovesRate integer, secondMovesRate integer, thirdMovesRate integer,forthMovesRate integer,fifthMovesRate integer,
    firstBox1Rate integer, firstBox2Rate integer, firstBox3Rate integer, firstBox4Rate integer,
    secondBox1Rate integer, secondBox2Rate integer, secondBox3Rate integer, secondBox4Rate integer,
    resetNum integer,firstBoxToMove varchar(10),endTime varchar(10),totalMoves integer,histMoves varchar)`);
    });
    db.close((err) => {
        if (err) {
            fs.appendFileSync('./logB.txt', "Error GDMB connection closed - " + err.message + "\n");
            //console.error(err.message);
        }
        else {
            fs.appendFileSync('./logB.txt', "GDMB connection closed\n");
            //console.log('GDMI connection closed.');
        }
    });
}

function getUsersB(callback) {
    let db = new sqlite3.Database('./GDMB.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
        if (err) {
            fs.appendFileSync('./logB.txt', "Error open DB from 'getUsersB' function - " + err.message + "\n");
            //            console.error(err.message);
        }
        else {
            fs.appendFileSync('./logB.txt', "open DB from 'getUsersB' function\n");
            // console.log("open DB from 'getUsers' function");
        }
    });
    let sql = `SELECT userName From UsersB`;
    db.serialize(function () {
        db.all(sql, (err, rows) => {
            if (err) {
                fs.appendFileSync('./logB.txt', "Error return users from 'getUsersB' function - " + err.message + "\n");
                // console.log(err);
            }
            else {
                fs.appendFileSync('.logB.txt', "Successed return users from 'getUsersB' function\n");
                // console.log("Successed return users from 'getUsers' function");
                callback(null, rows);
            }
        });
        db.close((err) => {
            if (err) {
                fs.appendFileSync('./logB.txt', "Error closeDB from 'getUsersB' function - " + err.message + "\n");
                //console.error(err.message);
            }
            else {
                fs.appendFileSync('./logB.txt', "close DB from 'getUsersB' function\n");
                // console.log("close DB from 'getUsers' function");
            }
        });
    });
}

function insertUsersB(userName, age, gender, education) {
    let db = new sqlite3.Database('./GDMB.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
        if (err) {
            fs.appendFileSync('./logB.txt', "Error open DB from 'insertUsersB' function - " + err.message + "\n");
            // console.error(err.message);
        }
        else {
            fs.appendFileSync('./logB.txt', "open DB from 'insertUsersB' function\n");
            // console.log("open DB from 'insertUsers' function");
        }
    });
    let sql = `INSERT INTO UsersB (userName ,age , gender ,education)
                VALUES  (?,?,?,?)`;
    db.serialize(function () {
        db.run(sql, [userName, age, gender, education], (err, res) => {
            if (err) {
                fs.appendFileSync('./logB.txt', "Error insertion user from 'insertUsersB' function - " + err.message + "\n");
                //return console.error(err.message);
            }
            else {
                fs.appendFileSync('./logB.txt', "Successed insertion user from 'insertUsersB' function\n");
                // console.log("Successed insertion user from 'insertUsers' function");
            }
        });
        db.close((err) => {
            if (err) {
                fs.appendFileSync('./logB.txt', "Error close DB from 'insertUsersB' function - " + err.message + "\n");
                // console.error(err.message);
            }
            else {
                fs.appendFileSync('./logB.txt', "close DB from 'insertUsersB' function\n");
                //  console.log("close DB from 'insertUsers' function");
            }
        });
    });
}

function insertQuiz1B(userName, minMoves, firstBox, secBox, firstMovesRate, secondMovesRate, thirdMovesRate,
    forthMovesRate, fifthMovesRate, firstBox1Rate, firstBox2Rate, firstBox3Rate, firstBox4Rate,
    secondBox1Rate, secondBox2Rate, secondBox3Rate, secondBox4Rate,
    resetNum, firstBoxToMove, endTime, totalMoves, histMoves) {
    let db = new sqlite3.Database('./GDMB.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
        if (err) {
            fs.appendFileSync('./logB.txt', "Error open DB from 'insertQuiz1B' function - " + err.message + "\n");
            //  console.error(err.message);
        }
        else {
            fs.appendFileSync('../logB.txt', "open DB from 'insertQuiz1B' function\n");
            //  console.log("open DB from 'insertQuiz1A' function");
        }
    });
    let sql = `INSERT INTO Quiz1B (userName, minMoves, firstBox, secBox, firstMovesRate, secondMovesRate, thirdMovesRate,
        forthMovesRate, fifthMovesRate, firstBox1Rate, firstBox2Rate, firstBox3Rate, firstBox4Rate,
        secondBox1Rate, secondBox2Rate, secondBox3Rate, secondBox4Rate, 
        resetNum, firstBoxToMove, endTime, totalMoves, histMoves)
                VALUES  (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
    db.serialize(function () {
        db.run(sql, [userName, minMoves, firstBox, secBox, firstMovesRate, secondMovesRate, thirdMovesRate,
            forthMovesRate, fifthMovesRate, firstBox1Rate, firstBox2Rate, firstBox3Rate, firstBox4Rate,
            secondBox1Rate, secondBox2Rate, secondBox3Rate, secondBox4Rate,
            resetNum, firstBoxToMove, endTime, totalMoves, histMoves], (err, row) => {
                if (err) {
                    fs.appendFileSync('./logB.txt', "Error insertion Quiz1B details from 'insertQuiz1B' function - " + err.message + "\n");
                    //  return console.error(err.message);
                }
                else {
                    fs.appendFileSync('./logB.txt', "Successed insertion Quiz1B details from 'insertQuiz1B' function\n");
                    // console.log("Successed insertion Quiz1A details from 'insertQuiz1A' function");
                }
            });
        db.close((err) => {
            if (err) {
                fs.appendFileSync('./logB.txt', "Error close DB from 'insertQuiz1B' function - " + err.message + "\n");
                //console.error(err.message);
            }
            else {
                fs.appendFileSync('./logB.txt', "close DB from 'insertQuiz1B' function\n");
                //  console.log("close DB from 'insertQuiz1A' function");
            }
        });
    });
}

function insertBQ12B(userName, minMoves, firstBox, secBox, resetNum, firstBoxToMove, endTime, totalMoves, histMoves) {
    let db = new sqlite3.Database('./GDMB.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
        if (err) {
            fs.appendFileSync('./logB.txt', "Error open DB from 'insertBQ12B' function - " + err.message + "\n");
            //console.error(err.message);
        }
        else {
            fs.appendFileSync('./logB.txt', "open DB from 'insertBQ12B' function\n");
            //console.log("open DB from 'insertBQ12A' function");
        }
    });
    let sql = `INSERT INTO BQ12B (userName, minMoves, firstBox, secBox, resetNum, firstBoxToMove, endTime, totalMoves, histMoves)
                VALUES  (?,?,?,?,?,?,?,?,?)`;
    db.serialize(function () {
        db.run(sql, [userName, minMoves, firstBox, secBox, resetNum, firstBoxToMove, endTime, totalMoves, histMoves], (err, row) => {
            if (err) {
                fs.appendFileSync('../logB.txt', "Error insertion BQ12B details from 'insertBQ12A' function - " + err.message + "\n");
                //return console.error(err.message);
            }
            else {
                fs.appendFileSync('../logB.txt', "Successed insertion BQ12B details from 'insertBQ12A' function\n");
                // console.log("Successed insertion BQ12A details from 'insertBQ12A' function");
            }
        });
        db.close((err) => {
            if (err) {
                fs.appendFileSync('./logB.txt', "Error close DB from 'insertBQ12B' function - " + err.message + "\n");
                // console.error(err.message);
            }
            else {
                fs.appendFileSync('./logB.txt', "close DB from 'insertBQ12B' function\n");
                // console.log("close DB from 'insertBQ12A' function");
            }
        });
    });
}

function insertQuiz2B(userName, minMoves, firstBox, secBox, firstMovesRate, secondMovesRate, thirdMovesRate,
    forthMovesRate, fifthMovesRate, firstBox1Rate, firstBox2Rate, firstBox3Rate, firstBox4Rate,
     secondBox1Rate, secondBox2Rate, secondBox3Rate, secondBox4Rate,
    resetNum, firstBoxToMove, endTime, totalMoves, histMoves) {
    let db = new sqlite3.Database('./GDMB.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
        if (err) {
            fs.appendFileSync('./logB.txt', "Error open DB from 'insertQuiz2B' function - " + err.message + "\n");
            // console.error(err.message);
        }
        else {
            fs.appendFileSync('./logB.txt', "open DB from 'insertQuiz2B' function\n");
            //  console.log("open DB from 'insertQuiz2A' function");
        }
    });
    let sql = `INSERT INTO Quiz2B (userName, minMoves, firstBox, secBox, firstMovesRate, secondMovesRate, thirdMovesRate,
        forthMovesRate, fifthMovesRate, firstBox1Rate, firstBox2Rate, firstBox3Rate, firstBox4Rate,
        secondBox1Rate, secondBox2Rate, secondBox3Rate, secondBox4Rate,
        resetNum, firstBoxToMove, endTime, totalMoves, histMoves)
        VALUES  (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
        db.serialize(function () {
        db.run(sql, [userName, minMoves, firstBox, secBox, firstMovesRate, secondMovesRate, thirdMovesRate,
            forthMovesRate, fifthMovesRate, firstBox1Rate, firstBox2Rate, firstBox3Rate, firstBox4Rate,
            secondBox1Rate, secondBox2Rate, secondBox3Rate, secondBox4Rate,
            resetNum, firstBoxToMove, endTime, totalMoves, histMoves], (err, row) => {
                if (err) {
                    fs.appendFileSync('./logB.txt', "Error insertion Quiz2B details from 'insertQuiz2A' function - " + err.message + "\n");
                    //return console.error(err.message);
                }
                else {
                    fs.appendFileSync('./logB.txt', "Successed insertion Quiz2B details from 'insertQuiz2A' function\n");
                    // console.log("Successed insertion Quiz2A details from 'insertQuiz2A' function");
                }
            });
        db.close((err) => {
            if (err) {
                fs.appendFileSync('./logB.txt', "Error close DB from 'insertQuiz2B' function - " + err.message + "\n");
                // console.error(err.message);
            }
            else {
                fs.appendFileSync('./logB.txt', "close DB from 'insertQuiz2B' function\n");
                // console.log("close DB from 'insertQuiz2A' function");
            }
        });
    });
}

function insertBQ23B(userName, minMoves, firstBox, secBox, resetNum, firstBoxToMove, endTime, totalMoves, histMoves) {
    let db = new sqlite3.Database('./GDMB.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
        if (err) {
            fs.appendFileSync('./logB.txt', "Error open DB from 'insertBQ23B' function - " + err.message + "\n");
            //   console.error(err.message);
        }
        else {
            fs.appendFileSync('./logB.txt', "open DB from 'insertBQ23B' function\n");
            //console.log("open DB from 'insertBQ23A' function");
        }
    });
    let sql = `INSERT INTO BQ23B (userName, minMoves, firstBox, secBox, resetNum, firstBoxToMove, endTime, totalMoves, histMoves)
                VALUES  (?,?,?,?,?,?,?,?,?)`;
    db.serialize(function () {
        db.run(sql, [userName, minMoves, firstBox, secBox, resetNum, firstBoxToMove, endTime, totalMoves, histMoves], (err, row) => {
            if (err) {
                console.log(endTime);
                fs.appendFileSync('./logB.txt', "Error insertion BQ23A details from 'insertBQ23B' function - " + err.message + "\n");
                //return console.error(err.message);
            }
            else {
                fs.appendFileSync('./logB.txt', "Successed insertion BQ23A details from 'insertBQ23B' function\n");
                // console.log("Successed insertion BQ23A details from 'insertBQ23A' function");
            }
        });
        db.close((err) => {
            if (err) {
                fs.appendFileSync('./logB.txt', "Error close DB from 'insertBQ23B' function - " + err.message + "\n");
                //console.error(err.message);
            }
            else {
                fs.appendFileSync('./logB.txt', "close DB from 'insertBQ23B' function\n");
                //console.log("close DB from 'insertBQ23A' function");
            }
        });
    });
}

function insertQuiz3B(userName, minMoves, firstBox, secBox, firstMovesRate, secondMovesRate, thirdMovesRate,
    forthMovesRate, fifthMovesRate, firstBox1Rate, firstBox2Rate, firstBox3Rate, firstBox4Rate,
   secondBox1Rate, secondBox2Rate,secondBox3Rate, secondBox4Rate,
    resetNum, firstBoxToMove, endTime, totalMoves, histMoves) {
    let db = new sqlite3.Database('./GDMB.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
        if (err) {
            fs.appendFileSync('./logB.txt', "Error open DB from 'insertQuiz3B' function - " + err.message + "\n");
            //console.error(err.message);
        }
        else {
            fs.appendFileSync('./logB.txt', "open DB from 'insertQuiz3B' function\n");
            // console.log("open DB from 'insertQuiz3A' function");
        }
    });
    let sql = `INSERT INTO Quiz3B (userName, minMoves, firstBox, secBox, firstMovesRate, secondMovesRate, thirdMovesRate,
        forthMovesRate, fifthMovesRate, firstBox1Rate, firstBox2Rate, firstBox3Rate, firstBox4Rate,
        secondBox1Rate, secondBox2Rate,  secondBox3Rate, secondBox4Rate, 
        resetNum, firstBoxToMove, endTime, totalMoves, histMoves)
        VALUES  (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
        db.serialize(function () {
        db.run(sql, [userName, minMoves, firstBox, secBox, firstMovesRate, secondMovesRate, thirdMovesRate,
            forthMovesRate, fifthMovesRate, firstBox1Rate, firstBox2Rate, firstBox3Rate, firstBox4Rate,
            secondBox1Rate, secondBox2Rate,   secondBox3Rate, secondBox4Rate,
            resetNum, firstBoxToMove, endTime, totalMoves, histMoves], (err, row) => {
                if (err) {
                    fs.appendFileSync('./logB.txt', "Error insertion Quiz3A details from 'insertQuiz3B' function - " + err.message + "\n");
                    // return console.error(err.message);
                }
                else {
                    fs.appendFileSync('./logB.txt', "Successed insertion Quiz3A details from 'insertQuiz3B' function\n");
                    //console.log("Successed insertion Quiz3A details from 'insertQuiz3A' function");
                }
            });
        db.close((err) => {
            if (err) {
                fs.appendFileSync('./logB.txt', "Error close DB from 'insertQuiz3B' function - " + err.message + "\n");
                // console.error(err.message);
            }
            else {
                fs.appendFileSync('./logB.txt', "close DB from 'insertQuiz3B' function\n");
                //console.log("close DB from 'insertQuiz3A' function");
            }
        });
    });
}


function updateBonusB(bonus, userName){
    
    let db = new sqlite3.Database('./GDMB.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
        if (err) {
            fs.appendFileSync('./logA.txt', "Error open DB from 'updateBonusB' function - " + err.message + "\n");
        }
        else {
            fs.appendFileSync('./logA.txt', "open DB from 'updateBonusB' function\n");
        }
    });
    let sql = `UPDATE UsersB SET bonus = ? WHERE userName = ?`;
    db.serialize(function () {
        db.run(sql, [bonus, userName], (err, row) => {
                if (err) {
                    fs.appendFileSync('./logB.txt', "Error update Users bonus from 'updateBonusB' function - " + err.message + "\n");
                }
                else {
                    fs.appendFileSync('./logB.txt', "Successed update Users bonus from 'updateBonusB' function\n");
                }
            });
        db.close((err) => {
            if (err) {
                fs.appendFileSync('./logB.txt', "Error close DB from 'updateBonusB' function - " + err.message + "\n");
            }
            else {
                fs.appendFileSync('./logB.txt', "close DB from 'updateBonusB' function\n");
            }
        });
    });
}

module.exports = { updateBonusB,createB, getUsersB, insertUsersB, insertQuiz1B, insertQuiz2B, insertQuiz3B, insertBQ12B, insertBQ23B };

