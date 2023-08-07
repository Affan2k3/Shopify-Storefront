export const allProductQuery = `{
    products(first:25) {
      edges {
        node {
            variants(first:250){
                edges{
                    node{
                        id,
                        title,
                        price{
                            amount,
                            currencyCode
                        },
                        sku
                        selectedOptions {
                            name
                            value
                          }
                          image{
                            url
                          }
                        quantityAvailable
                    }
                }
            }
            handle
            images(first:3){
                edges{
                    node{
                        url
                    }
                }
            },
          id,
          title,
          description
        }
      }
    }
  }`;
