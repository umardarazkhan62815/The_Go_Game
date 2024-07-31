import User from '../../models/user.model.js';
import { StatusCodes } from 'http-status-codes';
import userService  from '../../services/user.service.js';
import { getJWTToken } from '../../lib/utils.js'
import { makeApiResponse } from '../../lib/response.js';

export default {

    login: async (req, res) => {
        const { email, password } = req.body;

        try {
            let  message = ""
            const user = await User.findOne({ email });

            if (!user || !(await user.matchPassword(password))) {
                message = 'Invalid email or password'
                return res.status(StatusCodes.UNAUTHORIZED).json({ message });
            }

            // Create a payload object to pass to getJWTToken
            const payload = {
                id: user._id,
                email: user.email,
            };

            // Generate the token
            const token = await getJWTToken(payload);
            const data = {
                "token": token,
                "detail" : user
            }

            // RESPOND WITH SUCCESS
            message = 'successfully login';
            let result = makeApiResponse(message, 1, StatusCodes.OK, data);
            res.status(StatusCodes.OK).json(result);
        } catch (error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Server error' });
        }
    },
    
    signup: async (req, res) => {
        try {
            // VALIDATE THE REQUEST
            const { error, value } = userService.validateSignupData(req.body);
            if (error) {
                let result = makeApiResponse(error.message, 0, StatusCodes.BAD_REQUEST);
                return res.status(StatusCodes.BAD_REQUEST).json(result);
            }
    
            // DESSTRUCTURE VALIDATED DATA
            const {
                first_name,
                last_name,
                email,
                password
            } = req.body;
    
            // CHECK IF USER ALREADY EXISTS
            let message = '';
            let user = await User.findOne({ email });
            if (user) {
                message = 'User already save in DB.';
                let result = makeApiResponse(message, 0, StatusCodes.BAD_REQUEST);
                return res.status(StatusCodes.BAD_REQUEST).json(result);
            } else {
                // CREATE NEW USER
                user = new User({
                    first_name,
                    last_name,
                    email,
                    password
                });
    
                // SAVE USER TO DATABASE
                await user.save();
                message = 'User has been created successfully.';
            }
    
            // RESPOND WITH SUCCESS
            let result = makeApiResponse(message, 1, StatusCodes.OK, user);
    
            res.status(StatusCodes.OK).json(result);
    
        } catch (error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message });
        }
    },    

    getProfile: async (req, res) => {
        try {
            let message = "";
            const user = await User.findById(req.userId).select('-password, -createdAt, -updatedAt');
            if (!user) {
                message = 'User not found';
                return res.status(StatusCodes.NOT_FOUND).json({ message });
            }
            message = 'Successfully';
            let result = makeApiResponse(message, 1, StatusCodes.OK, user);
            res.status(StatusCodes.OK).json(result);
        } catch (error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Server error' });
        }
    },

    getAllUser: async (req, res) => {
        try {
            let message = "";
            const getUsers = await User.find().select('-password, -createdAt, -updatedAt');
            console.log(getUsers);
            if (!getUsers) {
                message = 'User not found';
                return res.status(StatusCodes.NOT_FOUND).json({ message });
            }
            
            message = 'Successfully';
            let result = makeApiResponse(message, 1, StatusCodes.OK, getUsers);
            res.status(StatusCodes.OK).json(result);
        } catch (error) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Server error' });
        }
    }
};
