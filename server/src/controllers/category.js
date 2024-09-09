import * as categoryServices from '../services/category'

export const getCategoriesController = async (req, res) => {
    try {
        const response = await categoryServices.getCategoriesService()
        return res.status(200).json(response)
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Error at category controller:' + error
        })
    }
}