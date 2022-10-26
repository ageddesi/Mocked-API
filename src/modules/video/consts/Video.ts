/**
 * @openapi
 * definitions:
 *   MockVideo:
 *     type: object
 *     properties:
 *        title:
 *          type: string
 *        description:
 *          type: string
 *        date:
 *          type: string
 *        author:
 *          type: string
 *        views:
 *          type: number
 *        likes:
 *          type: number
 *        dislikes:
 *          type: number
 *        runtimeSeconds:
 *          type: number
 *        maxQuality:
 *          type: string
 */
type Video = {
    title: string;
    description: string;
    date: Date;
    author: string;
    views: number;
    likes: number;
    dislikes: number;
    runtimeSeconds: number;
    maxQuality: string;
};

export default Video;
