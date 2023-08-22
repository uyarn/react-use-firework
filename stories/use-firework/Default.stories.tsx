import React, { useRef } from 'react';
import type { Meta } from '@storybook/react';

import useFireWork, { FireworkOptions } from '../../packages/use-firework/src';

const meta: Meta<FireworkOptions> = {
  title: 'use-firework',
  tags: ['autodocs'],
};

export default meta;

export function DefaultExample() {
  const ref = useRef(null);
  useFireWork(ref);

  return <div ref={ref} style={{ width: '100%', height: '600px', background: '#000' }}></div>;
}

export function RadomExample() {
  const ref = useRef(null);
  useFireWork(ref, { randomColor: true });

  return <div ref={ref} style={{ width: '100%', height: '600px', background: '#000' }}></div>;
}
