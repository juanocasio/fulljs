const env = process.env;

export const nodeENV = env.nodeENV || 'development';

export default {
    port: env.PORT || 8080
};