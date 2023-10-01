import api from './api';

class Auth {
    static isAuth = false;

    static async initialize() {
        const localUsername = localStorage.getItem('username');

        if (localUsername) {
            try {
                const result = await api.post('/users/getTokenAndRole', { username: localUsername });
                console.log('Authentication result:', result);

                if (result.data.token && result.data.role) {
                    localStorage.setItem('token', result.data.token);
                    localStorage.setItem('role', result.data.role);
                    console.log('verified');
                    this.isAuth = true;
                } else {
                    this.isAuth = false;
                    console.error('Token or role not found in API response.');
                }
            } catch (err) {
                this.isAuth = false;
                console.error('Error during authentication:', err.response?.data?.message || err.message);
            }
        }
        else{
            this.isAuth = false;
        }
    }

    static isAuthenticated() {
        if(localStorage.getItem('role'))
            this.isAuth = true
        else   this.isAuth = false
        return this.isAuth;
    }

    static authenticate(token, role, username) {
        localStorage.setItem('token', token);
        localStorage.setItem('role', role);
        localStorage.setItem('username', username);
        this.isAuth = true;
    }

    static deAuthenticate() {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        localStorage.removeItem('username');
        this.isAuth = false;
    }
}

export default Auth;
