import React from 'react';
import moment from 'moment';
import './Message.css';
import {Tooltip, withStyles} from '@material-ui/core'

const CusTooltip = withStyles((theme) => ({
  tooltip: {
    fontSize: 12,
    margin:theme.spacing(0.5)
  },
}))(Tooltip);

export default function Message(props) {
    const {
      data,
      isMine,
      startsSequence,
      endsSequence,
      showTimestamp,
      placement
    } = props;

    const friendlyTimestamp = moment(data.timestamp).format('LLLL');
    return (
      <div className={[
        'message',
        `${isMine ? 'mine' : ''}`,
        `${startsSequence ? 'start' : ''}`,
        `${endsSequence ? 'end' : ''}`
      ].join(' ')}>
        {
          showTimestamp &&
            <div className="timestamp">
              { friendlyTimestamp }
            </div>
        }
          <div className="bubble-container">
            <CusTooltip title={ moment(data.timestamp).format('h:m')} placement={placement}>
              <div className="bubble">
                { data.message }
              </div>
            </CusTooltip>
          </div>
        
        
      </div>
    );
}