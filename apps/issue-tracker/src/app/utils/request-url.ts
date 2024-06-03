const BASE_URL = 'https://example.com/';

export enum Endpoints {
  GET_ISSUES = 'issues',
}

export const requestUrl = async (url: string, options?: Record<string, unknown>) => {
  return fetch(`${BASE_URL}${url}`, options).then(async (response) => {
    const data = await response.json();
    if (response.ok) {
      return data;
    } else {
      return Promise.reject(data);
    }
  });
}
