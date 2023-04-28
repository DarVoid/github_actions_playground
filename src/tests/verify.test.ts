import { describe, test, expect } from '@jest/globals'
import { parse, stringify } from 'yaml'
import fs from 'fs'
import * as path from 'path'

const file = fs.readFileSync(path.join(__dirname, "../data/verifythis.yaml"), 'utf-8')

describe('check for yaml structure & business logic', () => {
    let a : any = parse(file);

    test('enable should be true', () => {
        expect(a.enable).toBeTruthy()
    })

    test('should have an array called cenas', () => {
        expect(a.cenas).toBeInstanceOf(Array)
    })

    test('should not have weird stuff in it', () => {
        a.cenas.map((cada:string) => {
            expect(cada).not.toBe("weird stuff")
        })
    })

})
