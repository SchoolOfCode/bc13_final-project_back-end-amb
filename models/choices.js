import query from "../database/index.js";

export async function createChoices(choices) {
  const newTrip = await query(
    "INSERT INTO choices (category, choice_name, poll_id, vote_count ) VALUES ($1, $2, $3, $4) RETURNING *",
    [choices.category, choices.choice_name, choices.poll_id, choices.vote_count]
  );
  return newTrip.rows;
}
export async function getChoices(trip_id) {
  const getChoices = await query(
    `SELECT trip.trip_id, trip.trip_name, choices.choice_id, choices.category, choices.choice_name FROM trip INNER JOIN poll ON trip.trip_id = poll.trip_id INNER JOIN choices ON choices.poll_id = poll.poll_id WHERE trip.trip_id = ${trip_id}`
  );
  console.log(getChoices);
  return getChoices.rows;
}
