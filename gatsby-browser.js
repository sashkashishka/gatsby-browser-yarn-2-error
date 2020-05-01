/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

// with this syntax leads to develop build failure
export const onClientEntry = async () => {
  if (typeof IntersectionObserver === `undefined`) {
    await import(`intersection-observer`);
  }
}

// when using this syntax - everything is okay
// export const onClientEntry = () => {
//  if (typeof IntersectionObserver !== 'undefined') {
//    return import('intersection-observer');
//  }
// 
//  return Promise.resolve();
// } 

