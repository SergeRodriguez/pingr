const db = require("./db.js");
const accountSid = "AC0afe4b715f4f55a586c3372ed2d398ac";
const authToken = "da4a8354c51296c82027a7f6a315aca3";
const client = require("twilio")(accountSid, authToken);

module.exports = (req, res) => {
  console.log("in PUT REQUESTS req body", req.body);
  console.log("in PUT REQUESTS req params", req.params);
  console.log("in PUT REQUESTS req query", req.query);

  const query = {
    text: `UPDATE requests SET status_id = 2,business_id = $1, service_id = $2, appointment_start_time = $3 WHERE id = $4 RETURNING *`,
    values: [
      req.body.businessID,
      req.body.serviceID,
      req.body.appointmentStartTime2,
      req.body.requestID
    ]
  };

  db.query(query, (err, result) => {
    if (err) {
      res.send(err);
      console.log("error", err);
    } else {
      // console.log("i am in else");
      // client.messages
      //   .create({
      //     body: `Update from Pingr:  Your ${req.body.serviceID} has been confirmed for a start time of ${req.body.appointmentStartTime2}`,
      //     from: "+19108530024",
      //     to: "+15146328762"
      //   })
      //   .then(message => console.log(message.sid));
      // console.log("result", result);
      res.send(result.rows);
    }
  });
};
