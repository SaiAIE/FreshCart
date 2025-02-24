import mongoose, { Mongoose } from "mongoose";

const ReviewSchema = new mongoose.Schema({
    profile:{type:String,required:true},
    reviewer:{type:String,required:true},
    date:{type:Date, required:true,default:Date.now()},
    verified:{type:Boolean,default:false},
    mainComment:{type:String,required:true},
    comment:{type:String,required:true},
    images:{type:[String],required:true},
    helpful:{type:Boolean,default:false}
})

const ProductSchema = new mongoose.Schema({
    image: {type:[String],required:true},
    category:{type:String, required:true},
    name:{type:String,required:true},
    rating:{type:String,required:true},
    price:{type:String, required:true},
    originalPrice:{type:String,required:true},
    offer:{type:String, default:""},
    offerValue:{type:String, default:""},

    details:{
        quantity:{type:[String],default:["250gm","500gm","1kg"]},
        productCode:{type:String, default:"FBB00255"},
        availability:{type:String,default:"In Stock"},
        type:{ type:String, default:"Fruits"},
        shipping: {type:String, default:"01 day shipping,(Free pickup today)"},

        productDetails:{
            heading:{type:String, default:"Nutrient Value & Benefits"},
            description:{type:String,default:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, tellus iaculis urna bibendum in lacus, integer. Id imperdiet vitae varius sed magnis eu nisi nunc sit. Vel, varius habitant ornare ac rhoncus. Consequat risus facilisis ante ipsum netus risus adipiscing sagittis sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}, 
        },

        storageTips:{
            heading:{type:String, default:"Storage Tips"},
            description:{type:String,default:"Nisi, tellus iaculis urna bibendum in lacus, integer. Id imperdiet vitae varius sed magnis eu nisi nunc sit. Vel, varius habitant ornare ac rhoncus. Consequat risus facilisis ante ipsum netus risus adipiscing sagittis sed.Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        },

        unit:{
            heading:{type:String, default:"Unit"},
            description:{type:String,default:"3 units"}
        },
        seller:{
            heading:{type:String, default:"Seller"},
            description:{type:String,default:"DMart Pvt. LTD"}
        },
        disclaimer:{
            heading:{type:String, default:"Disclaimer"},
            description:{type:String,default:"Image shown is a representation and may slightly vary from the actual product. Every effort is made to maintain accuracy of all information displayed."}
        },
        
        information:{
            weight: {type:String,default:"1000 Grams"},
            ingredientType: {type:String,default:"Vegetarian"},
            brand: {type:String, default:"Dmart"},
            itemPackageQuantity: {type:String, default:"1"},
            form: {type:String,default:"Larry the Bird"},
            manufacturer: {type:String,default:"Dmart"},
            netQuantity: {type:String,default:"340.0 Gram"},
            productDimensions: {type:String,default:"9.6 x 7.49 X 18.69 cm"},
            asin: {type:String,default:'SB0025UJ75W'},
            bestSellerRank: {type:String, default:"#2 in Fruits"},
            dateFirstAvailable: {type:String, default:"30 April 2022"},
            itemWeight: {type:String,default:"500g"},
            genericName: {type:String,default:"Banana Robusta"},

        }
    },
    reviews:{
        type:[ReviewSchema],
        default:[
            {
                profile:"https://freshcart-next-js.vercel.app/images/avatar/avatar-10.jpg",
                reviewer:"Shankar Subaraman",
                date: "30 December 2022",
                verified: true,
                mainComment:"Need to recheck the weight at delivery point",
                comment:"Product quality is good. But, weight seemed less than 1kg. Since it is being sent in open package, there is a possibility of pilferage in between. FreshCart sends the veggies and fruits through sealed plastic covers and Barcode on the weight etc. .",
                images:["https://freshcart-next-js.vercel.app/images/products/product-img-1.jpg","https://freshcart-next-js.vercel.app/images/products/product-img-2.jpg","https://freshcart-next-js.vercel.app/images/products/product-img-3.jpg"],
                helpful:"true"
            },
            {
                profile:"https://freshcart-next-js.vercel.app/images/avatar/avatar-12.jpg",
                reviewer:"Robert Thomas",
                date:"29 Decemebr 2022",
                verified:true,
                mainComment:"Need to recheck the weight at delivery point",
                comment:"Product quality is good. But, weight seemed less than 1kg. Since it is being sent in open package, there is a possibility of pilferage in between. FreshCart sends the veggies and fruits through sealed plastic covers and Barcode on the weight etc. .",
                helpful:"true"
            },
            {
                profile:"https://freshcart-next-js.vercel.app/images/avatar/avatar-9.jpg",
                reviewer:"Barbara Tay",
                date:"28 December 2022",
                verified:false,
                mainComment:"Need to recheck the weight at delivery point",
                comment:"Everytime i ordered from fresh i got greenish yellow bananas just like i wanted so go for it , its happens very rare that u get over riped ones.",
                helpful:"false"
            },
            {
                profile:"https://freshcart-next-js.vercel.app/images/avatar/avatar-8.jpg",
                reviewer:"Sandra Langevin",
                date:"8 December 2022",
                verified:false,
                mainComment:"Great product",
                comment:"Great product & package. Delivery can be expedited.",
                helpful:"false"
            }
        ]
    }
})

export const Product = mongoose.model("Product",ProductSchema)