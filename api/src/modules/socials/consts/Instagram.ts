type Instagram = {
    id: string;
    commentCount: number;
    likeCount: number;
    imageUrl: string;
    createdAt: Date;
    caption: string;
    width: number;
    height: number;
    accessibilityCaption: string;
    user: {
        id: string;
        username: string;
        fullName: string;
        profilePicture: string;
        isVerified: boolean;
    };
    location: {
        name: string;
        lng: number;
        lat: number;
    };
    comments: {
        id: string;
        text: string;
        likeCount: number;
        createdAt: Date;
        user: {
            id: string;
            username: string;
            fullName: string;
            profilePicture: string;
            isVerified: boolean;
        };
    }[];
    likes: {
        id: string;
        username: string;
        fullName: string;
        profilePicture: string;
        isVerified: boolean;
        createdAt: Date;
    }[];
};

export default Instagram;
