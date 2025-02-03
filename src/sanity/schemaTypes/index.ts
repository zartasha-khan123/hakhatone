import { type SchemaTypeDefinition } from 'sanity'
import  { Landing } from './landingpage'
import  { Hero } from './landingpagesections/hero'
import  { Products } from './landingpagesections/productsection'
import { Popular } from './landingpagesections/popularproducts'
import { Comment } from './comments'
import { userSchema } from './user'
import { orderSchema } from './orders'
import { Category } from './category'
import { product } from './landingpagesections/product'

export const schema: { types: SchemaTypeDefinition[] } = {
   types: [Landing,Hero,Products,Popular,Comment,userSchema,orderSchema,product,Category],
}





