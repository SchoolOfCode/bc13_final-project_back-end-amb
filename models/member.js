import query from "../database/index.js";

export async function createMember(members) {
  console.log(members);
  const newTrip = await query(
    "INSERT INTO members (trip_id, user_id) VALUES ($1, $2) RETURNING *",
    [members.trip_id, members.user_id]
  );
  //console.log(newTrip);
 
  return { newTrip: newTrip.rows};
}


export async function emailMember(data) {
  console.log(data)
  const memberEmail = await query(
    "INSERT INTO members_emails (trip_id, user_name, user_email) VALUES ($1, $2, $3) RETURNING *",
    [data.trip_id, data.user_name, data.user_email]
  );



  //, memberEmail: memberEmail.rows 
}
