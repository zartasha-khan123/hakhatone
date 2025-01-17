import { type SchemaTypeDefinition } from 'sanity'
import landingpage from './landingpage'
import hero from './landingpagesections/hero'
import productsection from './landingpagesections/productsection'
import popularproducts from './landingpagesections/popularproducts'

export const schema: { types: SchemaTypeDefinition[] } = {
   types: [landingpage,hero,productsection,popularproducts],
}





