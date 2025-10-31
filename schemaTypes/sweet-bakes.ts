import {defineType} from 'sanity'
import {orderRankField} from '@sanity/orderable-document-list'
import type {Rule} from 'sanity'

export default defineType({
  name: 'sweetBake',
  title: 'Sweet Bakes',
  type: 'document',
  fields: [
    orderRankField({type: 'sweetBake'}),
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price (e.g., $45/cake)',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Display grouping (e.g., Cakes, Cupcakes, Treat Boxes)',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'servings',
      title: 'Servings',
      type: 'string',
      description: 'Servings guidance shown to customers',
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
})
