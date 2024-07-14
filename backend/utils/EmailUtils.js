const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.titan.email",
  port: 587,
  secure: false,
  auth: {
    user: "orders@getmenif.com",
    pass: "nekri2-soqseH-bydhak",
  },
  tls: {
    rejectUnauthorized: true,
    minVersion: "TLSv1.2",
  },
  connectionTimeout: 90000,
  greetingTimeout: 90000,
  socketTimeout: 90000,
});

const sendEmail = async (data) => {
  let count = 0;
  try {
    const mailOptions = {
      from: '"New Order" <orders@getmenif.com>',
      to: "orders@getmenif.com",
      subject: "New Order Received",
      text: JSON.stringify(data),
      html: formatEmail(data),
    };

    let info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    count += 2;
    return info;
  } catch (error) {
    console.error("Error:", error.message);
    if (count < 2) {
      // sendEmail();
      count++;
    }
  }
};

function formatEmail(data) {
  data = JSON.parse(data);
  return `
  <h3>Personal Information</h3>
  <p>Email: ${data?.email}</p>
  <p>Phone Number: ${data?.phoneNumber}</p>
  <p>Flat Number: ${data?.flatNumber}</p>
  <p>Building Number: ${data?.buildingNumber}</p>
  <p>City: ${data?.city}</p>
  <p>Zip: ${data?.zip}</p>
  <p>Suburb Name: ${data?.supurbName}</p>
  <p>Country: ${data?.country}</p>
  <p>Surname: ${data?.surname}</p>
  <p>First Name: ${data?.firstName}</p>
  <p>Middle Name: ${data?.middleName}</p>
  <p>Date of Birth: ${data?.dob}</p>
  <p>Passport Issue Country: ${data?.passportIssueCountry}</p>
  <p>Passport Number: ${data?.passportNumber}</p>
  <p>Place of Birth: ${data?.placeOfBirth}</p>
  <p>Is Portuguese: ${data?.isPortuguese}</p>
  <p>Portuguese Nationality: ${data?.portugueseNationality}</p>
  <p>Document Type: ${data?.documentType}</p>
  <p>Need Bank Account: ${data?.needBankAccount}</p>

  <h3>Passport Information</h3>
  <p>Surname: ${data?.passportInformation?.surname}</p>
  <p>Middle Name: ${data?.passportInformation?.middleName}</p>
  <p>Date of Birth: ${data?.passportInformation?.dob}</p>
  <p>Passport Issue Country: ${data?.passportInformation?.passportIssueCountry}</p>
  <p>Passport Number: ${data?.passportInformation?.passportNumber}</p>
  <p>Place of Birth: ${data?.passportInformation?.placeOfBirth}</p>

  <h3>Documents</h3>
  <ul>
    ${data?.documents?.map(doc => `<li><a href="${doc?.url}">${doc?.type}</a></li>`).join('')}
  </ul>
`;
}
module.exports = sendEmail;
