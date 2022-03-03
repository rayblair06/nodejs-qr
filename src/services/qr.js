// import {QRCode as QRCodeManager} from 'qrcode-svg';
const QRCodeManager = require('easyqrcodejs-nodejs');


export const createStream = async (options) => {
    const qrcode = new QRCodeManager({
        text: options.text,
        quietZone: options.padding,
        width: options.width,
        height: options.height,
        colorDark: options.color,
        colorLight: options.background,
        format: options.format,
        correctLevel: QRCodeManager.CorrectLevel.H
    });

    return await qrcode.toStream();
};
