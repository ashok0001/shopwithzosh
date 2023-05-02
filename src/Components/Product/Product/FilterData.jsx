export const color=["white","Black","Red","marun","Being","Pink","Green","Yellow"]

export const filters = [
    {
      id: 'color',
      name: 'Color',
      options: [
        { value: 'white', label: 'White' },
        { value: 'beige', label: 'Beige' },
        { value: 'blue', label: 'Blue', checked: true },
        { value: 'brown', label: 'Brown' },
        { value: 'green', label: 'Green' },
        { value: 'purple', label: 'Purple' },
      ],
    },
    {
      id: 'category',
      name: 'Category',
      options: [
        { value: 'new-arrivals', label: 'New Arrivals' },
        { value: 'sale', label: 'Sale' },
        { value: 'travel', label: 'Travel', checked: true },
        { value: 'organization', label: 'Organization' },
        { value: 'accessories', label: 'Accessories' },
      ],
    },
    {
      id: 'size',
      name: 'Size',
      options: [
        { value: '2l', label: '2L' },
        { value: '6l', label: '6L' },
        { value: '12l', label: '12L' },
        { value: '18l', label: '18L' },
        { value: '20l', label: '20L' },
        { value: '40l', label: '40L', checked: true },
      ],
    },
  ]

  export const sortOptions = [
    { name: "Most Popular", query: "populer", current: true },
    { name: "Best Rating", query: "rating", current: false },
    { name: "Newest", query: "new", current: false },
    { name: "Price: Low to High", query: "price_low", current: false },
    { name: "Price: High to Low", query: "pirce_high", current: false },
  ];