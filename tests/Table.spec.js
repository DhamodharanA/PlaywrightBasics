const{test,expect}=require('@playwright/test')
const { table } = require('node:console')


test('Table',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    const Table = await page.locator('#productTable')

    //1. total number of rows amd Colums
    const Colums = await Table.locator('thead tr th')
   // console.log("Number of Colums:",await Colums.count())
    expect(await Colums.count()).toBe(4);

    const Rows = await Table.locator('tbody tr')
   // console.log("Number of Rows:",await Rows.count())
    expect(await Rows.count()).toBe(5);


    //2. Select the checkbox for the Product 4
    /*const MatchedRow = Rows.filter({has: page.locator('td'),hasText:'Smartwatch'})

    await MatchedRow.locator('input').check()*/

    //3. Select Multiple Products by reusable function
    // await SelectProduct(Rows,page,'Smartphone')
    // await SelectProduct(Rows,page,'Tablet')
    // await SelectProduct(Rows,page,'Wireless Earbuds')

    // await page.waitForTimeout(5000)

    //4. Print all the product details in loop
    /*for(let i=0;i<await Rows.count();i++)
        {
            const row = Rows.nth(i)
            const tds = row.locator('td')
            
            for(let j=0;j<await tds.count()-1;j++)
            {
                console.log(await tds.nth(j).textContent())
            }
        }*/

    //5. Read the data in all pages

    const pages = await page.locator('.pagination li a')
    console.log("Number of Pages:",await pages.count())

    for(let p=0;p<await pages.count();p++)
    {
        if(p>0)
        {
            await pages.nth(p).click()
        }

        for(let i=0;i<await Rows.count();i++)
        {
            const row = Rows.nth(i)
            const tds = row.locator('td')
            
            for(let j=0;j<await tds.count()-1;j++)
            {
                console.log(await tds.nth(j).textContent())
            }
        }

    }

    await page.waitForTimeout(5000)

})

    // async function SelectProduct(Rows,page,name)
    // {
    // const MatchedRow = Rows.filter({has: page.locator('td'),hasText:name})

    // await MatchedRow.locator('input').check()

    // }