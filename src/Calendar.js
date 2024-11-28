// Calendar.js
import React, { useState } from 'react';
import Day from './components/Day';
import Modal from './components/Modal';
import daysContent from './utils/daysContent';

import './styles/Calendar.css';

function Calendar() {
  const [openDays, setOpenDays] = useState(Array(25).fill(false));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState(null);

  // Obtiene el día actual del mes
  const today = new Date().getDate();

  const handleOpenDay = (index) => {
    // Solo abre el día si el día (index + 1) es menor o igual al día actual
    if (index + 1 <= today) {
        const updatedOpenDays = [...openDays];
        updatedOpenDays[index] = true;
        setOpenDays(updatedOpenDays);

        // Abre la modal y guarda el día seleccionado
        setSelectedDay(daysContent[index]);
        setIsModalOpen(true);
      } else {
        alert("¡No puedes abrir este día todavía!");
      }
  };

  return (
    <div className="calendar">
      {daysContent.map((day, index) => (
        <Day
          key={index}
          dayNumber={index + 1}
          content={day.text}
          image={day.image}
          isOpen={openDays[index]}
          isLocked={index + 1 > today}
          onOpen={() => handleOpenDay(index)}
        />
      ))}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        content={
          selectedDay ? (
            <div>
              <h2>¡Día {selectedDay.day}!</h2>
              {selectedDay.extraContent}
            </div>
          ) : null
        }
        audio={selectedDay ? selectedDay.audio : ""}
        day={selectedDay ? selectedDay.day : ""}
      />
    </div>
  );
}

export default Calendar;
