import React, { useEffect } from "react";
import { useState } from "react";
import {Helmet} from "react-helmet";
import { Link } from "react-router-dom";
import Header from './screens/Header';
import styled from "styled-components";
import axios from "axios";


function Places () {
    const [place, setplace] = useState([]);
    useEffect(() => {
        axios
            .get("https://traveller.talrop.works/api/v1/places/")
            .then((response) => {
                setplace(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const renderPlaces = () => {
        return place.map((place) => {
            return (
                <PlaceCard key={place.id}>
                <PlaceCardLink to={`/place/${place.id}`}>
                    <ImageContainer>
                        <PlaceImage src={place.image} alt="Image" ></PlaceImage>
                    </ImageContainer>
                    <PlaceTitle>{place.name}</PlaceTitle>
                    <Location>
                        <LocationIcon 
                            src={
                                require("../assets/images/place.svg").default }
                        />
                        <LocationName>{place.location}</LocationName>
                    </Location>
                </PlaceCardLink>
            </PlaceCard>
            );
        });
    }


  return (
    <>
        <Helmet>
            <title>{`Places || Travel Guide`}</title>
        </Helmet>
        <Header />
        <Spotlight>
            <Wrapper className="wrapper">
                <TopContainer>
                    <Heading>Welcome John Doe</Heading>
                    <Paragraph>Explore the world around you</Paragraph>
                    <PlacesContainer>{renderPlaces()}</PlacesContainer>
                </TopContainer>
            </Wrapper>
        </Spotlight>    
    </>
  );
}
export default Places;

const Spotlight = styled.section`
    width:90%;
    margin: 100px auto 0;
`;
const Wrapper = styled.div``;
const TopContainer = styled.div``;
const Heading = styled.h1`
   font-weight: 600;
   margin-bottom: 15px;
`;
const Paragraph = styled.p`
    margin-bottom: 25px;
    color: #dfdfe2;
`;
const PlacesContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
   justify-content: space-between;
//    width: 90%;
    margin: 50px auto 0;
`;
const PlaceCard = styled.li`
//    cursor: pointer;
//    display:inline-block;
   width: 23.5%;
   margin-right: 2%;
   margin-bottom: 15px;
   &:nth-child(4n) {
    margin-right: 0;
   }
   
`;
const PlaceCardLink = styled(Link)`
   display: block;
   appearance: none;
`;
const ImageContainer = styled.div`
    display: inline-block;
    margin-bottom: 5px;
`;
const PlaceImage  = styled.img`
    height: 100%;
    width: 100%;
    border-top-left-radius: 8px;
    display: block;
    border-top-right-radius: 8px;
`;
const PlaceTitle = styled.h3`
    margin-bottom: 5px;
    font-weight: 600;
    font-size: 16px;
`;
const Location = styled.div`
    display: flex;
    height: 20px;
`;
const LocationIcon = styled.img`
    width: 5%;
    height: 75%;
    margin-top: 2px;
   
`;
const LocationName = styled.span`
    font-size: 14px;
    margin-left: 5px;
`;



