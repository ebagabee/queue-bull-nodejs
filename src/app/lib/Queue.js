import Queue from 'bull';
import redisConfig from '../../config/redis.js';

import RegistrationMail from '../jobs/RegistrationMail.js';

const mailQueue = new Queue(RegistrationMail.key, redisConfig);

export default mailQueue;
