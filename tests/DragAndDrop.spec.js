import{test,expect} from '@playwright/test'


test('Drag and Drop',async({page})=>{

    await page.goto('https://codepen.io/EpsilonDeltaCriterion/pen/jLoPgE')

    const DragOsio = await page.locator('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(10) > pre:nth-child(2) > span:nth-child(1) > span:nth-child(10)')
    const DropNorway = await page.locator('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > div:nth-child(10) > pre:nth-child(2) > span:nth-child(1) > span:nth-child(10)')

    // Approach 1
  /*  await DragOsio.hover()
    await page.mouse.down()

    await DropNorway.hover()
    await page.mouse.up()*/

    // Approach 2 
    await DragOsio.dragTo(DropNorway)

    await page.waitForTimeout(10000)
})