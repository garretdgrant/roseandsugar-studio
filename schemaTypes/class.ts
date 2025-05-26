// schemas/class.ts
import {defineType} from 'sanity'
import type {Rule} from 'sanity'

export default defineType({
  name: 'class',
  title: 'Class',
  type: 'document',
  fields: [
    {
      name: 'month',
      title: 'Month',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'day',
      title: 'Day',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
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
      name: 'address',
      title: 'Address',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price (e.g., $65 per person)',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'time',
      title: 'Time',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Class Image',
      type: 'image',
      options: {hotspot: true},
      validation: (Rule: Rule) => Rule.optional(),
    },
    {
      name: 'seatsLeft',
      title: 'Seats Left',
      type: 'number',
      validation: (Rule: Rule) => Rule.required().min(0).integer(),
    },
  ],
})
