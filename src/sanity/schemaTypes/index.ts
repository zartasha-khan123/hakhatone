import { type SchemaTypeDefinition } from 'sanity'
import { hero } from './hero'
import landingpage from './landingpage'
import productsections from './landingpagesections/productsections'
import heros from './landingpagesections/heros'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [landingpage,heros,productsections],
}



