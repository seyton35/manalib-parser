import puppeteer from "puppeteer";
import fs from "fs";

const mangalibLink = 'https://mangalib.me/'
const title = 'miss-komi-is-bad-at-communication';

(async () => {

  let flag = true
  let res = []
  let counter = 1

  try {

    let browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      devtools: true
    })
    let page = await browser.newPage()
    await page.setViewport({
      height: 1400, width: 900
    })
    while (flag) {
      await page.goto(`${mangalibLink}${title}/v0/c0?page=${counter}`)

      console.log(counter);
      counter++
    }

  } catch (e) {
    console.log(e);
    await browser.close()
  }
})();