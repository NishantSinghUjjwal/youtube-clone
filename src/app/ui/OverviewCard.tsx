import { Channel } from '@/api/apis';
import { formatViews, getTimeAgo } from '@/functions/functions';
import Image from 'next/image';
import React from 'react'
export interface YouTubeVideo {
    kind: string;
    etag: string;
    id: string;
    snippet: {
        publishedAt: string;
        channelId: string;
        title: string;
        description: string;
        thumbnails: {
            default: Thumbnail;
            medium: Thumbnail;
            high: Thumbnail;
            standard?: Thumbnail;
            maxres?: Thumbnail;
        };
        channelTitle: string;
        tags?: string[];
        categoryId?: string;
        liveBroadcastContent: string;
        localized: {
            title: string;
            description: string;
        };
        defaultAudioLanguage?: string;
        defaultLanguage?: string;
        channelDetails:Channel
    };
    contentDetails?: {
        duration: string;
        dimension: string;
        definition: string;
        caption: string;
        licensedContent: boolean;
        contentRating: {};
        projection: string;
    };
    statistics?: {
        viewCount: string;
        likeCount: string;
        dislikeCount: string;
        favoriteCount: string;
        commentCount: string;
    };
    player?: {
        embedHtml: string;
    };
    status?: {
        uploadStatus: string;
        failureReason: string;
        rejectionReason: string;
        privacyStatus: string;
        license: string;
        embeddable: boolean;
        publicStatsViewable: boolean;
        madeForKids: boolean;
        selfDeclaredMadeForKids: boolean;
    };
    topicDetails?: {
        topicIds: string[];
        relevantTopicIds: string[];
    };
}

export interface Thumbnail {
    url: string;
    width: number;
    height: number;
}

const OverviewCard = ({ video }: { video: YouTubeVideo }) => {
    const { url, height, width } = video.snippet.thumbnails.high
    const {high}= video.snippet.channelDetails.snippet.thumbnails
    return (
        <div className='w-[340px]'>
            <div className='w-full h-48 rounded-xl overflow-hidden'>
                <Image src={url} width={width} height={height} alt='thumbnail' className='w-full h-full object-cover'/>
            </div>
            <div className=' flex py-4'>
                {/* profile pic */}
                <div className='w-[35px] rounded-full overflow-hidden h-[35px] mr-3'>
                    <Image src={high.url} height={high.height} width={high.width} alt='profile pic of channel'/>
                </div>
                {/* info */}
                <div>
                    <div className=' font-semibold text-base'>{video.snippet.title}</div>
                    <div className=' text-gray-600 text-sm mt-2'>{video.snippet.channelTitle}</div>
                    <div className=' text-gray-600 text-sm flex gap-1'>
                        <div>{formatViews(Number(video.statistics?.viewCount))} views</div>
                        •
                        <div  className=''>{getTimeAgo(video.snippet.publishedAt)}</div >
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OverviewCard