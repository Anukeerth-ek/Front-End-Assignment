import firstImage from '../assets/motionarteffect-img2.png';
import secondImage from '../assets/motionarteffect-img1.png';
import thirdImage from '../assets/motionarteffect-img3.png';
import starIcon from '../assets/motionarteffect-img4.png';

import imageOne from '../assets/motionarteffect-img9.png'
import imageTwo from '../assets/motionarteffect-img6.png'
import imageThird from '../assets/motionarteffect-img7.png'

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

export interface footerData {
    image: string,
    title: string,
    content: string

}

export const footerItems:footerData[] = [
    {
        image: imageOne,
        title: "Light Weight",
        content: "Motion Art for Elementor is designed to be lightweight."
    },
    {
        image: imageTwo,
        title: "100% Responsive",
        content: "Create a consistent visual experience across all devices."
    },
    {
        image: imageThird,
        title: "User Friendly Interface",
        content: "Ensure a smooth experience for both applicants and administrators."
    },
]