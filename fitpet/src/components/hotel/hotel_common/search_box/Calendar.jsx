import React, { useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

const Calendar = (showCalendar) => {
  const { handleClick } = showCalendar;

  const [getMoment, setMoment] = useState(moment());
  const today = getMoment;

  // 그 달의 시작하는 주
  const firstWeek = today.clone().startOf('month').week();
  // 그 달의 끝나는 주
  const lastWeek =
    today.clone().endOf('month').week() === 1
      ? 53
      : today.clone().endOf('month').week();

  const calendarArr = () => {
    let result = [];
    let week = firstWeek;
    for (week; week <= lastWeek; week++) {
      result = result.concat(
        <tr className='week_tr' key={week}>
          {Array(7)
            .fill(0)
            // eslint-disable-next-line
            .map((data, index) => {
              let days = today
                .clone()
                .startOf('year')
                .week(week)
                .startOf('week')
                .add(index, 'day');

              if (moment().format('YYYYMMDD') === days.format('YYYYMMDD')) {
                return (
                  <td className='week_td' key={index}>
                    <button>{days.format('D')}</button>
                  </td>
                );
              } else if (days.format('MM') !== today.format('MM')) {
                return (
                  <td className='week_td' key={index}>
                    <button>{days.format('D')}</button>
                  </td>
                );
              } else {
                return (
                  <td className='week_td' key={index}>
                    <button>{days.format('D')}</button>
                  </td>
                );
              }
            })}
        </tr>,
      );
    }
    return result;
  };

  return (
    <CalendarWrapper onClick={handleClick}>
      <div style={{ display: 'flex' }}>
        <CalendarBlock>
          <CalendarMonthCaption>
            <Calendarbutton
              onClick={() => {
                setMoment(getMoment.clone().subtract(1, 'month'));
              }}>
              <BsChevronLeft size='10px' color='#707070' />
            </Calendarbutton>
            <YearAndMonth>{today.format('YYYY년 MM월')}</YearAndMonth>
          </CalendarMonthCaption>
          <table>
            <tbody>
              <tr
                className='weekHeader_tr'
                style={{ marginBottom: '2.4rem' }}
                s>
                <td className='weekHeader_td'>일</td>
                <td className='weekHeader_td'>월</td>
                <td className='weekHeader_td'>화</td>
                <td className='weekHeader_td'>수</td>
                <td className='weekHeader_td'>목</td>
                <td className='weekHeader_td'>금</td>
                <td className='weekHeader_td'>토</td>
              </tr>
              {calendarArr()}
            </tbody>
          </table>
        </CalendarBlock>
        <CalendarBlock>
          <CalendarMonthCaption>
            <YearAndMonth>
              {today.clone().add(1, 'month').format('YYYY년 MM월')}
            </YearAndMonth>
            <Calendarbutton
              onClick={() => {
                setMoment(getMoment.clone().add(1, 'month'));
              }}>
              <BsChevronRight size='10px' color='#707070' />
            </Calendarbutton>
          </CalendarMonthCaption>
          <table>
            <tbody>
              <tr
                className='weekHeader_tr'
                style={{ marginBottom: '2.4rem' }}
                s>
                <td className='weekHeader_td'>일</td>
                <td className='weekHeader_td'>월</td>
                <td className='weekHeader_td'>화</td>
                <td className='weekHeader_td'>수</td>
                <td className='weekHeader_td'>목</td>
                <td className='weekHeader_td'>금</td>
                <td className='weekHeader_td'>토</td>
              </tr>
              {calendarArr()}
            </tbody>
          </table>
        </CalendarBlock>
      </div>
    </CalendarWrapper>
  );
};

const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .control {
    display: flex;
    flex-direction: row;
  }
  table {
    display: flex;
  }
  table tbody {
    display: flex;
    flex-direction: column;
  }
  .weekHeader_tr {
    display: flex;
    font-size: 1.4rem;
    color: ${(props) => props.theme.grey2_color};
  }
  .weekHeader_td {
    flex: 1 1 auto;
    text-align: center;
    width: 3.2rem;
    margin-right: 1rem;
  }
  .week_tr {
    display: flex;
    flex-direction: row;
  }
  .week_td {
    display: flex;
    width: 3.2rem;
    height: 3.2rem;
    padding: 1.2rem;
    align-items: center;

    margin-right: 1rem;
    position: relative;
    justify-content: center;
  }
  .week_td button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;
    font-size: 1.4rem;
    color: ${(props) => props.theme.black1_color};
    background-color: ${(props) => props.theme.white_color};
    border: none;
    margin: auto;
    cursor: pointer;
    :focus {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      color: ${(props) => props.theme.white_color};
      background-color: ${(props) => props.theme.main_color};
    }
    :hover {
      width: 100%;
      height: 100%;
      border-radius: 50%;

      background-color: rgb(71, 101, 255, 0.2);
      color: ${(props) => props.theme.black1_color};
    }
  }
`;
const CalendarBlock = styled.div`
  width: 33.9rem;
  height: 30rem;
  padding: 0 2rem;
  display: inline-block; /* display 설정해줘야 아래 flex로 해주면 direction 선택가능*/
`;

const CalendarMonthCaption = styled.div`
  text-align: center;
  display: flex;
  padding-top: 2.4rem;
  padding-bottom: 2.4rem;
`;

const Calendarbutton = styled.button`
  background-color: ${(props) => props.theme.white_color};
  font-size: 1.6rem;
  border: none;
  padding: 0;
`;

const YearAndMonth = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  margin: auto;
  color: ${(props) => props.theme.black1_color};
`;
export default Calendar;
