exports.HomePage =

class HomePage{

    constructor(page){
        this.page = page;
        this.productlist = '//div[@id="tbodyid"]/div';
        this.addcartbtn = '//a[text()="Add to cart"]';
        this.cart = '//a[@id="cartur"]';
    }

    async addProducttoCart(ProductName) {
    const products = this.page.locator(this.productlist);
    const count = await products.count();

    for (let i = 0; i < count; i++) {
        const product = products.nth(i);
        const name = (await product.locator('h4 a').textContent()).trim();
        if (name === ProductName) {
        await product.locator('h4 a').click();
        break;
        }
    }

    this.page.on('dialog', async dialog => {
        await dialog.accept();
    });

    await this.page.locator(this.addcartbtn).click();
    }

     async gotoCart() {
        await this.page.locator(this.cart).click();
    }
}


