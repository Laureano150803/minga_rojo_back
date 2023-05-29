// import { expect } from "chai";
// import { Request } from "supertest";
// import app from "../app.js"
// import { describe } from "mocha";
// import { request } from "express";

// describe('Tests on /categories path',()=>{

//     let server= null;
//     let api = null;

//     before(async()=>{
//         server= await app.listen(8000)
//         api =  request(app)
    
//     })

//     describe('GET / categories',()=>{
//         it('on succes should return 200',()=>{
            
//         })
//     })

// })

import app from '../app.js'
import chai from 'chai'
import request from 'supertest'

const assert = chai.assert
const expect = chai.expect

describe('Prueba sobre/mangas y user',() =>{

    it('Get a /mangas debe traerme 6',async() =>{
        const response =await request(app).get('/mangas')
        assert.equal(response.body.mangas.length,6)
    })

    it('Post a /user deberia crear un usuario',async() =>{
        const user = {
            name:'Lucas',
            mail: "lucas@mh.com.ar",
            password: "hola1234",
            photo: "https://i.postimg.cc/fyJsspq8/image.png"
        }

        const response = await request(app).post('/api/auth/signup').send(user)
        assert.equal(response.body.success,true)
    })


})