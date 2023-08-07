export const maleApiFetchingQuery = `query AllProducts {
    collection(handle: "male"){
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
export const maleShortsApiFetchingQuery = `query ProductType {
    collection(handle: "male") {
      handle
      products(first: 10, filters: { productType: "shorts" }) {
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
export const maleShirtsApiFetchingQuery = `query ProductType {
    collection(handle: "male") {
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
export const maleBoardshotsApiFetchingQuery = `query ProductType {
    collection(handle: "male") {
      handle
      products(first: 10, filters: { productType: "boardshots" }) {
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
export const maleJacketsApiFetchingQuery = `query ProductType {
    collection(handle: "male") {
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
export const maleSaleApiFetchingQuery = `query ProductType {
    collection(handle: "male") {
      handle
      products(first: 10, filters: { productType: "sales" }) {
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
