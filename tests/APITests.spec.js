import{test,expect} from '@playwright/test'
import { request } from 'node:http'

var userid;

test('Get User',async ({request})=>{
    const response = await request.get('')
    console.log(await response.json())
    expect(response.status()).toBe(200)
})

test('Create User',async ({request})=>{
    const response = await request.post('',
                            {
                            data: {"name":"Kumar","Job":"trainer"},
                            headers:{"Accept":"application/json"}
    });
    console.log(await response.json())
    expect(response.status()).toBe(201)

    var res =await response.json()
    userid = res.id
})


test('Update User',async ({request})=>{
    const response = await request.put(''+userid,
                            {
                            data: {"name":"Kumar","Job":"engineer"},
                            headers:{"Accept":"application/json"}
    });
    console.log(await response.json())
    expect(response.status()).toBe(200)
})


test('Delete User',async ({request})=>{
    const response = await request.delete(''+userid)
    expect(response.status()).toBe(204)

})