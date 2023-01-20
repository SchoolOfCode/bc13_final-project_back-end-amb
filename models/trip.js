import query from "../database/index.js";

// getTripsByUserId

export async function getTrips(user_id) {
  console.log(user_id);
  const allTrips = await query(
    `SELECT trip.trip_name, trip.trip_id FROM members INNER JOIN trip ON trip.trip_id = members.trip_id WHERE members.user_id ='${user_id}'`
  );
  console.log(allTrips);
  return allTrips.rows;
}

export async function getAllTrips() {
  console.log();
  const allTrips = await query("SELECT * FROM trip");
  console.log(allTrips);
  return allTrips.rows;
}

export async function createTrip(trip) {
  const newTrip = await query(
    "INSERT INTO trip (trip_name, admin_id) VALUES ($1, $2) RETURNING *",
    [trip.trip_name, trip.admin_id]
  );
  return newTrip.rows;
}
