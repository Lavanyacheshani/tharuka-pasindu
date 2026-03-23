# Dimalka & Dinindu Wedding Invitation

## Google Sheets Integration (RSVP + Blessings)

This project now sends form submissions to Google Sheets through Google Apps Script.

### Connected Forms.

1. RSVP form writes to sheet: `rsvp`
2. Blessings/Wishes form writes to sheet: `wish`

### Files Added/Updated

1. `google-apps-script/code.gs` (Apps Script backend)
2. `src/googleSheets.ts` (frontend sender helper)
3. `src/components/RSVPForm.tsx` (sends RSVP to sheet)
4. `src/components/WishesSection.tsx` (sends wish to sheet)
5. `.env.example` (adds `VITE_GOOGLE_SCRIPT_URL`)

### Setup Steps

1. Open Google Apps Script: https://script.new
2. Paste the content from `google-apps-script/code.gs`.
3. Save project.
4. Deploy as Web App:
	- Execute as: Me
	- Who has access: Anyone
5. Copy the deployed Web App URL ending with `/exec`.
6. Add it to your local `.env` file:

```env
VITE_GOOGLE_SCRIPT_URL="https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec"
```

7. Restart dev server.

### Spreadsheet ID Used

`1142ABNJVLxnSH7nUAf68-BjPh5CVTZX2ungN9ZRsHoA`

### Notes

1. The script auto-creates headers in `rsvp` and `wish` if the sheet is empty.
2. Firestore writes are still kept as a secondary mirror for compatibility.
