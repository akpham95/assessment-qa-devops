
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Check that clicking the Draw button displays the div with id = “choices"', async () => {
    await driver.findElement(By.id('draw')).click() // simulate user to find DOM id of draw and clicking the button
    await driver.sleep(500) // wait before next action
    const choices = await driver.findElement(By.id('choices')) // select div id choices
    expect(choices).not.toBe('') // the choices div added to html expected NOT to be empty 
})

/*
test('Check that clicking an “Add to Duo” button displays the div with id = “player-duo”', async () => {

})
*/