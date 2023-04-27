import assert from 'node:assert';
import  {describe, it} from 'node:test'
import { parse, stringify } from 'yaml'
import fs from 'fs'
import * as path from 'path'

const file = fs.readFileSync(path.join(__dirname, "../data/verifythis.yaml"), 'utf-8')

describe('check for objects', ()=> {
    it('should do something nice', ()=> {
        let a = parse(file)
        assert.equal(a.enable, true)
        assert.equal(a.cenas.isArray(), true)
    })

})
