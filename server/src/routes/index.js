import authRouter from './auth'
import insertRouter from './insert'
import categoriesRouter from './category'
import postController from './post'

const initRoutes = (app) => {
    app.use('/api/v1/auth', authRouter)
    app.use('/api/v1/insert', insertRouter)
    app.use('/api/v1/category', categoriesRouter)
    app.use('/api/v1/post', postController)

    return app.use('/', (req, res) => {
        res.send('server on ...')
    })
}

export default initRoutes