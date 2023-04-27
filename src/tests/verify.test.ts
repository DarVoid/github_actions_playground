import assert from 'node:assert';
import  {describe, it} from 'node:test'
import { parse, stringify } from 'yaml'
import fs from 'fs'

describe('check for objects', ()=> {
    const file = fs.readFileSync('../data/verifythis.yml', 'utf8')
    it('should do something nice', ()=> {
        let a = parse(file)
        assert.equal(a,2)

    })

})