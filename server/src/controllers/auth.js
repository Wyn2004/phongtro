import * as authServices from '../services/auth'

export const register = async (req, res) => { 
    const { name, phone, password } = req.body
    try {
        if (!name || !phone || !password) 
            return res.status(400).json({
                err: -1,
                msg: 'Missing input!!!'
            })
        const response = await authServices.registerServices(req.body)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail as controller' + error
        })
    }
}

export const login = async (req, res) => { 
    const { name, phone, password } = req.body
    try {
        if (!phone || !password) 
            return res.status(400).json({
                err: -1,
                msg: 'Missing input!!!'
            })
        const response = await authServices.loginServices(req.body)
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Fail as controller ' + error
        })
    }
}