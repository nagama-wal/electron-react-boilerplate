import 'react-big-calendar/lib/css/react-big-calendar.css'
import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import ResourceSelector from './resourceSelector/resourceSelector'
import ExportSelector from './exportSelector/exportSelector'
let myEventsList = [
    {
        id: 0,
        title: 'All Day Event very long title',
        allDay: true,
        start: new Date(2018, 11, 19, 0, 0, 0),
        end: new Date(2018, 11, 20, 0, 0, 0),
    },
    {
        id: 1,
        title: 'Long Event',
        start: new Date(2018, 11, 21, 0, 0, 0),
        end: new Date(2018, 11, 22, 0, 0, 0),
    },
    {
        id: 2,
        title: 'Special Event',
        start: new Date(2018, 9, 15, 0, 0, 0),
        end: new Date(2018, 9, 17, 0, 0, 0),
    },
]
const localizer = BigCalendar.momentLocalizer(moment);

moment.locale('en');

const Calendar = (props) => {
        this.state = {
            date: new Date(),
            // selectedMonth: ''
        }
        {window.moment = moment}
        return (
            <div className="daysheet-section">
                <div className="daysheet-custom-toolbars d-flex align-items-center justify-content-end">
                    <ResourceSelector/>
                    <ExportSelector/>
                </div>
                <BigCalendar
                    className="daysheet-wrapper"
                    selectable
                    localizer={localizer}
                    events={myEventsList}
                    defaultView={BigCalendar.Views.WEEK}
                    scrollToTime={new Date(1970, 1, 1, 6)}
                    defaultDate={new Date(2018, 11, 19)}
                    onSelectEvent={event => alert(event.title)}
                    onSelectSlot={this.handleSelect}

                    // events={myEventsList}
                    // view={BigCalendar.Views.MONTH}
                    // localizer={localizer}
                    // className="daysheet-wrapper"
                    // startAccessor="start"
                    // endAccessor="end"
                    // // views={{
                    // //     month: false,
                    // //     week: true
                    // // }}
                    // defaultView={BigCalendar.Views.MONTH}
                    // onView={() => ({})}
                    // onSelectEvent
                    // components={{
                    //     toolbar: MyToolbar
                    // }}
                />
            </div>
        );
    }
// }
export default Calendar;