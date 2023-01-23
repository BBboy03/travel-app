import React, { useEffect, useState} from 'react';
import { Helmet } from "react-helmet";
import Header from './screens/Header';
import axios from "axios";
import styled from "styled-components";
import { useParams } from  "react-router-dom";


 function Place() {
    const [place, setplace] = useState({name: "", gallery: []});
    const { id } = useParams();

    useEffect(() => {
       axios 
        .get(`https://traveller.talrop.works/api/v1/places/view/${id}`)
        .then((response) => {
            setplace(response.data.data);
        })
        .catch((error) => {
            console.log(error);
        });

    },  [id]);


  return (
    <>
        <Helmet>
            <title>{Place.name} || Travel Guide</title>
        </Helmet>
            <Header />
            <SectionMain>
                <MainContainer>
                    <Title>{place.name}</Title>
                    <InfoContainer>
                        <CategoryName>{place.category_name}</CategoryName>
                        <LocationContainer>
                            <LocationIcon
                                src={
                                    require("../assets/images/place.svg").default
                                }
                                alt="Image"
                            />
                            <LocationName>{place.location}</LocationName>
                        </LocationContainer>
                    </InfoContainer>
                    <GalleryContainer>
                        <GalleryImageItem>
                            <GalleryImage src={place.image} alt="Image" />
                        </GalleryImageItem>


                        {place.gallery.map((image) =>(
                            <GalleryImageItem>
                                <GalleryImage src={image.image} alt="" />
                            </GalleryImageItem>
                        ))}
                    </GalleryContainer>
                    <SubHeading>Place Details</SubHeading>
                    <Description>{place.description}</Description>
                </MainContainer>
            </SectionMain>
    </>
  );
}

const SectionMain = styled.section`
    padding: 120px;
`;
const MainContainer = styled.div``;
const Title = styled.h1`
    font-size: 48px;
    margin-bottom: 15px;
`;
const InfoContainer = styled.div`
    display: flex;
    margin-bottom: 15px;
`;
const CategoryName = styled.span`
    padding: 5px 10px;
    border-radius: 20px;
    display: inline-block;
    border: 1px solid #9c9c9c;
    color: #9c9c9c;
    margin-right: 15px;
`;
const LocationContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const LocationIcon = styled.img`
    margin-right: 5px;
`;
const LocationName = styled.span`
    color: #9c9c9c;
    font-weight: bold;
    font-size: 14px;
`;
const GalleryContainer = styled.ul`
    display: grid;
    grid-templete-columns: repeat(4, 1fr);
    grid-gap: 20px;
    overflow: hidden;
    margin-bottom: 35px;
`;
const GalleryImageItem = styled.li`
    &:first-child{
        grid-column-end: span 2;
        grid-row-end: span2;
        height; 300px;
    }
    height: 140px;
`;
const GalleryImage = styled.img`
    height: 100%;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    width: 100%;
    display: block;
`;
const SubHeading = styled.h3`
    font-size: 28px;
    margin-bottom: 20px
`;
const Description = styled.p`
    font-size: 16px;
    line-height: 1.6em;
`;

export default Place;
