// It comes with NextJs
import path from "path";
import fs from "fs";

function buildPath() {
  return path.join(process.cwd(), "data", "data.json");
}

function extractData(filePath) {
  const jsonData = fs.readFileSync(filePath);
  return JSON.parse(jsonData);
}

export default function handler(req, res) {
  // Acces our data (JSON File) ✅
  // Extract the data ✅
  // Response 404 if the method does not exist ✅
  // Look trhorugh AllEvents and identify the eventId ✅
  // Add the email to the database on registered-emails ✅
  // Add only if it does not exist already on the database ✅
  // Check the format of the email

  const { method } = req;

  const filePath = buildPath();
  const data = extractData(filePath);
  const { events_categories, allEvents } = data;

  if (!allEvents) {
    return res.status(404).json({
      message: "Events data not found...",
    });
  }

  if (method === "POST") {
    const { email, eventId } = req.body;

    if (!email | !email.includes("@")) {
      res.status(422).json({ message: "Invalid email address" });
      return;
    }

    const newAllEvents = allEvents.map((ev) => {
      if (ev.id == eventId) {
        if (ev.emails_registered.includes(email)) {
          res.status(401).json({
            message: "This email has already been registered",
          });
          return ev;
        }
        return {
          ...ev,
          emails_registered: [...ev.emails_registered, email],
        };
      }
      return ev;
    });

    fs.writeFileSync(
      filePath,
      JSON.stringify({ events_categories, allEvents: newAllEvents })
    );

    return res.status(200).json({
      message: `You have been registered successcully with the email: ${email}`,
    });
  }

  //   IN AN API WE NORMALLY HAVE SEVERAL DIFFERENT FUNCTIONS HERE TO HANDLE VARIOUS METHODS
}
