function price(order) {
    const basePrice = order.quantity * order.itemPrice;
    const quantityDiscount = Math.max(0, order.quantity - 500) * order.itemPrice * 0.05;
    const shipping = Math.min(order.quantity * order.itemPrice * 0.1, 100);
    return basePrice - quantityDiscount + shipping;
}

class Order {
    constructor(aRecord) {
        this._data = aRecord;
    }

    get quantity() {return this._data.quantity;}
    get itemPrice() {return this._data.itemPrice;}

    get price() {
        return this.basePrice - this.quantityDiscount + this.shipping;
    }
    
    // 클래스 전체에 영향을 주면 변수가 아닌 메소드로 추출
    get basePrice() {return this.quantity * this.itemPrice;}
    get quantityDiscount() {return Math.max(0, this.quantity - 500) * this.itemPrice * 0.05;}
    get shipping() {return Math.min(this.quantity * this.itemPrice * 0.1, 100);}
}