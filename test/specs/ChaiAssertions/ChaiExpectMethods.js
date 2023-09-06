import { expect,assert } from "chai";


describe("to check the array ",async()=>{
    it("check",async()=>{
        const arr=[2,4,6,8,5]
       expect(arr).to.be.an('array')
       console.log(expect(arr).to.be.an('array')) 
    })

    it("to check for odd numbers",async()=>{
        const arr=[2,4,5,6,7,12]
        expect(arr).to.be.not.include(5,7)
    })

    it("to check the String",async()=>{
        let x="sumukh"
        expect(x).to.be.an('string')
        expect(x).to.be.equal("sumukh")
    })

})