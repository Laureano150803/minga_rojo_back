import { expect } from "chai";
import  request  from "supertest"
import app from '../app.js'




describe ('Test on /companies path', ()=>{


    let server = null;
    let api = null;

    before(async ()=>{
        server = await app.listen(8000);
        api = request(app)
    })
    

    describe('GET /companies', ()=>{
        it('On succes should return status 200', async()=>{
           
            const {body, statusCode} = await api.get('/companies')
            //status 200
            expect(statusCode).to.equal(200);
        })


    })
})