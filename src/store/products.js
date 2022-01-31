const products = {
    state: {
        products: [
            {id:1, name:'product1' , image: '1.jpg', price: 50, quantity: 1},
            {id:2, name:'product2' , image: '2.jpg', price: 60, quantity: 1},
            {id:3, name:'product3' , image: '3.jpg', price: 90, quantity: 1},
            {id:4, name:'product4' , image: '4.jpg', price: 30, quantity: 1},
            {id:5, name:'product5' , image: '5.webp', price: 120, quantity: 1},
            {id:6, name:'product6' , image: '6.webp', price: 150, quantity: 1},
            {id:7, name:'product7' , image: '7.webp', price: 170, quantity: 1},
            {id:8, name:'product8' , image: '8.webp', price: 320, quantity: 1},
            {id:9, name:'product9' , image: '9.webp', price: 430, quantity: 1},
            {id:10, name:'product10' , image: '10.webp', price: 540, quantity: 1},
        ]
    },
    getters: {
        getProducts: (state) => {return state.products}
    },
    mutations: {},
    actions: {}
}

export default products;