const classSchema = {
  name: 'class',
  title: 'Class',
  type: 'document',
  fields: [
    {name: 'month', type: 'string', title: 'Month'},
    {name: 'day', type: 'string', title: 'Day'},
    {name: 'title', type: 'string', title: 'Title'},
    {name: 'description', type: 'text', title: 'Description'},
    {name: 'address', type: 'string', title: 'Address'},
    {name: 'price', type: 'string', title: 'Price'},
    {name: 'time', type: 'string', title: 'Time'},
  ],
}

export default classSchema
