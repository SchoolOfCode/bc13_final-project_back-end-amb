import query from "../database/index.js";

export async function createMember(members) {
  const newTrip = await query(
    "INSERT INTO members (trip_id, user_id, is_admin) VALUES ($1, $2, $3) RETURNING *",
    [members.trip_id, members.user_id, members.is_admin]
  );
  return newTrip.rows;
}
