'use client';

// If used in Pages Router, is no need to add "use client"
import React from 'react';
import { Button, ConfigProvider } from 'antd';
import theme from '@/theme/theme';

export default function Home() {
  return <ConfigProvider theme={theme}>
  <div className="App">
    <Button type="primary">Button</Button>
  </div>
</ConfigProvider>
}
