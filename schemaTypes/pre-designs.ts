// schemas/preDesignedCookie.ts
import {defineType} from 'sanity'
import {orderRankField} from '@sanity/orderable-document-list'
import type {Rule} from 'sanity'

export default defineType({
  name: 'predesign',
  title: 'Pre-Designed Cookies',
  type: 'document',
  fields: [
    orderRankField({type: 'predesign'}), // 👈 must be first
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
      title: 'Price (e.g., $36/dozen)',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
})
