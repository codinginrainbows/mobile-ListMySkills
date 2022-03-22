import { StatusBar } from 'expo-status-bar'
import { Fragment } from 'react'

import { Home } from './src/pages/Home'

export default function App() {
  return (
    <Fragment>
      <StatusBar style="auto" />
      <Home />
    </Fragment>
  )
};
