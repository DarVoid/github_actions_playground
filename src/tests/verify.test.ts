import assert from 'node:assert';
import  {describe, it} from 'node:test'
import { parse, stringify } from 'yaml'
import fs from 'fs'
import * as path from 'path'

const file = fs.readFileSync(path.join(__dirname, "../data/verifythis.yaml"), 'utf-8')

describe('check for yaml structure & business logic', () => {
    let a : any = parse(file);

    it('enable should be true', () => {
        assert.equal(a.enable, true)
    })

    it('should have an array', () => {
        assert.equal(a.cenas instanceof Array, true)
    })

    it('should not have weird stuff in it', () => {
        a.cenas.map((cada:string)=>{
            assert.notEqual(cada, "weird stuff")
        })
    })

})
