import nodemailer from "nodemailer"

async function createTransporter(user){
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS,
        },
    })
    const message = await transporter.sendMail({
        from: "'Minga' <jdorozco94@gmail.com>",
        to: user.email,
        subject: "Verifying mail",
        html: 
        `<table align="center" border="0" cellpadding="0" cellspacing="0" class="m_-5401722008193577908deviceWidth" style="width:100%;min-width:100%" width="100%">
        <tbody><tr>
        <td align="center" bgcolor="#ffffff">
        
        
        
        <table border="0" cellpadding="0" cellspacing="0" class="m_-5401722008193577908deviceWidth" style="width:100%;max-width:600px" width="600">
        <tbody><tr>
        <td height="32" style="height:32px;min-height:32px;line-height:32px;font-size:1px">
        &nbsp;
        </td>
        </tr>
        
        <td height="32" style="height:32px;min-height:32px;line-height:32px;font-size:1px">
        &nbsp;
        </td>
        </tr>
        </tbody></table>
        
        
        
        
        <table border="0" cellpadding="0" cellspacing="0" class="m_-5401722008193577908deviceWidth" style="max-width:600px" width="100%">
        <tbody><tr>
        <td align="center" bgcolor="#ffffff">
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tbody><tr>
        <td valign="top">
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
        <tbody><tr>
        <td style="width:13%;min-width:40px" width="13%">&nbsp;</td>
        <td align="center">
        <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%">
        
        <tbody><tr>
        <td align="center" style="padding-top:16px">
        
        
        
        </td>
        </tr>
        
        <tr>
        <td align="center" style="padding-top:16px">
        <h1 class="m_-5401722008193577908f48" style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:28px;line-height:38px;font-weight:bold;color:#4b4b4b">
        Verify your email
        
        </h1>
        
        </td>
        </tr>
        
        <tr>
        <td align="center" style="padding-top:16px">
        <p style="font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:26px;font-weight:normal;color:#777777;max-width:380px;text-align:center">
        ¡Thank you for helping us make your account more secure! Click the button below to finish verifying your email.
        
        
        </p>
        
        </td>
        </tr>
        
        <tr>
        <td align="center" style="padding-top:16px">
        <div>
        
        
        <table border="0" cellpadding="0" cellspacing="0" style="width:215px;border-spacing:0;border-collapse:collapse" width="215">
        <tbody><tr>
        <td align="center" height="43" style="border-collapse:collapse;background-color:#FF5722;border-radius:9px;white-space:nowrap">
        <a href='http://localhost:8000/auth/verify/?verify_code=${user.verify_code}' style="display:inline-block;width:100%;font-family:Arial,Helvetica,sans-serif;font-size:16px;font-weight:bold;line-height:19px;color:#ffffff;text-align:center;text-decoration:none;background-color:#FF5722;border-radius:14px;border-top:12px solid #FF5722;border-bottom:12px solid #FF5722;text-transform:uppercase" target="_blank" data-saferedirecturl="    ">
        &nbsp;&nbsp;CONFIRM EMAIL
        &nbsp;&nbsp;
        </a>
        </td>
        </tr>
        </tbody></table>
        
        
        </div>
        
        </td>
        </tr>
        
        <tr>
        <td align="center" style="padding-top:16px">
        <p style="font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:26px;font-weight:normal;color:#777777;max-width:380px;text-align:center">
        ¿Didn't create an account? Contact us to remove this email address.
        
        
        </p>
        
        </td>
        </tr>
        
        `
        
    });
}
    
export default createTransporter