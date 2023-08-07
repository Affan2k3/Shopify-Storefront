export const queryForGettingAllProducts = `{
    products(first:250) {
      edges {
        node {
            productType
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
  }
  `;
