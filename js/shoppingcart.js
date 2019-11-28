const store = [
    {
        itemName: "T-shirt",
        price:6000,
        quantity: 0
    },
    {
        itemName: "Dress",
        price:8000,
        quantity: 0
    },
    {
        itemName: "Short",
        price:4000,
        quantity: 0
    },
    {
        itemName: "Jean",
        price:7000,
        quantity: 0
    },
];
let app = new Vue ({
    el: "#app",
    data:{
        title: "Shopping Cart",
        showShoppingCart: true,
        storeItems: store,
        cart:[],
        total: 0,
    },
    methods: {
        changeView: function(){
            if (this.showShoppingCart === false) {

            }
        }
    }
})