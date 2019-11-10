
Name	Gussie Kessler
Username	gussie.kessler@ethereal.email (also works as a real inbound email address)
Password	hzneSBJ8EqNyP1X6qw





const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'gussie.kessler@ethereal.email',
        pass: 'hzneSBJ8EqNyP1X6qw'
    }
});
