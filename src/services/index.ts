// const fetcher = async (url: string, options?: RequestInit) => {
//   const response = await window.fetch('' + url, options);
//   if (!response.ok) {
//     throw new Error(response.statusText);
//   }
//   return response;
// };
export class Client {}

// default client
export const client = new Client();
