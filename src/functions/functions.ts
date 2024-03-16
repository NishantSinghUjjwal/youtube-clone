export function getTimeAgo(publishedAt: string): string {
    const now = new Date();
    const publishedDate = new Date(publishedAt);
    const timeDiff = now.getTime() - publishedDate.getTime();

    // Convert milliseconds to seconds
    const seconds = Math.floor(timeDiff / 1000);

    // Convert seconds to minutes
    const minutes = Math.floor(seconds / 60);

    // Convert minutes to hours
    const hours = Math.floor(minutes / 60);

    // Convert hours to days
    const days = Math.floor(hours / 24);

    // Convert days to weeks
    const weeks = Math.floor(days / 7);

    if (weeks > 0) {
        return `${weeks} week${weeks > 1 ? 's' : ''} ago`;
    } else if (days > 0) {
        return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else {
        return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
    }
}

export function formatViews(views: number): string {
    if (views < 1000) {
        return views.toString(); // If views are less than 1000, just return the number
    } else if (views < 1e6) {
        // If views are in thousands, format them with K suffix
        return (views / 1e3).toFixed(1) + 'K';
    } else if (views < 1e9) {
        // If views are in millions, format them with M suffix
        return (views / 1e6).toFixed(1) + 'M';
    } else {
        // If views are in billions or more, format them with B suffix
        return (views / 1e9).toFixed(1) + 'B';
    }
}