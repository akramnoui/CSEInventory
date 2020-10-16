
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