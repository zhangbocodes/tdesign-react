import React, { useState } from 'react';
import { Drawer, Radio, Button } from '@tencent/tdesign-react';

export default function () {
  const [visible, setVisible] = useState(false);
  const [placement, setPlacement] = useState('right');

  const handleClick = () => {
    setVisible(true);
  };
  const handleClose = () => {
    setVisible(false);
  };
  return (
    <div
      style={{
        position: 'relative',
        height: '400px',
        overflow: 'hidden',
        textAlign: 'center',
        background: '#fafafa',
        border: '1px solid #ebedf0',
        borderRadius: '2px',
      }}
    >
      <div style={{ height: '100%', padding: '48px' }}>
        渲染在当前元素中。
        <div style={{ marginTop: 16 }}>
          <Radio.Group size="small" value={placement} onChange={(value) => setPlacement(value)}>
            <Radio.Button value="left">left</Radio.Button>
            <Radio.Button value="right">right</Radio.Button>
            <Radio.Button value="top">top</Radio.Button>
            <Radio.Button value="bottom">bottom</Radio.Button>
          </Radio.Group>

          <Button theme="primary" onClick={handleClick} style={{ marginLeft: 16 }}>
            Open
          </Button>
        </div>
        <Drawer
          title="Drawer"
          size={'200px'}
          attach={''}
          visible={visible}
          onClose={handleClose}
          placement={placement}
          style={{ textAlign: 'left' }}
        >
          <p>This is a drawer</p>
        </Drawer>
      </div>
    </div>
  );
}