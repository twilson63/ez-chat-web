export const addMessage = (author, message) => {
  return fetch('https://twilson63.cloudant.com/demo2', {
    method: 'POST',
    body: JSON.stringify({ author, message }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Basic ' +
        btoa(
          'hatinveyerfuldentriesher:ff7ce912ade0e2987feb2eda061d450d5ff0e11e'
        )
    }
  }).then(res => res.json())
}
