Vue.component('product', {
    template: `
    <div class="product">

        <div class="product-image">
            <img v-bind:src="image">
        </div>

        <div class="product-info">
            <h1>{{ title }}</h1>
            <p v-if="inStock"><b>Availability</b> - In Stock</p>
            <p><b>Shipping</b> - {{shipping}}</p>
            <p v-else><b>Availability</b> - Out of Stock</p>
            <p><b>Product Details</b></p>
            <ul>
                <li v-for="detail in details">{{ detail }}</li>
            </ul>

            <div v-for="(variant, index) in variants" 
                :key="variant.variantId"
                class="color-box"
                v-bind:style="{backgroundColor: variant.variantColor}"
                v-on:mouseover="updateProduct(index)">
            </div>

            <button v-on:click="addToCart" :disabled="!inStock" :class="{ disabledButton: !inStock }">
                Add to Cart</button>
            <div class="cart">
                <p>Cart({{ cart }})</p>
            </div>
        </div>
    </div>
    `,
    
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    data() {

        return {
        brand: "Quechua - ",
        product: "Socks",
        selectedVariant: 0,
        details: ["80% cotton", "20% polyster", "Gender-neutral" ],
        variants: [
            {
                variantId: 2234,
                variantColor: "Black",
                variantImage: 'https://n1.sdlcdn.com/imgs/a/1/8/Quechua-Deep-Black-Gray-Forclaz-SDL597768838-1-67025.jpg',
                variantQuantity: 10
            },
            {
                variantId: 2235,
                variantColor: "Grey",
                variantImage: 'https://images-na.ssl-images-amazon.com/images/I/51gnlYNMxuL._SX425_.jpg',
                variantQuantity: 0
            }
        ],
        cart: 0
        }
    },

    methods: {
        addToCart() {
            this.cart += 1
        },
        updateProduct(index) {
            this.selectedVariant = index;
            console.log(index);
        }
    },

    computed: {
        title() {
            return this.brand + this.product;
        },
        image() {
            return this.variants[this.selectedVariant].variantImage;
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity;
        },
        shipping() {
            if(this.premium){
                return 'Free';
            } else {
                return '2$'
            }
        }
    },


})

var app = new Vue({
    el: '#app',
    data: {
        premium: true
    }
    // data: {

    //     brand: "Quechua - ",
    //     product: "Socks",
    //     product: 'Socks',
    //     selectedVariant: 0,
    //     details: ["80% cotton", "20% polyster", "Gender-neutral" ],
    //     variants: [
    //         {
    //             variantId: 2234,
    //             variantColor: "Black",
    //             variantImage: 'https://n1.sdlcdn.com/imgs/a/1/8/Quechua-Deep-Black-Gray-Forclaz-SDL597768838-1-67025.jpg',
    //             variantQuantity: 10
    //         },
    //         {
    //             variantId: 2235,
    //             variantColor: "Grey",
    //             variantImage: 'https://images-na.ssl-images-amazon.com/images/I/51gnlYNMxuL._SX425_.jpg',
    //             variantQuantity: 0
    //         }
    //     ],
    //     cart: 0,
    // },

    // methods: {
    //     addToCart() {
    //         this.cart += 1
    //     },
    //     updateProduct(index) {
    //         this.selectedVariant = index;
    //         console.log(index);
    //     }
    // },

    // computed: {
    //     title() {
    //         return this.brand + this.product;
    //     },
    //     image() {
    //         return this.variants[this.selectedVariant].variantImage;
    //     },
    //     inStock() {
    //         return this.variants[this.selectedVariant].variantQuantity;
    //     }
    // },
})