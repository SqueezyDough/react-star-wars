// Validate response
const checkStatus = response => {
  if (response.ok) {
    return response
  } else {
    const error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

export const fetchData = async function (url) {
  // force https
  const apiURL = url.includes('https') ? url : url.replace('http', 'https')

  return fetch(apiURL)
    .then(checkStatus)
    .then(res => res.json())
    .catch(() => null)
}
