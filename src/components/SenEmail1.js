export const HT =(name, tema)=> (
`<!DOCTYPE html>
<html lang="en" xmlns="https://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <meta name="x-apple-disable-message-reformatting">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap" rel="stylesheet">
    <title></title>
    <!--[if mso]>
    <noscript>
        <xml>
            <o:OfficeDocumentSettings>
                <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
    </noscript>
    <![endif]-->
    <style>
        table,
        td,
        div,
        h1,
        p {
            font-family: Syne, sans-serif;
        }
        tr:first-child td:first-child { border-bottom-left-radius: 20px; }
tr:first-child td:first-child { border-bottom-right-radius: 20px; }

    </style>
</head>

<body  style="margin:0;padding:0;">
    <table  role="presentation" style="margin: auto; border-collapse: separate;
    border-spacing: 0;  width:450px;text-align:left;">
            <tr style="width: 40px; height: 30px;"></tr>
            <tr style=" background-color: black;border: 1px solid black;overflow: hidden;perspective: 1px; border-radius: 20px;">
                <td align="center"
                    style="border-radius: 20px; margin: 0 auto; font-family: 'Syne', sans-serif; padding-top:80px;font-size:16px;font-weight:800;color:white;letter-spacing:3px;">
                    <div style="white-space: nowrap;
                    overflow-x: auto; margin: 0 auto;">
                        <img src="https://res.cloudinary.com/marcos020499/image/upload/v1654783360/Vector-11_xw5n4y.png"
                        style="display: inline-block; outline:none;border:none;text-decoration:none;padding-right:40px; width: 28px; height: 30px;" />
                        <h2 style="display: inline-block; text-align: center;">ALERTA</h2>
                    </div>
                    <p style="width: 340px; text-align: center; color: #E5E5E5; font-weight: 400;">${name}, es muy importante que revises ${tema}  antes de {fecha}.</p>
                    <button target="_blank"
                        style=" border: none; text-align: center; font-family: 'Syne', sans-serif;color:white;text-decoration:none;display:flex;justify-content:center;padding-bottom:13px;padding-top:13px;text-align:center;width:450px;font-weight:400;margin-top:60px;border-bottom-right-radius:16px;border-bottom-left-radius:16px;background-color:white;font-size:24px;letter-spacing:3px; position: relative; top: 2px;"><p style="text-align: center; margin: 0 auto;">Avanzar</p></button>
                </td>
            <tr>

        <tr>
            <td align="center" style="padding-top: 30px;opacity:1;z-index:3;">
                <img src="https://res.cloudinary.com/marcos020499/image/upload/v1654783360/EONgray_nxggkz.png"
                    style="margin-top: 60px;display:block;outline:none;border:none;text-decoration:none; width: 120px;" />
            </td>
        </tr>
        <tr>
            <td align="center" style="padding-top: 30px;opacity:1;z-index:3">
                <img src="https://res.cloudinary.com/marcos020499/image/upload/v1654783620/image_ppesqy.png"
                    style="margin-top: 60px;display:block;outline:none;border:none;text-decoration:none; width: 380px;" />
            </td>
        </tr>
    </table>
</body>

</html>`
)