// import { useEffect, useState } from "react";

// const useItemDetails = itemsId => {
//       const [items, setItems] = useState({});
//       console.log(items);
//       useEffect(() => {
//             const url = `https://morning-retreat-32116.herokuapp.com/items/${itemsId}`

//             fetch(url)
//                   .then(res => res.json())
//                   .then(data => setItems(data))
//       }, [itemsId]);
//       return [itemsId]
// }

// export default useItemDetails;