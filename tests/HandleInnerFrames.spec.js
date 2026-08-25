const{test,expect}=require('@playwright/test');


test('Handle Inner Frames',async({page})=>{
    
    await page.goto('https://ui.vision/demo/webtest/frames/')

    // const frame3 = await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});

    // const childFrames = await frame3.childFrames()
    // childFrames[0].locator("//frameset//frameset//frame[2]").check();

    const outerFrame = page.frameLocator('frame[src="frame_3.html"]');
    const innerFrame = outerFrame.frameLocator('iframe');

    await innerFrame.locator("//*[@id='i9']/div[3]").click();
    await innerFrame.locator('div[role="checkbox"]').nth(2).click();

    await page.waitForTimeout(5000);

});