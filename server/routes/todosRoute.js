const express = require("express");
const router = express.Router();
const todoList = require("../todolist.json");
const pool = require("../model/database")

router.get("/gettodolist",(req,res,next) => {
    pool.query(`select * from todolist`,(err,queryResult) => {
        if(err) {
            sendError();
        }
        else {
            console.log("GetTodoList query response",queryResult)
            sendSuccessResponse(res,"Success",queryResult)
        }
    })
})

router.post("/addtodo",(req,res,next) => {
    let todo = {name: req.body.todo, created_at: new Date(), completed: false}
    pool.query(`insert into todolist set ?`,todo,(err,result) => {
            if(err) {
                sendError();
            }
            else {
                console.log("AddToDo query response",result)
                sendSuccessResponse(res,"Added Successfully",null)
            }
        })
})

router.delete("/deletetodo/:id",(req,res,next) => {
    pool.query(`delete from todolist where id = ?`,[req.params.id],(err,result) => {
            if(err) {
                sendError();
            }
            else {
                console.log("Delete query response",result)
                sendSuccessResponse(res,"Deleted Successfully",null)
            }
        })
})

function sendError(res) {
    res.send({
        success: false,
        message: "Something Went Wrong",
        data: null
    })
}

function sendSuccessResponse(res, message,data) {
    res.send({
        success: true,
        message: message,
        data: data
    })
}


module.exports = router;