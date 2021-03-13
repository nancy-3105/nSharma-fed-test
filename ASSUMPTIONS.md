## Description of my solution

Tried to implement the best possible way i could do, to get the data from api.
There was alternate way as well to get the data - fetch() method 

here is my code for the fetch() method -

  const loadData = async (skip = 1, limit = LIMIT) => {
      {/* To start a request, call the special function fetch()*/}
      const response = await fetch(`https://randomuser.me/api/?results=${limit}`);
      await  waits for async calls until the request completes
      {/* response.json() you can extract the JSON object from a fetch response */}
      const data = await response.json();
      setUsers(data.results);
 };

To implement the above code, replace the loadData() fn in App.js with the above mentioned code.

And the two main reasons of using Axios over fetch () are -

1. Fetch request is ok when response object contains the ok property, Axios request is ok when status is 200 and statusText is 'OK'.
2. Fetch usually runs the then and catch both blocks, which let us see the full status of the request which would be unnecessary at some phase, 
   but Axios just return the error block, which is more or what easy to read and debug!

## Things I would do next
As per coding test, i guess all the requirements has been covered in thi solution.

## Assumptions that I made
I Assumed, i just need to fetch on 5 users at a time. and then on click of loadMore.. those old 5 users will be replaced by new 5 users. 
So, i have implemented my solution based on this approach.
