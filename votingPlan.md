CREATING TRIP
User clicks create trip.
Create trip form renders.
Enter and submit name, destinationa and date.
User clicks submit button.

On submit button:
admin_id(user object Auth0) and name and plus 4 (based on the number of voteable categories) to target_vote_count inserted in to trip table. !!! Add column target_vote_count to trip table and column actual_vote_count
trip_id and user_id is inserted into the members table.

User clicks next.
Choices form renders.
Enter choices for voteable categories.
User clicks submit.
Alert user to succesful submission.

On submit button:
Insert into poll 4 times, one for each category(accommodation, budget, restaurant, activity)
- insert category, trip_id and  if there is only one choice insert into selected_choice otherwise insert undecided into selected_choice.
Inserts into choices table for each choice
-insert choice_name, vote_count, poll_id

--------------------

VOTING TRIPS FIRST VIEW
User clicks view trips.
User clicks on trip.
Trip details page renders(same for members and admin).
Page contains a list of categories each has a drop down with options if it is voteable.
Each category had a submit button.
When user clicks submit the options disappear and replaced by "Thanks for your vote"

On submit:
choice_id and user_id and has_voted(boolean=true) are inserted into the votes table. !!! add has_voted column to votes table
fetch the vote_count for choice_id add 1 and send it back to choices table
Change state to hide vote


VOTING PROCESS

User clicks a view trip card.
On click of card:
Trip details page renders(same for members and admin).
    Fetch target_vote_count and actual_vote_count and run a comparison.
    IF target_vote_count = actual_vote_count RETURN display results for each category vote (close vote)
    ELSE target_vote_count != actual_vote_count RETURN Page, contains list of categories that still need to be voted on OR "you have voted"

    Fetch  all of choices, poll, votes and trip WHERE user_id = $$ AND trip_id = $$
    IF has_voted = true RETURN "thanks for your vote"
    ELSE RETURN choices to vote on drop down list



VOTING COMPLETED
 IF target_vote_count = actual_vote_count RETURN display results for each category vote (close vote)