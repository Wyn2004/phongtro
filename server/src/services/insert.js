import db from '../models'
import bcrypt, { hash } from 'bcryptjs'
import { v4 } from 'uuid' 
import chothuecanho from '../../data/chothuecanho.json'
import chothuematbang from '../../data/chothuematbang.json'
import nhachothue from '../../data/nhachothue.json'
import chothuephongtro from '../../data/chothuephongtro.json'

import generateCode from '../../utils/generateId'
require('dotenv').config()

const hashPassword = password => bcrypt.hashSync(password, bcrypt.genSaltSync(12))
const dataBody = chothuephongtro.body
// thay cái import trên để import data và cái categoryCode ở dưới

/// data khac nhau cho overview, nho check lai

export const insertService = () => new Promise( async (resolve, reject) => {
    try {
        dataBody.forEach(async (item) => {
            let postId = v4()
            let label = generateCode(item?.overview?.content.find(i => i.name === 'Chuyên mục:')?.content)
            let attributesID = v4()
            let userID = v4()
            let overviewID = v4()
            let imageID = v4()

            await db.Post.create({
                id: postId,
                title: item?.header?.title,
                star: item?.header?.star,
                labelCode: label,
                address: item?.header?.address,
                attributesID,
                categoryCode: 'CTPT',
                description: JSON.stringify(item?.mainContent.content),
                userID,
                overviewID,
                imageID
            })

            await db.Attribute.create({
                id: attributesID,
                price: item?.header?.attribute?.price,
                acreage: item?.header?.attribute?.acreage,
                published: item?.header?.attribute?.published,
                hashtag: item?.header?.attribute?.hashtag
            })
            
            await db.Overview.create({
                id: overviewID ,
                code: item?.overview?.content.find(i => i.name === 'Mã tin:')?.content,
                area: item?.overview?.content.find(i => i.name === 'Khu vực')?.content,
                type: item?.overview?.content.find(i => i.name === 'Loại tin rao:')?.content,
                target: item?.overview?.content.find(i => i.name === 'Đối tượng thuê:')?.content,
                bonus: item?.overview?.content.find(i => i.name === 'Gói tin:')?.content,
                created: item?.overview?.content.find(i => i.name === 'Ngày đăng:')?.content,
                expire: item?.overview?.content.find(i => i.name === 'Ngày hết hạn:')?.content
            })
            
            await db.Label.findOrCreate({
                where: { code: label },
                defaults: {
                    code: label,
                    value: item?.overview?.content.find(i => i.name === 'Chuyên mục:')?.content
                }
            })

            await db.User.create({
                id: userID,
                name: item?.contact?.content.find(i => i.name === 'Liên hệ:')?.content,
                password: hashPassword('123456'),
                phone: item?.contact?.content.find(i => i.name === 'Điện thoại:')?.content,
                zalo: item?.contact?.content.find(i => i.name === 'Zalo')?.content
            })

            await db.Image.create({
                id: imageID,
                image: JSON.stringify(item?.images)
            })


            resolve('Done.')

        })
    } catch (error) {
        reject(error)
    }
})