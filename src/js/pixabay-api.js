export const fetchPhotosByQuery = searchedQuery => {
  const searchParams = new URLSearchParams({
   
      key: '48293498-9bc96457b3129dac42cff7415',
      q: searchedQuery,
image_type: 'photo',
orientation: 'horizontal',
      safesearch: 'true',
per_page: 9,
  });

  return fetch(`https://pixabay.com/api/?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};