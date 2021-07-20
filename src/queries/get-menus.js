import { gql } from "@apollo/client";
import MenuFragment from "./fragments/menus";
/**
 * GraphQL categories and products query.
 */
const HeaderFooter = `
header: getHeader {
  favicon
  siteLogoUrl
  siteTagLine
  siteTitle
}
headerMenus: menuItems(where: {location: HCMS_MENU_HEADER, parentId: "0"}) {
  edges {
    node {
      ...MenuFragment
      childItems {
        edges {
          node {
            ...MenuFragment
          }
        }
      }
    }
  }
}
heroCarousel: productCategories(where: {slug: "supersale"}) {
  nodes {
    id
    children {
      nodes {
        id
        name
        slug
        databaseId
        description
        image {
          id
          sourceUrl
          srcSet
        }
      }
    }
  }
}
productCategories(first: 3) {
  nodes {
    id
    name
    slug
    image {
      id
      sourceUrl
      srcSet
    }
  }
}
products(first: 50) {
  nodes {
    id
    productId: databaseId
    averageRating
    slug
    description
    image {
      id
      altText
      sourceUrl
    }
    name
    ... on SimpleProduct {
      price
      regularPrice
      id
    }
    ... on VariableProduct {
      price
      id
      regularPrice
    }
    ... on ExternalProduct {
      price
      id
      externalUrl
      regularPrice
    }
    ... on GroupProduct {
      id
      products {
        nodes {
          ... on SimpleProduct {
            id
            price
            regularPrice
          }
        }
      }
    }
  }
}
footerMenus: menuItems(where: {location: HCMS_MENU_FOOTER, parentId: "0"}) {
  edges {
    node {
      ...MenuFragment
    }
  }
}
footer: getFooter {
  copyrightText
  sidebarOne
  sidebarTwo
  socialLinks {
    iconName
    iconUrl
  }
}
`

const GET_MENUS = gql`query {
  ${HeaderFooter}
}
  ${MenuFragment}
`

export default GET_MENUS;
