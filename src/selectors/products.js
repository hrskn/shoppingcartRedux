export default (products, { text }) => {
    return products.filter((product) => {
      const textMatch = product.description.toLowerCase().includes(text.toLowerCase());

      return textMatch;
    })
  };
  