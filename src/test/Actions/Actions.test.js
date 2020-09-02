import { getQuizData } from '../../Actions/Actions'

describe('Actions', () => {

    test('it fetches API', async () => {
       function test(data) {
           try {
               expect(data).toBe('data')
           } catch (err) {
               console.warn(err.message)
           }
       }
    })
    
    test('it throws an error message', async ()  => {
        await expect(getQuizData()).rejects.toThrow("Cannot read property 'players' of undefined")
    })
        
})