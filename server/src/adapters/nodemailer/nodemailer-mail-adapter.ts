import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from '../mail-adapter';

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "273ff71c7c169f",
    pass: "1e3bf092ea5333"
  }
});


export class NodemailerMailAdapter implements MailAdapter {
  async sendMain({ subject, body }: SendMailData): Promise<void> {
    await transport.sendMail({
      from: 'Feedback <fb@feedbk.com>',
      to: 'John Doe <john.doe@feedbk.com>',
      subject,
      html: body,
    });
  }
}
