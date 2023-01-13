

import { useCallback } from 'react'

function FacebookAuth() {
    const redirect = useCallback(() => {
        const fb_auth_token_endpoint = 'https://www.facebook.com/v15.0/dialog/oauth';
        const query_params = {
            client_id: process.env.REACT_APP_FB_APP_ID,
            redirect_uri: `http://localhost:3000`,
        };
        const auth_token_params = {
            ...query_params,
            state: "{st=state123abc,ds=123456789}"
        };
        const qp = new URLSearchParams(auth_token_params as any).toString()
        const request_get_auth_code_url = `${fb_auth_token_endpoint}?${qp}`;
        window.location.href = request_get_auth_code_url;
    }, []);

    return (
        <button onClick={redirect}>Facebook Auth</button>
    )
}

export default FacebookAuth