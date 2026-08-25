import{test,expect} from '@playwright/test'


test('Single File',async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Single File
    const Sfile = await page.locator('#singleFileInput')

    await Sfile.setInputFiles('tests/Files/test 1.pdf');

    await page.waitForTimeout(5000)

})

test.only('Multiple Files',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Multiple Files
    const Sfile = await page.locator('#multipleFilesInput')

    await Sfile.setInputFiles(['tests/Files/test 1.pdf','tests/Files/test 2.pdf']);

    //expect(await page.locator('#multipleFilesStatus')).toHaveText('Multiple files selected:')

     await page.waitForTimeout(5000)

     //Removing the files
     await Sfile.setInputFiles([]);

     await page.waitForTimeout(5000)

})