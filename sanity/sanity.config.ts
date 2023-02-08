import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {cloudinarySchemaPlugin} from 'sanity-plugin-cloudinary'

import {schemaTypes} from './src/schemas'
import deskStructure from './src/deskStructure'

export default defineConfig({
  name: 'default',
  title: 'lanelps',

  projectId: 'k2d93j2x',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: deskStructure,
    }),
    visionTool(),
    cloudinarySchemaPlugin(),
  ],

  schema: {
    types: schemaTypes,
  },
})
