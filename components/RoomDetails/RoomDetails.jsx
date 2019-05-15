import React, { useState, useEffect } from 'react';
import { SingleDatePicker } from 'react-dates';
import { range } from 'lodash';

import withStyle from './withStyle';

const RoomDetails = ({ className, room }) => {
  const [startDate, changeStartDate] = useState(null);
  const [startDateFocused, changeStartDateFocused] = useState(null);
  const [endDate, changeEndDate] = useState(null);
  const [endDateFocused, changeEndDateFocused] = useState(null);
  useEffect(() => {
    document.title = room ? `${room.name}` : 'Airbnb';
  }, [room]);
  return (
    <div className={`${className}`}>
      <div className="left">
        <div className="room-details-header">
          <div className="room-name">
            <h2>{room && room.name}</h2>
          </div>
          <div className="avatar-box">
            {room && room.primary_host && (
              <img src={`${room.primary_host.picture_url}`} alt="" />
            )}
            <div className="user-name">
              {room && room.primary_host && room.primary_host.first_name}
            </div>
          </div>
        </div>
        <div className="room-details-body">
          <div className="room-type">
            <h3>{room && room.room_type}</h3>
            <span>{room && room.person_capacity} voyageurs</span>
            <span>{room && room.bedrooms} chambre</span>
            <span>{room && room.beds} lit</span>
            <span>{room && room.bathrooms} salle de bain</span>
          </div>
          <div className="host-type">
            <h3>
              {room && room.primary_host && room.primary_host.first_name}est un
              Superhost
            </h3>
            <p>
              Les Superhosts sont des hôtes expérimentés qui bénéficient de très
              bonnes évaluations et qui s'engagent à offrir d'excellents séjours
              aux voyageurs.
            </p>
          </div>
          <div className="room-description">
            <h3>Le logement</h3>
            <p>{room && room.description}</p>
          </div>
          <div className="room-links">
            <div className="link">Contacter l'hôte</div>
            <div className="link">Informations sur l'entreprise</div>
          </div>
          <div className="room-equipment">
            <h3>Équipements</h3>
            <p>
              te hidden by Airbnb) 3 supermarchés, une pharmacie, une laverie,
              etc., le BHV (Bazar de l'Hôtel de Ville) et beaucoup de boutiques
              de mode et de design.N'hésitez pas t !
            </p>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="price-quote">
          <div className="price-quote-header">
            <div className="price-box">
              <span className="price">{room && room.price} €</span> par nuit
            </div>
            <div className="rating">121</div>
          </div>
          <div className="price-quote-form">
            <div className="search-input half">
              <label htmlFor="">Arrivée</label>
              <SingleDatePicker
                date={startDate}
                onDateChange={(date) => changeStartDate(date)}
                focused={startDateFocused}
                onFocusChange={({ focused }) => changeStartDateFocused(focused)}
                displayFormat="dddd MM YYYY"
                numberOfMonths={1}
                placeholder="jj/mm/aaaa"
                id="startDate"
                className="text-field"
              />
            </div>
            <div className="search-input half">
              <label htmlFor="">Départ</label>
              <SingleDatePicker
                date={endDate}
                onDateChange={(date) => changeEndDate(date)}
                focused={endDateFocused} // PropTypes.bool
                onFocusChange={({ focused }) => changeEndDateFocused(focused)}
                displayFormat="dddd MM YYYY"
                numberOfMonths={1}
                placeholder="jj/mm/aaaa"
                id="endDate"
                className="text-field CalendarDay__selected_span"
              />
            </div>
            <div className="search-input half">
              <label htmlFor="">Adultes</label>
              <select placeholder="Année" className="text-input">
                {range(1, 13).map((index) => (
                  <option key={index} value="">
                    {index}
                    {index === 1 ? 'adult' : 'adultes'}
                  </option>
                ))}
                >
              </select>
              <span className="icon-box down-arrow" />
            </div>
            <div className="search-input half">
              <label htmlFor="">Enfants</label>
              <select placeholder="Année" className="text-input">
                {range(1, 13).map((index) => (
                  <option key={index} value="">
                    {index}
                    {index === 1 ? 'enfant' : 'enfants'}
                  </option>
                ))}
                >
              </select>
              <span className="icon-box down-arrow" />
            </div>
            <button className="btn pink" type="submit">
              {' '}
              Réserver
            </button>
            <span className="info-text">
              Vous ne serez débité que si vous confirmez
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withStyle(RoomDetails);
