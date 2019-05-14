import React, { useReducer } from 'react';
import { range } from 'lodash';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import './react_dates_overrides.css';
import withStyle from './withStyle';
import Input from '../Input/Input';
import Button from '../Button/Button';

const HomeBanner = ({ className }) => {
  const [
    {
      destination, startDate, startDateFocused, endDateFocused, endDate,
    },
    setState,
  ] = useReducer((state, newState) => ({ ...state, ...newState }), {
    destination: '',
    startDate: null,
    startDateFocused: null,
    endDate: null,
    endDateFocused: null,
  });

  return (
    <div className={`${className}`}>
      <div className="landing">
        <h1>Réservez des logements et des expériences uniques.</h1>
      </div>
      <div className="landing-search">
        <h1>Réservez des logements et des expériences uniques.</h1>
        <form className="landing-search__form">
          <div className="search-input">
            <label htmlFor="search-input">OÙ</label>
            <Input
              type="text"
              highlighted
              classNames={['text-field']}
              autoCapitalize
              placeholder="Partout"
              name="location"
              value={destination}
              id="search-input"
              onChange={({ target: { value } }) => setState({ destination: value })
              }
            />
          </div>
          <div className="search-input half">
            <label htmlFor="">Arrivée</label>
            <SingleDatePicker
              date={startDate}
              onDateChange={(date) => setState({ startDate: date })}
              focused={startDateFocused}
              onFocusChange={({ focused }) => setState({ startDateFocused: focused })
              }
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
              onDateChange={(date) => setState({ endDate: date })}
              focused={endDateFocused}
              onFocusChange={({ focused }) => setState({ endDateFocused: focused })
              }
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
                  {index} {index === 1 ? 'adult' : 'adultes'}
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
                  {index} {index === 1 ? 'enfant' : 'enfants'}
                </option>
              ))}
              >
            </select>
            <span className="icon-box down-arrow" />
          </div>
          <div className="half" />
          <div className="half">
            <Button
              color="white"
              background="#ff5a5f"
              classNames={['landing-search__btn']}
              type="submit"
            >
              Rechercher
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default withStyle(HomeBanner);
