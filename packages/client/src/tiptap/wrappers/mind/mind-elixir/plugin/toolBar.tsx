import ReactDOM from 'react-dom';
import { Button, Space } from '@douyinfe/semi-ui';
import {
  IconMindLeft,
  IconMindRight,
  IconMindSide,
  IconMindFull,
  IconMindCenter,
  IconZoomOut,
  IconZoomIn,
} from 'components/icons';

function Direction({ mind }) {
  return (
    <Space spacing={4}>
      <Button
        type="tertiary"
        theme="borderless"
        size="small"
        onClick={() => {
          mind.initLeft();
        }}
        icon={<IconMindLeft style={{ fontSize: '0.85em' }} />}
      />

      <Button
        type="tertiary"
        theme="borderless"
        size="small"
        onClick={() => {
          mind.initRight();
        }}
        icon={<IconMindRight style={{ fontSize: '0.85em' }} />}
      />

      <Button
        type="tertiary"
        theme="borderless"
        size="small"
        onClick={() => {
          mind.initSide();
        }}
        icon={<IconMindSide style={{ fontSize: '0.85em' }} />}
      />
    </Space>
  );
}

function Operation({ mind }) {
  return (
    <Space spacing={4}>
      <Button
        type="tertiary"
        theme="borderless"
        size="small"
        onClick={() => {
          mind.container.requestFullscreen();
        }}
        icon={<IconMindFull style={{ fontSize: '0.85em' }} />}
      />

      <Button
        type="tertiary"
        theme="borderless"
        size="small"
        onClick={() => {
          mind.toCenter();
        }}
        icon={<IconMindCenter style={{ fontSize: '0.85em' }} />}
      />

      <Button
        type="tertiary"
        theme="borderless"
        size="small"
        onClick={() => {
          if (mind.scaleVal < 0.6) return;
          mind.scale((mind.scaleVal -= 0.2));
        }}
        icon={<IconZoomOut style={{ fontSize: '0.85em' }} />}
      />

      <Button
        type="tertiary"
        theme="borderless"
        size="small"
        onClick={() => {
          if (mind.scaleVal > 1.6) return;
          mind.scale((mind.scaleVal += 0.2));
        }}
        icon={<IconZoomIn style={{ fontSize: '0.85em' }} />}
      />
    </Space>
  );
}

export default function (mind) {
  {
    const div = document.createElement('div');
    div.className = 'toolbar lt';
    ReactDOM.render(<Direction mind={mind} />, div);
    mind.container.append(div);
  }

  {
    const div = document.createElement('div');
    div.className = 'toolbar rb';
    ReactDOM.render(<Operation mind={mind} />, div);
    mind.container.append(div);
  }
}