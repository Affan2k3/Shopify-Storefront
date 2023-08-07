export const femaleApiFetchingQuery = `query AllProducts {
    collection(handle: "female"){
      handle
      products(first: 10) {
         edges {
           node {
            images(first: 3){
               edges{
                 node{
                  url
                }
              }
            },
            handle,
              id,
              title,
              description,
              variants(first: 250){
                         edges{
                           node{
                  id,
                    title,
                    price{ amount, currencyCode },
                  sku
                  quantityAvailable
                }
  
              }
            }
          }
        }
      }
    }
  }`;
export const femaleJacketsApiFetchingQuery = `query ProductType {
    collection(handle: "female") {
      handle
      products(first: 10, filters: { productType: "jackets" }) {
        edges {
          node {
            images(first: 3){
              edges{
                node{
                  url
                }
              }
            },
            handle,
              id,
              title,
              description,
              variants(first: 250){
                        edges{
                          node{
                  id,
                    title,
                    price{ amount, currencyCode },
                  sku
                }
              }
            }
          }
        }
      }
    }
  }`;
export const femalePantsApiFetchingQuery = `query ProductType {
    collection(handle: "female") {
      handle
      products(first: 10, filters: { productType: "pants" }) {
        edges {
          node {
            images(first: 3){
              edges{
                node{
                  url
                }
              }
            },
            handle,
              id,
              title,
              description,
              variants(first: 250){
                        edges{
                          node{
                  id,
                    title,
                    price{ amount, currencyCode },
                  sku
                }
              }
            }
          }
        }
      }
    }
  }`;
export const femaleShirtsApiFetchingQuery = `query ProductType {
    collection(handle: "female") {
      handle
      products(first: 10, filters: { productType: "shirts" }) {
        edges {
          node {
            images(first: 3){
              edges{
                node{
                  url
                }
              }
            },
            handle,
              id,
              title,
              description,
              variants(first: 250){
                        edges{
                          node{
                  id,
                    title,
                    price{ amount, currencyCode },
                  sku
                }
              }
            }
          }
        }
      }
    }
  }`;
export const femaleDressesApiFetchingQuery = `query ProductType {
    collection(handle: "female") {
      handle
      products(first: 10, filters: { productType: "dresses" }) {
        edges {
          node {
            images(first: 3){
              edges{
                node{
                  url
                }
              }
            },
            handle,
              id,
              title,
              description,
              variants(first: 250){
                        edges{
                          node{
                  id,
                    title,
                    price{ amount, currencyCode },
                  sku
                }
              }
            }
          }
        }
      }
    }
  }`;
