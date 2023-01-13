import React, { useCallback } from 'react'

function GoogleAuth() {
    const redirect = useCallback(() => {
        const google_auth_token_endpoint = 'https://accounts.google.com/o/oauth2/v2/auth';
        const query_params = {
            client_id: process.env.REACT_APP_GOOGLE_APP_ID,
            redirect_uri: `http://localhost:3000`,
        };
        // this objects contains information that will be passed as query params to the auth // token endpoint
        const auth_token_params = {
            ...query_params,
            response_type: 'code',
        };
        // the scopes (portion of user's data) we want to access
        const scopes = ['profile', 'email', 'openid'];
        // a url formed with the auth token endpoint and the
        const request_get_auth_code_url = `${google_auth_token_endpoint}?${new URLSearchParams(auth_token_params as any).toString()}&scope=${scopes.join(' ')}`;
        // console.log(request_get_auth_code_url)
        window.location.href = request_get_auth_code_url;
    }, []);

    return (
        <button onClick={redirect}>GoogleAuth</button>
    )
}

export default GoogleAuth