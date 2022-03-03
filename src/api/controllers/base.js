import * as QRService from '../../services/qr';


const defineHeaderFromFormat = (format) => {
    let header;

    switch (format) {
        case 'jpg':
            header = 'image/jpeg';
            break;
        default:
            header = 'image/png';
            break;
    }

    return header;
};

export const index = async (request, response, next) => {
    const options = {
        text: request.query.text ?? 'test',
        padding: request.query.padding ?? 0,
        width: request.query.width ? parseInt(request.query.width, 10) : 256,
        height: request.query.height ? parseInt(request.query.height, 10) : 256,
        color: request.query.color ?? '#000',
        background: request.query.background ?? '#fff',
        format: request.query.format ?? 'png'
    };

    const stream = await QRService.createStream(options);

    // Set status and header
    response
        .status(200)
        .setHeader('Content-type', defineHeaderFromFormat(options.format));

    // pipe the contents of the PDF directly to the response
    stream
        .pipe(response)
        .on('end', () => {
            return response.end();
        });
};
