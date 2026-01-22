const nodemailer = require("nodemailer");

module.exports = function sendEmail(email, orderId, token, license) {
    const transporter = nodemailer.createTransport({
        host: "smtp.resend.com",
        port: 587,
        auth: {
            user: "resend",
            pass: process.env.RESEND_API_KEY
        }
    });

    transporter.sendEmail({
        from: "LushLayout <no-reply@lushlayout>",
        to: email,
        subject: `Your Download-Order ${orderId}`,
        html: `
        <p>ขอบคุณที่สั่งซื้อจาก <b>LushLayout</b></p>
        <p>License: ${license}</p>
        <a href="https://your-app.onrender.com/download?token=${token}">
        ดาวน์โหลดไฟล์
        </a>
        <p>ลิงค์หมดอายุ 24 ชม. / ดาวน์โหลดได้ 2 ครั้ง</p>
        `
    });
};