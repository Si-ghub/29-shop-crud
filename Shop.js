class Shop {
    constructor(shopName, currency) {
        this.shopName = shopName;
        this.shopCurrency = currency;
        this.productsList = [];
        this.usersList = [];
    }

    intro() {
        console.log(`Hi, we are "${this.shopName}".\nUse.items() method to get list of items to purchase.\nUse.order() method to get your order details.`);
    }

    addItem(item, price) {
        let itemObject = {
            item, price,
        }
        this.productsList.push(itemObject);
        console.log(`"Meskiuko kioskas" sells ${item} for ${price} EUR now!`);
    }























}
module.exports = Shop;