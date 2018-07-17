import express from 'express';
import authRoutes from './auth/routes';
import apiRoutes from './api/routes';
import appRoutes from './app/routes';

const app = express();
const port = process.env.PORT || 3001;

// add routes
app.use('/auth', authRoutes());
app.use('/api', apiRoutes());
app.use('/app', appRoutes());
app.use(express.static('public'));

app.listen(port, () => console.log(`Listening on port ${port}`));
