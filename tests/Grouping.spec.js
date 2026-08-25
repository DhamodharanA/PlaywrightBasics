import{test,expect} from '@playwright/test'

//BeforeEach,AfterEach and AfterAll add below of imports
test.beforeAll(async({browser})=>{

    console.log('This is first run......')
})

test.describe.only('Group 1',async ()=>{

    test('Test 1',async({page})=>{
        console.log('This Is test 1')
})

    test('Test 2',async({page})=>{
        console.log('This Is test 2')
})
})

test.describe.skip('Group 2',async ()=>{
    test('Test 3',async({page})=>{
        console.log('This Is test 3')
})

    test('Test 4',async({page})=>{
        console.log('This Is test 4')
})
})