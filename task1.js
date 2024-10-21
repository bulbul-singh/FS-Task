// Subject data (example with some dummy data)
const subjectDetails = {
  oops: { teacher: 'Mr. Johnson', cabin: '101', phone: '123-456-7890' },
  java: { teacher: 'Mrs. Smith', cabin: '102', phone: '098-765-4321' },
  pvrh: { teacher: 'Ms. Davis', cabin: '103', phone: '111-222-3333' },
bcsc: { teacher: 'Mr. White', cabin: '104', phone: '444-555-6666' },
  bcse: { teacher: 'Mrs. Brown', cabin: '105', phone: '777-888-9999' },
  pqrh: { teacher: 'Mr. Green', cabin: '106', phone: '555-666-7777' },
};

// Function to open new window with subject details
const subjectLinks = document.querySelectorAll(".subject");
subjectLinks.forEach(link => {
  link.addEventListener('click', function (event) {
      event.preventDefault();
      const subject = this.getAttribute("data-subject");
      openNewWindow(subject);
  });
});

function openNewWindow(subject) {
  const details = subjectDetails[subject];
  const subjectTitle = capitalizeFirstLetter(subject);

  // Open new window
  const newWindow = window.open("", "_blank", "width=400,height=400");

  // Write subject details to new window
  newWindow.document.write(`
      <html>
          <head>
              <title>${subjectTitle} Details</title>
              <style>
                  body { font-family: Arial, sans-serif; padding: 20px; }
                  h2 { color: #4CAF50; }
                  p { font-size: 16px; margin: 5px 0; }
                  strong { font-weight: bold; }
                  a { color: #4CAF50; text-decoration: none; display: block; margin-top: 20px; }
                  a:hover { text-decoration: underline; }
              </style>
          </head>
          <body>
              <h2>${subjectTitle}</h2>
              <p><strong>Teacher:</strong> ${details.teacher}</p>
              <p><strong>Cabin No:</strong> ${details.cabin}</p>
              <p><strong>Phone No:</strong> ${details.phone}</p>
              <a href="#" onclick="window.close()">Go Back to Timetable</a>
          </body>
      </html>
  `);
  newWindow.document.close();
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
