import React, { useState } from 'react';
import { Button, message, Steps } from 'antd';
import DoctorInfo from './DoctorInfo';
import WorkingHoursForm from './WorkingHoursForm';
import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import DaysOffForm from './DaysOffForm';

const { Step } = Steps;

const DoctorDataForm = () => {
  const [current, setCurrent] = useState(0);

  const steps = [
    {
      title: 'Staff Info',
      content: <DoctorInfo />,
      icon: <UserOutlined />,
    },
    {
      title: 'Assigned Services',
      content: <div>Assigned Services Content</div>,
      icon: <SolutionOutlined />,
    },
    {
      title: 'Working Hours',
      content: <WorkingHoursForm />,
      icon: <LoadingOutlined />,
    },
    {
      title: 'Days Off',
      content: <DaysOffForm />,
      icon: <SmileOutlined />,
    },
  ];

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-md pr-6 pl-6 pt-2">
        <h2 className='mb-4 font-bold text-xl text-center'>Add new Doctor Staff</h2>
        <Steps current={current} className="mb-6">
          {steps.map((item, index) => (
            <Step
              key={index}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </Steps>
        <div style={{ minHeight: '570px' }}> {/* Fixed height for content area */}
          {steps[current].content}
        </div>
        <div style={{ marginTop: 24, textAlign: 'right' }}>
          {current > 0 && (
            <Button className='mb-2 mr-2' onClick={() => prev()}>
              Previous
            </Button>
          )}
          {current < steps.length - 1 && (
            <Button className='mb-2' type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button className='mb-2' type="primary" onClick={() => message.success('Processing complete!')}>
              Done
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorDataForm;
