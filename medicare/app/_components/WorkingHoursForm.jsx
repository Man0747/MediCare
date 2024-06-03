import React, { useState } from 'react';
import { Switch, TimePicker } from 'antd';
import dayjs from 'dayjs';

const WorkingHoursForm = () => {
    const format = 'hh:mm a';
    const defaultFrom = '09:00 am';
    const defaultTo = '05:00 pm';
    const [workingHours, setWorkingHours] = useState({
        Monday: { enabled: true, from: '09:00 am', to: '03:00 pm' },
        Tuesday: { enabled: true, from: '02:00 pm', to: '03:00 pm' },
        Wednesday: { enabled: false, from: defaultFrom, to: defaultTo },
        Thursday: { enabled: false, from: defaultFrom, to: defaultTo },
        Friday: { enabled: true, from: '02:00 pm', to: '03:00 pm' },
        Saturday: { enabled: true, from: '02:00 pm', to: '03:00 pm' },
        Sunday: { enabled: true, from: '02:00 pm', to: '03:00 pm' }
    });

    const handleToggle = (day) => {
        setWorkingHours((prevHours) => {
            const isEnabled = !prevHours[day].enabled;
            return {
                ...prevHours,
                [day]: {
                    ...prevHours[day],
                    enabled: isEnabled,
                    from: isEnabled ? prevHours[day].from || defaultFrom : prevHours[day].from,
                    to: isEnabled ? prevHours[day].to || defaultTo : prevHours[day].to,
                }
            };
        });
    };

    const handleChange = (day, field, value) => {
        setWorkingHours((prevHours) => ({
            ...prevHours,
            [day]: {
                ...prevHours[day],
                [field]: value
            }
        }));
    };

    return (
        <div>
            {Object.keys(workingHours).map((day, index) => (
                <div key={day}>
                    <div className="flex items-center justify-between p-4">
                        <label className="flex items-center font-bold" style={{ width: '180px' }}>
                            <Switch
                                checked={workingHours[day].enabled}
                                onChange={() => handleToggle(day)}
                            />
                            <span className="ml-3">{day}</span>
                        </label>
                        {workingHours[day].enabled ? (
                            <div className="flex items-center">
                                <TimePicker
                                    value={dayjs(workingHours[day].from, format)}
                                    format={format}
                                    onChange={(time, timeString) => handleChange(day, 'from', timeString)}
                                />
                                <span className="mx-2 text-sm text-gray-400 font-bold">to</span>
                                <TimePicker
                                    value={dayjs(workingHours[day].to, format)}
                                    format={format}
                                    onChange={(time, timeString) => handleChange(day, 'to', timeString)}
                                />
                            </div>
                        ):(
                          <div className="flex items-center ml-6 text-red-400 font-bold">
                                Not working on this day
                            </div>
                        )}
                    </div>
                    {index < Object.keys(workingHours).length - 1 && <hr />}
                </div>
            ))}
        </div>
    );
};

export default WorkingHoursForm;
