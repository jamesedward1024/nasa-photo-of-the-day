import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ImageStyle = styled.img`
    width: 50%;
`;

const Container = styled.div`
    display: flex;
	justify-content: space-between;
	margin: 50px;
`;

const ImgInfo = styled.div`
	width: 46%;
	text-align: start;
	line-height: 2rem;
`;

const ImageCard = () => {
    let dateObj = new Date();
    let month = dateObj.getUTCMonth() + 1;
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();

    let newDate = `${year}-${month}-${day}`;
    console.log('current day', newDate);

    const [image, setImage] = useState([]);
    const date = useState(newDate);

    useEffect(
        () => {
            axios
                .get(
                    `https://api.nasa.gov/planetary/apod?api_key=Sjwxt8chOtusvCtrqfGowNMDmHrvMxQcDmDnjt47`
                )
                .then((response) => {
                    const imageInfo = response.data;
                    setImage(imageInfo);
                })
                .catch((error) => {
                    console.log('the data was not displayed', error);
                });
        },
        [date]
    );

    return (
        <Container>
            <ImageStyle className="image" src={image.url} />
            <ImgInfo className="image-info">
                <h2>Title: {image.title}</h2>
                <h3>Credit: {image.copyright}</h3>
                <p>About this image: {image.explanation}</p>

            </ImgInfo>
        </Container>
    );
};

export default ImageCard;