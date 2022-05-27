import * as request from '~/util/request';

export const search = async (q, type = 'less') => {
    try {
        const res = await request.get(`users/search`, {
            params: {
                q: '',
                type,
            },
        });
        return res.data;
    } catch (error) {
        request.handleError(error);
    }
};
