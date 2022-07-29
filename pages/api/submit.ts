import type { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";

type SheetForm = {
  date: string;
  schedule: string;
  backline: string;
  artistName: string;
  name: string;
  lastName: string;
  email: string;
  phone: string;
  terms: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Only POST requests allowed" });
  }

  const body = req.body as SheetForm;
  console.log(req.body);
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1:I1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[body.date, body.schedule, body.backline, body.artistName, body.name, body.lastName, body.email, body.phone, body.terms]],
      },
    });

    return res.status(201).json({
      data: response.data,
    });

  } catch (e) {
    console.error(e);
    return res.status(500).send({message: 'Algo salió mal'});
  }
}
