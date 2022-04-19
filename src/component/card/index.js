/* eslint-disable react/prop-types */
import React from "react";
import { ButtonCompo } from "../../components";
import { Div, Container } from "atomize";
import './index.css';

function CardTrackComp({ imgUrl, altImg, trackTitle, artistName, btnName, enableBtn, onClick }) {
  return (
    <Container className="cardTrack">
      <img src={imgUrl} alt={altImg} className="albumImages"/>
    <Container className="cardTrack" data-testid="card_track">
      <img src={imgUrl} alt={altImg} className="albumImages" data-testid="img_track"/>
      <Div className="trackInfoWrapper">
        <h2 className="TrackTitleText">{trackTitle}</h2>
        <p className="ArtistText">{artistName}</p>
        <h2 className="TrackTitleText" data-testid="title_track">{trackTitle}</h2>
        <p className="ArtistText" data-testid="artist_track">{artistName}</p>
        {enableBtn ? (
          <ButtonCompo className="SelectBtn" name={btnName} onClick={onClick} />
          <ButtonCompo data-testid="button_track" className="SelectBtn" name={btnName} onClick={onClick}/>
        ) : (
          <></>
        )}
      </Div>
    </Container>
  );
}
export default CardTrackComp;