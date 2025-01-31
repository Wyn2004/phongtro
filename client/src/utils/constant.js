export const path = {
    HOME: '/*',
    LOGIN: 'login',
    // home page là biến đổi động có param là page
    HOME__PAGE: ':page',
    CHO_THUE_CAN_HO: 'cho-thue-can-ho',
    CHO_THUE_MAT_BANG: 'cho-thue-mat-bang',
    NHA_CHO_THUE: 'nha-cho-thue',
    CHO_THUE_PHONG_TRO: 'cho-thue-phong-tro',
    // home page là biến đổi động có param là title va postid
    DETAIL_POST__TITLE__POSTID: 'chi-tiet/:title/:postid'
}

export const text = {
    HOME_TITLE: 'Tìm kiếm chỗ thuê ưng ý',
    HOME_DESCRIPTION: 'Kênh thông tin Phòng trọ số 1 Việt Nam - Website đăng tin cho thuê phòng trọ, nhà nguyên căn, căn hộ, ở ghép nhanh, hiệu quả với 100.000+ tin đăng và 2.500.000 lượt xem mỗi tháng.'
}

export const location = [
    {
        id: 'hcm',
        name: 'Phòng trọ Hồ Chí Minh',
        image: 'https://phongtro123.com/images/location_hcm.jpg'
    },
    {
        id: 'hn',
        name: 'Phòng trọ Hà Nội',
        image: 'https://phongtro123.com/images/location_hn.jpg'
    },
    {
        id: 'dn',
        name: 'Phòng trọ Đà Nẵng',
        image: 'https://phongtro123.com/images/location_dn.jpg'
    }
]
