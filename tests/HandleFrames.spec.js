const{test,expect}=require('@playwright/test');


test('Frames',async({page})=>{
    
    await page.goto('https://ui.vision/demo/webtest/frames/')

    //Total Frames
    const allFrames = await page.frames()
    console.log("All Frames Count:",allFrames.length)
    await page.waitForTimeout(5000);

    //Approach 1-Using URL
    // const frame1 = page.frameLocator('iframe[src="frame_1.html"]');
    // await frame1.locator('input[name="mytext1"]').fill('Hello')


   const frame = page.frameLocator('frame[src="frame_1.html"]');
   await frame.locator('[name="mytext1"]').fill('Hello');

   await page.waitForTimeout(5000);
});