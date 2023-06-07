async function fetchPet({ queryKey }) {
  const id = queryKey[1];

  const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`);

  if (!apiRes.ok) {
    throw new Error(`details/${id} fetch not ok`);
  }

  return apiRes.json();
}

export default fetchPet;

/*it useful that fetchPet is in a separate file. it is exporting a method fetchPet which when supplied with 
correct query Key this is going to return a correct response.
This can be used outside react query also.
React query hepls in modularizing the asynch part of the code making it easily testable as well
*/
