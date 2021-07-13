class Shop {
    constructor(shopName, currency) {
        this.shopName = shopName;
        this.currency = currency;
        this.chart = [];
        this.users = [];
    }

    intro() {
        console.log(`Hi, we are "${this.shopName}".\nUse.items() method to get list of items to purchase.\nUse.order() method to get your order details.`);
    };























}
module.exports = Shop;