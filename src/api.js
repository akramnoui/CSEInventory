
export const fetchActions = async () => {
    const response = await fetch(
        'https://cse-inventory-api.herokuapp.com/reservations/all',
      )
      const results = await response.json()
      console.log(results);
      return results.allReservations
      
      
  }

export const fetchItems = async () => {

    const response = await fetch(
        'https://cse-inventory-api.herokuapp.com/items/all'
    )

    const results = await response.json()
    console.log(results);
    return results



}
export const login = async (email ,  password) => {

    const response = await fetch('https://cse-inventory.herokuapp.com/users/login' , 
    {
      headers: {
             'Content-Type': 'application/json',
           },
      method : 'POST' , 
      body: JSON.stringify({email : email , password : password })
    } );
     const jsonResponse = await response.json();
    if (!response.ok) {console.log('here');  throw jsonResponse; }
    return jsonResponse;
    

}