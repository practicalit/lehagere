import axios from 'axios';
import MemberRole from '../core/member-role';

/**
 * Member related services 
 * 
 * @author Kaleb W. <kaleb@thepracticalit.com>
 */

class MemberService {

    /**
     * Check if the member has logged in by checking the existence of 
     * token in the cache
     */
    memberHasLogged() {
        let loggedUser = this.getLoggedUser();
        return loggedUser !== null && loggedUser !== undefined;
    }

    /**
     * Regsiter brand new user
     * @param {*} user 
     */
    register = async (user) => {
        let response = {
            success: false,
            data: null,
            message: "Successfully registered."
        }
        if (user && user.firstName && 
            user.email && user.password) {
            try {
                user.title = 'UNKNOWN';
                user.confirmPassword = user.password;
                let api = `${process.env.REACT_APP_SERVICE_URL}${process.env.REACT_APP_REGISTER}`;
                let userAdded = await axios.post(api, user);
                response.success = true;
                response.data = userAdded.data;
            } catch (error) {
                console.log(error);
                response.message = "User Already Exists";
            }
        } else {
            response.message = "All fields are required.";
        }
        return response;
    }

    /**
     * Update existing user
     * @param {*} user 
     */
    update = async (user) => {
        let response = {
            success: false,
            data: null,
            message: "Successfully Updated."
        }
        if (user && user.firstName && 
            user.email) {
            try {
                let api = `${process.env.REACT_APP_SERVICE_URL}${process.env.REACT_APP_ACCOUNT}/${this.getLoggedUser().id}`;
                let header = { headers: {"Authorization" : `Bearer ${this.getLoggedUser().jwtToken}`} };
                let userUpdated = await axios.put(api, user, header);
                response.success = true;
                response.data = userUpdated.data;
                this.cacheUser(response.data);
            } catch (error) {
                console.log(error);
                response.message = "Update error.";
            }
        } else {
            response.message = "All fields are required.";
        }
        return response;
    }    

    /**
     * Get the role of the currently logged user
     * @param - none
     * @return - string - role of the current user.
     */
    getRole = () => {
        let loggedUser = this.getLoggedUser();
        if (loggedUser) {
            return loggedUser.role;
        }
        return null;
    }

    /**
     * is member admin
     * 
     * @param - null
     * @return true if member is adming false otherwise.
     */
    isMemberAdmin = () => {
        return this.getRole() != null && 
        this.getRole() === MemberRole.ADMIN
        ? true
        : false;
    }

    /**
     * Login member accepting the email and password
     * 
     * @param email
     * @param password
     */
    login = async (email, password) => {
        let response = {
            success: false,
            data: null,
            message: ""
        }
        if (email && password) {
            try {
            let api = `${process.env.REACT_APP_SERVICE_URL}${process.env.REACT_APP_LOGIN}`;
            let user = await axios.post(api, {
                email, password
            });
            if (user) {
                response.success = true;
                response.data = user.data;
                response.message = "Successfully authenticated"
                this.cacheUser(user.data);
            }
        } catch(err) {
            //handle the error here.
            response.message = "Username/password incorrect";
        }
        }
        return response;
    }

    logout = () => {
        this.removeuser();
    }

    /**
     * Once the user logged in, make sure to have the storage locally.
     * 
     * @param {object} user 
     */
    cacheUser = (user) => {
        localStorage.setItem('loggedUser', JSON.stringify(user));
    }

    removeuser = () => {
        localStorage.removeItem('loggedUser');
    }

    getLoggedUser = () => {
        const loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
        if (!loggedUser || Object.keys(loggedUser).length === 0) {
            return null;
        }
        return loggedUser;
    }
}

const memberService = new MemberService();

export default memberService;