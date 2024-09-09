export const formatVietnameseToString = (keyword) => {
    return keyword
        .toLowerCase()
        .normalize("NFD") // Chuẩn hóa chuỗi ký tự Unicode bằng cách tách các ký tự có dấu ra thành các ký tự gốc và dấu riêng biệt.
        .replace(/[\u0300-\u036f]/g, '') // Loại bỏ các ký tự dấu Unicode từ chuỗi
        .trim() // Loại bỏ khoảng trắng ở đầu và cuối chuỗi
        .split(" ")
        .join("-")
};