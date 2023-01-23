import query from "../database/index.js";

export async function createMember(members) {
  console.log(members);
  const newTrip = await query(
    "INSERT INTO members (trip_id, user_id) VALUES ($1, $2) RETURNING *",
    [members.trip_id.trip_id, members.data.user_id]
  );
  //console.log(newTrip);
  const memberEmail = await query(
    "INSERT INTO members_emails (trip_id, user_name, user_email) VALUES ($1, $2, $3) RETURNING *",
    [members.trip_id.trip_id, members.data.user_name, members.data.user_email]
  );
  return { newTrip: newTrip.rows, memberEmail: memberEmail.rows };
}
