import { env } from "node:process";
import { emailTransporter } from "../../config/emailTransporter";
import logger from "../../utils/logger";

export const sendAccountDeactivatedEmail = async (email: string) => {
  logger.info('hit send account deactivated email');

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Account Deactivated</title>
</head>
<body style="margin:0; padding:0; background-color:#f4f4f4; font-family:Arial, sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="padding:40px 0;">
    <tr>
      <td align="center">

        <!-- Main Card -->
        <table width="420" cellpadding="0" cellspacing="0"
          style="background:#ffffff; padding:40px; border-radius:8px; box-shadow:0 4px 12px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td align="center" style="padding-bottom:20px;">
              <h2 style="margin:0; color:#000000; font-weight:600;">
                Account Deactivated
              </h2>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td align="center" style="color:#333333; font-size:14px; padding-bottom:30px;">
              Your account has been <b>successfully deactivated</b>.
              <br/><br/>
              You will no longer be able to access your account or its services.
            </td>
          </tr>

          <!-- Info Box -->
          <tr>
            <td align="center" style="padding-bottom:30px;">
              <div style="
                font-size:14px;
                color:#000000;
                border:2px dashed #000000;
                padding:15px 20px;
                display:inline-block;
              ">
                If this was not you, please contact support immediately.
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td align="center" style="font-size:12px; color:#777777;">
              We're sorry to see you go. If you wish to reactivate your account, please reach out to our support team.
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>

</body>
</html>
`;

  return emailTransporter.sendMail({
    from: `Tanti ${env.EMAIL}`,
    to: email,
    subject: 'Your Account Has Been Deactivated',
    html,
  });
};