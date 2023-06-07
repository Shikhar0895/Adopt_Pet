import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";

/*here localCache will sort of save the data of the fetched result and will
 put to use if somtime afterwards it is required to be used*
 
 for eg useBreedList pass animal = dog later selects cat and afterwards
  if needs the dog data again it will fetch it from the  localcache*/

// export default function useBreedList(animal) {
//   const [breedList, setBreedList] = useState([]);
//   const [status, setStatus] =
//     useState(
//       "unloaded"
//     ); /* this can be used to show status of the breedlist getting loaded unloaded*/

//   useEffect(() => {
//     if (!animal) {
//       setBreedList([]);
//     } else if (localCache[animal]) {
//       setBreedList(localCache[animal]);
//     } else {
//       requestBreedList();
//     }

//     async function requestBreedList() {
//       setBreedList([]);
//       setStatus("loading");
//       const res = await fetch(
//         `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
//       );
//       const json = await res.json();
//       localCache[animal] = json.breeds || [];
//       setBreedList(localCache[animal]);
//       setStatus("loaded");
//     }
//   }, [animal]);
//   return [breedList, status];
// }

/* purpose of defining useBreedlist is to make use of custom hooks (here useState and useEffect side by side)
now we can simply call useBreedList(animal) in our searchParams component which will provide us the 
functionality of requesting list of breeds based on the animal we have selected
This encapsulation also helps keep the code clean

the function inside use effect will run once the search param component gets rendered post selecting the animal 
in the parameter.

In the callBack fx -- if there is no animal selected it will return an empty array
if passed an animal whose breed list has been saved in (or cached by running requestBreedList ) then it will setBreedList 
by the list of breeds result
in the animal passed in has is not present in local cache then it will go on further request breed list by calling 
requestBreedList() asynchronously

*/
export default function useBreedList(animal) {
  const results = useQuery(["breed", animal], fetchBreedList);

  return [results?.data?.breeds ?? [], results.status];
}
