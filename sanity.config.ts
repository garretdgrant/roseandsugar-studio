import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {defineConfig} from 'sanity'
import {structureTool, StructureBuilder} from 'sanity/structure'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'

export default defineConfig({
  name: 'default',
  title: 'rose-and-sugar-studio',

  projectId: 'p984b1z5',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S, context) => {
        return S.list()
          .title('Content')
          .items([
            orderableDocumentListDeskItem({type: 'predesign', S, context}),
            S.documentTypeListItem('class'),
          ])
      },
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
