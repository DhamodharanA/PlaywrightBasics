exports.CartPage =

class CartPage{
    constructor (page){
        this.page = page;
        this.noofproducts ='//*[@id="tbodyid"]/tr/td[2]';
    }

    async checkproductInCart(ProductName){
        const ProductinCart = await this.page.$$(this.noofproducts)
        for(const product of ProductinCart){
            console.log(await product.textContent())
            if(ProductName == await product.textContent()){
                return true;
                break;

            }
        }
    }
}