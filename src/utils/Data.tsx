import firstImage from "../assets/motionarteffect-img2.png";
import secondImage from "../assets/motionarteffect-img1.png";
import thirdImage from "../assets/motionarteffect-img3.png";
import starIcon from "../assets/motionarteffect-img4.png";

import imageOne from "../assets/motionarteffect-img9.png";
import imageTwo from "../assets/motionarteffect-img6.png";
import imageThird from "../assets/motionarteffect-img7.png";

export interface RatingItem {
     firstImage: string;
     starIcon: string;
     rating: string;
     isPadding: boolean;
}

export const ratingData: RatingItem[] = [
     {
          firstImage: firstImage,
          starIcon: starIcon,
          rating: "4.5 Score, 9 Reviews",
          isPadding: false,
     },
     {
          firstImage: secondImage,
          starIcon: starIcon,
          rating: "4.5 Score, 9 Reviews",
          isPadding: true,
     },
     {
          firstImage: thirdImage,
          starIcon: starIcon,
          rating: "4.5 Score, 9 Reviews",
          isPadding: true,
     },
];

export interface articleData {
     image: string;
     title: string;
     content: string;
     isMargin: boolean;
}

export const articleItems: articleData[] = [
     {
          image: imageOne,
          title: "Light Weight",
          content: "Motion Art for Elementor is designed to be lightweight.",
          isMargin: false,
     },
     {
          image: imageTwo,
          title: "100% Responsive",
          content: "Create a consistent visual experience across all devices.",
          isMargin: true,
     },
     {
          image: imageThird,
          title: "User Friendly Interface",
          content: "Ensure a smooth experience for both applicants and administrators.",
          isMargin: true,
     },
];
