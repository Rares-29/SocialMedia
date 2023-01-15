import { db } from "../connect.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import cookie from "cookie-parser"
export const register = ((req, res) => {
    //CHECK USER IF EXISTS
    const q = "SELECT * FROM users WHERE username = ?"
    db.query(q, [req.body.username], (err, data) => {
         if (err) return res.status(500).json(err);
         console.log(data);
         if (data.length) return res.status(409).json("User already exists!");
            //CREATE A NEW USER
            //Hash the password
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);
        const q = "INSERT INTO users(username, email, password, name) VALUES (?)"
        const values = [req.body.username, req.body.email, hashedPassword, req.body.name];
        db.query(q, [values], (err, data) => {
            if (err) return res.status(500).json(err);
            return res.status(200).json("User has been created.");
        })
        })
    
})


export const login = ((req, res) => {
    //TODO
    const q = "SELECT * FROM users WHERE username = ?"
    db.query(q, [req.body.username], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length === 0) res.status(404).json("User not found");
        const checkPassword = bcrypt.compareSync(req.body.password, data[0].password)
        if (!checkPassword)
            return res.status(404).json("Wrong password");
        const token = jwt.sign({id:data[0].id}, "secretkey");
        const {password, ...others} = data[0];
        res.cookie("accesToken", token, {
            httpOnly: true,
        }).status(200).json(others);
        
    // JWT
    /*
        Contine informatii despre header, payload, semnatura
        Header-ul contine algoritmul de criptare
        Payload-ul contine informatiile propriu zise pe care le am stocat in token
        Semnatura este o combinatie intre header si payload criptata cu ajutorul cheii secrete
        Daca se modifica header-ul sau payload-ul se invalideaza semnatura, o semnatura invalida duce 
        la anularea comenzii
        Degeaba trec eu id = 0, pentru ca am modificat payload-ul si semnatura s a invalidat.
    */
    })
})


export const logout = ((req, res) => {
    // Delete cookie 
        res.clearCookie("accesToken", {
            secure: true,
            sameSite:"none"
        }).status(200).json("User has been logged out.");   
    // Redirect to another page
        res.redirect("/");
    //TODO
})
