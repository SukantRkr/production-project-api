const database = require('../config/connection.js');

function getCategories(req,res)
{
    database.query('select * from categories', (err,result)=>{
        var status='';
        var error='';
        if(err){
            console.error('Error executing MySQL query: ',err);
            status = 'Failed';
            error=res.status(500);
        }else{
            status = 'Success';
        }
        
        error = error;
        const response={
            status: status,
            data:result,
            error:error
        }
    res.json(response);
    
});};

function getRooms(req,res){
    database.query('select * from rooms',(err,result)=>{
        var status='';
        var error='';
        if(err){
            console.error('Error executing MySQL query: ',err);
            status = 'Failed';
            error=res.status(500);
        }else{
            status = 'Success';
        }
        
        error = error;
        const response={
            status: status,
            data:result,
            error:error
        }
        res.json(response);
    })
};

function getFurnitures(req,res){
    database.query('select * from furniture',(err,result)=>{
        var status='';
        var error='';
        if(err){
            console.error('Error executing MySQL query: ',err);
            status = 'Failed';
            error=res.status(500);
        }else{
            status = 'Success';
        }
        
        error = error;
        const response={
            status: status,
            data:result,
            error:error
        }
        res.json(response);
    })
};

function getFurnituresByCategory(req,res){
    const categoryId = req.params.categoryId;
    const sql = 'select * from furniture WHERE category_id = ?';
    const values = [categoryId];

    database.query(sql,values,(err,result)=>{
        var status='';
        var error='';
        if(err){
            console.error('Error executing MySQL query: ',err);
            status = 'Failed';
            error=res.status(500);
        }else{
            status = 'Success';
        }
        
        error = error;
        const response={
            status: status,
            data:result,
            error:error
        }
        res.json(response);
    })
};

module.exports = {
    getCategories,
    getRooms,
    getFurnitures,
    getFurnituresByCategory
};