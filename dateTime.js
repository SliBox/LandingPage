function getCurrentTimeInGMT7() {
    // Tạo đối tượng Date cho thời gian hiện tại
    const now = new Date();
		const options = { timeZone: 'Asia/Bangkok', timeZoneName: 'short' };
		const localDate = now.toLocaleString('en-US', options);

    return localDate
}

export default {
    getCurrentTimeInGMT7
}