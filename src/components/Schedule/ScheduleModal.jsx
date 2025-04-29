import React from 'react';
import Modal from '../UI/Modal';
import { useIrrigation } from '../../context/IrrigationContext';

const ScheduleModal = () => {
  const {
    selectedZone,
    showScheduleModal,
    setShowScheduleModal,
    scheduledDate,
    setScheduledDate,
    scheduledTime,
    setScheduledTime,
    saveSchedule
  } = useIrrigation();

  if (!selectedZone) return null;

  return (
    <Modal
      title={`Schedule Watering for ${selectedZone?.name}`}
      isOpen={showScheduleModal}
      onClose={() => setShowScheduleModal(false)}
      onSave={saveSchedule}
    >
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Date
        </label>
        <input 
          type="date" 
          value={scheduledDate}
          onChange={(e) => setScheduledDate(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Time
        </label>
        <input 
          type="time" 
          value={scheduledTime}
          onChange={(e) => setScheduledTime(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
    </Modal>
  );
};

export default ScheduleModal;