import React, { useState } from 'react';
import { Modal, Button, Input, DatePicker, Switch, List, Checkbox } from 'antd';
import dayjs from 'dayjs';

const { RangePicker } = DatePicker;

const DaysOffForm = () => {
    const [daysOff, setDaysOff] = useState([
        { name: 'Eid Mubarak', from: '23 Jun 2022', to: '22 Nov 2022', repeatYearly: true },
        { name: 'New Year Holiday', from: '23 Dec 2022', to: '03 Jan 2023', repeatYearly: false }
    ]);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [newDayOff, setNewDayOff] = useState({ name: '', from: null, to: null, repeatYearly: false });

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setDaysOff([...daysOff, newDayOff]);
        setNewDayOff({ name: '', from: null, to: null, repeatYearly: false });
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const handleChange = (field, value) => {
        setNewDayOff({ ...newDayOff, [field]: value });
    };

    const handleDateChange = (dates) => {
        if (dates) {
            handleChange('from', dates[0].format('DD MMM YYYY'));
            handleChange('to', dates[1].format('DD MMM YYYY'));
        } else {
            handleChange('from', null);
            handleChange('to', null);
        }
    };

    const toggleRepeatYearly = (index) => {
        const updatedDaysOff = [...daysOff];
        updatedDaysOff[index].repeatYearly = !updatedDaysOff[index].repeatYearly;
        setDaysOff(updatedDaysOff);
    };

    return (
        <div>
            <List
                itemLayout="horizontal"
                dataSource={daysOff}
                renderItem={(item, index) => (
                    <List.Item
                        actions={[<Checkbox checked={item.repeatYearly} onChange={() => toggleRepeatYearly(index)}>Repeat yearly</Checkbox>]}
                    >
                        <List.Item.Meta
                            title={item.name}
                            description={`${item.from} - ${item.to}`}
                        />
                    </List.Item>
                )}
            />
            <Button type="dashed" onClick={showModal} style={{ marginTop: '20px' }}>
                + Add Day Off
            </Button>
            <Modal title="Add Day Off" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <div className="mb-4">
                    <label className="block mb-2">Day Off Name</label>
                    <Input value={newDayOff.name} onChange={(e) => handleChange('name', e.target.value)} />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Date</label>
                    <RangePicker format="DD MMM YYYY" onChange={handleDateChange} />
                </div>
                <div className="mb-4">
                    <Switch
                        checked={newDayOff.repeatYearly}
                        onChange={(checked) => handleChange('repeatYearly', checked)}
                    />
                    <span className="ml-2">Repeat this day off yearly</span>
                </div>
            </Modal>
        </div>
    );
};

export default DaysOffForm;
