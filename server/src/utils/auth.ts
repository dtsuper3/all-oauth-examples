import axios from "axios"
import config from "../constants";

async function getGoogleToken(code: string) {
    const GOOGLE_OAUTH2_TOKEN_URL = 'https://oauth2.googleapis.com/token';

    const formData = {
        code,
        grant_type: 'authorization_code',
        client_id: config.GOOGLE_APP_ID,
        client_secret: config.GOOGLE_SECRET,
        redirect_uri: "http://localhost:3000",
    };

    const data = await axios({
        method: "POST",
        url: GOOGLE_OAUTH2_TOKEN_URL,
        data: formData,
    });
    return data.data;
}

export {
    getGoogleToken
}