import firstImage from '../assets/motionarteffect-img2.png';
import secondImage from '../assets/motionarteffect-img1.png';
import thirdImage from '../assets/motionarteffect-img3.png';
import starIcon from '../assets/motionarteffect-img4.png';

export interface RatingItem {
    firstImage: string;
    starIcon: string;
    rating: string;
}

export const ratingData: RatingItem[] = [
    {
        firstImage: firstImage,
        starIcon: starIcon,
        rating: "4.5 Score, 9 Reviews"
    },
    {
        firstImage: secondImage,
        starIcon: starIcon,
        rating: "4.5 Score, 9 Reviews"
    },
    {
        firstImage: thirdImage,
        starIcon: starIcon,
        rating: "4.5 Score, 9 Reviews"
    }
];
