import query from "../database/index.js"


export async function createTrip(trip){
    const newTrip = await query ("INSERT INTO trip (trip_name, admin_id) VALUES ($1, $2) RETURNING *", [trip.trip_name, trip.admin_id])
    return newTrip.rows
}