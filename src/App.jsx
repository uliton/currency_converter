/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { DebounceInput } from 'react-debounce-input';
import { getCours } from './api';

import './App.scss';

export const App = () => {
  const [data, setData] = useState([]);

  const [leftQuery, setLeftQuery] = useState();
  const [leftCurrencyRate, setLeftCurrencyRate] = useState(0);

  const [rightQuery, setRightQuery] = useState();
  const [rightCurrencyRate, setRightCurrencyRate] = useState(0);

  useEffect(() => {
    getCours().then((result) => {
      setData([...result]);
    });
  }, []);

  useEffect(() => {
    if (!leftQuery && rightQuery) {
      setLeftQuery(
        (rightQuery * rightCurrencyRate / leftCurrencyRate).toFixed(2),
      );
    }

    if (leftQuery && rightCurrencyRate) {
      setRightQuery(
        (leftQuery * leftCurrencyRate / rightCurrencyRate).toFixed(2),
      );
    }
  }, [leftQuery, leftCurrencyRate]);

  useEffect(() => {
    if (!rightQuery && leftQuery) {
      setRightQuery(
        (leftQuery * leftCurrencyRate / rightCurrencyRate).toFixed(2),
      );
    }

    if (rightQuery && leftCurrencyRate) {
      setLeftQuery(
        (rightQuery * rightCurrencyRate / leftCurrencyRate).toFixed(2),
      );
    }
  }, [rightQuery, rightCurrencyRate]);

  const usd = data.find(item => item.r030 === 840);
  const eur = data.find(item => item.r030 === 978);

  return (
    <>
      {data.length > 0 && (
        <div className="App">
          <header className="convert__header">
            <div className="convert__header--title">
              Валютний калькулятор
            </div>
            {data.length > 0 && (
              <div className="convert__header--info">
                <p>
                  Наявний курс до UAH
                </p>
                <div>
                  {`USD - ${usd.rate.toFixed(4)}`}
                  <br />
                  {`EUR - ${eur.rate.toFixed(4)}`}
                </div>
              </div>
            )}
          </header>

          <div className="convert__container">
            <div className="convert__item item">
              <div className="item__query">
                {leftQuery !== 0 && leftQuery}
              </div>

              <div className="item__wrapper">
                {leftCurrencyRate ? (
                  <DebounceInput
                    type="text"
                    className="item__input"
                    value={leftQuery}
                    debounceTimeout={1000}
                    onChange={(e) => {
                      setLeftQuery(e.target.value);
                    }}
                  />
                ) : (
                  <input disabled className="item__input" />
                )}

                <div className="item__wrapper--buttons">
                  <button
                    type="button"
                    className="item__wrapper--button"
                    onClick={() => {
                      if (leftQuery === undefined && leftCurrencyRate) {
                        setLeftQuery(1);
                      } else if (leftCurrencyRate) {
                        setLeftQuery(Number(leftQuery) + 1);
                      }
                    }}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    className="item__wrapper--button"
                    onClick={() => {
                      if (leftQuery - 1 > 0) {
                        setLeftQuery(Number(leftQuery) - 1);
                      }
                    }}
                  >
                    -
                  </button>
                </div>
              </div>

              <select
                className="item__select"
                onChange={(e) => {
                  setLeftCurrencyRate((Math.round(e.target.value * 100)) / 100);
                }}
              >
                <option
                  value={0}
                  disabled
                  selected
                >
                  Оберіть грошову одиницю
                </option>
                <option
                  value={1}
                >
                  Українська гривня
                </option>
                {data.map(item => (
                  <option
                    value={item.rate}
                    key={item.r030}
                  >
                    {item.txt}
                  </option>
                ))}
              </select>
            </div>

            <div className="convert__item item">
              <div className="item__query">
                {rightQuery !== 0 && rightQuery}
              </div>

              <div className="item__wrapper">
                {rightCurrencyRate ? (
                  <DebounceInput
                    type="text"
                    className="item__input"
                    value={rightQuery}
                    debounceTimeout={1000}
                    onChange={(event) => {
                      setRightQuery(event.target.value);
                    }}
                  />
                ) : (
                  <input disabled className="item__input" />
                )}

                <div className="item__wrapper--buttons">
                  <button
                    type="button"
                    className="item__wrapper--button"
                    onClick={() => {
                      if (rightQuery === undefined && rightCurrencyRate) {
                        setRightQuery(1);
                      } else if (rightCurrencyRate) {
                        setRightQuery(Number(rightQuery) + 1);
                      }
                    }}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    className="item__wrapper--button"
                    onClick={() => {
                      if (rightQuery - 1 > 0) {
                        setRightQuery(Number(rightQuery) - 1);
                      }
                    }}
                  >
                    -
                  </button>
                </div>
              </div>

              <select
                className="item__select"
                onChange={(e) => {
                  setRightCurrencyRate(
                    (Math.round(e.target.value * 100)) / 100,
                  );
                }}
              >
                <option
                  value={0}
                  disabled
                  selected
                >
                  Оберіть грошову одиницю
                </option>
                <option value={1}>Українська гривня</option>
                {data.map(item => (
                  <option value={item.rate} key={item.r030}>
                    {item.txt}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
