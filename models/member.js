import query from "../database/index.js";
import nodemailer from "nodemailer";

export async function createMember(members) {
  console.log(members);
  const newTrip = await query(
    "INSERT INTO members (trip_id, user_id) VALUES ($1, $2) RETURNING *",
    [members.trip_id, members.user_id]
  );
  //console.log(newTrip);

  return { newTrip: newTrip.rows };
}

export async function emailMember(data) {
  console.log(data.userName[0]);
  // const memberEmail = await query(
  //   "INSERT INTO members_emails (trip_id, user_name, user_email) VALUES ($1, $2, $3) RETURNING *",
  //   [data.trip_id, data.userName, data.userEmail]
  // );

  for (let i = 0; i < data.userName.length; i++) {
    console.log(data.userName);
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "travelherd2023@gmail.com",
        pass: "wmygxapigknbfktk",
      },
    });
    const mailOptions = {
      from: "travelherd2023@gmail.com",
      to: `${data.userName[i].user_email}`,
      subject: "You've been invited to a new trip",
      text: `A friend has invited you to join a group trip on travel herd! to join, navigate to travelherd.com, log in and go to join trip. 
        then enter '${data.trip_id}'`,
    };
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log(`email sent: ${info.response}`);
      }
    });
    //, memberEmail: memberEmail.rows
    //password: wmygxapigknbfktk
  }

  return {};
}
