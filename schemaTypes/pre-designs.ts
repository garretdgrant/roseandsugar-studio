// schemas/preDesignedCookie.ts
import {defineType} from 'sanity'
import {orderRankField} from '@sanity/orderable-document-list'
import type {Rule} from 'sanity'

const CATEGORY_OPTIONS = [
  {title: 'Housewarming / Real Estate', value: 'Housewarming / Real Estate'},
  {title: 'Holidays', value: 'Holidays'},
  {title: 'Florals', value: 'Florals'},
  {title: 'Sports', value: 'Sports'},
  {title: 'Thank you', value: 'Thank you'},
  {title: 'Condolences', value: 'Condolences'},
  {title: 'General Baked Cookies', value: 'General Baked Cookies'},
]

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
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Drives filtering on the Pre-Designed Cookies page',
      options: {
        list: CATEGORY_OPTIONS,
        layout: 'dropdown',
      },
    },
  ],
})
