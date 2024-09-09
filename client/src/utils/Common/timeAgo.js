export const timeAgo = (timestamp) => {

    const now = new Date();
    const updatedTime = new Date(timestamp);
    const diff = now - updatedTime; // chênh lệch thời gian tính bằng mili giây
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) return `${days} ngày trước`; // Hiện ngày nếu lớn hơn 24 giờ
    return `${hours} giờ trước`; // Hiện giờ nếu nhỏ hơn hoặc bằng 24 giờ
}