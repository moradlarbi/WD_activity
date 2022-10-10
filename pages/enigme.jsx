import React ,{ useState, useEffect } from 'react';
import enigmes from "../data/enigmes.json"
import Moment from 'moment';
import DatePicker from "react-datepicker";
import TimePicker from 'react-time-picker/dist/entry.nostyle'

import "react-datepicker/dist/react-datepicker.css";
const useCurrentCallback = (callback) => {
  const reference = React.useRef();
  reference.current = callback;
  return (...args) => {
    return reference.current?.(...args);
  };
};
export default function Enigme() {
  const [index, setIndex] = useState(0)
  const [succes, setSucces] = useState(0)
  const [r, setR] = useState(true)
  useEffect(() => {
    setIndex(Math.round(Math.random() * 3));
  }, [r])
  const [finalDate, setFinalDate] = useState(new Date());
  const [value, onChange] = useState('10:00');
  const [time, setTime] = React.useState(0);
  const currentCallback = useCurrentCallback(() => {
    const date = new Date();
    setTime(date.toISOString());
  });
  React.useEffect(() => {
    const handle = setInterval(currentCallback, 100);
    return () => clearInterval(handle);
  }, []);
  return(
    <div className="w-screen h-screen bg-noirBG text-blancTxt justify-center">
      <div className="container flex flex-col items-center w-full gap-4 pt-5">
        <h1 className="text-5xl mb-3">Your clues</h1>
        <p className="text-2xl w-4/5 text-center mb-3">{enigmes[index].indices}</p>
        <h2 className="date text-rougeTxt text-7xl flex justify-center">
        <DatePicker selected={finalDate} dateFormat="MMM dd yyyy" onChange={(date) => setFinalDate(date)} />
        <TimePicker onChange={onChange} value={value} locale="sv-sv" />

        </h2>
        <p className="text-xl">DESTINATION TIME</p>
        <h2 className="date text-bleuTxt text-7xl">{enigmes[index].lastTime}</h2>
        <p className="text-xl">PRESENT TIME</p>
        <h2 className="date text-orangeTxt text-7xl">{Moment(time).format("MMM DD YYYY HH:mm")}</h2>
        <div className='flex gap-5 justify-center w-full'>
        <button className="lg:w-56 md:w-48 sm:w-36 w-24 border-2 lg:text-2xl text-xl self-end py-2 rounded-3xl"
        onClick={() => {
          if ((finalDate.getMonth()+1) == enigmes[index].mois && finalDate.getFullYear() == enigmes[index].year &&
          finalDate.getDate() == enigmes[index].jour && value === enigmes[index].heure ){
            setSucces(1)
          }
          else {
            setSucces(2)
          }
          
        }}>
          Envoyer
        </button>
        </div>
        {
          succes === 1 && <p className="text-xl mb-6 text-green-500">Bravo, vous avez résolue l'énigme</p>
        }
        {
          succes === 2 && <p className="text-xl mb-6 text-rougeTxt">C pas la bonne réponse, essayez encore une fois!</p>
        }
        
        
      </div>
    </div>
  )
}
