import { type SchemaTypeDefinition } from 'sanity'
import  { Landing } from './landingpage'
import  { Hero } from './landingpagesections/hero'
import  { Products } from './landingpagesections/productsection'
import { Popular } from './landingpagesections/popularproducts'

export const schema: { types: SchemaTypeDefinition[] } = {
   types: [Landing,Hero,Products,Popular],
}





