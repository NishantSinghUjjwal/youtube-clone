import { Thumbnail, YouTubeVideo } from "@/app/ui/OverviewCard"
interface ChannelResponse {
    kind: string;
    etag: string;
    pageInfo: {
        totalResults: number;
        resultsPerPage: number;
    };
    items: Channel[];
}

export interface Channel {
    kind: string;
    etag: string;
    id: string;
    snippet: {
        title: string;
        description: string;
        publishedAt: string;
        thumbnails: {
            default: Thumbnail;
            medium: Thumbnail;
            high: Thumbnail;
        };
        localized: {
            title: string;
            description: string;
        };
        country: string;
    };
    contentDetails: {
        relatedPlaylists: {
            likes: string;
            favorites: string;
            uploads: string;
        };
    };
    statistics: {
        viewCount: string;
        subscriberCount: string;
        hiddenSubscriberCount: boolean;
        videoCount: string;
    };
    status: {
        privacyStatus: string;
        isLinked: boolean;
        longUploadsStatus: string;
        madeForKids: boolean;
        selfDeclaredMadeForKids: boolean;
    };
}
export const fetchVideos = async () => {
    try {
        const res = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&maxResults=25&key=${process.env.YOUTUBE_KEY}`)
        const videos = await res.json()
        videos.items =await Promise.all(videos.items.map((video: YouTubeVideo) => {
            const channelId = video.snippet.channelId
            return new Promise(async (resolve, reject) => {
                const res = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${process.env.YOUTUBE_KEY}`)
                const channel = await res.json();
                console.log("channel", channel.items[0].snippet)
                video.snippet.channelDetails = channel.items[0]
                resolve(video)
            })
        }))
        return videos.items
    } catch (err) {
        console.log("err", err)
    }
}

export const fetchChannel = async (channelId: string) => {
    try {
        const res = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?id=${channelId}&key=${process.env.YOUTUBE_KEY}`)
        const channel = await res.json()
    } catch (err) {
        console.log("err", err)
    }
}